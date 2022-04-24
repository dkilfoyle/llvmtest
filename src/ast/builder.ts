import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { AddExpressionContext, AssignmentContext, BlockContext, BracketExpressionContext, CompExpressionContext, ElseIfStatContext, ElseStatContext, ExpressionContext, ForStatementContext, FunctionCallContext, FunctionDeclContext, IdentifierExpressionContext, IfStatContext, IfStatementContext, MultExpressionContext,  NumberExpressionContext, ParamContext, ParseContext, ReplContext, StatementContext, VariableDeclarationContext } from "../antlr/SimpleParser";
import { AstAssignment, AstBinaryExpression, AstBlock, AstBracketExpression, AstConstExpression, AstError, AstErrorExpression, AstExpression, AstFor, AstFunctionCall, AstFunctionDeclaration, AstIdentifierDeclaration, AstIdentifierExpression, AstIf, AstIfElse, AstNode, AstNull, AstRepl, AstStatement, AstUndeclaredError, AstVariableDeclaration } from "./nodes";
import { SimpleVisitor } from "../antlr/SimpleVisitor";
import { ScopeStack } from "./scopeStack";
import { AllowedTypes } from "./signature";

export class AstBuilder extends AbstractParseTreeVisitor<AstNode> implements SimpleVisitor<AstNode> {

  functions: AstFunctionDeclaration[] = [];
  scopeStack: ScopeStack;
  anonMax: number = 0;

  constructor() {
    super();
    this.scopeStack = new ScopeStack();
  }

  createStdLibFunction(ctx: ParserRuleContext, id:string, params: AstVariableDeclaration[]) {
    const funcDecl = new AstFunctionDeclaration(ctx, 'void', id, params);
    this.scopeStack.setSymbol(id, funcDecl);
    return funcDecl;
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
    const stdlib = [
      this.createStdLibFunction(ctx, "assert", [new AstVariableDeclaration(ctx, "test", "bool")]),
      this.createStdLibFunction(ctx, "print", [new AstVariableDeclaration(ctx, "val", "int")]),
    ];
    const functions = [...stdlib, ...ctx.functionDecl().map(decl => this.visitFunctionDecl(decl))];
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
    const lhs = this.visitExpression(ctx.expression(0));
    const rhs = this.visitExpression(ctx.expression(1));
    const op = ctx._op.text;
    return new AstBinaryExpression(ctx, op, lhs, rhs);
  }
  
  visitMultExpression(ctx: MultExpressionContext) {
    const lhs = this.visitExpression(ctx.expression(0));
    const rhs = this.visitExpression(ctx.expression(1));
    const op = ctx._op.text;
    return new AstBinaryExpression(ctx, op, lhs, rhs);
  }

  visitCompExpression(ctx: CompExpressionContext) {
    const lhs = this.visitExpression(ctx.expression(0));
    const rhs = this.visitExpression(ctx.expression(1));
    const op = ctx._op.text;
    return new AstBinaryExpression(ctx, op, lhs, rhs);
  }

  visitEqExpression(ctx: CompExpressionContext) {
    const lhs = this.visitExpression(ctx.expression(0));
    const rhs = this.visitExpression(ctx.expression(1));
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

  visitStatement(ctx: StatementContext) {
    return this.visit(ctx.getChild(0)) as AstStatement;
  }

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
    const rhs = this.visitExpression(ctx.expression());
    const id = ctx.Identifier().text;
    const [found, idNode] = this.scopeStack.getSymbol(id);
    return found ? new AstAssignment(ctx, idNode as AstVariableDeclaration, rhs) : new AstError(ctx, `variable ${id} not in scope`);
  }

  visitFunctionCall(ctx: FunctionCallContext) {
    const id = ctx.Identifier().text;
    let [found, decl] = this.scopeStack.getSymbol(id);
    if (!found) return new AstError(ctx, `function ${id} does not exist`);

    const funDecl = decl as AstFunctionDeclaration;



    const params = ctx.exprList().expression().map(expr => this.visit(expr) as AstExpression);
    if (params.length != funDecl.signature.params.length) return new AstError(ctx, `function ${id} incorrect number of params`);
    const matches = params.every((param,i) => {
      return param.returnType() == funDecl.signature.params[i];
    });
    if (!matches) 
      return new AstError(ctx, `function ${id} incorrect param typeS`);
    return new AstFunctionCall(ctx, funDecl, params);
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

  visitForStatement(ctx: ForStatementContext) {
    const initialAssignment = this.visitAssignment(ctx.assignment(0));
    const testExpression = this.visitExpression(ctx.expression());
    const updateAssignment = this.visitAssignment(ctx.assignment(1));
    const block = this.visitBlock(ctx.block());

    return new AstFor(ctx, 
      initialAssignment,
      testExpression.returnType() == 'bool' ? testExpression : new AstErrorExpression(ctx.expression(), "for test expression must return bool"),
      updateAssignment,
      block
    );
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