// Generated from /home/dkilfoyle/llvmtest/ECMAScript.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ECMAScriptListener } from "./ECMAScriptListener";
import { ECMAScriptVisitor } from "./ECMAScriptVisitor";


export class ECMAScriptParser extends Parser {
	public static readonly RegularExpressionLiteral = 1;
	public static readonly LineTerminator = 2;
	public static readonly OpenBracket = 3;
	public static readonly CloseBracket = 4;
	public static readonly OpenParen = 5;
	public static readonly CloseParen = 6;
	public static readonly OpenBrace = 7;
	public static readonly CloseBrace = 8;
	public static readonly SemiColon = 9;
	public static readonly Comma = 10;
	public static readonly Assign = 11;
	public static readonly QuestionMark = 12;
	public static readonly Colon = 13;
	public static readonly Dot = 14;
	public static readonly PlusPlus = 15;
	public static readonly MinusMinus = 16;
	public static readonly Plus = 17;
	public static readonly Minus = 18;
	public static readonly BitNot = 19;
	public static readonly Not = 20;
	public static readonly Multiply = 21;
	public static readonly Divide = 22;
	public static readonly Modulus = 23;
	public static readonly RightShiftArithmetic = 24;
	public static readonly LeftShiftArithmetic = 25;
	public static readonly RightShiftLogical = 26;
	public static readonly LessThan = 27;
	public static readonly MoreThan = 28;
	public static readonly LessThanEquals = 29;
	public static readonly GreaterThanEquals = 30;
	public static readonly Equals = 31;
	public static readonly NotEquals = 32;
	public static readonly IdentityEquals = 33;
	public static readonly IdentityNotEquals = 34;
	public static readonly BitAnd = 35;
	public static readonly BitXOr = 36;
	public static readonly BitOr = 37;
	public static readonly And = 38;
	public static readonly Or = 39;
	public static readonly MultiplyAssign = 40;
	public static readonly DivideAssign = 41;
	public static readonly ModulusAssign = 42;
	public static readonly PlusAssign = 43;
	public static readonly MinusAssign = 44;
	public static readonly LeftShiftArithmeticAssign = 45;
	public static readonly RightShiftArithmeticAssign = 46;
	public static readonly RightShiftLogicalAssign = 47;
	public static readonly BitAndAssign = 48;
	public static readonly BitXorAssign = 49;
	public static readonly BitOrAssign = 50;
	public static readonly NullLiteral = 51;
	public static readonly BooleanLiteral = 52;
	public static readonly DecimalLiteral = 53;
	public static readonly HexIntegerLiteral = 54;
	public static readonly OctalIntegerLiteral = 55;
	public static readonly Break = 56;
	public static readonly Do = 57;
	public static readonly Instanceof = 58;
	public static readonly Typeof = 59;
	public static readonly Case = 60;
	public static readonly Else = 61;
	public static readonly New = 62;
	public static readonly Var = 63;
	public static readonly Catch = 64;
	public static readonly Finally = 65;
	public static readonly Return = 66;
	public static readonly Void = 67;
	public static readonly Continue = 68;
	public static readonly For = 69;
	public static readonly Switch = 70;
	public static readonly While = 71;
	public static readonly Debugger = 72;
	public static readonly Function = 73;
	public static readonly This = 74;
	public static readonly With = 75;
	public static readonly Default = 76;
	public static readonly If = 77;
	public static readonly Throw = 78;
	public static readonly Delete = 79;
	public static readonly In = 80;
	public static readonly Try = 81;
	public static readonly Class = 82;
	public static readonly Enum = 83;
	public static readonly Extends = 84;
	public static readonly Super = 85;
	public static readonly Const = 86;
	public static readonly Export = 87;
	public static readonly Import = 88;
	public static readonly Implements = 89;
	public static readonly Let = 90;
	public static readonly Private = 91;
	public static readonly Public = 92;
	public static readonly Interface = 93;
	public static readonly Package = 94;
	public static readonly Protected = 95;
	public static readonly Static = 96;
	public static readonly Yield = 97;
	public static readonly Identifier = 98;
	public static readonly StringLiteral = 99;
	public static readonly WhiteSpaces = 100;
	public static readonly MultiLineComment = 101;
	public static readonly SingleLineComment = 102;
	public static readonly UnexpectedCharacter = 103;
	public static readonly RULE_program = 0;
	public static readonly RULE_sourceElements = 1;
	public static readonly RULE_sourceElement = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_block = 4;
	public static readonly RULE_statementList = 5;
	public static readonly RULE_variableStatement = 6;
	public static readonly RULE_variableDeclarationList = 7;
	public static readonly RULE_variableDeclaration = 8;
	public static readonly RULE_initialiser = 9;
	public static readonly RULE_emptyStatement_ = 10;
	public static readonly RULE_expressionStatement = 11;
	public static readonly RULE_ifStatement = 12;
	public static readonly RULE_iterationStatement = 13;
	public static readonly RULE_continueStatement = 14;
	public static readonly RULE_breakStatement = 15;
	public static readonly RULE_returnStatement = 16;
	public static readonly RULE_withStatement = 17;
	public static readonly RULE_switchStatement = 18;
	public static readonly RULE_caseBlock = 19;
	public static readonly RULE_caseClauses = 20;
	public static readonly RULE_caseClause = 21;
	public static readonly RULE_defaultClause = 22;
	public static readonly RULE_labelledStatement = 23;
	public static readonly RULE_throwStatement = 24;
	public static readonly RULE_tryStatement = 25;
	public static readonly RULE_catchProduction = 26;
	public static readonly RULE_finallyProduction = 27;
	public static readonly RULE_debuggerStatement = 28;
	public static readonly RULE_functionDeclaration = 29;
	public static readonly RULE_formalParameterList = 30;
	public static readonly RULE_functionBody = 31;
	public static readonly RULE_arrayLiteral = 32;
	public static readonly RULE_elementList = 33;
	public static readonly RULE_elision = 34;
	public static readonly RULE_objectLiteral = 35;
	public static readonly RULE_propertyNameAndValueList = 36;
	public static readonly RULE_propertyAssignment = 37;
	public static readonly RULE_propertyName = 38;
	public static readonly RULE_propertySetParameterList = 39;
	public static readonly RULE_arguments = 40;
	public static readonly RULE_argumentList = 41;
	public static readonly RULE_expressionSequence = 42;
	public static readonly RULE_singleExpression = 43;
	public static readonly RULE_assignmentOperator = 44;
	public static readonly RULE_literal = 45;
	public static readonly RULE_numericLiteral = 46;
	public static readonly RULE_identifierName = 47;
	public static readonly RULE_reservedWord = 48;
	public static readonly RULE_keyword = 49;
	public static readonly RULE_futureReservedWord = 50;
	public static readonly RULE_getter = 51;
	public static readonly RULE_setter = 52;
	public static readonly RULE_eos = 53;
	public static readonly RULE_eof = 54;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "sourceElements", "sourceElement", "statement", "block", "statementList", 
		"variableStatement", "variableDeclarationList", "variableDeclaration", 
		"initialiser", "emptyStatement_", "expressionStatement", "ifStatement", 
		"iterationStatement", "continueStatement", "breakStatement", "returnStatement", 
		"withStatement", "switchStatement", "caseBlock", "caseClauses", "caseClause", 
		"defaultClause", "labelledStatement", "throwStatement", "tryStatement", 
		"catchProduction", "finallyProduction", "debuggerStatement", "functionDeclaration", 
		"formalParameterList", "functionBody", "arrayLiteral", "elementList", 
		"elision", "objectLiteral", "propertyNameAndValueList", "propertyAssignment", 
		"propertyName", "propertySetParameterList", "arguments", "argumentList", 
		"expressionSequence", "singleExpression", "assignmentOperator", "literal", 
		"numericLiteral", "identifierName", "reservedWord", "keyword", "futureReservedWord", 
		"getter", "setter", "eos", "eof",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"';'", "','", "'='", "'?'", "':'", "'.'", "'++'", "'--'", "'+'", "'-'", 
		"'~'", "'!'", "'*'", "'/'", "'%'", "'>>'", "'<<'", "'>>>'", "'<'", "'>'", 
		"'<='", "'>='", "'=='", "'!='", "'==='", "'!=='", "'&'", "'^'", "'|'", 
		"'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", 
		"'>>>='", "'&='", "'^='", "'|='", "'null'", undefined, undefined, undefined, 
		undefined, "'break'", "'do'", "'instanceof'", "'typeof'", "'case'", "'else'", 
		"'new'", "'var'", "'catch'", "'finally'", "'return'", "'void'", "'continue'", 
		"'for'", "'switch'", "'while'", "'debugger'", "'function'", "'this'", 
		"'with'", "'default'", "'if'", "'throw'", "'delete'", "'in'", "'try'", 
		"'class'", "'enum'", "'extends'", "'super'", "'const'", "'export'", "'import'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "RegularExpressionLiteral", "LineTerminator", "OpenBracket", 
		"CloseBracket", "OpenParen", "CloseParen", "OpenBrace", "CloseBrace", 
		"SemiColon", "Comma", "Assign", "QuestionMark", "Colon", "Dot", "PlusPlus", 
		"MinusMinus", "Plus", "Minus", "BitNot", "Not", "Multiply", "Divide", 
		"Modulus", "RightShiftArithmetic", "LeftShiftArithmetic", "RightShiftLogical", 
		"LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", "Equals", 
		"NotEquals", "IdentityEquals", "IdentityNotEquals", "BitAnd", "BitXOr", 
		"BitOr", "And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", 
		"PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
		"RightShiftLogicalAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign", 
		"NullLiteral", "BooleanLiteral", "DecimalLiteral", "HexIntegerLiteral", 
		"OctalIntegerLiteral", "Break", "Do", "Instanceof", "Typeof", "Case", 
		"Else", "New", "Var", "Catch", "Finally", "Return", "Void", "Continue", 
		"For", "Switch", "While", "Debugger", "Function", "This", "With", "Default", 
		"If", "Throw", "Delete", "In", "Try", "Class", "Enum", "Extends", "Super", 
		"Const", "Export", "Import", "Implements", "Let", "Private", "Public", 
		"Interface", "Package", "Protected", "Static", "Yield", "Identifier", 
		"StringLiteral", "WhiteSpaces", "MultiLineComment", "SingleLineComment", 
		"UnexpectedCharacter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ECMAScriptParser._LITERAL_NAMES, ECMAScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ECMAScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ECMAScript.g4"; }

	// @Override
	public get ruleNames(): string[] { return ECMAScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ECMAScriptParser._serializedATN; }


	/**
	 * Returns true if, on the current index of the parser's token stream,
	 * a token of the given type exists on the HIDDEN channel.
	 * @param type {Number} The type of the token on the HIDDEN channel to check.
	 * @returns {Boolean}
	 */
	ECMAScriptParser.prototype.here = function(type) {
	    var possibleIndexEosToken = antlr4.Parser.prototype.getCurrentToken.call(this).tokenIndex - 1;
	    var ahead = this._input.get(possibleIndexEosToken);
	    return (ahead.channel == antlr4.Lexer.HIDDEN) && (ahead.type == type);
	};

	/**
	 * Returns true if, on the current index of the parser's
	 * token stream, a token exists on the HIDDEN channel which
	 * either is a line terminator, or is a multi line comment that
	 * contains a line terminator.
	 * @returns {Boolean}
	 */
	ECMAScriptParser.prototype.lineTerminatorAhead = function() {
	    var possibleIndexEosToken = antlr4.Parser.prototype.getCurrentToken.call(this).tokenIndex - 1;
	    var ahead = this._input.get(possibleIndexEosToken);

	    if (ahead.channel != antlr4.Lexer.HIDDEN)
	        return false;

	    var text = ahead.text;
	    var type = ahead.type;

	    return (type == ECMAScriptParser.MultiLineComment && text.indexOf("\r") !== -1 || text.indexOf("\n") !== -1) ||
	            (type == ECMAScriptParser.LineTerminator);
	};

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ECMAScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ECMAScriptParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 110;
				this.sourceElements();
				}
				break;
			}
			this.state = 113;
			this.match(ECMAScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceElements(): SourceElementsContext {
		let _localctx: SourceElementsContext = new SourceElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ECMAScriptParser.RULE_sourceElements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 115;
					this.sourceElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 118;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceElement(): SourceElementContext {
		let _localctx: SourceElementContext = new SourceElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ECMAScriptParser.RULE_sourceElement);
		try {
			this.state = 123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 120;
				if (!(this._input.LA(1).type != ECMAScriptParser.Function)) {
					throw new FailedPredicateException(this, "this._input.LA(1).type != ECMAScriptParser.Function");
				}
				this.state = 121;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 122;
				this.functionDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ECMAScriptParser.RULE_statement);
		try {
			this.state = 141;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 125;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 126;
				this.variableStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 127;
				this.emptyStatement_();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 128;
				if (!(this._input.LA(1).type != ECMAScriptParser.OpenBrace)) {
					throw new FailedPredicateException(this, "this._input.LA(1).type != ECMAScriptParser.OpenBrace");
				}
				this.state = 129;
				this.expressionStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 130;
				this.ifStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 131;
				this.iterationStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 132;
				this.continueStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 133;
				this.breakStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 134;
				this.returnStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 135;
				this.withStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 136;
				this.labelledStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 137;
				this.switchStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 138;
				this.throwStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 139;
				this.tryStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 140;
				this.debuggerStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ECMAScriptParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(ECMAScriptParser.OpenBrace);
			this.state = 145;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 144;
				this.statementList();
				}
				break;
			}
			this.state = 147;
			this.match(ECMAScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ECMAScriptParser.RULE_statementList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 149;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 152;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableStatement(): VariableStatementContext {
		let _localctx: VariableStatementContext = new VariableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ECMAScriptParser.RULE_variableStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(ECMAScriptParser.Var);
			this.state = 155;
			this.variableDeclarationList();
			this.state = 156;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationList(): VariableDeclarationListContext {
		let _localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ECMAScriptParser.RULE_variableDeclarationList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.variableDeclaration();
			this.state = 163;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 159;
					this.match(ECMAScriptParser.Comma);
					this.state = 160;
					this.variableDeclaration();
					}
					}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ECMAScriptParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(ECMAScriptParser.Identifier);
			this.state = 168;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 167;
				this.initialiser();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initialiser(): InitialiserContext {
		let _localctx: InitialiserContext = new InitialiserContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ECMAScriptParser.RULE_initialiser);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.match(ECMAScriptParser.Assign);
			this.state = 171;
			this.singleExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement_(): EmptyStatement_Context {
		let _localctx: EmptyStatement_Context = new EmptyStatement_Context(this._ctx, this.state);
		this.enterRule(_localctx, 20, ECMAScriptParser.RULE_emptyStatement_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this.match(ECMAScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ECMAScriptParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.expressionSequence();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ECMAScriptParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this.match(ECMAScriptParser.If);
			this.state = 178;
			this.match(ECMAScriptParser.OpenParen);
			this.state = 179;
			this.expressionSequence();
			this.state = 180;
			this.match(ECMAScriptParser.CloseParen);
			this.state = 181;
			this.statement();
			this.state = 184;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 182;
				this.match(ECMAScriptParser.Else);
				this.state = 183;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ECMAScriptParser.RULE_iterationStatement);
		let _la: number;
		try {
			this.state = 247;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new DoStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 186;
				this.match(ECMAScriptParser.Do);
				this.state = 187;
				this.statement();
				this.state = 188;
				this.match(ECMAScriptParser.While);
				this.state = 189;
				this.match(ECMAScriptParser.OpenParen);
				this.state = 190;
				this.expressionSequence();
				this.state = 191;
				this.match(ECMAScriptParser.CloseParen);
				this.state = 192;
				this.eos();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 194;
				this.match(ECMAScriptParser.While);
				this.state = 195;
				this.match(ECMAScriptParser.OpenParen);
				this.state = 196;
				this.expressionSequence();
				this.state = 197;
				this.match(ECMAScriptParser.CloseParen);
				this.state = 198;
				this.statement();
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 200;
				this.match(ECMAScriptParser.For);
				this.state = 201;
				this.match(ECMAScriptParser.OpenParen);
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la === ECMAScriptParser.Identifier || _la === ECMAScriptParser.StringLiteral) {
					{
					this.state = 202;
					this.expressionSequence();
					}
				}

				this.state = 205;
				this.match(ECMAScriptParser.SemiColon);
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la === ECMAScriptParser.Identifier || _la === ECMAScriptParser.StringLiteral) {
					{
					this.state = 206;
					this.expressionSequence();
					}
				}

				this.state = 209;
				this.match(ECMAScriptParser.SemiColon);
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la === ECMAScriptParser.Identifier || _la === ECMAScriptParser.StringLiteral) {
					{
					this.state = 210;
					this.expressionSequence();
					}
				}

				this.state = 213;
				this.match(ECMAScriptParser.CloseParen);
				this.state = 214;
				this.statement();
				}
				break;

			case 4:
				_localctx = new ForVarStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 215;
				this.match(ECMAScriptParser.For);
				this.state = 216;
				this.match(ECMAScriptParser.OpenParen);
				this.state = 217;
				this.match(ECMAScriptParser.Var);
				this.state = 218;
				this.variableDeclarationList();
				this.state = 219;
				this.match(ECMAScriptParser.SemiColon);
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la === ECMAScriptParser.Identifier || _la === ECMAScriptParser.StringLiteral) {
					{
					this.state = 220;
					this.expressionSequence();
					}
				}

				this.state = 223;
				this.match(ECMAScriptParser.SemiColon);
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la === ECMAScriptParser.Identifier || _la === ECMAScriptParser.StringLiteral) {
					{
					this.state = 224;
					this.expressionSequence();
					}
				}

				this.state = 227;
				this.match(ECMAScriptParser.CloseParen);
				this.state = 228;
				this.statement();
				}
				break;

			case 5:
				_localctx = new ForInStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 230;
				this.match(ECMAScriptParser.For);
				this.state = 231;
				this.match(ECMAScriptParser.OpenParen);
				this.state = 232;
				this.singleExpression(0);
				this.state = 233;
				this.match(ECMAScriptParser.In);
				this.state = 234;
				this.expressionSequence();
				this.state = 235;
				this.match(ECMAScriptParser.CloseParen);
				this.state = 236;
				this.statement();
				}
				break;

			case 6:
				_localctx = new ForVarInStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 238;
				this.match(ECMAScriptParser.For);
				this.state = 239;
				this.match(ECMAScriptParser.OpenParen);
				this.state = 240;
				this.match(ECMAScriptParser.Var);
				this.state = 241;
				this.variableDeclaration();
				this.state = 242;
				this.match(ECMAScriptParser.In);
				this.state = 243;
				this.expressionSequence();
				this.state = 244;
				this.match(ECMAScriptParser.CloseParen);
				this.state = 245;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ECMAScriptParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.match(ECMAScriptParser.Continue);
			this.state = 252;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 250;
				if (!(!this.here(ECMAScriptParser.LineTerminator))) {
					throw new FailedPredicateException(this, "!this.here(ECMAScriptParser.LineTerminator)");
				}
				this.state = 251;
				this.match(ECMAScriptParser.Identifier);
				}
				break;
			}
			this.state = 254;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ECMAScriptParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.match(ECMAScriptParser.Break);
			this.state = 259;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 257;
				if (!(!this.here(ECMAScriptParser.LineTerminator))) {
					throw new FailedPredicateException(this, "!this.here(ECMAScriptParser.LineTerminator)");
				}
				this.state = 258;
				this.match(ECMAScriptParser.Identifier);
				}
				break;
			}
			this.state = 261;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ECMAScriptParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this.match(ECMAScriptParser.Return);
			this.state = 266;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 264;
				if (!(!this.here(ECMAScriptParser.LineTerminator))) {
					throw new FailedPredicateException(this, "!this.here(ECMAScriptParser.LineTerminator)");
				}
				this.state = 265;
				this.expressionSequence();
				}
				break;
			}
			this.state = 268;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withStatement(): WithStatementContext {
		let _localctx: WithStatementContext = new WithStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ECMAScriptParser.RULE_withStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.match(ECMAScriptParser.With);
			this.state = 271;
			this.match(ECMAScriptParser.OpenParen);
			this.state = 272;
			this.expressionSequence();
			this.state = 273;
			this.match(ECMAScriptParser.CloseParen);
			this.state = 274;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ECMAScriptParser.RULE_switchStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.match(ECMAScriptParser.Switch);
			this.state = 277;
			this.match(ECMAScriptParser.OpenParen);
			this.state = 278;
			this.expressionSequence();
			this.state = 279;
			this.match(ECMAScriptParser.CloseParen);
			this.state = 280;
			this.caseBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseBlock(): CaseBlockContext {
		let _localctx: CaseBlockContext = new CaseBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ECMAScriptParser.RULE_caseBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.match(ECMAScriptParser.OpenBrace);
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ECMAScriptParser.Case) {
				{
				this.state = 283;
				this.caseClauses();
				}
			}

			this.state = 290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ECMAScriptParser.Default) {
				{
				this.state = 286;
				this.defaultClause();
				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ECMAScriptParser.Case) {
					{
					this.state = 287;
					this.caseClauses();
					}
				}

				}
			}

			this.state = 292;
			this.match(ECMAScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseClauses(): CaseClausesContext {
		let _localctx: CaseClausesContext = new CaseClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ECMAScriptParser.RULE_caseClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 294;
				this.caseClause();
				}
				}
				this.state = 297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ECMAScriptParser.Case);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseClause(): CaseClauseContext {
		let _localctx: CaseClauseContext = new CaseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ECMAScriptParser.RULE_caseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(ECMAScriptParser.Case);
			this.state = 300;
			this.expressionSequence();
			this.state = 301;
			this.match(ECMAScriptParser.Colon);
			this.state = 303;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 302;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultClause(): DefaultClauseContext {
		let _localctx: DefaultClauseContext = new DefaultClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ECMAScriptParser.RULE_defaultClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this.match(ECMAScriptParser.Default);
			this.state = 306;
			this.match(ECMAScriptParser.Colon);
			this.state = 308;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 307;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labelledStatement(): LabelledStatementContext {
		let _localctx: LabelledStatementContext = new LabelledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ECMAScriptParser.RULE_labelledStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this.match(ECMAScriptParser.Identifier);
			this.state = 311;
			this.match(ECMAScriptParser.Colon);
			this.state = 312;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ECMAScriptParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.match(ECMAScriptParser.Throw);
			this.state = 315;
			if (!(!this.here(ECMAScriptParser.LineTerminator))) {
				throw new FailedPredicateException(this, "!this.here(ECMAScriptParser.LineTerminator)");
			}
			this.state = 316;
			this.expressionSequence();
			this.state = 317;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ECMAScriptParser.RULE_tryStatement);
		try {
			this.state = 332;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 319;
				this.match(ECMAScriptParser.Try);
				this.state = 320;
				this.block();
				this.state = 321;
				this.catchProduction();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 323;
				this.match(ECMAScriptParser.Try);
				this.state = 324;
				this.block();
				this.state = 325;
				this.finallyProduction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 327;
				this.match(ECMAScriptParser.Try);
				this.state = 328;
				this.block();
				this.state = 329;
				this.catchProduction();
				this.state = 330;
				this.finallyProduction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchProduction(): CatchProductionContext {
		let _localctx: CatchProductionContext = new CatchProductionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ECMAScriptParser.RULE_catchProduction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.match(ECMAScriptParser.Catch);
			this.state = 335;
			this.match(ECMAScriptParser.OpenParen);
			this.state = 336;
			this.match(ECMAScriptParser.Identifier);
			this.state = 337;
			this.match(ECMAScriptParser.CloseParen);
			this.state = 338;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyProduction(): FinallyProductionContext {
		let _localctx: FinallyProductionContext = new FinallyProductionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ECMAScriptParser.RULE_finallyProduction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.match(ECMAScriptParser.Finally);
			this.state = 341;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public debuggerStatement(): DebuggerStatementContext {
		let _localctx: DebuggerStatementContext = new DebuggerStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ECMAScriptParser.RULE_debuggerStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this.match(ECMAScriptParser.Debugger);
			this.state = 344;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ECMAScriptParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.match(ECMAScriptParser.Function);
			this.state = 347;
			this.match(ECMAScriptParser.Identifier);
			this.state = 348;
			this.match(ECMAScriptParser.OpenParen);
			this.state = 350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ECMAScriptParser.Identifier) {
				{
				this.state = 349;
				this.formalParameterList();
				}
			}

			this.state = 352;
			this.match(ECMAScriptParser.CloseParen);
			this.state = 353;
			this.match(ECMAScriptParser.OpenBrace);
			this.state = 354;
			this.functionBody();
			this.state = 355;
			this.match(ECMAScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ECMAScriptParser.RULE_formalParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this.match(ECMAScriptParser.Identifier);
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ECMAScriptParser.Comma) {
				{
				{
				this.state = 358;
				this.match(ECMAScriptParser.Comma);
				this.state = 359;
				this.match(ECMAScriptParser.Identifier);
				}
				}
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ECMAScriptParser.RULE_functionBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 365;
				this.sourceElements();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let _localctx: ArrayLiteralContext = new ArrayLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ECMAScriptParser.RULE_arrayLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(ECMAScriptParser.OpenBracket);
			this.state = 370;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 369;
				this.elementList();
				}
				break;
			}
			this.state = 373;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 372;
				this.match(ECMAScriptParser.Comma);
				}
				break;
			}
			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ECMAScriptParser.Comma) {
				{
				this.state = 375;
				this.elision();
				}
			}

			this.state = 378;
			this.match(ECMAScriptParser.CloseBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementList(): ElementListContext {
		let _localctx: ElementListContext = new ElementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ECMAScriptParser.RULE_elementList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ECMAScriptParser.Comma) {
				{
				this.state = 380;
				this.elision();
				}
			}

			this.state = 383;
			this.singleExpression(0);
			this.state = 391;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 384;
					this.match(ECMAScriptParser.Comma);
					this.state = 386;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ECMAScriptParser.Comma) {
						{
						this.state = 385;
						this.elision();
						}
					}

					this.state = 388;
					this.singleExpression(0);
					}
					}
				}
				this.state = 393;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elision(): ElisionContext {
		let _localctx: ElisionContext = new ElisionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ECMAScriptParser.RULE_elision);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 394;
				this.match(ECMAScriptParser.Comma);
				}
				}
				this.state = 397;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ECMAScriptParser.Comma);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectLiteral(): ObjectLiteralContext {
		let _localctx: ObjectLiteralContext = new ObjectLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ECMAScriptParser.RULE_objectLiteral);
		let _la: number;
		try {
			this.state = 408;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 399;
				this.match(ECMAScriptParser.OpenBrace);
				this.state = 400;
				this.match(ECMAScriptParser.CloseBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 401;
				this.match(ECMAScriptParser.OpenBrace);
				this.state = 402;
				this.propertyNameAndValueList();
				this.state = 404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ECMAScriptParser.Comma) {
					{
					this.state = 403;
					this.match(ECMAScriptParser.Comma);
					}
				}

				this.state = 406;
				this.match(ECMAScriptParser.CloseBrace);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyNameAndValueList(): PropertyNameAndValueListContext {
		let _localctx: PropertyNameAndValueListContext = new PropertyNameAndValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ECMAScriptParser.RULE_propertyNameAndValueList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			this.propertyAssignment();
			this.state = 415;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 411;
					this.match(ECMAScriptParser.Comma);
					this.state = 412;
					this.propertyAssignment();
					}
					}
				}
				this.state = 417;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyAssignment(): PropertyAssignmentContext {
		let _localctx: PropertyAssignmentContext = new PropertyAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ECMAScriptParser.RULE_propertyAssignment);
		try {
			this.state = 437;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				_localctx = new PropertyExpressionAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 418;
				this.propertyName();
				this.state = 419;
				this.match(ECMAScriptParser.Colon);
				this.state = 420;
				this.singleExpression(0);
				}
				break;

			case 2:
				_localctx = new PropertyGetterContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 422;
				this.getter();
				this.state = 423;
				this.match(ECMAScriptParser.OpenParen);
				this.state = 424;
				this.match(ECMAScriptParser.CloseParen);
				this.state = 425;
				this.match(ECMAScriptParser.OpenBrace);
				this.state = 426;
				this.functionBody();
				this.state = 427;
				this.match(ECMAScriptParser.CloseBrace);
				}
				break;

			case 3:
				_localctx = new PropertySetterContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 429;
				this.setter();
				this.state = 430;
				this.match(ECMAScriptParser.OpenParen);
				this.state = 431;
				this.propertySetParameterList();
				this.state = 432;
				this.match(ECMAScriptParser.CloseParen);
				this.state = 433;
				this.match(ECMAScriptParser.OpenBrace);
				this.state = 434;
				this.functionBody();
				this.state = 435;
				this.match(ECMAScriptParser.CloseBrace);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyName(): PropertyNameContext {
		let _localctx: PropertyNameContext = new PropertyNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ECMAScriptParser.RULE_propertyName);
		try {
			this.state = 442;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ECMAScriptParser.NullLiteral:
			case ECMAScriptParser.BooleanLiteral:
			case ECMAScriptParser.Break:
			case ECMAScriptParser.Do:
			case ECMAScriptParser.Instanceof:
			case ECMAScriptParser.Typeof:
			case ECMAScriptParser.Case:
			case ECMAScriptParser.Else:
			case ECMAScriptParser.New:
			case ECMAScriptParser.Var:
			case ECMAScriptParser.Catch:
			case ECMAScriptParser.Finally:
			case ECMAScriptParser.Return:
			case ECMAScriptParser.Void:
			case ECMAScriptParser.Continue:
			case ECMAScriptParser.For:
			case ECMAScriptParser.Switch:
			case ECMAScriptParser.While:
			case ECMAScriptParser.Debugger:
			case ECMAScriptParser.Function:
			case ECMAScriptParser.This:
			case ECMAScriptParser.With:
			case ECMAScriptParser.Default:
			case ECMAScriptParser.If:
			case ECMAScriptParser.Throw:
			case ECMAScriptParser.Delete:
			case ECMAScriptParser.In:
			case ECMAScriptParser.Try:
			case ECMAScriptParser.Class:
			case ECMAScriptParser.Enum:
			case ECMAScriptParser.Extends:
			case ECMAScriptParser.Super:
			case ECMAScriptParser.Const:
			case ECMAScriptParser.Export:
			case ECMAScriptParser.Import:
			case ECMAScriptParser.Implements:
			case ECMAScriptParser.Let:
			case ECMAScriptParser.Private:
			case ECMAScriptParser.Public:
			case ECMAScriptParser.Interface:
			case ECMAScriptParser.Package:
			case ECMAScriptParser.Protected:
			case ECMAScriptParser.Static:
			case ECMAScriptParser.Yield:
			case ECMAScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 439;
				this.identifierName();
				}
				break;
			case ECMAScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 440;
				this.match(ECMAScriptParser.StringLiteral);
				}
				break;
			case ECMAScriptParser.DecimalLiteral:
			case ECMAScriptParser.HexIntegerLiteral:
			case ECMAScriptParser.OctalIntegerLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 441;
				this.numericLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertySetParameterList(): PropertySetParameterListContext {
		let _localctx: PropertySetParameterListContext = new PropertySetParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ECMAScriptParser.RULE_propertySetParameterList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.match(ECMAScriptParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ECMAScriptParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.match(ECMAScriptParser.OpenParen);
			this.state = 448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la === ECMAScriptParser.Identifier || _la === ECMAScriptParser.StringLiteral) {
				{
				this.state = 447;
				this.argumentList();
				}
			}

			this.state = 450;
			this.match(ECMAScriptParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ECMAScriptParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 452;
			this.singleExpression(0);
			this.state = 457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ECMAScriptParser.Comma) {
				{
				{
				this.state = 453;
				this.match(ECMAScriptParser.Comma);
				this.state = 454;
				this.singleExpression(0);
				}
				}
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionSequence(): ExpressionSequenceContext {
		let _localctx: ExpressionSequenceContext = new ExpressionSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ECMAScriptParser.RULE_expressionSequence);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.singleExpression(0);
			this.state = 465;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 461;
					this.match(ECMAScriptParser.Comma);
					this.state = 462;
					this.singleExpression(0);
					}
					}
				}
				this.state = 467;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public singleExpression(): SingleExpressionContext;
	public singleExpression(_p: number): SingleExpressionContext;
	// @RuleVersion(0)
	public singleExpression(_p?: number): SingleExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, _parentState);
		let _prevctx: SingleExpressionContext = _localctx;
		let _startState: number = 86;
		this.enterRecursionRule(_localctx, 86, ECMAScriptParser.RULE_singleExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ECMAScriptParser.Function:
				{
				_localctx = new FunctionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 469;
				this.match(ECMAScriptParser.Function);
				this.state = 471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ECMAScriptParser.Identifier) {
					{
					this.state = 470;
					this.match(ECMAScriptParser.Identifier);
					}
				}

				this.state = 473;
				this.match(ECMAScriptParser.OpenParen);
				this.state = 475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ECMAScriptParser.Identifier) {
					{
					this.state = 474;
					this.formalParameterList();
					}
				}

				this.state = 477;
				this.match(ECMAScriptParser.CloseParen);
				this.state = 478;
				this.match(ECMAScriptParser.OpenBrace);
				this.state = 479;
				this.functionBody();
				this.state = 480;
				this.match(ECMAScriptParser.CloseBrace);
				}
				break;
			case ECMAScriptParser.New:
				{
				_localctx = new NewExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 482;
				this.match(ECMAScriptParser.New);
				this.state = 483;
				this.singleExpression(0);
				this.state = 485;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 484;
					this.arguments();
					}
					break;
				}
				}
				break;
			case ECMAScriptParser.Delete:
				{
				_localctx = new DeleteExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 487;
				this.match(ECMAScriptParser.Delete);
				this.state = 488;
				this.singleExpression(30);
				}
				break;
			case ECMAScriptParser.Void:
				{
				_localctx = new VoidExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 489;
				this.match(ECMAScriptParser.Void);
				this.state = 490;
				this.singleExpression(29);
				}
				break;
			case ECMAScriptParser.Typeof:
				{
				_localctx = new TypeofExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 491;
				this.match(ECMAScriptParser.Typeof);
				this.state = 492;
				this.singleExpression(28);
				}
				break;
			case ECMAScriptParser.PlusPlus:
				{
				_localctx = new PreIncrementExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 493;
				this.match(ECMAScriptParser.PlusPlus);
				this.state = 494;
				this.singleExpression(27);
				}
				break;
			case ECMAScriptParser.MinusMinus:
				{
				_localctx = new PreDecreaseExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 495;
				this.match(ECMAScriptParser.MinusMinus);
				this.state = 496;
				this.singleExpression(26);
				}
				break;
			case ECMAScriptParser.Plus:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 497;
				this.match(ECMAScriptParser.Plus);
				this.state = 498;
				this.singleExpression(25);
				}
				break;
			case ECMAScriptParser.Minus:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 499;
				this.match(ECMAScriptParser.Minus);
				this.state = 500;
				this.singleExpression(24);
				}
				break;
			case ECMAScriptParser.BitNot:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 501;
				this.match(ECMAScriptParser.BitNot);
				this.state = 502;
				this.singleExpression(23);
				}
				break;
			case ECMAScriptParser.Not:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 503;
				this.match(ECMAScriptParser.Not);
				this.state = 504;
				this.singleExpression(22);
				}
				break;
			case ECMAScriptParser.This:
				{
				_localctx = new ThisExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 505;
				this.match(ECMAScriptParser.This);
				}
				break;
			case ECMAScriptParser.Identifier:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 506;
				this.match(ECMAScriptParser.Identifier);
				}
				break;
			case ECMAScriptParser.RegularExpressionLiteral:
			case ECMAScriptParser.NullLiteral:
			case ECMAScriptParser.BooleanLiteral:
			case ECMAScriptParser.DecimalLiteral:
			case ECMAScriptParser.HexIntegerLiteral:
			case ECMAScriptParser.OctalIntegerLiteral:
			case ECMAScriptParser.StringLiteral:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 507;
				this.literal();
				}
				break;
			case ECMAScriptParser.OpenBracket:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 508;
				this.arrayLiteral();
				}
				break;
			case ECMAScriptParser.OpenBrace:
				{
				_localctx = new ObjectLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 509;
				this.objectLiteral();
				}
				break;
			case ECMAScriptParser.OpenParen:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 510;
				this.match(ECMAScriptParser.OpenParen);
				this.state = 511;
				this.expressionSequence();
				this.state = 512;
				this.match(ECMAScriptParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 583;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 581;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 516;
						if (!(this.precpred(this._ctx, 21))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 21)");
						}
						this.state = 517;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.Multiply) | (1 << ECMAScriptParser.Divide) | (1 << ECMAScriptParser.Modulus))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 518;
						this.singleExpression(22);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 519;
						if (!(this.precpred(this._ctx, 20))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 20)");
						}
						this.state = 520;
						_la = this._input.LA(1);
						if (!(_la === ECMAScriptParser.Plus || _la === ECMAScriptParser.Minus)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 521;
						this.singleExpression(21);
						}
						break;

					case 3:
						{
						_localctx = new BitShiftExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 522;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 523;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.RightShiftArithmetic) | (1 << ECMAScriptParser.LeftShiftArithmetic) | (1 << ECMAScriptParser.RightShiftLogical))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 524;
						this.singleExpression(20);
						}
						break;

					case 4:
						{
						_localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 525;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 526;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.LessThan) | (1 << ECMAScriptParser.MoreThan) | (1 << ECMAScriptParser.LessThanEquals) | (1 << ECMAScriptParser.GreaterThanEquals))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 527;
						this.singleExpression(19);
						}
						break;

					case 5:
						{
						_localctx = new InstanceofExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 528;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 529;
						this.match(ECMAScriptParser.Instanceof);
						this.state = 530;
						this.singleExpression(18);
						}
						break;

					case 6:
						{
						_localctx = new InExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 531;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 532;
						this.match(ECMAScriptParser.In);
						this.state = 533;
						this.singleExpression(17);
						}
						break;

					case 7:
						{
						_localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 534;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 535;
						_la = this._input.LA(1);
						if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (ECMAScriptParser.Equals - 31)) | (1 << (ECMAScriptParser.NotEquals - 31)) | (1 << (ECMAScriptParser.IdentityEquals - 31)) | (1 << (ECMAScriptParser.IdentityNotEquals - 31)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 536;
						this.singleExpression(16);
						}
						break;

					case 8:
						{
						_localctx = new BitAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 537;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 538;
						this.match(ECMAScriptParser.BitAnd);
						this.state = 539;
						this.singleExpression(15);
						}
						break;

					case 9:
						{
						_localctx = new BitXOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 540;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 541;
						this.match(ECMAScriptParser.BitXOr);
						this.state = 542;
						this.singleExpression(14);
						}
						break;

					case 10:
						{
						_localctx = new BitOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 543;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 544;
						this.match(ECMAScriptParser.BitOr);
						this.state = 545;
						this.singleExpression(13);
						}
						break;

					case 11:
						{
						_localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 546;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 547;
						this.match(ECMAScriptParser.And);
						this.state = 548;
						this.singleExpression(12);
						}
						break;

					case 12:
						{
						_localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 549;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 550;
						this.match(ECMAScriptParser.Or);
						this.state = 551;
						this.singleExpression(11);
						}
						break;

					case 13:
						{
						_localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 552;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 553;
						this.match(ECMAScriptParser.QuestionMark);
						this.state = 554;
						this.singleExpression(0);
						this.state = 555;
						this.match(ECMAScriptParser.Colon);
						this.state = 556;
						this.singleExpression(10);
						}
						break;

					case 14:
						{
						_localctx = new MemberIndexExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 558;
						if (!(this.precpred(this._ctx, 36))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 36)");
						}
						this.state = 559;
						this.match(ECMAScriptParser.OpenBracket);
						this.state = 560;
						this.expressionSequence();
						this.state = 561;
						this.match(ECMAScriptParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 563;
						if (!(this.precpred(this._ctx, 35))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 35)");
						}
						this.state = 564;
						this.match(ECMAScriptParser.Dot);
						this.state = 565;
						this.identifierName();
						}
						break;

					case 16:
						{
						_localctx = new ArgumentsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 566;
						if (!(this.precpred(this._ctx, 34))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 34)");
						}
						this.state = 567;
						this.arguments();
						}
						break;

					case 17:
						{
						_localctx = new PostIncrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 568;
						if (!(this.precpred(this._ctx, 32))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 32)");
						}
						this.state = 569;
						if (!(!this.here(ECMAScriptParser.LineTerminator))) {
							throw new FailedPredicateException(this, "!this.here(ECMAScriptParser.LineTerminator)");
						}
						this.state = 570;
						this.match(ECMAScriptParser.PlusPlus);
						}
						break;

					case 18:
						{
						_localctx = new PostDecreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 571;
						if (!(this.precpred(this._ctx, 31))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 31)");
						}
						this.state = 572;
						if (!(!this.here(ECMAScriptParser.LineTerminator))) {
							throw new FailedPredicateException(this, "!this.here(ECMAScriptParser.LineTerminator)");
						}
						this.state = 573;
						this.match(ECMAScriptParser.MinusMinus);
						}
						break;

					case 19:
						{
						_localctx = new AssignmentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 574;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 575;
						this.match(ECMAScriptParser.Assign);
						this.state = 576;
						this.expressionSequence();
						}
						break;

					case 20:
						{
						_localctx = new AssignmentOperatorExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
						this.state = 577;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 578;
						this.assignmentOperator();
						this.state = 579;
						this.expressionSequence();
						}
						break;
					}
					}
				}
				this.state = 585;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ECMAScriptParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 586;
			_la = this._input.LA(1);
			if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ECMAScriptParser.MultiplyAssign - 40)) | (1 << (ECMAScriptParser.DivideAssign - 40)) | (1 << (ECMAScriptParser.ModulusAssign - 40)) | (1 << (ECMAScriptParser.PlusAssign - 40)) | (1 << (ECMAScriptParser.MinusAssign - 40)) | (1 << (ECMAScriptParser.LeftShiftArithmeticAssign - 40)) | (1 << (ECMAScriptParser.RightShiftArithmeticAssign - 40)) | (1 << (ECMAScriptParser.RightShiftLogicalAssign - 40)) | (1 << (ECMAScriptParser.BitAndAssign - 40)) | (1 << (ECMAScriptParser.BitXorAssign - 40)) | (1 << (ECMAScriptParser.BitOrAssign - 40)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ECMAScriptParser.RULE_literal);
		let _la: number;
		try {
			this.state = 590;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ECMAScriptParser.RegularExpressionLiteral:
			case ECMAScriptParser.NullLiteral:
			case ECMAScriptParser.BooleanLiteral:
			case ECMAScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 588;
				_la = this._input.LA(1);
				if (!(_la === ECMAScriptParser.RegularExpressionLiteral || _la === ECMAScriptParser.NullLiteral || _la === ECMAScriptParser.BooleanLiteral || _la === ECMAScriptParser.StringLiteral)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case ECMAScriptParser.DecimalLiteral:
			case ECMAScriptParser.HexIntegerLiteral:
			case ECMAScriptParser.OctalIntegerLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 589;
				this.numericLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let _localctx: NumericLiteralContext = new NumericLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, ECMAScriptParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			_la = this._input.LA(1);
			if (!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (ECMAScriptParser.DecimalLiteral - 53)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 53)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 53)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierName(): IdentifierNameContext {
		let _localctx: IdentifierNameContext = new IdentifierNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, ECMAScriptParser.RULE_identifierName);
		try {
			this.state = 596;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ECMAScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 594;
				this.match(ECMAScriptParser.Identifier);
				}
				break;
			case ECMAScriptParser.NullLiteral:
			case ECMAScriptParser.BooleanLiteral:
			case ECMAScriptParser.Break:
			case ECMAScriptParser.Do:
			case ECMAScriptParser.Instanceof:
			case ECMAScriptParser.Typeof:
			case ECMAScriptParser.Case:
			case ECMAScriptParser.Else:
			case ECMAScriptParser.New:
			case ECMAScriptParser.Var:
			case ECMAScriptParser.Catch:
			case ECMAScriptParser.Finally:
			case ECMAScriptParser.Return:
			case ECMAScriptParser.Void:
			case ECMAScriptParser.Continue:
			case ECMAScriptParser.For:
			case ECMAScriptParser.Switch:
			case ECMAScriptParser.While:
			case ECMAScriptParser.Debugger:
			case ECMAScriptParser.Function:
			case ECMAScriptParser.This:
			case ECMAScriptParser.With:
			case ECMAScriptParser.Default:
			case ECMAScriptParser.If:
			case ECMAScriptParser.Throw:
			case ECMAScriptParser.Delete:
			case ECMAScriptParser.In:
			case ECMAScriptParser.Try:
			case ECMAScriptParser.Class:
			case ECMAScriptParser.Enum:
			case ECMAScriptParser.Extends:
			case ECMAScriptParser.Super:
			case ECMAScriptParser.Const:
			case ECMAScriptParser.Export:
			case ECMAScriptParser.Import:
			case ECMAScriptParser.Implements:
			case ECMAScriptParser.Let:
			case ECMAScriptParser.Private:
			case ECMAScriptParser.Public:
			case ECMAScriptParser.Interface:
			case ECMAScriptParser.Package:
			case ECMAScriptParser.Protected:
			case ECMAScriptParser.Static:
			case ECMAScriptParser.Yield:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 595;
				this.reservedWord();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedWord(): ReservedWordContext {
		let _localctx: ReservedWordContext = new ReservedWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, ECMAScriptParser.RULE_reservedWord);
		let _la: number;
		try {
			this.state = 601;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ECMAScriptParser.Break:
			case ECMAScriptParser.Do:
			case ECMAScriptParser.Instanceof:
			case ECMAScriptParser.Typeof:
			case ECMAScriptParser.Case:
			case ECMAScriptParser.Else:
			case ECMAScriptParser.New:
			case ECMAScriptParser.Var:
			case ECMAScriptParser.Catch:
			case ECMAScriptParser.Finally:
			case ECMAScriptParser.Return:
			case ECMAScriptParser.Void:
			case ECMAScriptParser.Continue:
			case ECMAScriptParser.For:
			case ECMAScriptParser.Switch:
			case ECMAScriptParser.While:
			case ECMAScriptParser.Debugger:
			case ECMAScriptParser.Function:
			case ECMAScriptParser.This:
			case ECMAScriptParser.With:
			case ECMAScriptParser.Default:
			case ECMAScriptParser.If:
			case ECMAScriptParser.Throw:
			case ECMAScriptParser.Delete:
			case ECMAScriptParser.In:
			case ECMAScriptParser.Try:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 598;
				this.keyword();
				}
				break;
			case ECMAScriptParser.Class:
			case ECMAScriptParser.Enum:
			case ECMAScriptParser.Extends:
			case ECMAScriptParser.Super:
			case ECMAScriptParser.Const:
			case ECMAScriptParser.Export:
			case ECMAScriptParser.Import:
			case ECMAScriptParser.Implements:
			case ECMAScriptParser.Let:
			case ECMAScriptParser.Private:
			case ECMAScriptParser.Public:
			case ECMAScriptParser.Interface:
			case ECMAScriptParser.Package:
			case ECMAScriptParser.Protected:
			case ECMAScriptParser.Static:
			case ECMAScriptParser.Yield:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 599;
				this.futureReservedWord();
				}
				break;
			case ECMAScriptParser.NullLiteral:
			case ECMAScriptParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 600;
				_la = this._input.LA(1);
				if (!(_la === ECMAScriptParser.NullLiteral || _la === ECMAScriptParser.BooleanLiteral)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, ECMAScriptParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 603;
			_la = this._input.LA(1);
			if (!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (ECMAScriptParser.Break - 56)) | (1 << (ECMAScriptParser.Do - 56)) | (1 << (ECMAScriptParser.Instanceof - 56)) | (1 << (ECMAScriptParser.Typeof - 56)) | (1 << (ECMAScriptParser.Case - 56)) | (1 << (ECMAScriptParser.Else - 56)) | (1 << (ECMAScriptParser.New - 56)) | (1 << (ECMAScriptParser.Var - 56)) | (1 << (ECMAScriptParser.Catch - 56)) | (1 << (ECMAScriptParser.Finally - 56)) | (1 << (ECMAScriptParser.Return - 56)) | (1 << (ECMAScriptParser.Void - 56)) | (1 << (ECMAScriptParser.Continue - 56)) | (1 << (ECMAScriptParser.For - 56)) | (1 << (ECMAScriptParser.Switch - 56)) | (1 << (ECMAScriptParser.While - 56)) | (1 << (ECMAScriptParser.Debugger - 56)) | (1 << (ECMAScriptParser.Function - 56)) | (1 << (ECMAScriptParser.This - 56)) | (1 << (ECMAScriptParser.With - 56)) | (1 << (ECMAScriptParser.Default - 56)) | (1 << (ECMAScriptParser.If - 56)) | (1 << (ECMAScriptParser.Throw - 56)) | (1 << (ECMAScriptParser.Delete - 56)) | (1 << (ECMAScriptParser.In - 56)) | (1 << (ECMAScriptParser.Try - 56)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public futureReservedWord(): FutureReservedWordContext {
		let _localctx: FutureReservedWordContext = new FutureReservedWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, ECMAScriptParser.RULE_futureReservedWord);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 605;
			_la = this._input.LA(1);
			if (!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (ECMAScriptParser.Class - 82)) | (1 << (ECMAScriptParser.Enum - 82)) | (1 << (ECMAScriptParser.Extends - 82)) | (1 << (ECMAScriptParser.Super - 82)) | (1 << (ECMAScriptParser.Const - 82)) | (1 << (ECMAScriptParser.Export - 82)) | (1 << (ECMAScriptParser.Import - 82)) | (1 << (ECMAScriptParser.Implements - 82)) | (1 << (ECMAScriptParser.Let - 82)) | (1 << (ECMAScriptParser.Private - 82)) | (1 << (ECMAScriptParser.Public - 82)) | (1 << (ECMAScriptParser.Interface - 82)) | (1 << (ECMAScriptParser.Package - 82)) | (1 << (ECMAScriptParser.Protected - 82)) | (1 << (ECMAScriptParser.Static - 82)) | (1 << (ECMAScriptParser.Yield - 82)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getter(): GetterContext {
		let _localctx: GetterContext = new GetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, ECMAScriptParser.RULE_getter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			if (!(this._input.LT(1).text.startsWith("get"))) {
				throw new FailedPredicateException(this, "this._input.LT(1).text.startsWith(\"get\")");
			}
			this.state = 608;
			this.match(ECMAScriptParser.Identifier);
			this.state = 609;
			this.propertyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setter(): SetterContext {
		let _localctx: SetterContext = new SetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, ECMAScriptParser.RULE_setter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 611;
			if (!(this._input.LT(1).text.startsWith("set"))) {
				throw new FailedPredicateException(this, "this._input.LT(1).text.startsWith(\"set\")");
			}
			this.state = 612;
			this.match(ECMAScriptParser.Identifier);
			this.state = 613;
			this.propertyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eos(): EosContext {
		let _localctx: EosContext = new EosContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, ECMAScriptParser.RULE_eos);
		try {
			this.state = 619;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 615;
				this.match(ECMAScriptParser.SemiColon);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 616;
				this.match(ECMAScriptParser.EOF);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 617;
				if (!(this.lineTerminatorAhead())) {
					throw new FailedPredicateException(this, "this.lineTerminatorAhead()");
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 618;
				if (!(this._input.LT(1).type == ECMAScriptParser.CloseBrace)) {
					throw new FailedPredicateException(this, "this._input.LT(1).type == ECMAScriptParser.CloseBrace");
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eof(): EofContext {
		let _localctx: EofContext = new EofContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, ECMAScriptParser.RULE_eof);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			this.match(ECMAScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.sourceElement_sempred(_localctx as SourceElementContext, predIndex);

		case 3:
			return this.statement_sempred(_localctx as StatementContext, predIndex);

		case 14:
			return this.continueStatement_sempred(_localctx as ContinueStatementContext, predIndex);

		case 15:
			return this.breakStatement_sempred(_localctx as BreakStatementContext, predIndex);

		case 16:
			return this.returnStatement_sempred(_localctx as ReturnStatementContext, predIndex);

		case 24:
			return this.throwStatement_sempred(_localctx as ThrowStatementContext, predIndex);

		case 43:
			return this.singleExpression_sempred(_localctx as SingleExpressionContext, predIndex);

		case 51:
			return this.getter_sempred(_localctx as GetterContext, predIndex);

		case 52:
			return this.setter_sempred(_localctx as SetterContext, predIndex);

		case 53:
			return this.eos_sempred(_localctx as EosContext, predIndex);
		}
		return true;
	}
	private sourceElement_sempred(_localctx: SourceElementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this._input.LA(1).type != ECMAScriptParser.Function;
		}
		return true;
	}
	private statement_sempred(_localctx: StatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this._input.LA(1).type != ECMAScriptParser.OpenBrace;
		}
		return true;
	}
	private continueStatement_sempred(_localctx: ContinueStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return !this.here(ECMAScriptParser.LineTerminator);
		}
		return true;
	}
	private breakStatement_sempred(_localctx: BreakStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return !this.here(ECMAScriptParser.LineTerminator);
		}
		return true;
	}
	private returnStatement_sempred(_localctx: ReturnStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return !this.here(ECMAScriptParser.LineTerminator);
		}
		return true;
	}
	private throwStatement_sempred(_localctx: ThrowStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return !this.here(ECMAScriptParser.LineTerminator);
		}
		return true;
	}
	private singleExpression_sempred(_localctx: SingleExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 21);

		case 7:
			return this.precpred(this._ctx, 20);

		case 8:
			return this.precpred(this._ctx, 19);

		case 9:
			return this.precpred(this._ctx, 18);

		case 10:
			return this.precpred(this._ctx, 17);

		case 11:
			return this.precpred(this._ctx, 16);

		case 12:
			return this.precpred(this._ctx, 15);

		case 13:
			return this.precpred(this._ctx, 14);

		case 14:
			return this.precpred(this._ctx, 13);

		case 15:
			return this.precpred(this._ctx, 12);

		case 16:
			return this.precpred(this._ctx, 11);

		case 17:
			return this.precpred(this._ctx, 10);

		case 18:
			return this.precpred(this._ctx, 9);

		case 19:
			return this.precpred(this._ctx, 36);

		case 20:
			return this.precpred(this._ctx, 35);

		case 21:
			return this.precpred(this._ctx, 34);

		case 22:
			return this.precpred(this._ctx, 32);

		case 23:
			return !this.here(ECMAScriptParser.LineTerminator);

		case 24:
			return this.precpred(this._ctx, 31);

		case 25:
			return !this.here(ECMAScriptParser.LineTerminator);

		case 26:
			return this.precpred(this._ctx, 8);

		case 27:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}
	private getter_sempred(_localctx: GetterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 28:
			return this._input.LT(1).text.startsWith("get");
		}
		return true;
	}
	private setter_sempred(_localctx: SetterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 29:
			return this._input.LT(1).text.startsWith("set");
		}
		return true;
	}
	private eos_sempred(_localctx: EosContext, predIndex: number): boolean {
		switch (predIndex) {
		case 30:
			return this.lineTerminatorAhead();

		case 31:
			return this._input.LT(1).type == ECMAScriptParser.CloseBrace;
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03i\u0272\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x03\x02\x05\x02r\n\x02\x03\x02\x03" +
		"\x02\x03\x03\x06\x03w\n\x03\r\x03\x0E\x03x\x03\x04\x03\x04\x03\x04\x05" +
		"\x04~\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05\x90\n\x05\x03\x06\x03\x06\x05\x06\x94\n\x06\x03\x06\x03\x06\x03\x07" +
		"\x06\x07\x99\n\x07\r\x07\x0E\x07\x9A\x03\b\x03\b\x03\b\x03\b\x03\t\x03" +
		"\t\x03\t\x07\t\xA4\n\t\f\t\x0E\t\xA7\v\t\x03\n\x03\n\x05\n\xAB\n\n\x03" +
		"\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xBB\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xCE\n\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\xD2\n\x0F\x03\x0F\x03\x0F\x05\x0F\xD6\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xE0\n\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\xE4\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xFA\n\x0F\x03\x10" +
		"\x03\x10\x03\x10\x05\x10\xFF\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\u0106\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x05\x12" +
		"\u010D\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x05" +
		"\x15\u011F\n\x15\x03\x15\x03\x15\x05\x15\u0123\n\x15\x05\x15\u0125\n\x15" +
		"\x03\x15\x03\x15\x03\x16\x06\x16\u012A\n\x16\r\x16\x0E\x16\u012B\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x05\x17\u0132\n\x17\x03\x18\x03\x18\x03\x18\x05" +
		"\x18\u0137\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u014F\n\x1B\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0161\n\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x07 \u016B\n " +
		"\f \x0E \u016E\v \x03!\x05!\u0171\n!\x03\"\x03\"\x05\"\u0175\n\"\x03\"" +
		"\x05\"\u0178\n\"\x03\"\x05\"\u017B\n\"\x03\"\x03\"\x03#\x05#\u0180\n#" +
		"\x03#\x03#\x03#\x05#\u0185\n#\x03#\x07#\u0188\n#\f#\x0E#\u018B\v#\x03" +
		"$\x06$\u018E\n$\r$\x0E$\u018F\x03%\x03%\x03%\x03%\x03%\x05%\u0197\n%\x03" +
		"%\x03%\x05%\u019B\n%\x03&\x03&\x03&\x07&\u01A0\n&\f&\x0E&\u01A3\v&\x03" +
		"\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u01B8\n\'\x03(\x03(\x03(" +
		"\x05(\u01BD\n(\x03)\x03)\x03*\x03*\x05*\u01C3\n*\x03*\x03*\x03+\x03+\x03" +
		"+\x07+\u01CA\n+\f+\x0E+\u01CD\v+\x03,\x03,\x03,\x07,\u01D2\n,\f,\x0E," +
		"\u01D5\v,\x03-\x03-\x03-\x05-\u01DA\n-\x03-\x03-\x05-\u01DE\n-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u01E8\n-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u0205\n-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x07-\u0248\n-\f-\x0E-\u024B\v-\x03.\x03" +
		".\x03/\x03/\x05/\u0251\n/\x030\x030\x031\x031\x051\u0257\n1\x032\x032" +
		"\x032\x052\u025C\n2\x033\x033\x034\x034\x035\x035\x035\x035\x036\x036" +
		"\x036\x036\x037\x037\x037\x037\x057\u026E\n7\x038\x038\x038\x02\x02\x03" +
		"X9\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02\x02\r\x03\x02\x17\x19\x03\x02\x13" +
		"\x14\x03\x02\x1A\x1C\x03\x02\x1D \x03\x02!$\x03\x02*4\x05\x02\x03\x03" +
		"56ee\x03\x0279\x03\x0256\x03\x02:S\x03\x02Tc\x02\u02A7\x02q\x03\x02\x02" +
		"\x02\x04v\x03\x02\x02\x02\x06}\x03\x02\x02\x02\b\x8F\x03\x02\x02\x02\n" +
		"\x91\x03\x02\x02\x02\f\x98\x03\x02\x02\x02\x0E\x9C\x03\x02\x02\x02\x10" +
		"\xA0\x03\x02\x02\x02\x12\xA8\x03\x02\x02\x02\x14\xAC\x03\x02\x02\x02\x16" +
		"\xAF\x03\x02\x02\x02\x18\xB1\x03\x02\x02\x02\x1A\xB3\x03\x02\x02\x02\x1C" +
		"\xF9\x03\x02\x02\x02\x1E\xFB\x03\x02\x02\x02 \u0102\x03\x02\x02\x02\"" +
		"\u0109\x03\x02\x02\x02$\u0110\x03\x02\x02\x02&\u0116\x03\x02\x02\x02(" +
		"\u011C\x03\x02\x02\x02*\u0129\x03\x02\x02\x02,\u012D\x03\x02\x02\x02." +
		"\u0133\x03\x02\x02\x020\u0138\x03\x02\x02\x022\u013C\x03\x02\x02\x024" +
		"\u014E\x03\x02\x02\x026\u0150\x03\x02\x02\x028\u0156\x03\x02\x02\x02:" +
		"\u0159\x03\x02\x02\x02<\u015C\x03\x02\x02\x02>\u0167\x03\x02\x02\x02@" +
		"\u0170\x03\x02\x02\x02B\u0172\x03\x02\x02\x02D\u017F\x03\x02\x02\x02F" +
		"\u018D\x03\x02\x02\x02H\u019A\x03\x02\x02\x02J\u019C\x03\x02\x02\x02L" +
		"\u01B7\x03\x02\x02\x02N\u01BC\x03\x02\x02\x02P\u01BE\x03\x02\x02\x02R" +
		"\u01C0\x03\x02\x02\x02T\u01C6\x03\x02\x02\x02V\u01CE\x03\x02\x02\x02X" +
		"\u0204\x03\x02\x02\x02Z\u024C\x03\x02\x02\x02\\\u0250\x03\x02\x02\x02" +
		"^\u0252\x03\x02\x02\x02`\u0256\x03\x02\x02\x02b\u025B\x03\x02\x02\x02" +
		"d\u025D\x03\x02\x02\x02f\u025F\x03\x02\x02\x02h\u0261\x03\x02\x02\x02" +
		"j\u0265\x03\x02\x02\x02l\u026D\x03\x02\x02\x02n\u026F\x03\x02\x02\x02" +
		"pr\x05\x04\x03\x02qp\x03\x02\x02\x02qr\x03\x02\x02\x02rs\x03\x02\x02\x02" +
		"st\x07\x02\x02\x03t\x03\x03\x02\x02\x02uw\x05\x06\x04\x02vu\x03\x02\x02" +
		"\x02wx\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02\x02y\x05\x03\x02" +
		"\x02\x02z{\x06\x04\x02\x02{~\x05\b\x05\x02|~\x05<\x1F\x02}z\x03\x02\x02" +
		"\x02}|\x03\x02\x02\x02~\x07\x03\x02\x02\x02\x7F\x90\x05\n\x06\x02\x80" +
		"\x90\x05\x0E\b\x02\x81\x90\x05\x16\f\x02\x82\x83\x06\x05\x03\x02\x83\x90" +
		"\x05\x18\r\x02\x84\x90\x05\x1A\x0E\x02\x85\x90\x05\x1C\x0F\x02\x86\x90" +
		"\x05\x1E\x10\x02\x87\x90\x05 \x11\x02\x88\x90\x05\"\x12\x02\x89\x90\x05" +
		"$\x13\x02\x8A\x90\x050\x19\x02\x8B\x90\x05&\x14\x02\x8C\x90\x052\x1A\x02" +
		"\x8D\x90\x054\x1B\x02\x8E\x90\x05:\x1E\x02\x8F\x7F\x03\x02\x02\x02\x8F" +
		"\x80\x03\x02\x02\x02\x8F\x81\x03\x02\x02\x02\x8F\x82\x03\x02\x02\x02\x8F" +
		"\x84\x03\x02\x02\x02\x8F\x85\x03\x02\x02\x02\x8F\x86\x03\x02\x02\x02\x8F" +
		"\x87\x03\x02\x02\x02\x8F\x88\x03\x02\x02\x02\x8F\x89\x03\x02\x02\x02\x8F" +
		"\x8A\x03\x02\x02\x02\x8F\x8B\x03\x02\x02\x02\x8F\x8C\x03\x02\x02\x02\x8F" +
		"\x8D\x03\x02\x02\x02\x8F\x8E\x03\x02\x02\x02\x90\t\x03\x02\x02\x02\x91" +
		"\x93\x07\t\x02\x02\x92\x94\x05\f\x07\x02\x93\x92\x03\x02\x02\x02\x93\x94" +
		"\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\x07\n\x02\x02\x96\v\x03" +
		"\x02\x02\x02\x97\x99\x05\b\x05\x02\x98\x97\x03\x02\x02\x02\x99\x9A\x03" +
		"\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\r\x03" +
		"\x02\x02\x02\x9C\x9D\x07A\x02\x02\x9D\x9E\x05\x10\t\x02\x9E\x9F\x05l7" +
		"\x02\x9F\x0F\x03\x02\x02\x02\xA0\xA5\x05\x12\n\x02\xA1\xA2\x07\f\x02\x02" +
		"\xA2\xA4\x05\x12\n\x02\xA3\xA1\x03\x02\x02\x02\xA4\xA7\x03\x02\x02\x02" +
		"\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\x11\x03\x02\x02\x02" +
		"\xA7\xA5\x03\x02\x02\x02\xA8\xAA\x07d\x02\x02\xA9\xAB\x05\x14\v\x02\xAA" +
		"\xA9\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\x13\x03\x02\x02\x02\xAC" +
		"\xAD\x07\r\x02\x02\xAD\xAE\x05X-\x02\xAE\x15\x03\x02\x02\x02\xAF\xB0\x07" +
		"\v\x02\x02\xB0\x17\x03\x02\x02\x02\xB1\xB2\x05V,\x02\xB2\x19\x03\x02\x02" +
		"\x02\xB3\xB4\x07O\x02\x02\xB4\xB5\x07\x07\x02\x02\xB5\xB6\x05V,\x02\xB6" +
		"\xB7\x07\b\x02\x02\xB7\xBA\x05\b\x05\x02\xB8\xB9\x07?\x02\x02\xB9\xBB" +
		"\x05\b\x05\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\x1B" +
		"\x03\x02\x02\x02\xBC\xBD\x07;\x02\x02\xBD\xBE\x05\b\x05\x02\xBE\xBF\x07" +
		"I\x02\x02\xBF\xC0\x07\x07\x02\x02\xC0\xC1\x05V,\x02\xC1\xC2\x07\b\x02" +
		"\x02\xC2\xC3\x05l7\x02\xC3\xFA\x03\x02\x02\x02\xC4\xC5\x07I\x02\x02\xC5" +
		"\xC6\x07\x07\x02\x02\xC6\xC7\x05V,\x02\xC7\xC8\x07\b\x02\x02\xC8\xC9\x05" +
		"\b\x05\x02\xC9\xFA\x03\x02\x02\x02\xCA\xCB\x07G\x02\x02\xCB\xCD\x07\x07" +
		"\x02\x02\xCC\xCE\x05V,\x02\xCD\xCC\x03\x02\x02\x02\xCD\xCE\x03\x02\x02" +
		"\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD1\x07\v\x02\x02\xD0\xD2\x05V,\x02\xD1" +
		"\xD0\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3" +
		"\xD5\x07\v\x02\x02\xD4\xD6\x05V,\x02\xD5\xD4\x03\x02\x02\x02\xD5\xD6\x03" +
		"\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x07\b\x02\x02\xD8\xFA\x05" +
		"\b\x05\x02\xD9\xDA\x07G\x02\x02\xDA\xDB\x07\x07\x02\x02\xDB\xDC\x07A\x02" +
		"\x02\xDC\xDD\x05\x10\t\x02\xDD\xDF\x07\v\x02\x02\xDE\xE0\x05V,\x02\xDF" +
		"\xDE\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1" +
		"\xE3\x07\v\x02\x02\xE2\xE4\x05V,\x02\xE3\xE2\x03\x02\x02\x02\xE3\xE4\x03" +
		"\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x07\b\x02\x02\xE6\xE7\x05" +
		"\b\x05\x02\xE7\xFA\x03\x02\x02\x02\xE8\xE9\x07G\x02\x02\xE9\xEA\x07\x07" +
		"\x02\x02\xEA\xEB\x05X-\x02\xEB\xEC\x07R\x02\x02\xEC\xED\x05V,\x02\xED" +
		"\xEE\x07\b\x02\x02\xEE\xEF\x05\b\x05\x02\xEF\xFA\x03\x02\x02\x02\xF0\xF1" +
		"\x07G\x02\x02\xF1\xF2\x07\x07\x02\x02\xF2\xF3\x07A\x02\x02\xF3\xF4\x05" +
		"\x12\n\x02\xF4\xF5\x07R\x02\x02\xF5\xF6\x05V,\x02\xF6\xF7\x07\b\x02\x02" +
		"\xF7\xF8\x05\b\x05\x02\xF8\xFA\x03\x02\x02\x02\xF9\xBC\x03\x02\x02\x02" +
		"\xF9\xC4\x03\x02\x02\x02\xF9\xCA\x03\x02\x02\x02\xF9\xD9\x03\x02\x02\x02" +
		"\xF9\xE8\x03\x02\x02\x02\xF9\xF0\x03\x02\x02\x02\xFA\x1D\x03\x02\x02\x02" +
		"\xFB\xFE\x07F\x02\x02\xFC\xFD\x06\x10\x04\x02\xFD\xFF\x07d\x02\x02\xFE" +
		"\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02" +
		"\u0100\u0101\x05l7\x02\u0101\x1F\x03\x02\x02\x02\u0102\u0105\x07:\x02" +
		"\x02\u0103\u0104\x06\x11\x05\x02\u0104\u0106\x07d\x02\x02\u0105\u0103" +
		"\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02" +
		"\u0107\u0108\x05l7\x02\u0108!\x03\x02\x02\x02\u0109\u010C\x07D\x02\x02" +
		"\u010A\u010B\x06\x12\x06\x02\u010B\u010D\x05V,\x02\u010C\u010A\x03\x02" +
		"\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E" +
		"\u010F\x05l7\x02\u010F#\x03\x02\x02\x02\u0110\u0111\x07M\x02\x02\u0111" +
		"\u0112\x07\x07\x02\x02\u0112\u0113\x05V,\x02\u0113\u0114\x07\b\x02\x02" +
		"\u0114\u0115\x05\b\x05\x02\u0115%\x03\x02\x02\x02\u0116\u0117\x07H\x02" +
		"\x02\u0117\u0118\x07\x07\x02\x02\u0118\u0119\x05V,\x02\u0119\u011A\x07" +
		"\b\x02\x02\u011A\u011B\x05(\x15\x02\u011B\'\x03\x02\x02\x02\u011C\u011E" +
		"\x07\t\x02\x02\u011D\u011F\x05*\x16\x02\u011E\u011D\x03\x02\x02\x02\u011E" +
		"\u011F\x03\x02\x02\x02\u011F\u0124\x03\x02\x02\x02\u0120\u0122\x05.\x18" +
		"\x02\u0121\u0123\x05*\x16\x02\u0122\u0121\x03\x02\x02\x02\u0122\u0123" +
		"\x03\x02\x02\x02\u0123\u0125\x03\x02\x02\x02\u0124\u0120\x03\x02\x02\x02" +
		"\u0124\u0125\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0127\x07" +
		"\n\x02\x02\u0127)\x03\x02\x02\x02\u0128\u012A\x05,\x17\x02\u0129\u0128" +
		"\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02" +
		"\u012B\u012C\x03\x02\x02\x02\u012C+\x03\x02\x02\x02\u012D\u012E\x07>\x02" +
		"\x02\u012E\u012F\x05V,\x02\u012F\u0131\x07\x0F\x02\x02\u0130\u0132\x05" +
		"\f\x07\x02\u0131\u0130\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132" +
		"-\x03\x02\x02\x02\u0133\u0134\x07N\x02\x02\u0134\u0136\x07\x0F\x02\x02" +
		"\u0135\u0137\x05\f\x07\x02\u0136\u0135\x03\x02\x02\x02\u0136\u0137\x03" +
		"\x02\x02\x02\u0137/\x03\x02\x02\x02\u0138\u0139\x07d\x02\x02\u0139\u013A" +
		"\x07\x0F\x02\x02\u013A\u013B\x05\b\x05\x02\u013B1\x03\x02\x02\x02\u013C" +
		"\u013D\x07P\x02\x02\u013D\u013E\x06\x1A\x07\x02\u013E\u013F\x05V,\x02" +
		"\u013F\u0140\x05l7\x02\u01403\x03\x02\x02\x02\u0141\u0142\x07S\x02\x02" +
		"\u0142\u0143\x05\n\x06\x02\u0143\u0144\x056\x1C\x02\u0144\u014F\x03\x02" +
		"\x02\x02\u0145\u0146\x07S\x02\x02\u0146\u0147\x05\n\x06\x02\u0147\u0148" +
		"\x058\x1D\x02\u0148\u014F\x03\x02\x02\x02\u0149\u014A\x07S\x02\x02\u014A" +
		"\u014B\x05\n\x06\x02\u014B\u014C\x056\x1C\x02\u014C\u014D\x058\x1D\x02" +
		"\u014D\u014F\x03\x02\x02\x02\u014E\u0141\x03\x02\x02\x02\u014E\u0145\x03" +
		"\x02\x02\x02\u014E\u0149\x03\x02\x02\x02\u014F5\x03\x02\x02\x02\u0150" +
		"\u0151\x07B\x02\x02\u0151\u0152\x07\x07\x02\x02\u0152\u0153\x07d\x02\x02" +
		"\u0153\u0154\x07\b\x02\x02\u0154\u0155\x05\n\x06\x02\u01557\x03\x02\x02" +
		"\x02\u0156\u0157\x07C\x02\x02\u0157\u0158\x05\n\x06\x02\u01589\x03\x02" +
		"\x02\x02\u0159\u015A\x07J\x02\x02\u015A\u015B\x05l7\x02\u015B;\x03\x02" +
		"\x02\x02\u015C\u015D\x07K\x02\x02\u015D\u015E\x07d\x02\x02\u015E\u0160" +
		"\x07\x07\x02\x02\u015F\u0161\x05> \x02\u0160\u015F\x03\x02\x02\x02\u0160" +
		"\u0161\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0163\x07\b\x02" +
		"\x02\u0163\u0164\x07\t\x02\x02\u0164\u0165\x05@!\x02\u0165\u0166\x07\n" +
		"\x02\x02\u0166=\x03\x02\x02\x02\u0167\u016C\x07d\x02\x02\u0168\u0169\x07" +
		"\f\x02\x02\u0169\u016B\x07d\x02\x02\u016A\u0168\x03\x02\x02\x02\u016B" +
		"\u016E\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02" +
		"\x02\x02\u016D?\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016F\u0171" +
		"\x05\x04\x03\x02\u0170\u016F\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02" +
		"\u0171A\x03\x02\x02\x02\u0172\u0174\x07\x05\x02\x02\u0173\u0175\x05D#" +
		"\x02\u0174\u0173\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0177" +
		"\x03\x02\x02\x02\u0176\u0178\x07\f\x02\x02\u0177\u0176\x03\x02\x02\x02" +
		"\u0177\u0178\x03\x02\x02\x02\u0178\u017A\x03\x02\x02\x02\u0179\u017B\x05" +
		"F$\x02\u017A\u0179\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017C" +
		"\x03\x02\x02\x02\u017C\u017D\x07\x06\x02\x02\u017DC\x03\x02\x02\x02\u017E" +
		"\u0180\x05F$\x02\u017F\u017E\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02" +
		"\u0180\u0181\x03\x02\x02\x02\u0181\u0189\x05X-\x02\u0182\u0184\x07\f\x02" +
		"\x02\u0183\u0185\x05F$\x02\u0184\u0183\x03\x02\x02\x02\u0184\u0185\x03" +
		"\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0188\x05X-\x02\u0187\u0182" +
		"\x03\x02\x02\x02\u0188\u018B\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02" +
		"\u0189\u018A\x03\x02\x02\x02\u018AE\x03\x02\x02\x02\u018B\u0189\x03\x02" +
		"\x02\x02\u018C\u018E\x07\f\x02\x02\u018D\u018C\x03\x02\x02\x02\u018E\u018F" +
		"\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02" +
		"\u0190G\x03\x02\x02\x02\u0191\u0192\x07\t\x02\x02\u0192\u019B\x07\n\x02" +
		"\x02\u0193\u0194\x07\t\x02\x02\u0194\u0196\x05J&\x02\u0195\u0197\x07\f" +
		"\x02\x02\u0196\u0195\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197" +
		"\u0198\x03\x02\x02\x02\u0198\u0199\x07\n\x02\x02\u0199\u019B\x03\x02\x02" +
		"\x02\u019A\u0191\x03\x02\x02\x02\u019A\u0193\x03\x02\x02\x02\u019BI\x03" +
		"\x02\x02\x02\u019C\u01A1\x05L\'\x02\u019D\u019E\x07\f\x02\x02\u019E\u01A0" +
		"\x05L\'\x02\u019F\u019D\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1" +
		"\u019F\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2K\x03\x02\x02" +
		"\x02\u01A3\u01A1\x03\x02\x02\x02\u01A4\u01A5\x05N(\x02\u01A5\u01A6\x07" +
		"\x0F\x02\x02\u01A6\u01A7\x05X-\x02\u01A7\u01B8\x03\x02\x02\x02\u01A8\u01A9" +
		"\x05h5\x02\u01A9\u01AA\x07\x07\x02\x02\u01AA\u01AB\x07\b\x02\x02\u01AB" +
		"\u01AC\x07\t\x02\x02\u01AC\u01AD\x05@!\x02\u01AD\u01AE\x07\n\x02\x02\u01AE" +
		"\u01B8\x03\x02\x02\x02\u01AF\u01B0\x05j6\x02\u01B0\u01B1\x07\x07\x02\x02" +
		"\u01B1\u01B2\x05P)\x02\u01B2\u01B3\x07\b\x02\x02\u01B3\u01B4\x07\t\x02" +
		"\x02\u01B4\u01B5\x05@!\x02\u01B5\u01B6\x07\n\x02\x02\u01B6\u01B8\x03\x02" +
		"\x02\x02\u01B7\u01A4\x03\x02\x02\x02\u01B7\u01A8\x03\x02\x02\x02\u01B7" +
		"\u01AF\x03\x02\x02\x02\u01B8M\x03\x02\x02\x02\u01B9\u01BD\x05`1\x02\u01BA" +
		"\u01BD\x07e\x02\x02\u01BB\u01BD\x05^0\x02\u01BC\u01B9\x03\x02\x02\x02" +
		"\u01BC\u01BA\x03\x02\x02\x02\u01BC\u01BB\x03\x02\x02\x02\u01BDO\x03\x02" +
		"\x02\x02\u01BE\u01BF\x07d\x02\x02\u01BFQ\x03\x02\x02\x02\u01C0\u01C2\x07" +
		"\x07\x02\x02\u01C1\u01C3\x05T+\x02\u01C2\u01C1\x03\x02\x02\x02\u01C2\u01C3" +
		"\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C5\x07\b\x02\x02" +
		"\u01C5S\x03\x02\x02\x02\u01C6\u01CB\x05X-\x02\u01C7\u01C8\x07\f\x02\x02" +
		"\u01C8\u01CA\x05X-\x02\u01C9\u01C7\x03\x02\x02\x02\u01CA\u01CD\x03\x02" +
		"\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC" +
		"U\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CE\u01D3\x05X-\x02\u01CF" +
		"\u01D0\x07\f\x02\x02\u01D0\u01D2\x05X-\x02\u01D1\u01CF\x03\x02\x02\x02" +
		"\u01D2\u01D5\x03\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03" +
		"\x02\x02\x02\u01D4W\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D6" +
		"\u01D7\b-\x01\x02\u01D7\u01D9\x07K\x02\x02\u01D8\u01DA\x07d\x02\x02\u01D9" +
		"\u01D8\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DB\x03\x02" +
		"\x02\x02\u01DB\u01DD\x07\x07\x02\x02\u01DC\u01DE\x05> \x02\u01DD\u01DC" +
		"\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02" +
		"\u01DF\u01E0\x07\b\x02\x02\u01E0\u01E1\x07\t\x02\x02\u01E1\u01E2\x05@" +
		"!\x02\u01E2\u01E3\x07\n\x02\x02\u01E3\u0205\x03\x02\x02\x02\u01E4\u01E5" +
		"\x07@\x02\x02\u01E5\u01E7\x05X-\x02\u01E6\u01E8\x05R*\x02\u01E7\u01E6" +
		"\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u0205\x03\x02\x02\x02" +
		"\u01E9\u01EA\x07Q\x02\x02\u01EA\u0205\x05X- \u01EB\u01EC\x07E\x02\x02" +
		"\u01EC\u0205\x05X-\x1F\u01ED\u01EE\x07=\x02\x02\u01EE\u0205\x05X-\x1E" +
		"\u01EF\u01F0\x07\x11\x02\x02\u01F0\u0205\x05X-\x1D\u01F1\u01F2\x07\x12" +
		"\x02\x02\u01F2\u0205\x05X-\x1C\u01F3\u01F4\x07\x13\x02\x02\u01F4\u0205" +
		"\x05X-\x1B\u01F5\u01F6\x07\x14\x02\x02\u01F6\u0205\x05X-\x1A\u01F7\u01F8" +
		"\x07\x15\x02\x02\u01F8\u0205\x05X-\x19\u01F9\u01FA\x07\x16\x02\x02\u01FA" +
		"\u0205\x05X-\x18\u01FB\u0205\x07L\x02\x02\u01FC\u0205\x07d\x02\x02\u01FD" +
		"\u0205\x05\\/\x02\u01FE\u0205\x05B\"\x02\u01FF\u0205\x05H%\x02\u0200\u0201" +
		"\x07\x07\x02\x02\u0201\u0202\x05V,\x02\u0202\u0203\x07\b\x02\x02\u0203" +
		"\u0205\x03\x02\x02\x02\u0204\u01D6\x03\x02\x02\x02\u0204\u01E4\x03\x02" +
		"\x02\x02\u0204\u01E9\x03\x02\x02\x02\u0204\u01EB\x03\x02\x02\x02\u0204" +
		"\u01ED\x03\x02\x02\x02\u0204\u01EF\x03\x02\x02\x02\u0204\u01F1\x03\x02" +
		"\x02\x02\u0204\u01F3\x03\x02\x02\x02\u0204\u01F5\x03\x02\x02\x02\u0204" +
		"\u01F7\x03\x02\x02\x02\u0204\u01F9\x03\x02\x02\x02\u0204\u01FB\x03\x02" +
		"\x02\x02\u0204\u01FC\x03\x02\x02\x02\u0204\u01FD\x03\x02\x02\x02\u0204" +
		"\u01FE\x03\x02\x02\x02\u0204\u01FF\x03\x02\x02\x02\u0204\u0200\x03\x02" +
		"\x02\x02\u0205\u0249\x03\x02\x02\x02\u0206\u0207\f\x17\x02\x02\u0207\u0208" +
		"\t\x02\x02\x02\u0208\u0248\x05X-\x18\u0209\u020A\f\x16\x02\x02\u020A\u020B" +
		"\t\x03\x02\x02\u020B\u0248\x05X-\x17\u020C\u020D\f\x15\x02\x02\u020D\u020E" +
		"\t\x04\x02\x02\u020E\u0248\x05X-\x16\u020F\u0210\f\x14\x02\x02\u0210\u0211" +
		"\t\x05\x02\x02\u0211\u0248\x05X-\x15\u0212\u0213\f\x13\x02\x02\u0213\u0214" +
		"\x07<\x02\x02\u0214\u0248\x05X-\x14\u0215\u0216\f\x12\x02\x02\u0216\u0217" +
		"\x07R\x02\x02\u0217\u0248\x05X-\x13\u0218\u0219\f\x11\x02\x02\u0219\u021A" +
		"\t\x06\x02\x02\u021A\u0248\x05X-\x12\u021B\u021C\f\x10\x02\x02\u021C\u021D" +
		"\x07%\x02\x02\u021D\u0248\x05X-\x11\u021E\u021F\f\x0F\x02\x02\u021F\u0220" +
		"\x07&\x02\x02\u0220\u0248\x05X-\x10\u0221\u0222\f\x0E\x02\x02\u0222\u0223" +
		"\x07\'\x02\x02\u0223\u0248\x05X-\x0F\u0224\u0225\f\r\x02\x02\u0225\u0226" +
		"\x07(\x02\x02\u0226\u0248\x05X-\x0E\u0227\u0228\f\f\x02\x02\u0228\u0229" +
		"\x07)\x02\x02\u0229\u0248\x05X-\r\u022A\u022B\f\v\x02\x02\u022B\u022C" +
		"\x07\x0E\x02\x02\u022C\u022D\x05X-\x02\u022D\u022E\x07\x0F\x02\x02\u022E" +
		"\u022F\x05X-\f\u022F\u0248\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0230\u0231\f&\x02\x02\u0231\u0232\x07\x05\x02\x02\u0232\u0233\x05V," +
		"\x02\u0233\u0234\x07\x06\x02\x02\u0234\u0248\x03\x02\x02\x02\u0235\u0236" +
		"\f%\x02\x02\u0236\u0237\x07\x10\x02\x02\u0237\u0248\x05`1\x02\u0238\u0239" +
		"\f$\x02\x02\u0239\u0248\x05R*\x02\u023A\u023B\f\"\x02\x02\u023B\u023C" +
		"\x06-\x19\x02\u023C\u0248\x07\x11\x02\x02\u023D\u023E\f!\x02\x02\u023E" +
		"\u023F\x06-\x1B\x02\u023F\u0248\x07\x12\x02\x02\u0240\u0241\f\n\x02\x02" +
		"\u0241\u0242\x07\r\x02\x02\u0242\u0248\x05V,\x02\u0243\u0244\f\t\x02\x02" +
		"\u0244\u0245\x05Z.\x02\u0245\u0246\x05V,\x02\u0246\u0248\x03\x02\x02\x02" +
		"\u0247\u0206\x03\x02\x02\x02\u0247\u0209\x03\x02\x02\x02\u0247\u020C\x03" +
		"\x02\x02\x02\u0247\u020F\x03\x02\x02\x02\u0247\u0212\x03\x02\x02\x02\u0247" +
		"\u0215\x03\x02\x02\x02\u0247\u0218\x03\x02\x02\x02\u0247\u021B\x03\x02" +
		"\x02\x02\u0247\u021E\x03\x02\x02\x02\u0247\u0221\x03\x02\x02\x02\u0247" +
		"\u0224\x03\x02\x02\x02\u0247\u0227\x03\x02\x02\x02\u0247\u022A\x03\x02" +
		"\x02\x02\u0247\u0230\x03\x02\x02\x02\u0247\u0235\x03\x02\x02\x02\u0247" +
		"\u0238\x03\x02\x02\x02\u0247\u023A\x03\x02\x02\x02\u0247\u023D\x03\x02" +
		"\x02\x02\u0247\u0240\x03\x02\x02\x02\u0247\u0243\x03\x02\x02\x02\u0248" +
		"\u024B\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02\u0249\u024A\x03\x02" +
		"\x02\x02\u024AY\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024C\u024D" +
		"\t\x07\x02\x02\u024D[\x03\x02\x02\x02\u024E\u0251\t\b\x02\x02\u024F\u0251" +
		"\x05^0\x02\u0250\u024E\x03\x02\x02\x02\u0250\u024F\x03\x02\x02\x02\u0251" +
		"]\x03\x02\x02\x02\u0252\u0253\t\t\x02\x02\u0253_\x03\x02\x02\x02\u0254" +
		"\u0257\x07d\x02\x02\u0255\u0257\x05b2\x02\u0256\u0254\x03\x02\x02\x02" +
		"\u0256\u0255\x03\x02\x02\x02\u0257a\x03\x02\x02\x02\u0258\u025C\x05d3" +
		"\x02\u0259\u025C\x05f4\x02\u025A\u025C\t\n\x02\x02\u025B\u0258\x03\x02" +
		"\x02\x02\u025B\u0259\x03\x02\x02\x02\u025B\u025A\x03\x02\x02\x02\u025C" +
		"c\x03\x02\x02\x02\u025D\u025E\t\v\x02\x02\u025Ee\x03\x02\x02\x02\u025F" +
		"\u0260\t\f\x02\x02\u0260g\x03\x02\x02\x02\u0261\u0262\x065\x1E\x02\u0262" +
		"\u0263\x07d\x02\x02\u0263\u0264\x05N(\x02\u0264i\x03\x02\x02\x02\u0265" +
		"\u0266\x066\x1F\x02\u0266\u0267\x07d\x02\x02\u0267\u0268\x05N(\x02\u0268" +
		"k\x03\x02\x02\x02\u0269\u026E\x07\v\x02\x02\u026A\u026E\x07\x02\x02\x03" +
		"\u026B\u026E\x067 \x02\u026C\u026E\x067!\x02\u026D\u0269\x03\x02\x02\x02" +
		"\u026D\u026A\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026D\u026C\x03" +
		"\x02\x02\x02\u026Em\x03\x02\x02\x02\u026F\u0270\x07\x02\x02\x03\u0270" +
		"o\x03\x02\x02\x027qx}\x8F\x93\x9A\xA5\xAA\xBA\xCD\xD1\xD5\xDF\xE3\xF9" +
		"\xFE\u0105\u010C\u011E\u0122\u0124\u012B\u0131\u0136\u014E\u0160\u016C" +
		"\u0170\u0174\u0177\u017A\u017F\u0184\u0189\u018F\u0196\u019A\u01A1\u01B7" +
		"\u01BC\u01C2\u01CB\u01D3\u01D9\u01DD\u01E7\u0204\u0247\u0249\u0250\u0256" +
		"\u025B\u026D";
	public static readonly _serializedATN: string = Utils.join(
		[
			ECMAScriptParser._serializedATNSegment0,
			ECMAScriptParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ECMAScriptParser.__ATN) {
			ECMAScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ECMAScriptParser._serializedATN));
		}

		return ECMAScriptParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ECMAScriptParser.EOF, 0); }
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_program; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceElementsContext extends ParserRuleContext {
	public sourceElement(): SourceElementContext[];
	public sourceElement(i: number): SourceElementContext;
	public sourceElement(i?: number): SourceElementContext | SourceElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceElementContext);
		} else {
			return this.getRuleContext(i, SourceElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_sourceElements; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterSourceElements) {
			listener.enterSourceElements(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitSourceElements) {
			listener.exitSourceElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitSourceElements) {
			return visitor.visitSourceElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceElementContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_sourceElement; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterSourceElement) {
			listener.enterSourceElement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitSourceElement) {
			listener.exitSourceElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitSourceElement) {
			return visitor.visitSourceElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	public emptyStatement_(): EmptyStatement_Context | undefined {
		return this.tryGetRuleContext(0, EmptyStatement_Context);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public withStatement(): WithStatementContext | undefined {
		return this.tryGetRuleContext(0, WithStatementContext);
	}
	public labelledStatement(): LabelledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabelledStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public debuggerStatement(): DebuggerStatementContext | undefined {
		return this.tryGetRuleContext(0, DebuggerStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_statement; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(ECMAScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(ECMAScriptParser.CloseBrace, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_block; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_statementList; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableStatementContext extends ParserRuleContext {
	public Var(): TerminalNode { return this.getToken(ECMAScriptParser.Var, 0); }
	public variableDeclarationList(): VariableDeclarationListContext {
		return this.getRuleContext(0, VariableDeclarationListContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_variableStatement; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterVariableStatement) {
			listener.enterVariableStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitVariableStatement) {
			listener.exitVariableStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitVariableStatement) {
			return visitor.visitVariableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ECMAScriptParser.Comma);
		} else {
			return this.getToken(ECMAScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_variableDeclarationList; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterVariableDeclarationList) {
			listener.enterVariableDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitVariableDeclarationList) {
			listener.exitVariableDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationList) {
			return visitor.visitVariableDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(ECMAScriptParser.Identifier, 0); }
	public initialiser(): InitialiserContext | undefined {
		return this.tryGetRuleContext(0, InitialiserContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitialiserContext extends ParserRuleContext {
	public Assign(): TerminalNode { return this.getToken(ECMAScriptParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_initialiser; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterInitialiser) {
			listener.enterInitialiser(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitInitialiser) {
			listener.exitInitialiser(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitInitialiser) {
			return visitor.visitInitialiser(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatement_Context extends ParserRuleContext {
	public SemiColon(): TerminalNode { return this.getToken(ECMAScriptParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_emptyStatement_; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterEmptyStatement_) {
			listener.enterEmptyStatement_(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitEmptyStatement_) {
			listener.exitEmptyStatement_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitEmptyStatement_) {
			return visitor.visitEmptyStatement_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(ECMAScriptParser.If, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ECMAScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(ECMAScriptParser.CloseParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Else, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_iterationStatement; }
	public copyFrom(ctx: IterationStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class DoStatementContext extends IterationStatementContext {
	public Do(): TerminalNode { return this.getToken(ECMAScriptParser.Do, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public While(): TerminalNode { return this.getToken(ECMAScriptParser.While, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ECMAScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(ECMAScriptParser.CloseParen, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterDoStatement) {
			listener.enterDoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitDoStatement) {
			listener.exitDoStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhileStatementContext extends IterationStatementContext {
	public While(): TerminalNode { return this.getToken(ECMAScriptParser.While, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ECMAScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(ECMAScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(ECMAScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ECMAScriptParser.OpenParen, 0); }
	public SemiColon(): TerminalNode[];
	public SemiColon(i: number): TerminalNode;
	public SemiColon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ECMAScriptParser.SemiColon);
		} else {
			return this.getToken(ECMAScriptParser.SemiColon, i);
		}
	}
	public CloseParen(): TerminalNode { return this.getToken(ECMAScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expressionSequence(): ExpressionSequenceContext[];
	public expressionSequence(i: number): ExpressionSequenceContext;
	public expressionSequence(i?: number): ExpressionSequenceContext | ExpressionSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionSequenceContext);
		} else {
			return this.getRuleContext(i, ExpressionSequenceContext);
		}
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForVarStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(ECMAScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ECMAScriptParser.OpenParen, 0); }
	public Var(): TerminalNode { return this.getToken(ECMAScriptParser.Var, 0); }
	public variableDeclarationList(): VariableDeclarationListContext {
		return this.getRuleContext(0, VariableDeclarationListContext);
	}
	public SemiColon(): TerminalNode[];
	public SemiColon(i: number): TerminalNode;
	public SemiColon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ECMAScriptParser.SemiColon);
		} else {
			return this.getToken(ECMAScriptParser.SemiColon, i);
		}
	}
	public CloseParen(): TerminalNode { return this.getToken(ECMAScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expressionSequence(): ExpressionSequenceContext[];
	public expressionSequence(i: number): ExpressionSequenceContext;
	public expressionSequence(i?: number): ExpressionSequenceContext | ExpressionSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionSequenceContext);
		} else {
			return this.getRuleContext(i, ExpressionSequenceContext);
		}
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterForVarStatement) {
			listener.enterForVarStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitForVarStatement) {
			listener.exitForVarStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitForVarStatement) {
			return visitor.visitForVarStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForInStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(ECMAScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ECMAScriptParser.OpenParen, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public In(): TerminalNode { return this.getToken(ECMAScriptParser.In, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(ECMAScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterForInStatement) {
			listener.enterForInStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitForInStatement) {
			listener.exitForInStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitForInStatement) {
			return visitor.visitForInStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForVarInStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(ECMAScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ECMAScriptParser.OpenParen, 0); }
	public Var(): TerminalNode { return this.getToken(ECMAScriptParser.Var, 0); }
	public variableDeclaration(): VariableDeclarationContext {
		return this.getRuleContext(0, VariableDeclarationContext);
	}
	public In(): TerminalNode { return this.getToken(ECMAScriptParser.In, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(ECMAScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterForVarInStatement) {
			listener.enterForVarInStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitForVarInStatement) {
			listener.exitForVarInStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitForVarInStatement) {
			return visitor.visitForVarInStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public Continue(): TerminalNode { return this.getToken(ECMAScriptParser.Continue, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public Break(): TerminalNode { return this.getToken(ECMAScriptParser.Break, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public Return(): TerminalNode { return this.getToken(ECMAScriptParser.Return, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithStatementContext extends ParserRuleContext {
	public With(): TerminalNode { return this.getToken(ECMAScriptParser.With, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ECMAScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(ECMAScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_withStatement; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterWithStatement) {
			listener.enterWithStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitWithStatement) {
			listener.exitWithStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitWithStatement) {
			return visitor.visitWithStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public Switch(): TerminalNode { return this.getToken(ECMAScriptParser.Switch, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ECMAScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(ECMAScriptParser.CloseParen, 0); }
	public caseBlock(): CaseBlockContext {
		return this.getRuleContext(0, CaseBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseBlockContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(ECMAScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(ECMAScriptParser.CloseBrace, 0); }
	public caseClauses(): CaseClausesContext[];
	public caseClauses(i: number): CaseClausesContext;
	public caseClauses(i?: number): CaseClausesContext | CaseClausesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseClausesContext);
		} else {
			return this.getRuleContext(i, CaseClausesContext);
		}
	}
	public defaultClause(): DefaultClauseContext | undefined {
		return this.tryGetRuleContext(0, DefaultClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_caseBlock; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterCaseBlock) {
			listener.enterCaseBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitCaseBlock) {
			listener.exitCaseBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitCaseBlock) {
			return visitor.visitCaseBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseClausesContext extends ParserRuleContext {
	public caseClause(): CaseClauseContext[];
	public caseClause(i: number): CaseClauseContext;
	public caseClause(i?: number): CaseClauseContext | CaseClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseClauseContext);
		} else {
			return this.getRuleContext(i, CaseClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_caseClauses; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterCaseClauses) {
			listener.enterCaseClauses(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitCaseClauses) {
			listener.exitCaseClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitCaseClauses) {
			return visitor.visitCaseClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseClauseContext extends ParserRuleContext {
	public Case(): TerminalNode { return this.getToken(ECMAScriptParser.Case, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public Colon(): TerminalNode { return this.getToken(ECMAScriptParser.Colon, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_caseClause; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterCaseClause) {
			listener.enterCaseClause(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitCaseClause) {
			listener.exitCaseClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitCaseClause) {
			return visitor.visitCaseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultClauseContext extends ParserRuleContext {
	public Default(): TerminalNode { return this.getToken(ECMAScriptParser.Default, 0); }
	public Colon(): TerminalNode { return this.getToken(ECMAScriptParser.Colon, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_defaultClause; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterDefaultClause) {
			listener.enterDefaultClause(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitDefaultClause) {
			listener.exitDefaultClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitDefaultClause) {
			return visitor.visitDefaultClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelledStatementContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(ECMAScriptParser.Identifier, 0); }
	public Colon(): TerminalNode { return this.getToken(ECMAScriptParser.Colon, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_labelledStatement; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterLabelledStatement) {
			listener.enterLabelledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitLabelledStatement) {
			listener.exitLabelledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitLabelledStatement) {
			return visitor.visitLabelledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	public Throw(): TerminalNode { return this.getToken(ECMAScriptParser.Throw, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public Try(): TerminalNode { return this.getToken(ECMAScriptParser.Try, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public catchProduction(): CatchProductionContext | undefined {
		return this.tryGetRuleContext(0, CatchProductionContext);
	}
	public finallyProduction(): FinallyProductionContext | undefined {
		return this.tryGetRuleContext(0, FinallyProductionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchProductionContext extends ParserRuleContext {
	public Catch(): TerminalNode { return this.getToken(ECMAScriptParser.Catch, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ECMAScriptParser.OpenParen, 0); }
	public Identifier(): TerminalNode { return this.getToken(ECMAScriptParser.Identifier, 0); }
	public CloseParen(): TerminalNode { return this.getToken(ECMAScriptParser.CloseParen, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_catchProduction; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterCatchProduction) {
			listener.enterCatchProduction(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitCatchProduction) {
			listener.exitCatchProduction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitCatchProduction) {
			return visitor.visitCatchProduction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyProductionContext extends ParserRuleContext {
	public Finally(): TerminalNode { return this.getToken(ECMAScriptParser.Finally, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_finallyProduction; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterFinallyProduction) {
			listener.enterFinallyProduction(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitFinallyProduction) {
			listener.exitFinallyProduction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitFinallyProduction) {
			return visitor.visitFinallyProduction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DebuggerStatementContext extends ParserRuleContext {
	public Debugger(): TerminalNode { return this.getToken(ECMAScriptParser.Debugger, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_debuggerStatement; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterDebuggerStatement) {
			listener.enterDebuggerStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitDebuggerStatement) {
			listener.exitDebuggerStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitDebuggerStatement) {
			return visitor.visitDebuggerStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public Function(): TerminalNode { return this.getToken(ECMAScriptParser.Function, 0); }
	public Identifier(): TerminalNode { return this.getToken(ECMAScriptParser.Identifier, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ECMAScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(ECMAScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(ECMAScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(ECMAScriptParser.CloseBrace, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ECMAScriptParser.Identifier);
		} else {
			return this.getToken(ECMAScriptParser.Identifier, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ECMAScriptParser.Comma);
		} else {
			return this.getToken(ECMAScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_functionBody; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode { return this.getToken(ECMAScriptParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(ECMAScriptParser.CloseBracket, 0); }
	public elementList(): ElementListContext | undefined {
		return this.tryGetRuleContext(0, ElementListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Comma, 0); }
	public elision(): ElisionContext | undefined {
		return this.tryGetRuleContext(0, ElisionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_arrayLiteral; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterArrayLiteral) {
			listener.enterArrayLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitArrayLiteral) {
			listener.exitArrayLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitArrayLiteral) {
			return visitor.visitArrayLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementListContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public elision(): ElisionContext[];
	public elision(i: number): ElisionContext;
	public elision(i?: number): ElisionContext | ElisionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElisionContext);
		} else {
			return this.getRuleContext(i, ElisionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ECMAScriptParser.Comma);
		} else {
			return this.getToken(ECMAScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_elementList; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterElementList) {
			listener.enterElementList(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitElementList) {
			listener.exitElementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitElementList) {
			return visitor.visitElementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElisionContext extends ParserRuleContext {
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ECMAScriptParser.Comma);
		} else {
			return this.getToken(ECMAScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_elision; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterElision) {
			listener.enterElision(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitElision) {
			listener.exitElision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitElision) {
			return visitor.visitElision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectLiteralContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(ECMAScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(ECMAScriptParser.CloseBrace, 0); }
	public propertyNameAndValueList(): PropertyNameAndValueListContext | undefined {
		return this.tryGetRuleContext(0, PropertyNameAndValueListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_objectLiteral; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterObjectLiteral) {
			listener.enterObjectLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitObjectLiteral) {
			listener.exitObjectLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitObjectLiteral) {
			return visitor.visitObjectLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyNameAndValueListContext extends ParserRuleContext {
	public propertyAssignment(): PropertyAssignmentContext[];
	public propertyAssignment(i: number): PropertyAssignmentContext;
	public propertyAssignment(i?: number): PropertyAssignmentContext | PropertyAssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyAssignmentContext);
		} else {
			return this.getRuleContext(i, PropertyAssignmentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ECMAScriptParser.Comma);
		} else {
			return this.getToken(ECMAScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_propertyNameAndValueList; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterPropertyNameAndValueList) {
			listener.enterPropertyNameAndValueList(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitPropertyNameAndValueList) {
			listener.exitPropertyNameAndValueList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitPropertyNameAndValueList) {
			return visitor.visitPropertyNameAndValueList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyAssignmentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_propertyAssignment; }
	public copyFrom(ctx: PropertyAssignmentContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyExpressionAssignmentContext extends PropertyAssignmentContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public Colon(): TerminalNode { return this.getToken(ECMAScriptParser.Colon, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterPropertyExpressionAssignment) {
			listener.enterPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitPropertyExpressionAssignment) {
			listener.exitPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitPropertyExpressionAssignment) {
			return visitor.visitPropertyExpressionAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertyGetterContext extends PropertyAssignmentContext {
	public getter(): GetterContext {
		return this.getRuleContext(0, GetterContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(ECMAScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(ECMAScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(ECMAScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(ECMAScriptParser.CloseBrace, 0); }
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterPropertyGetter) {
			listener.enterPropertyGetter(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitPropertyGetter) {
			listener.exitPropertyGetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitPropertyGetter) {
			return visitor.visitPropertyGetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertySetterContext extends PropertyAssignmentContext {
	public setter(): SetterContext {
		return this.getRuleContext(0, SetterContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(ECMAScriptParser.OpenParen, 0); }
	public propertySetParameterList(): PropertySetParameterListContext {
		return this.getRuleContext(0, PropertySetParameterListContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(ECMAScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(ECMAScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(ECMAScriptParser.CloseBrace, 0); }
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterPropertySetter) {
			listener.enterPropertySetter(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitPropertySetter) {
			listener.exitPropertySetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitPropertySetter) {
			return visitor.visitPropertySetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyNameContext extends ParserRuleContext {
	public identifierName(): IdentifierNameContext | undefined {
		return this.tryGetRuleContext(0, IdentifierNameContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.StringLiteral, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_propertyName; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterPropertyName) {
			listener.enterPropertyName(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitPropertyName) {
			listener.exitPropertyName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitPropertyName) {
			return visitor.visitPropertyName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertySetParameterListContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(ECMAScriptParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_propertySetParameterList; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterPropertySetParameterList) {
			listener.enterPropertySetParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitPropertySetParameterList) {
			listener.exitPropertySetParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitPropertySetParameterList) {
			return visitor.visitPropertySetParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(ECMAScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(ECMAScriptParser.CloseParen, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_arguments; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ECMAScriptParser.Comma);
		} else {
			return this.getToken(ECMAScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionSequenceContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ECMAScriptParser.Comma);
		} else {
			return this.getToken(ECMAScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_expressionSequence; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterExpressionSequence) {
			listener.enterExpressionSequence(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitExpressionSequence) {
			listener.exitExpressionSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitExpressionSequence) {
			return visitor.visitExpressionSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_singleExpression; }
	public copyFrom(ctx: SingleExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionExpressionContext extends SingleExpressionContext {
	public Function(): TerminalNode { return this.getToken(ECMAScriptParser.Function, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ECMAScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(ECMAScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(ECMAScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(ECMAScriptParser.CloseBrace, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Identifier, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterFunctionExpression) {
			listener.enterFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitFunctionExpression) {
			listener.exitFunctionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitFunctionExpression) {
			return visitor.visitFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberIndexExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public OpenBracket(): TerminalNode { return this.getToken(ECMAScriptParser.OpenBracket, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseBracket(): TerminalNode { return this.getToken(ECMAScriptParser.CloseBracket, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterMemberIndexExpression) {
			listener.enterMemberIndexExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitMemberIndexExpression) {
			listener.exitMemberIndexExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitMemberIndexExpression) {
			return visitor.visitMemberIndexExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberDotExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Dot(): TerminalNode { return this.getToken(ECMAScriptParser.Dot, 0); }
	public identifierName(): IdentifierNameContext {
		return this.getRuleContext(0, IdentifierNameContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterMemberDotExpression) {
			listener.enterMemberDotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitMemberDotExpression) {
			listener.exitMemberDotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitMemberDotExpression) {
			return visitor.visitMemberDotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArgumentsExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterArgumentsExpression) {
			listener.enterArgumentsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitArgumentsExpression) {
			listener.exitArgumentsExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitArgumentsExpression) {
			return visitor.visitArgumentsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NewExpressionContext extends SingleExpressionContext {
	public New(): TerminalNode { return this.getToken(ECMAScriptParser.New, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterNewExpression) {
			listener.enterNewExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitNewExpression) {
			listener.exitNewExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitNewExpression) {
			return visitor.visitNewExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostIncrementExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public PlusPlus(): TerminalNode { return this.getToken(ECMAScriptParser.PlusPlus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterPostIncrementExpression) {
			listener.enterPostIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitPostIncrementExpression) {
			listener.exitPostIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitPostIncrementExpression) {
			return visitor.visitPostIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostDecreaseExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public MinusMinus(): TerminalNode { return this.getToken(ECMAScriptParser.MinusMinus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterPostDecreaseExpression) {
			listener.enterPostDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitPostDecreaseExpression) {
			listener.exitPostDecreaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitPostDecreaseExpression) {
			return visitor.visitPostDecreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeleteExpressionContext extends SingleExpressionContext {
	public Delete(): TerminalNode { return this.getToken(ECMAScriptParser.Delete, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterDeleteExpression) {
			listener.enterDeleteExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitDeleteExpression) {
			listener.exitDeleteExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitDeleteExpression) {
			return visitor.visitDeleteExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VoidExpressionContext extends SingleExpressionContext {
	public Void(): TerminalNode { return this.getToken(ECMAScriptParser.Void, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterVoidExpression) {
			listener.enterVoidExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitVoidExpression) {
			listener.exitVoidExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitVoidExpression) {
			return visitor.visitVoidExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeofExpressionContext extends SingleExpressionContext {
	public Typeof(): TerminalNode { return this.getToken(ECMAScriptParser.Typeof, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterTypeofExpression) {
			listener.enterTypeofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitTypeofExpression) {
			listener.exitTypeofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitTypeofExpression) {
			return visitor.visitTypeofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreIncrementExpressionContext extends SingleExpressionContext {
	public PlusPlus(): TerminalNode { return this.getToken(ECMAScriptParser.PlusPlus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterPreIncrementExpression) {
			listener.enterPreIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitPreIncrementExpression) {
			listener.exitPreIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitPreIncrementExpression) {
			return visitor.visitPreIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreDecreaseExpressionContext extends SingleExpressionContext {
	public MinusMinus(): TerminalNode { return this.getToken(ECMAScriptParser.MinusMinus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterPreDecreaseExpression) {
			listener.enterPreDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitPreDecreaseExpression) {
			listener.exitPreDecreaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitPreDecreaseExpression) {
			return visitor.visitPreDecreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryPlusExpressionContext extends SingleExpressionContext {
	public Plus(): TerminalNode { return this.getToken(ECMAScriptParser.Plus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterUnaryPlusExpression) {
			listener.enterUnaryPlusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitUnaryPlusExpression) {
			listener.exitUnaryPlusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitUnaryPlusExpression) {
			return visitor.visitUnaryPlusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryMinusExpressionContext extends SingleExpressionContext {
	public Minus(): TerminalNode { return this.getToken(ECMAScriptParser.Minus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterUnaryMinusExpression) {
			listener.enterUnaryMinusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitUnaryMinusExpression) {
			listener.exitUnaryMinusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitUnaryMinusExpression) {
			return visitor.visitUnaryMinusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitNotExpressionContext extends SingleExpressionContext {
	public BitNot(): TerminalNode { return this.getToken(ECMAScriptParser.BitNot, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterBitNotExpression) {
			listener.enterBitNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitBitNotExpression) {
			listener.exitBitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitBitNotExpression) {
			return visitor.visitBitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExpressionContext extends SingleExpressionContext {
	public Not(): TerminalNode { return this.getToken(ECMAScriptParser.Not, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitNotExpression) {
			return visitor.visitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Modulus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Minus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitShiftExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LeftShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.LeftShiftArithmetic, 0); }
	public RightShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.RightShiftArithmetic, 0); }
	public RightShiftLogical(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.RightShiftLogical, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterBitShiftExpression) {
			listener.enterBitShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitBitShiftExpression) {
			listener.exitBitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitBitShiftExpression) {
			return visitor.visitBitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.LessThan, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.MoreThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.LessThanEquals, 0); }
	public GreaterThanEquals(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.GreaterThanEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InstanceofExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Instanceof(): TerminalNode { return this.getToken(ECMAScriptParser.Instanceof, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterInstanceofExpression) {
			listener.enterInstanceofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitInstanceofExpression) {
			listener.exitInstanceofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitInstanceofExpression) {
			return visitor.visitInstanceofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public In(): TerminalNode { return this.getToken(ECMAScriptParser.In, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterInExpression) {
			listener.enterInExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitInExpression) {
			listener.exitInExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitInExpression) {
			return visitor.visitInExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Equals(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Equals, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.NotEquals, 0); }
	public IdentityEquals(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.IdentityEquals, 0); }
	public IdentityNotEquals(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.IdentityNotEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitAnd(): TerminalNode { return this.getToken(ECMAScriptParser.BitAnd, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterBitAndExpression) {
			listener.enterBitAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitBitAndExpression) {
			listener.exitBitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitBitAndExpression) {
			return visitor.visitBitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitXOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitXOr(): TerminalNode { return this.getToken(ECMAScriptParser.BitXOr, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterBitXOrExpression) {
			listener.enterBitXOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitBitXOrExpression) {
			listener.exitBitXOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitBitXOrExpression) {
			return visitor.visitBitXOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitOr(): TerminalNode { return this.getToken(ECMAScriptParser.BitOr, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterBitOrExpression) {
			listener.enterBitOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitBitOrExpression) {
			listener.exitBitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitBitOrExpression) {
			return visitor.visitBitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public And(): TerminalNode { return this.getToken(ECMAScriptParser.And, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Or(): TerminalNode { return this.getToken(ECMAScriptParser.Or, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TernaryExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public QuestionMark(): TerminalNode { return this.getToken(ECMAScriptParser.QuestionMark, 0); }
	public Colon(): TerminalNode { return this.getToken(ECMAScriptParser.Colon, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterTernaryExpression) {
			listener.enterTernaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitTernaryExpression) {
			listener.exitTernaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitTernaryExpression) {
			return visitor.visitTernaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Assign(): TerminalNode { return this.getToken(ECMAScriptParser.Assign, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentOperatorExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterAssignmentOperatorExpression) {
			listener.enterAssignmentOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitAssignmentOperatorExpression) {
			listener.exitAssignmentOperatorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitAssignmentOperatorExpression) {
			return visitor.visitAssignmentOperatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThisExpressionContext extends SingleExpressionContext {
	public This(): TerminalNode { return this.getToken(ECMAScriptParser.This, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterThisExpression) {
			listener.enterThisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitThisExpression) {
			listener.exitThisExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitThisExpression) {
			return visitor.visitThisExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends SingleExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(ECMAScriptParser.Identifier, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExpressionContext extends SingleExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayLiteralExpressionContext extends SingleExpressionContext {
	public arrayLiteral(): ArrayLiteralContext {
		return this.getRuleContext(0, ArrayLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterArrayLiteralExpression) {
			listener.enterArrayLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitArrayLiteralExpression) {
			listener.exitArrayLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitArrayLiteralExpression) {
			return visitor.visitArrayLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ObjectLiteralExpressionContext extends SingleExpressionContext {
	public objectLiteral(): ObjectLiteralContext {
		return this.getRuleContext(0, ObjectLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterObjectLiteralExpression) {
			listener.enterObjectLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitObjectLiteralExpression) {
			listener.exitObjectLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitObjectLiteralExpression) {
			return visitor.visitObjectLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends SingleExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(ECMAScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(ECMAScriptParser.CloseParen, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public MultiplyAssign(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.MultiplyAssign, 0); }
	public DivideAssign(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.DivideAssign, 0); }
	public ModulusAssign(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.ModulusAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.MinusAssign, 0); }
	public LeftShiftArithmeticAssign(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.LeftShiftArithmeticAssign, 0); }
	public RightShiftArithmeticAssign(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.RightShiftArithmeticAssign, 0); }
	public RightShiftLogicalAssign(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.RightShiftLogicalAssign, 0); }
	public BitAndAssign(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.BitAndAssign, 0); }
	public BitXorAssign(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.BitXorAssign, 0); }
	public BitOrAssign(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.BitOrAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.BooleanLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.StringLiteral, 0); }
	public RegularExpressionLiteral(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.RegularExpressionLiteral, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_literal; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.DecimalLiteral, 0); }
	public HexIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.HexIntegerLiteral, 0); }
	public OctalIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.OctalIntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_numericLiteral; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Identifier, 0); }
	public reservedWord(): ReservedWordContext | undefined {
		return this.tryGetRuleContext(0, ReservedWordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_identifierName; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterIdentifierName) {
			listener.enterIdentifierName(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitIdentifierName) {
			listener.exitIdentifierName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitIdentifierName) {
			return visitor.visitIdentifierName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedWordContext extends ParserRuleContext {
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public futureReservedWord(): FutureReservedWordContext | undefined {
		return this.tryGetRuleContext(0, FutureReservedWordContext);
	}
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.BooleanLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_reservedWord; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterReservedWord) {
			listener.enterReservedWord(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitReservedWord) {
			listener.exitReservedWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitReservedWord) {
			return visitor.visitReservedWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	public Break(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Break, 0); }
	public Do(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Do, 0); }
	public Instanceof(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Instanceof, 0); }
	public Typeof(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Typeof, 0); }
	public Case(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Case, 0); }
	public Else(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Else, 0); }
	public New(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.New, 0); }
	public Var(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Var, 0); }
	public Catch(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Catch, 0); }
	public Finally(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Finally, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Return, 0); }
	public Void(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Void, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Continue, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.For, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Switch, 0); }
	public While(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.While, 0); }
	public Debugger(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Debugger, 0); }
	public Function(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Function, 0); }
	public This(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.This, 0); }
	public With(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.With, 0); }
	public Default(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Default, 0); }
	public If(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.If, 0); }
	public Throw(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Throw, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Delete, 0); }
	public In(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.In, 0); }
	public Try(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Try, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_keyword; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitKeyword) {
			return visitor.visitKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FutureReservedWordContext extends ParserRuleContext {
	public Class(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Class, 0); }
	public Enum(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Enum, 0); }
	public Extends(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Extends, 0); }
	public Super(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Super, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Const, 0); }
	public Export(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Export, 0); }
	public Import(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Import, 0); }
	public Implements(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Implements, 0); }
	public Let(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Let, 0); }
	public Private(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Private, 0); }
	public Public(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Public, 0); }
	public Interface(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Interface, 0); }
	public Package(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Package, 0); }
	public Protected(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Protected, 0); }
	public Static(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Static, 0); }
	public Yield(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.Yield, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_futureReservedWord; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterFutureReservedWord) {
			listener.enterFutureReservedWord(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitFutureReservedWord) {
			listener.exitFutureReservedWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitFutureReservedWord) {
			return visitor.visitFutureReservedWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetterContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(ECMAScriptParser.Identifier, 0); }
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_getter; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterGetter) {
			listener.enterGetter(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitGetter) {
			listener.exitGetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitGetter) {
			return visitor.visitGetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetterContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(ECMAScriptParser.Identifier, 0); }
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_setter; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterSetter) {
			listener.enterSetter(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitSetter) {
			listener.exitSetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitSetter) {
			return visitor.visitSetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.SemiColon, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(ECMAScriptParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_eos; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterEos) {
			listener.enterEos(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitEos) {
			listener.exitEos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitEos) {
			return visitor.visitEos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EofContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ECMAScriptParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ECMAScriptParser.RULE_eof; }
	// @Override
	public enterRule(listener: ECMAScriptListener): void {
		if (listener.enterEof) {
			listener.enterEof(this);
		}
	}
	// @Override
	public exitRule(listener: ECMAScriptListener): void {
		if (listener.exitEof) {
			listener.exitEof(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ECMAScriptVisitor<Result>): Result {
		if (visitor.visitEof) {
			return visitor.visitEof(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


