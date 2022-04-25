// Generated from /home/dean/llvmtest/src/Simple.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { UnaryMinusExpressionContext } from "./SimpleParser";
import { NotExpressionContext } from "./SimpleParser";
import { PowerExpressionContext } from "./SimpleParser";
import { MultExpressionContext } from "./SimpleParser";
import { AddExpressionContext } from "./SimpleParser";
import { CompExpressionContext } from "./SimpleParser";
import { EqExpressionContext } from "./SimpleParser";
import { AndExpressionContext } from "./SimpleParser";
import { OrExpressionContext } from "./SimpleParser";
import { TernaryExpressionContext } from "./SimpleParser";
import { ConstantExpressionContext } from "./SimpleParser";
import { FunctionCallExpressionContext } from "./SimpleParser";
import { IdentifierExpressionContext } from "./SimpleParser";
import { BracketExpressionContext } from "./SimpleParser";
import { NumberExpressionContext } from "./SimpleParser";
import { BoolExpressionContext } from "./SimpleParser";
import { NullExpressionContext } from "./SimpleParser";
import { StringExpressionContext } from "./SimpleParser";
import { ParseContext } from "./SimpleParser";
import { ReplContext } from "./SimpleParser";
import { FunTypeContext } from "./SimpleParser";
import { FunctionDeclContext } from "./SimpleParser";
import { ParamContext } from "./SimpleParser";
import { ParamListContext } from "./SimpleParser";
import { ReturnBlockContext } from "./SimpleParser";
import { StatementContext } from "./SimpleParser";
import { CompoundStatementContext } from "./SimpleParser";
import { StatementsContext } from "./SimpleParser";
import { VarTypeContext } from "./SimpleParser";
import { VariableDeclarationContext } from "./SimpleParser";
import { InitDeclaratorListContext } from "./SimpleParser";
import { InitDeclaratorContext } from "./SimpleParser";
import { AssignmentContext } from "./SimpleParser";
import { FunctionCallContext } from "./SimpleParser";
import { IfStatementContext } from "./SimpleParser";
import { ElseStatContext } from "./SimpleParser";
import { SwitchStatementContext } from "./SimpleParser";
import { CaseStatementContext } from "./SimpleParser";
import { DefaultCaseContext } from "./SimpleParser";
import { BreakStatementContext } from "./SimpleParser";
import { ForStatementContext } from "./SimpleParser";
import { ForInitialContext } from "./SimpleParser";
import { WhileStatementContext } from "./SimpleParser";
import { IdListContext } from "./SimpleParser";
import { ExprListContext } from "./SimpleParser";
import { ExpressionContext } from "./SimpleParser";
import { ConstantValueContext } from "./SimpleParser";
import { ListContext } from "./SimpleParser";
import { IndexesContext } from "./SimpleParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SimpleParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SimpleVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `unaryMinusExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `notExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `powerExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerExpression?: (ctx: PowerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `multExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultExpression?: (ctx: MultExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `addExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddExpression?: (ctx: AddExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `compExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompExpression?: (ctx: CompExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `eqExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqExpression?: (ctx: EqExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `andExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `orExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpression?: (ctx: OrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTernaryExpression?: (ctx: TernaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `constantExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `bracketExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracketExpression?: (ctx: BracketExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberExpression`
	 * labeled alternative in `SimpleParser.constantValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExpression?: (ctx: NumberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolExpression`
	 * labeled alternative in `SimpleParser.constantValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolExpression?: (ctx: BoolExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullExpression`
	 * labeled alternative in `SimpleParser.constantValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullExpression?: (ctx: NullExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringExpression`
	 * labeled alternative in `SimpleParser.constantValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpression?: (ctx: StringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.parse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse?: (ctx: ParseContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.repl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepl?: (ctx: ReplContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.funType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunType?: (ctx: FunTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.functionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.paramList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamList?: (ctx: ParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.returnBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnBlock?: (ctx: ReturnBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.compoundStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundStatement?: (ctx: CompoundStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.varType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarType?: (ctx: VarTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.initDeclaratorList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitDeclaratorList?: (ctx: InitDeclaratorListContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.initDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitDeclarator?: (ctx: InitDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.elseStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStat?: (ctx: ElseStatContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.caseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseStatement?: (ctx: CaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.defaultCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultCase?: (ctx: DefaultCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.forInitial`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInitial?: (ctx: ForInitialContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.idList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdList?: (ctx: IdListContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.exprList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprList?: (ctx: ExprListContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.constantValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantValue?: (ctx: ConstantValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.indexes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexes?: (ctx: IndexesContext) => Result;
}

