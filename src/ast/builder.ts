import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { AddExpressionContext, AndExpressionContext, AssignmentContext, BlockContext, BoolExpressionContext, BracketExpressionContext, CompExpressionContext, ElseIfStatContext, ElseStatContext, EqExpressionContext, ExpressionContext, ForStatementContext, FunctionCallContext, FunctionDeclContext, IdentifierExpressionContext, IfStatContext, IfStatementContext, MultExpressionContext,  NullExpressionContext,  NumberExpressionContext, OrExpressionContext, ParamContext, ParseContext, ReplContext, StatementContext, StringExpressionContext, UnaryMinusExpressionContext, NotExpressionContext, VariableDeclarationContext, PowerExpressionContext, ForInitialContext } from "../antlr/SimpleParser";
import { AstAssignment, AstBinaryExpression, AstBlock, AstBracketExpression, AstConstExpression, AstError, AstErrorExpression, AstExpression, AstFor, AstFunctionCall, AstFunctionDeclaration, AstIdentifierDeclaration, AstIdentifierExpression, AstIf, AstIfElse, AstNode, AstNull, AstRepl, AstStatement, AstUnaryExpression, AstUndeclaredError, AstVariableDeclaration } from "./nodes";
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

  visitExpression(ctx: ExpressionContext) {
    return ctx.accept(this) as AstExpression;
  }

  visitUnaryMinusExpression(ctx: UnaryMinusExpressionContext) {
    const rhs = this.visitExpression(ctx.expression());
    const op = ctx._op.text;
    return new AstUnaryExpression(ctx, op, rhs);
  }

  visitNotExpression(ctx: NotExpressionContext) {
    const rhs = this.visitExpression(ctx.expression());
    const op = ctx._op.text;
    return new AstUnaryExpression(ctx, op, rhs);
  }

  createBinaryExpression(ctx: AddExpressionContext | MultExpressionContext | CompExpressionContext | EqExpressionContext | AndExpressionContext | OrExpressionContext ) {
    const lhs = this.visitExpression(ctx.expression(0) as ExpressionContext);
    const rhs = this.visitExpression(ctx.expression(1) as ExpressionContext);
    const op = ctx._op.text;
    return new AstBinaryExpression(ctx, op, lhs, rhs);
  }

  visitPowerExpression(ctx: PowerExpressionContext) {
    return this.createBinaryExpression(ctx);
  }

  visitAddExpression(ctx: AddExpressionContext) {
    return this.createBinaryExpression(ctx);
  }
  
  visitMultExpression(ctx: MultExpressionContext) {
    return this.createBinaryExpression(ctx);
  }

  visitCompExpression(ctx: CompExpressionContext) {
    return this.createBinaryExpression(ctx);
  }

  visitEqExpression(ctx: EqExpressionContext) {
    return this.createBinaryExpression(ctx);
  }

  visitAndExpression(ctx: AndExpressionContext) {
    return this.createBinaryExpression(ctx);
  }

  visitOrExpression(ctx: OrExpressionContext) {
    return this.createBinaryExpression(ctx);
  }

  visitIdentifierExpression(ctx: IdentifierExpressionContext) {
    const id = ctx.Identifier().text;
    const [found, idNode] = this.scopeStack.getSymbol(id);
    return new AstIdentifierExpression(ctx, found ? idNode as AstVariableDeclaration : new AstUndeclaredError(ctx, id));
  }

  visitBracketExpression(ctx: BracketExpressionContext) {
    return this.visitExpression(ctx.expression());
  }

  visitNumberExpression(ctx: NumberExpressionContext) {
    const ret = ctx.Number().text;
    return new AstConstExpression(ctx, parseInt(ret), "int");
  }

  visitBoolExpression(ctx: BoolExpressionContext) {
    const b = ctx.Bool().text;
    return new AstConstExpression(ctx, b=='true', "bool");
  }

  visitStringExpression(ctx: StringExpressionContext) {
    const s= ctx.String().text;
    return new AstConstExpression(ctx, s, "string");
  }

  visitNullExpression(ctx: NullExpressionContext) {
    return new AstConstExpression(ctx, null, "null");
  }

  // statements

  visitStatement(ctx: StatementContext) {
    return this.visit(ctx.getChild(0)) as AstStatement;
  }

  visitVariableDeclaration(ctx: VariableDeclarationContext) {
    const varType = ctx.varType().text;
    const body: AstNode[] = [];
    ctx.initDeclaratorList().initDeclarator().forEach(idctx => {
      const id = idctx.Identifier().text;
      let node;
      if (idctx.expression()) 
        node = new AstVariableDeclaration(idctx, id, varType as AllowedTypes, this.visitExpression(idctx.expression()));
      else
        node = new AstVariableDeclaration(idctx, id, varType as AllowedTypes);
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
      console.log(param, i)
      return param.returnType() == funDecl.signature.params[i];
    });
    if (!matches) 
      return new AstError(ctx, `function ${id} incorrect param typeS`);
    return new AstFunctionCall(ctx, funDecl, params);
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
    this.scopeStack.enterScope("for");
    let initialStatement = ctx.forInitial().variableDeclaration() ?
      this.visitVariableDeclaration(ctx.forInitial().variableDeclaration()) :
      this.visitAssignment(ctx.forInitial().assignment());
    const testExpression = this.visitExpression(ctx.expression());
    const updateAssignment = this.visitAssignment(ctx.assignment());
    const block = this.visitBlock(ctx.block());
    this.scopeStack.disposeScope();
    return new AstFor(ctx, 
      initialStatement,
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