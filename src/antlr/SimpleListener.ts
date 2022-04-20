// Generated from /home/dean/llvmtest/src/Simple.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `SimpleParser`.
 */
export interface SimpleListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `unaryMinusExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryMinusExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `notExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `notExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNotExpression?: (ctx: NotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `powerExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPowerExpression?: (ctx: PowerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `powerExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPowerExpression?: (ctx: PowerExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `multExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultExpression?: (ctx: MultExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `multExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultExpression?: (ctx: MultExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `addExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddExpression?: (ctx: AddExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `addExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddExpression?: (ctx: AddExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `compExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCompExpression?: (ctx: CompExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `compExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCompExpression?: (ctx: CompExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `eqExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqExpression?: (ctx: EqExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `eqExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqExpression?: (ctx: EqExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `andExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAndExpression?: (ctx: AndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `andExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAndExpression?: (ctx: AndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `orExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterOrExpression?: (ctx: OrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `orExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitOrExpression?: (ctx: OrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTernaryExpression?: (ctx: TernaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `inExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInExpression?: (ctx: InExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `inExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInExpression?: (ctx: InExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `numberExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNumberExpression?: (ctx: NumberExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `numberExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNumberExpression?: (ctx: NumberExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `boolExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBoolExpression?: (ctx: BoolExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `boolExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBoolExpression?: (ctx: BoolExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `nullExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNullExpression?: (ctx: NullExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `nullExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNullExpression?: (ctx: NullExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `listExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterListExpression?: (ctx: ListExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `listExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitListExpression?: (ctx: ListExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `identifierExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `stringExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterStringExpression?: (ctx: StringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `stringExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitStringExpression?: (ctx: StringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `bracketExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBracketExpression?: (ctx: BracketExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bracketExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBracketExpression?: (ctx: BracketExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `inputExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInputExpression?: (ctx: InputExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `inputExpression`
	 * labeled alternative in `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInputExpression?: (ctx: InputExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `identifierFunctionCall`
	 * labeled alternative in `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterIdentifierFunctionCall?: (ctx: IdentifierFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierFunctionCall`
	 * labeled alternative in `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitIdentifierFunctionCall?: (ctx: IdentifierFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `printlnFunctionCall`
	 * labeled alternative in `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterPrintlnFunctionCall?: (ctx: PrintlnFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `printlnFunctionCall`
	 * labeled alternative in `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitPrintlnFunctionCall?: (ctx: PrintlnFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `printFunctionCall`
	 * labeled alternative in `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterPrintFunctionCall?: (ctx: PrintFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `printFunctionCall`
	 * labeled alternative in `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitPrintFunctionCall?: (ctx: PrintFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `assertFunctionCall`
	 * labeled alternative in `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterAssertFunctionCall?: (ctx: AssertFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `assertFunctionCall`
	 * labeled alternative in `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitAssertFunctionCall?: (ctx: AssertFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `sizeFunctionCall`
	 * labeled alternative in `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterSizeFunctionCall?: (ctx: SizeFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `sizeFunctionCall`
	 * labeled alternative in `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitSizeFunctionCall?: (ctx: SizeFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.repl`.
	 * @param ctx the parse tree
	 */
	enterRepl?: (ctx: ReplContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.repl`.
	 * @param ctx the parse tree
	 */
	exitRepl?: (ctx: ReplContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.varType`.
	 * @param ctx the parse tree
	 */
	enterVarType?: (ctx: VarTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.varType`.
	 * @param ctx the parse tree
	 */
	exitVarType?: (ctx: VarTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.ifStat`.
	 * @param ctx the parse tree
	 */
	enterIfStat?: (ctx: IfStatContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.ifStat`.
	 * @param ctx the parse tree
	 */
	exitIfStat?: (ctx: IfStatContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.elseIfStat`.
	 * @param ctx the parse tree
	 */
	enterElseIfStat?: (ctx: ElseIfStatContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.elseIfStat`.
	 * @param ctx the parse tree
	 */
	exitElseIfStat?: (ctx: ElseIfStatContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.elseStat`.
	 * @param ctx the parse tree
	 */
	enterElseStat?: (ctx: ElseStatContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.elseStat`.
	 * @param ctx the parse tree
	 */
	exitElseStat?: (ctx: ElseStatContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	enterFunctionDecl?: (ctx: FunctionDeclContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	exitFunctionDecl?: (ctx: FunctionDeclContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.paramList`.
	 * @param ctx the parse tree
	 */
	enterParamList?: (ctx: ParamListContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.paramList`.
	 * @param ctx the parse tree
	 */
	exitParamList?: (ctx: ParamListContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.idList`.
	 * @param ctx the parse tree
	 */
	enterIdList?: (ctx: IdListContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.idList`.
	 * @param ctx the parse tree
	 */
	exitIdList?: (ctx: IdListContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.exprList`.
	 * @param ctx the parse tree
	 */
	enterExprList?: (ctx: ExprListContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.exprList`.
	 * @param ctx the parse tree
	 */
	exitExprList?: (ctx: ExprListContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleParser.indexes`.
	 * @param ctx the parse tree
	 */
	enterIndexes?: (ctx: IndexesContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleParser.indexes`.
	 * @param ctx the parse tree
	 */
	exitIndexes?: (ctx: IndexesContext) => void;
}

