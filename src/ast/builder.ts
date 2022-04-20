import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { AddExpressionContext, AndExpressionContext, AssignmentContext, BlockContext, BoolExpressionContext, BracketExpressionContext, CompExpressionContext, EqExpressionContext, ExpressionContext, FunctionDeclContext, IdentifierExpressionContext, InExpressionContext, MultExpressionContext, NotExpressionContext, NullExpressionContext, NumberExpressionContext, OrExpressionContext, ParamContext, ParseContext, PowerExpressionContext, ReplContext, VariableDeclarationContext } from "../antlr/SimpleParser";
import { SimpleVisitor } from "../antlr/SimpleVisitor";
import { AstAssignment, AstBinaryExpression, AstBlock, AstBracketExpression, AstConstExpression, AstErrorNode, AstFunctionDeclaration, AstIdentifierExpression, AstNode, AstNullNode, AstRepl, AstVariableDeclaration } from "./nodes";

type BinaryExpressionContext = MultExpressionContext | AddExpressionContext | CompExpressionContext | EqExpressionContext | AndExpressionContext | OrExpressionContext | InExpressionContext;
// type UnaryExpressionContext = UnaryExpressionContext | NotExpressionContext;
// type ConstExpressionContext = NumberExpressionContext | BoolExpressionContext | NullExpressionContext;

class ScopeStack<T> {
  scopes: { [id: string]: T }[];
  constructor() {
    this.scopes = [];
    this.scopes.push({});
  }
  enterScope() {
    this.scopes.push({})
  }
  disposeScope() {
    this.scopes.pop();
  }
  top() {
    return this.scopes[this.scopes.length-1];
  }
  toString() {
    return `Scope(${Object.keys(this.top())})`;
  }
  getSymbol(name:string) {
    const [found, stackVar] = this.tryGetValue(name);
    if (!found) throw new Error("Symbol not found in stack"); 
    else return stackVar;
  }
  setSymbol(name:string, value:T) {
    let [found, stackVar] = this.tryGetValue(name);
    if (found)
      stackVar = value;
    else
      this.scopes[this.scopes.length-1][name] = value;
  }
  hasSymbol(name: string) {
    return this.scopes.some(scope => scope.hasOwnProperty(name));
  }
  tryGetValue(name:string): [boolean, T | {}] {
    // enumerate backwards
    this.scopes.slice().reverse().forEach(scope => {
      // if (scope.hasOwnProperty(name)) return [true, scope[name]]
      if (scope.hasOwnProperty(name)) return [true, scope[name]]
    });
    return [false, {}];
  }
}


export class AstBuilder extends AbstractParseTreeVisitor<AstNode> implements SimpleVisitor<AstNode> {

  functions: AstFunctionDeclaration[] = [];
  scopeStack: ScopeStack<AstVariableDeclaration>;
  anonMax: number = 0;

  constructor() {
    super();
    this.scopeStack = new ScopeStack<AstVariableDeclaration>();

  }

  getAnonName() {
    return "anon" + this.anonMax++;
  }

  defaultResult() {
    return new AstNullNode();
  }

  aggregateResult(aggregate: AstNode, nextResult: AstNode) {
    return nextResult;
  }

  visitParse(ctx: ParseContext) {
    return this.visit(ctx.repl());
  }

  visitRepl(ctx: ReplContext) {
    const functions = ctx.functionDecl().map(decl => this.visitFunctionDecl(decl));
    const body = this.visitBlock(ctx.block());
    return new AstRepl(ctx, functions, body);
  }

  visitBlock(ctx: BlockContext) {
    this.scopeStack.enterScope();
    const body = ctx.statement().map(statement => this.visit(statement));
    const returnVal = ctx.expression() ? this.visit(ctx.expression()) : new AstNullNode();
    return new AstBlock(ctx, this.scopeStack.top(), body, returnVal);
  }

  visitVariableDeclaration(ctx: VariableDeclarationContext) {
    const varType = ctx.varType().text;
    const ids = ctx.Identifier().map(id => id.text);
    const node = new AstVariableDeclaration(ctx, varType, ids);
    ids.forEach(id => this.scopeStack.setSymbol(id, node));
    return node;
  }

  visitAssignment(ctx: AssignmentContext) {
    const rhs = this.visit(ctx.expression());
    const id = ctx.Identifier().text;
    return new AstAssignment(ctx, id, rhs);
  }

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

  visitIdentifierExpression(ctx: IdentifierExpressionContext) {
    const id = ctx.Identifier().text;
    return (this.scopeStack.hasSymbol(id)) ? new AstIdentifierExpression(ctx, id) : new AstErrorNode(ctx, `${id} not in scope`);
  }

  visitBracketExpression(ctx: BracketExpressionContext) {
    const expr = this.visit(ctx.expression());
    return new AstBracketExpression(ctx, expr);
  }

  visitParam(ctx: ParamContext) {
    const paramType = ctx.varType().text;
    const id = ctx.Identifier().text;
    return new AstVariableDeclaration(ctx, paramType, [id]);
  }

  visitFunctionDecl(ctx: FunctionDeclContext) {
    const id = ctx.Identifier().text;
    const params = ctx.paramList().param().map(param => this.visitParam(param));
    const body = this.visitBlock(ctx.block());
    return new AstFunctionDeclaration(ctx, id, params, body);
  }
}