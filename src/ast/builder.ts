import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { SimpleVisitor } from "../antlr/SimpleVisitor";
import { ScopeStack } from "./scopeStack";

import { AddExpressionContext, AssignmentContext, BlockContext, BracketExpressionContext, CompExpressionContext, ElseIfStatContext, ExpressionContext, FunctionCallContext, FunctionDeclContext, IdentifierExpressionContext, IfStatContext, IfStatementContext, MultExpressionContext,  NumberExpressionContext, ParamContext, ParseContext, ReplContext, VariableDeclarationContext } from "../antlr/SimpleParser";
import { AstAssignment, AstBinaryExpression, AstBlock, AstBracketExpression, AstConstExpression, AstError, AstExpression, AstFunctionCall, AstFunctionDeclaration, AstIdentifierDeclaration, AstIdentifierExpression, AstIf, AstIfElse, AstNode, AstNull, AstRepl, AstUndeclaredError, AstVariableDeclaration } from "./nodes";
import { AllowedTypes } from "./signature";
import { createIf, Expression } from "typescript";

export class AstBuilder extends AbstractParseTreeVisitor<AstNode> implements SimpleVisitor<AstNode> {

  functions: AstFunctionDeclaration[] = [];
  scopeStack: ScopeStack;
  anonMax: number = 0;

  constructor() {
    super();
    this.scopeStack = new ScopeStack();

  }

  getAnonName() {
    return "anon" + this.anonMax++;
  }

  defaultResult() {
    return new AstNull();
  }

  aggregateResult(aggregate: AstNode, nextResult: AstNode) {
    return nextResult;
  }

  visitParse(ctx: ParseContext) {
    return this.visit(ctx.repl());
  }

  visitRepl(ctx: ReplContext) {
    const functions = ctx.functionDecl().map(decl => this.visitFunctionDecl(decl));
    const body = this.visitBlock(ctx.block(), "toplevelStatements");
    return new AstRepl(ctx, functions, body);
  }

  visitBlock(ctx: BlockContext, name="unnamedblock") {
    this.scopeStack.enterScope(name);
    const body = ctx.statement().map(statement => this.visit(statement));
    const returnVal = ctx.expression() ? this.visitExpression(ctx.expression()) : new AstNull();
    this.scopeStack.disposeScope();
    return new AstBlock(ctx, body, returnVal);
  }

  // Expressions

  visitNumberExpression(ctx: NumberExpressionContext) {
    const ret = ctx.Number().text;
    return new AstConstExpression(ctx, parseInt(ret));
  }

  visitAddExpression(ctx: AddExpressionContext) {
    const lhs = this.visit(ctx.expression(0));
    const rhs = this.visit(ctx.expression(1));
    const op = ctx._op.text;
    return new AstBinaryExpression(ctx, op, lhs, rhs);
  }
  
  visitMultExpression(ctx: MultExpressionContext) {
    const lhs = this.visit(ctx.expression(0));
    const rhs = this.visit(ctx.expression(1));
    const op = ctx._op.text;
    return new AstBinaryExpression(ctx, op, lhs, rhs);
  }

  visitCompExpression(ctx: CompExpressionContext) {
    const lhs = this.visit(ctx.expression(0));
    const rhs = this.visit(ctx.expression(1));
    const op = ctx._op.text;
    return new AstBinaryExpression(ctx, op, lhs, rhs);
  }

  visitIdentifierExpression(ctx: IdentifierExpressionContext) {
    const id = ctx.Identifier().text;
    const [found, idNode] = this.scopeStack.getSymbol(id);
    return new AstIdentifierExpression(ctx, found ? idNode as AstIdentifierDeclaration : new AstUndeclaredError(ctx, id));
  }

  visitBracketExpression(ctx: BracketExpressionContext) {
    const expr = this.visit(ctx.expression());
    return new AstBracketExpression(ctx, expr as AstExpression);
  }

  // statements

  visitVariableDeclaration(ctx: VariableDeclarationContext) {
    const varType = ctx.varType().text;
    const ids = ctx.Identifier().map(id => id.text);

    const body: AstNode[] = [];
   
    ids.forEach(id => {
      const node = new AstVariableDeclaration(ctx, id, varType as AllowedTypes);
      this.scopeStack.setSymbol(id, node);
      body.push(node);
    });

    return (body.length == 1) ? body[0] : new AstBlock(ctx, body);
  }

  visitAssignment(ctx: AssignmentContext) {
    const rhs = this.visit(ctx.expression());
    const id = ctx.Identifier().text;
    const idNode = this.scopeStack.getSymbol(id)
    return new AstAssignment(ctx, id, rhs);
  }

  visitFunctionCall(ctx: FunctionCallContext) {
    const id = ctx.Identifier().text;
    const params = ctx.exprList().expression().map(expr => this.visit(expr) as AstExpression);
    if (!this.scopeStack.hasSymbol(id)) return new AstError(ctx, `function ${id} does not exist`);
    const [found,decl] = this.scopeStack.getSymbol(id);
    const decl2 = decl as AstIdentifierDeclaration;
    if (params.length != decl2.signature.params.length) return new AstError(ctx, `function ${id} incorrect number of params`);
    const matches = params.every((param,i) => {
      return param.returnType() == decl2.signature.params[i];
    });
    if (!matches) return new AstError(ctx, `function ${id} incorrect param typeS`);
    return new AstFunctionCall(ctx, id, params);
  }

  visitExpression(ctx: ExpressionContext) {
    return ctx.accept(this) as AstExpression;
  }

  visitIfStatement(ctx: IfStatementContext) {

    const createAstIf = (ifctx: IfStatContext | ElseIfStatContext)  => {
      return new AstIf(ifctx, 
        this.visitExpression(ctx.ifStat().expression()),
        this.visitBlock(ctx.ifStat().block()));
    };

    return new AstIfElse(ctx,
      [createAstIf(ctx.ifStat()), 
      ...ctx.elseIfStat().map(elif  => createAstIf(elif))],
      ctx.elseStat() ? this.visitBlock(ctx.elseStat().block()) : new AstNull());
  }

  // Functions

  visitParam(ctx: ParamContext) {
    const paramType = ctx.varType().text;
    const id = ctx.Identifier().text;
    return new AstVariableDeclaration(ctx, id, paramType as AllowedTypes);
  }

  visitFunctionDecl(ctx: FunctionDeclContext) {
    const funType =  ctx.funType().text as AllowedTypes;
    const id = ctx.Identifier().text;
    const params = ctx.paramList().param().map(param => this.visitParam(param));
    if (params.length) {
      this.scopeStack.enterScope(`fun(${id})`);
      params.forEach(param => this.scopeStack.setSymbol(param.id, param))
    }
    const body = this.visitBlock(ctx.block(), `fun(${id})body`);
    if (params.length) this.scopeStack.disposeScope(); // dispose param scope
    const funcDecl = new AstFunctionDeclaration(ctx, funType, id, params, body);
    this.scopeStack.setSymbol(id, funcDecl);
    return funcDecl;
  }


}