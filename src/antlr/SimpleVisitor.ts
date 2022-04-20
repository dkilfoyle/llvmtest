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
import { InExpressionContext } from "./SimpleParser";
import { NumberExpressionContext } from "./SimpleParser";
import { BoolExpressionContext } from "./SimpleParser";
import { NullExpressionContext } from "./SimpleParser";
import { FunctionCallExpressionContext } from "./SimpleParser";
import { ListExpressionContext } from "./SimpleParser";
import { IdentifierExpressionContext } from "./SimpleParser";
import { StringExpressionContext } from "./SimpleParser";
import { BracketExpressionContext } from "./SimpleParser";
import { InputExpressionContext } from "./SimpleParser";
import { IdentifierFunctionCallContext } from "./SimpleParser";
import { PrintlnFunctionCallContext } from "./SimpleParser";
import { PrintFunctionCallContext } from "./SimpleParser";
import { AssertFunctionCallContext } from "./SimpleParser";
import { SizeFunctionCallContext } from "./SimpleParser";
import { ParseContext } from "./SimpleParser";
import { ReplContext } from "./SimpleParser";
import { BlockContext } from "./SimpleParser";
import { StatementContext } from "./SimpleParser";
import { VariableDeclarationContext } from "./SimpleParser";
import { VarTypeContext } from "./SimpleParser";
import { AssignmentContext } from "./SimpleParser";
import { FunctionCallContext } from "./SimpleParser";
import { IfStatementContext } from "./SimpleParser";
import { IfStatContext } from "./SimpleParser";
import { ElseIfStatContext } from "./SimpleParser";
import { ElseStatContext } from "./SimpleParser";
import { FunctionDeclContext } from "./SimpleParser";
import { ParamContext } from "./SimpleParser";
import { ParamListContext } from "./SimpleParser";
import { ForStatementContext } from "./SimpleParser";
import { WhileStatementContext } from "./SimpleParser";
import { IdListContext } from "./SimpleParser";
import { ExprListContext } from "./SimpleParser";
import { ExpressionContext } from "./SimpleParser";
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
	 * Visit a parse tree produced by the `inExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInExpression?: (ctx: InExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExpression?: (ctx: NumberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolExpression?: (ctx: BoolExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullExpression?: (ctx: NullExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `listExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListExpression?: (ctx: ListExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpression?: (ctx: StringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `bracketExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracketExpression?: (ctx: BracketExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `inputExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputExpression?: (ctx: InputExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierFunctionCall`
	 * labeled alternative in `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierFunctionCall?: (ctx: IdentifierFunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `printlnFunctionCall`
	 * labeled alternative in `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintlnFunctionCall?: (ctx: PrintlnFunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `printFunctionCall`
	 * labeled alternative in `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintFunctionCall?: (ctx: PrintFunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `assertFunctionCall`
	 * labeled alternative in `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertFunctionCall?: (ctx: AssertFunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `sizeFunctionCall`
	 * labeled alternative in `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSizeFunctionCall?: (ctx: SizeFunctionCallContext) => Result;

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
	 * Visit a parse tree produced by `SimpleParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.varType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarType?: (ctx: VarTypeContext) => Result;

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
	 * Visit a parse tree produced by `SimpleParser.ifStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStat?: (ctx: IfStatContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.elseIfStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfStat?: (ctx: ElseIfStatContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleParser.elseStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStat?: (ctx: ElseStatContext) => Result;

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
	 * Visit a parse tree produced by `SimpleParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

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

