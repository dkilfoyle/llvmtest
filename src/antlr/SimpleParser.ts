// Generated from /home/dkilfoyle/llvmtest/src/Simple.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { SimpleListener } from "./SimpleListener";
import { SimpleVisitor } from "./SimpleVisitor";


export class SimpleParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly Bool = 40;
	public static readonly Number = 41;
	public static readonly Identifier = 42;
	public static readonly String = 43;
	public static readonly Comment = 44;
	public static readonly Space = 45;
	public static readonly RULE_parse = 0;
	public static readonly RULE_repl = 1;
	public static readonly RULE_funType = 2;
	public static readonly RULE_functionDecl = 3;
	public static readonly RULE_param = 4;
	public static readonly RULE_paramList = 5;
	public static readonly RULE_returnBlock = 6;
	public static readonly RULE_statement = 7;
	public static readonly RULE_compoundStatement = 8;
	public static readonly RULE_statements = 9;
	public static readonly RULE_returnStatement = 10;
	public static readonly RULE_varType = 11;
	public static readonly RULE_variableDeclaration = 12;
	public static readonly RULE_initDeclaratorList = 13;
	public static readonly RULE_initDeclarator = 14;
	public static readonly RULE_dimensions = 15;
	public static readonly RULE_assignment = 16;
	public static readonly RULE_functionCall = 17;
	public static readonly RULE_ifStatement = 18;
	public static readonly RULE_elseStat = 19;
	public static readonly RULE_switchStatement = 20;
	public static readonly RULE_caseStatement = 21;
	public static readonly RULE_defaultCase = 22;
	public static readonly RULE_breakStatement = 23;
	public static readonly RULE_forStatement = 24;
	public static readonly RULE_forInitial = 25;
	public static readonly RULE_whileStatement = 26;
	public static readonly RULE_idList = 27;
	public static readonly RULE_exprList = 28;
	public static readonly RULE_expression = 29;
	public static readonly RULE_constantValue = 30;
	public static readonly RULE_list = 31;
	public static readonly RULE_indexes = 32;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "repl", "funType", "functionDecl", "param", "paramList", "returnBlock", 
		"statement", "compoundStatement", "statements", "returnStatement", "varType", 
		"variableDeclaration", "initDeclaratorList", "initDeclarator", "dimensions", 
		"assignment", "functionCall", "ifStatement", "elseStat", "switchStatement", 
		"caseStatement", "defaultCase", "breakStatement", "forStatement", "forInitial", 
		"whileStatement", "idList", "exprList", "expression", "constantValue", 
		"list", "indexes",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'void'", "'('", "')'", "'{'", "'}'", "','", "'return'", "';'", 
		"'int'", "'string'", "'='", "'['", "']'", "'if'", "'else'", "'switch'", 
		"'case'", "':'", "'default'", "'break;'", "'for'", "'while'", "'-'", "'!'", 
		"'^'", "'*'", "'/'", "'%'", "'+'", "'>='", "'<='", "'>'", "'<'", "'=='", 
		"'!='", "'&&'", "'||'", "'?'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "Bool", "Number", 
		"Identifier", "String", "Comment", "Space",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SimpleParser._LITERAL_NAMES, SimpleParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SimpleParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Simple.g4"; }

	// @Override
	public get ruleNames(): string[] { return SimpleParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SimpleParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SimpleParser._ATN, this);
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let _localctx: ParseContext = new ParseContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SimpleParser.RULE_parse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.repl();
			this.state = 67;
			this.match(SimpleParser.EOF);
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
	public repl(): ReplContext {
		let _localctx: ReplContext = new ReplContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SimpleParser.RULE_repl);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 69;
					this.functionDecl();
					}
					}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 75;
			this.statements();
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
	public funType(): FunTypeContext {
		let _localctx: FunTypeContext = new FunTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SimpleParser.RULE_funType);
		try {
			this.state = 79;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleParser.T__8:
			case SimpleParser.T__9:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 77;
				this.varType();
				}
				break;
			case SimpleParser.T__0:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 78;
				this.match(SimpleParser.T__0);
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
	public functionDecl(): FunctionDeclContext {
		let _localctx: FunctionDeclContext = new FunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SimpleParser.RULE_functionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this.funType();
			this.state = 82;
			this.match(SimpleParser.Identifier);
			this.state = 83;
			this.match(SimpleParser.T__1);
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleParser.T__8 || _la === SimpleParser.T__9) {
				{
				this.state = 84;
				this.paramList();
				}
			}

			this.state = 87;
			this.match(SimpleParser.T__2);
			this.state = 88;
			this.match(SimpleParser.T__3);
			this.state = 89;
			this.returnBlock();
			this.state = 90;
			this.match(SimpleParser.T__4);
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
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SimpleParser.RULE_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.varType();
			this.state = 93;
			this.match(SimpleParser.Identifier);
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
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SimpleParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.param();
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleParser.T__5) {
				{
				{
				this.state = 96;
				this.match(SimpleParser.T__5);
				this.state = 97;
				this.param();
				}
				}
				this.state = 102;
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
	public returnBlock(): ReturnBlockContext {
		let _localctx: ReturnBlockContext = new ReturnBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SimpleParser.RULE_returnBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 103;
					this.statement();
					}
					}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleParser.T__6) {
				{
				this.state = 109;
				this.match(SimpleParser.T__6);
				this.state = 110;
				this.expression(0);
				this.state = 111;
				this.match(SimpleParser.T__7);
				}
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SimpleParser.RULE_statement);
		try {
			this.state = 130;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 115;
				this.variableDeclaration();
				this.state = 116;
				this.match(SimpleParser.T__7);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 118;
				this.assignment();
				this.state = 119;
				this.match(SimpleParser.T__7);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 121;
				this.functionCall();
				this.state = 122;
				this.match(SimpleParser.T__7);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 124;
				this.ifStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 125;
				this.switchStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 126;
				this.forStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 127;
				this.whileStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 128;
				this.compoundStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 129;
				this.returnStatement();
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
	public compoundStatement(): CompoundStatementContext {
		let _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SimpleParser.RULE_compoundStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(SimpleParser.T__3);
			this.state = 133;
			this.statements();
			this.state = 134;
			this.match(SimpleParser.T__4);
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
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SimpleParser.RULE_statements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleParser.T__1) | (1 << SimpleParser.T__3) | (1 << SimpleParser.T__6) | (1 << SimpleParser.T__8) | (1 << SimpleParser.T__9) | (1 << SimpleParser.T__13) | (1 << SimpleParser.T__15) | (1 << SimpleParser.T__20) | (1 << SimpleParser.T__21) | (1 << SimpleParser.T__22) | (1 << SimpleParser.T__23))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SimpleParser.T__38 - 39)) | (1 << (SimpleParser.Bool - 39)) | (1 << (SimpleParser.Number - 39)) | (1 << (SimpleParser.Identifier - 39)) | (1 << (SimpleParser.String - 39)))) !== 0)) {
				{
				{
				this.state = 136;
				this.statement();
				}
				}
				this.state = 141;
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
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SimpleParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.match(SimpleParser.T__6);
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleParser.T__1) | (1 << SimpleParser.T__22) | (1 << SimpleParser.T__23))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SimpleParser.T__38 - 39)) | (1 << (SimpleParser.Bool - 39)) | (1 << (SimpleParser.Number - 39)) | (1 << (SimpleParser.Identifier - 39)) | (1 << (SimpleParser.String - 39)))) !== 0)) {
				{
				this.state = 143;
				this.expression(0);
				}
			}

			this.state = 146;
			this.match(SimpleParser.T__7);
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
	public varType(): VarTypeContext {
		let _localctx: VarTypeContext = new VarTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SimpleParser.RULE_varType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			_la = this._input.LA(1);
			if (!(_la === SimpleParser.T__8 || _la === SimpleParser.T__9)) {
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
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SimpleParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this.varType();
			this.state = 151;
			this.initDeclaratorList();
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
	public initDeclaratorList(): InitDeclaratorListContext {
		let _localctx: InitDeclaratorListContext = new InitDeclaratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SimpleParser.RULE_initDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.initDeclarator();
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleParser.T__5) {
				{
				{
				this.state = 154;
				this.match(SimpleParser.T__5);
				this.state = 155;
				this.initDeclarator();
				}
				}
				this.state = 160;
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
	public initDeclarator(): InitDeclaratorContext {
		let _localctx: InitDeclaratorContext = new InitDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SimpleParser.RULE_initDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.match(SimpleParser.Identifier);
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleParser.T__11) {
				{
				{
				this.state = 162;
				this.dimensions();
				}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleParser.T__10) {
				{
				this.state = 168;
				this.match(SimpleParser.T__10);
				this.state = 169;
				this.expression(0);
				}
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
	public dimensions(): DimensionsContext {
		let _localctx: DimensionsContext = new DimensionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SimpleParser.RULE_dimensions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.match(SimpleParser.T__11);
			this.state = 173;
			this.match(SimpleParser.Number);
			this.state = 174;
			this.match(SimpleParser.T__12);
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SimpleParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.expression(0);
			this.state = 177;
			this.match(SimpleParser.T__10);
			this.state = 178;
			this.expression(0);
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
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SimpleParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.match(SimpleParser.Identifier);
			this.state = 181;
			this.match(SimpleParser.T__1);
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleParser.T__1) | (1 << SimpleParser.T__22) | (1 << SimpleParser.T__23))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SimpleParser.T__38 - 39)) | (1 << (SimpleParser.Bool - 39)) | (1 << (SimpleParser.Number - 39)) | (1 << (SimpleParser.Identifier - 39)) | (1 << (SimpleParser.String - 39)))) !== 0)) {
				{
				this.state = 182;
				this.exprList();
				}
			}

			this.state = 185;
			this.match(SimpleParser.T__2);
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
		this.enterRule(_localctx, 36, SimpleParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.match(SimpleParser.T__13);
			this.state = 188;
			this.match(SimpleParser.T__1);
			this.state = 189;
			this.expression(0);
			this.state = 190;
			this.match(SimpleParser.T__2);
			this.state = 191;
			this.statement();
			this.state = 193;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 192;
				this.elseStat();
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
	public elseStat(): ElseStatContext {
		let _localctx: ElseStatContext = new ElseStatContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SimpleParser.RULE_elseStat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.match(SimpleParser.T__14);
			this.state = 196;
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
		this.enterRule(_localctx, 40, SimpleParser.RULE_switchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.match(SimpleParser.T__15);
			this.state = 199;
			this.match(SimpleParser.T__1);
			this.state = 200;
			this.expression(0);
			this.state = 201;
			this.match(SimpleParser.T__2);
			this.state = 202;
			this.match(SimpleParser.T__3);
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleParser.T__16) {
				{
				{
				this.state = 203;
				this.caseStatement();
				}
				}
				this.state = 208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleParser.T__18) {
				{
				this.state = 209;
				this.defaultCase();
				}
			}

			this.state = 212;
			this.match(SimpleParser.T__4);
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
	public caseStatement(): CaseStatementContext {
		let _localctx: CaseStatementContext = new CaseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SimpleParser.RULE_caseStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.match(SimpleParser.T__16);
			this.state = 215;
			this.constantValue();
			this.state = 216;
			this.match(SimpleParser.T__17);
			this.state = 217;
			this.statements();
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleParser.T__19) {
				{
				this.state = 218;
				this.breakStatement();
				}
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
	public defaultCase(): DefaultCaseContext {
		let _localctx: DefaultCaseContext = new DefaultCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SimpleParser.RULE_defaultCase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this.match(SimpleParser.T__18);
			this.state = 222;
			this.match(SimpleParser.T__17);
			this.state = 223;
			this.statements();
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
		this.enterRule(_localctx, 46, SimpleParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this.match(SimpleParser.T__19);
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
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SimpleParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.match(SimpleParser.T__20);
			this.state = 228;
			this.match(SimpleParser.T__1);
			this.state = 229;
			this.forInitial();
			this.state = 230;
			this.match(SimpleParser.T__7);
			this.state = 231;
			this.expression(0);
			this.state = 232;
			this.match(SimpleParser.T__7);
			this.state = 233;
			this.assignment();
			this.state = 234;
			this.match(SimpleParser.T__2);
			this.state = 235;
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
	public forInitial(): ForInitialContext {
		let _localctx: ForInitialContext = new ForInitialContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SimpleParser.RULE_forInitial);
		try {
			this.state = 239;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleParser.T__8:
			case SimpleParser.T__9:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 237;
				this.variableDeclaration();
				}
				break;
			case SimpleParser.T__1:
			case SimpleParser.T__22:
			case SimpleParser.T__23:
			case SimpleParser.T__38:
			case SimpleParser.Bool:
			case SimpleParser.Number:
			case SimpleParser.Identifier:
			case SimpleParser.String:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 238;
				this.assignment();
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
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SimpleParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this.match(SimpleParser.T__21);
			this.state = 242;
			this.match(SimpleParser.T__1);
			this.state = 243;
			this.expression(0);
			this.state = 244;
			this.match(SimpleParser.T__2);
			this.state = 245;
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
	public idList(): IdListContext {
		let _localctx: IdListContext = new IdListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SimpleParser.RULE_idList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.match(SimpleParser.Identifier);
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleParser.T__5) {
				{
				{
				this.state = 248;
				this.match(SimpleParser.T__5);
				this.state = 249;
				this.match(SimpleParser.Identifier);
				}
				}
				this.state = 254;
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
	public exprList(): ExprListContext {
		let _localctx: ExprListContext = new ExprListContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SimpleParser.RULE_exprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			this.expression(0);
			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleParser.T__5) {
				{
				{
				this.state = 256;
				this.match(SimpleParser.T__5);
				this.state = 257;
				this.expression(0);
				}
				}
				this.state = 262;
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 58;
		this.enterRecursionRule(_localctx, 58, SimpleParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 264;
				(_localctx as UnaryMinusExpressionContext)._op = this.match(SimpleParser.T__22);
				this.state = 265;
				this.expression(14);
				}
				break;

			case 2:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 266;
				(_localctx as NotExpressionContext)._op = this.match(SimpleParser.T__23);
				this.state = 267;
				this.expression(13);
				}
				break;

			case 3:
				{
				_localctx = new ConstantExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 268;
				this.constantValue();
				}
				break;

			case 4:
				{
				_localctx = new FunctionCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 269;
				this.functionCall();
				}
				break;

			case 5:
				{
				_localctx = new VariableExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 270;
				this.match(SimpleParser.Identifier);
				this.state = 272;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 271;
					this.indexes();
					}
					break;
				}
				}
				break;

			case 6:
				{
				_localctx = new BracketExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 274;
				this.match(SimpleParser.T__1);
				this.state = 275;
				this.expression(0);
				this.state = 276;
				this.match(SimpleParser.T__2);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 309;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 307;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleParser.RULE_expression);
						this.state = 280;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 281;
						(_localctx as PowerExpressionContext)._op = this.match(SimpleParser.T__24);
						this.state = 282;
						this.expression(12);
						}
						break;

					case 2:
						{
						_localctx = new MultExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleParser.RULE_expression);
						this.state = 283;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 284;
						(_localctx as MultExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleParser.T__25) | (1 << SimpleParser.T__26) | (1 << SimpleParser.T__27))) !== 0))) {
							(_localctx as MultExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 285;
						this.expression(12);
						}
						break;

					case 3:
						{
						_localctx = new AddExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleParser.RULE_expression);
						this.state = 286;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 287;
						(_localctx as AddExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === SimpleParser.T__22 || _la === SimpleParser.T__28)) {
							(_localctx as AddExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 288;
						this.expression(11);
						}
						break;

					case 4:
						{
						_localctx = new CompExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleParser.RULE_expression);
						this.state = 289;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 290;
						(_localctx as CompExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (SimpleParser.T__29 - 30)) | (1 << (SimpleParser.T__30 - 30)) | (1 << (SimpleParser.T__31 - 30)) | (1 << (SimpleParser.T__32 - 30)))) !== 0))) {
							(_localctx as CompExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 291;
						this.expression(10);
						}
						break;

					case 5:
						{
						_localctx = new EqExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleParser.RULE_expression);
						this.state = 292;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 293;
						(_localctx as EqExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === SimpleParser.T__33 || _la === SimpleParser.T__34)) {
							(_localctx as EqExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 294;
						this.expression(9);
						}
						break;

					case 6:
						{
						_localctx = new AndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleParser.RULE_expression);
						this.state = 295;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 296;
						(_localctx as AndExpressionContext)._op = this.match(SimpleParser.T__35);
						this.state = 297;
						this.expression(8);
						}
						break;

					case 7:
						{
						_localctx = new OrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleParser.RULE_expression);
						this.state = 298;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 299;
						(_localctx as OrExpressionContext)._op = this.match(SimpleParser.T__36);
						this.state = 300;
						this.expression(7);
						}
						break;

					case 8:
						{
						_localctx = new TernaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleParser.RULE_expression);
						this.state = 301;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 302;
						(_localctx as TernaryExpressionContext)._op = this.match(SimpleParser.T__37);
						this.state = 303;
						this.expression(0);
						this.state = 304;
						this.match(SimpleParser.T__17);
						this.state = 305;
						this.expression(6);
						}
						break;
					}
					}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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
	public constantValue(): ConstantValueContext {
		let _localctx: ConstantValueContext = new ConstantValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SimpleParser.RULE_constantValue);
		try {
			this.state = 319;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleParser.Number:
				_localctx = new NumberExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 312;
				this.match(SimpleParser.Number);
				}
				break;
			case SimpleParser.Bool:
				_localctx = new BoolExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 313;
				this.match(SimpleParser.Bool);
				}
				break;
			case SimpleParser.T__38:
				_localctx = new NullExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 314;
				this.match(SimpleParser.T__38);
				}
				break;
			case SimpleParser.String:
				_localctx = new StringExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 315;
				this.match(SimpleParser.String);
				this.state = 317;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 316;
					this.indexes();
					}
					break;
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
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SimpleParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.match(SimpleParser.T__11);
			this.state = 323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleParser.T__1) | (1 << SimpleParser.T__22) | (1 << SimpleParser.T__23))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SimpleParser.T__38 - 39)) | (1 << (SimpleParser.Bool - 39)) | (1 << (SimpleParser.Number - 39)) | (1 << (SimpleParser.Identifier - 39)) | (1 << (SimpleParser.String - 39)))) !== 0)) {
				{
				this.state = 322;
				this.exprList();
				}
			}

			this.state = 325;
			this.match(SimpleParser.T__12);
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
	public indexes(): IndexesContext {
		let _localctx: IndexesContext = new IndexesContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SimpleParser.RULE_indexes);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 327;
					this.match(SimpleParser.T__11);
					this.state = 328;
					this.expression(0);
					this.state = 329;
					this.match(SimpleParser.T__12);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 333;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 29:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);

		case 1:
			return this.precpred(this._ctx, 11);

		case 2:
			return this.precpred(this._ctx, 10);

		case 3:
			return this.precpred(this._ctx, 9);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);

		case 6:
			return this.precpred(this._ctx, 6);

		case 7:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\u0152\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x03\x02" +
		"\x03\x02\x03\x02\x03\x03\x07\x03I\n\x03\f\x03\x0E\x03L\v\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x05\x04R\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05X\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x07\x07e\n\x07\f\x07\x0E\x07h\v\x07\x03\b" +
		"\x07\bk\n\b\f\b\x0E\bn\v\b\x03\b\x03\b\x03\b\x03\b\x05\bt\n\b\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\x85\n\t\x03\n\x03\n\x03\n\x03\n\x03\v\x07\v\x8C\n\v\f\v" +
		"\x0E\v\x8F\v\v\x03\f\x03\f\x05\f\x93\n\f\x03\f\x03\f\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\x9F\n\x0F\f\x0F\x0E\x0F" +
		"\xA2\v\x0F\x03\x10\x03\x10\x07\x10\xA6\n\x10\f\x10\x0E\x10\xA9\v\x10\x03" +
		"\x10\x03\x10\x05\x10\xAD\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x05\x13\xBA\n\x13\x03" +
		"\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xC4" +
		"\n\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x07\x16\xCF\n\x16\f\x16\x0E\x16\xD2\v\x16\x03\x16\x05\x16\xD5" +
		"\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17" +
		"\xDE\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x05\x1B\xF2\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x07\x1D\xFD\n\x1D\f\x1D\x0E\x1D\u0100" +
		"\v\x1D\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0105\n\x1E\f\x1E\x0E\x1E\u0108" +
		"\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x05\x1F\u0113\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0119" +
		"\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x07\x1F\u0136\n\x1F\f\x1F\x0E\x1F\u0139\v\x1F\x03 \x03 \x03 " +
		"\x03 \x03 \x05 \u0140\n \x05 \u0142\n \x03!\x03!\x05!\u0146\n!\x03!\x03" +
		"!\x03\"\x03\"\x03\"\x03\"\x06\"\u014E\n\"\r\"\x0E\"\u014F\x03\"\x02\x02" +
		"\x03<#\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"\x02\x07\x03\x02\v\f\x03\x02\x1C\x1E\x04\x02\x19\x19\x1F\x1F\x03\x02 " +
		"#\x03\x02$%\x02\u015F\x02D\x03\x02\x02\x02\x04J\x03\x02\x02\x02\x06Q\x03" +
		"\x02\x02\x02\bS\x03\x02\x02\x02\n^\x03\x02\x02\x02\fa\x03\x02\x02\x02" +
		"\x0El\x03\x02\x02\x02\x10\x84\x03\x02\x02\x02\x12\x86\x03\x02\x02\x02" +
		"\x14\x8D\x03\x02\x02\x02\x16\x90\x03\x02\x02\x02\x18\x96\x03\x02\x02\x02" +
		"\x1A\x98\x03\x02\x02\x02\x1C\x9B\x03\x02\x02\x02\x1E\xA3\x03\x02\x02\x02" +
		" \xAE\x03\x02\x02\x02\"\xB2\x03\x02\x02\x02$\xB6\x03\x02\x02\x02&\xBD" +
		"\x03\x02\x02\x02(\xC5\x03\x02\x02\x02*\xC8\x03\x02\x02\x02,\xD8\x03\x02" +
		"\x02\x02.\xDF\x03\x02\x02\x020\xE3\x03\x02\x02\x022\xE5\x03\x02\x02\x02" +
		"4\xF1\x03\x02\x02\x026\xF3\x03\x02\x02\x028\xF9\x03\x02\x02\x02:\u0101" +
		"\x03\x02\x02\x02<\u0118\x03\x02\x02\x02>\u0141\x03\x02\x02\x02@\u0143" +
		"\x03\x02\x02\x02B\u014D\x03\x02\x02\x02DE\x05\x04\x03\x02EF\x07\x02\x02" +
		"\x03F\x03\x03\x02\x02\x02GI\x05\b\x05\x02HG\x03\x02\x02\x02IL\x03\x02" +
		"\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02KM\x03\x02\x02\x02LJ\x03\x02" +
		"\x02\x02MN\x05\x14\v\x02N\x05\x03\x02\x02\x02OR\x05\x18\r\x02PR\x07\x03" +
		"\x02\x02QO\x03\x02\x02\x02QP\x03\x02\x02\x02R\x07\x03\x02\x02\x02ST\x05" +
		"\x06\x04\x02TU\x07,\x02\x02UW\x07\x04\x02\x02VX\x05\f\x07\x02WV\x03\x02" +
		"\x02\x02WX\x03\x02\x02\x02XY\x03\x02\x02\x02YZ\x07\x05\x02\x02Z[\x07\x06" +
		"\x02\x02[\\\x05\x0E\b\x02\\]\x07\x07\x02\x02]\t\x03\x02\x02\x02^_\x05" +
		"\x18\r\x02_`\x07,\x02\x02`\v\x03\x02\x02\x02af\x05\n\x06\x02bc\x07\b\x02" +
		"\x02ce\x05\n\x06\x02db\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02" +
		"\x02fg\x03\x02\x02\x02g\r\x03\x02\x02\x02hf\x03\x02\x02\x02ik\x05\x10" +
		"\t\x02ji\x03\x02\x02\x02kn\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02" +
		"\x02\x02ms\x03\x02\x02\x02nl\x03\x02\x02\x02op\x07\t\x02\x02pq\x05<\x1F" +
		"\x02qr\x07\n\x02\x02rt\x03\x02\x02\x02so\x03\x02\x02\x02st\x03\x02\x02" +
		"\x02t\x0F\x03\x02\x02\x02uv\x05\x1A\x0E\x02vw\x07\n\x02\x02w\x85\x03\x02" +
		"\x02\x02xy\x05\"\x12\x02yz\x07\n\x02\x02z\x85\x03\x02\x02\x02{|\x05$\x13" +
		"\x02|}\x07\n\x02\x02}\x85\x03\x02\x02\x02~\x85\x05&\x14\x02\x7F\x85\x05" +
		"*\x16\x02\x80\x85\x052\x1A\x02\x81\x85\x056\x1C\x02\x82\x85\x05\x12\n" +
		"\x02\x83\x85\x05\x16\f\x02\x84u\x03\x02\x02\x02\x84x\x03\x02\x02\x02\x84" +
		"{\x03\x02\x02\x02\x84~\x03\x02\x02\x02\x84\x7F\x03\x02\x02\x02\x84\x80" +
		"\x03\x02\x02\x02\x84\x81\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x83" +
		"\x03\x02\x02\x02\x85\x11\x03\x02\x02\x02\x86\x87\x07\x06\x02\x02\x87\x88" +
		"\x05\x14\v\x02\x88\x89\x07\x07\x02\x02\x89\x13\x03\x02\x02\x02\x8A\x8C" +
		"\x05\x10\t\x02\x8B\x8A\x03\x02\x02\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8B" +
		"\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x15\x03\x02\x02\x02\x8F\x8D" +
		"\x03\x02\x02\x02\x90\x92\x07\t\x02\x02\x91\x93\x05<\x1F\x02\x92\x91\x03" +
		"\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x95\x07" +
		"\n\x02\x02\x95\x17\x03\x02\x02\x02\x96\x97\t\x02\x02\x02\x97\x19\x03\x02" +
		"\x02\x02\x98\x99\x05\x18\r\x02\x99\x9A\x05\x1C\x0F\x02\x9A\x1B\x03\x02" +
		"\x02\x02\x9B\xA0\x05\x1E\x10\x02\x9C\x9D\x07\b\x02\x02\x9D\x9F\x05\x1E" +
		"\x10\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E\x03\x02" +
		"\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\x1D\x03\x02\x02\x02\xA2\xA0\x03\x02" +
		"\x02\x02\xA3\xA7\x07,\x02\x02\xA4\xA6\x05 \x11\x02\xA5\xA4\x03\x02\x02" +
		"\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02" +
		"\x02\xA8\xAC\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAB\x07\r\x02" +
		"\x02\xAB\xAD\x05<\x1F\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02" +
		"\x02\xAD\x1F\x03\x02\x02\x02\xAE\xAF\x07\x0E\x02\x02\xAF\xB0\x07+\x02" +
		"\x02\xB0\xB1\x07\x0F\x02\x02\xB1!\x03\x02\x02\x02\xB2\xB3\x05<\x1F\x02" +
		"\xB3\xB4\x07\r\x02\x02\xB4\xB5\x05<\x1F\x02\xB5#\x03\x02\x02\x02\xB6\xB7" +
		"\x07,\x02\x02\xB7\xB9\x07\x04\x02\x02\xB8\xBA\x05:\x1E\x02\xB9\xB8\x03" +
		"\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBC\x07" +
		"\x05\x02\x02\xBC%\x03\x02\x02\x02\xBD\xBE\x07\x10\x02\x02\xBE\xBF\x07" +
		"\x04\x02\x02\xBF\xC0\x05<\x1F\x02\xC0\xC1\x07\x05\x02\x02\xC1\xC3\x05" +
		"\x10\t\x02\xC2\xC4\x05(\x15\x02\xC3\xC2\x03\x02\x02\x02\xC3\xC4\x03\x02" +
		"\x02\x02\xC4\'\x03\x02\x02\x02\xC5\xC6\x07\x11\x02\x02\xC6\xC7\x05\x10" +
		"\t\x02\xC7)\x03\x02\x02\x02\xC8\xC9\x07\x12\x02\x02\xC9\xCA\x07\x04\x02" +
		"\x02\xCA\xCB\x05<\x1F\x02\xCB\xCC\x07\x05\x02\x02\xCC\xD0\x07\x06\x02" +
		"\x02\xCD\xCF\x05,\x17\x02\xCE\xCD\x03\x02\x02\x02\xCF\xD2\x03\x02\x02" +
		"\x02\xD0\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD4\x03\x02\x02" +
		"\x02\xD2\xD0\x03\x02\x02\x02\xD3\xD5\x05.\x18\x02\xD4\xD3\x03\x02\x02" +
		"\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x07\x07\x02" +
		"\x02\xD7+\x03\x02\x02\x02\xD8\xD9\x07\x13\x02\x02\xD9\xDA\x05> \x02\xDA" +
		"\xDB\x07\x14\x02\x02\xDB\xDD\x05\x14\v\x02\xDC\xDE\x050\x19\x02\xDD\xDC" +
		"\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE-\x03\x02\x02\x02\xDF\xE0" +
		"\x07\x15\x02\x02\xE0\xE1\x07\x14\x02\x02\xE1\xE2\x05\x14\v\x02\xE2/\x03" +
		"\x02\x02\x02\xE3\xE4\x07\x16\x02\x02\xE41\x03\x02\x02\x02\xE5\xE6\x07" +
		"\x17\x02\x02\xE6\xE7\x07\x04\x02\x02\xE7\xE8\x054\x1B\x02\xE8\xE9\x07" +
		"\n\x02\x02\xE9\xEA\x05<\x1F\x02\xEA\xEB\x07\n\x02\x02\xEB\xEC\x05\"\x12" +
		"\x02\xEC\xED\x07\x05\x02\x02\xED\xEE\x05\x10\t\x02\xEE3\x03\x02\x02\x02" +
		"\xEF\xF2\x05\x1A\x0E\x02\xF0\xF2\x05\"\x12\x02\xF1\xEF\x03\x02\x02\x02" +
		"\xF1\xF0\x03\x02\x02\x02\xF25\x03\x02\x02\x02\xF3\xF4\x07\x18\x02\x02" +
		"\xF4\xF5\x07\x04\x02\x02\xF5\xF6\x05<\x1F\x02\xF6\xF7\x07\x05\x02\x02" +
		"\xF7\xF8\x05\x10\t\x02\xF87\x03\x02\x02\x02\xF9\xFE\x07,\x02\x02\xFA\xFB" +
		"\x07\b\x02\x02\xFB\xFD\x07,\x02\x02\xFC\xFA\x03\x02\x02\x02\xFD\u0100" +
		"\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF9" +
		"\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0101\u0106\x05<\x1F\x02\u0102" +
		"\u0103\x07\b\x02\x02\u0103\u0105\x05<\x1F\x02\u0104\u0102\x03\x02\x02" +
		"\x02\u0105\u0108\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107" +
		"\x03\x02\x02\x02\u0107;\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0109" +
		"\u010A\b\x1F\x01\x02\u010A\u010B\x07\x19\x02\x02\u010B\u0119\x05<\x1F" +
		"\x10\u010C\u010D\x07\x1A\x02\x02\u010D\u0119\x05<\x1F\x0F\u010E\u0119" +
		"\x05> \x02\u010F\u0119\x05$\x13\x02\u0110\u0112\x07,\x02\x02\u0111\u0113" +
		"\x05B\"\x02\u0112\u0111\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113" +
		"\u0119\x03\x02\x02\x02\u0114\u0115\x07\x04\x02\x02\u0115\u0116\x05<\x1F" +
		"\x02\u0116\u0117\x07\x05\x02\x02\u0117\u0119\x03\x02\x02\x02\u0118\u0109" +
		"\x03\x02\x02\x02\u0118\u010C\x03\x02\x02\x02\u0118\u010E\x03\x02\x02\x02" +
		"\u0118\u010F\x03\x02\x02\x02\u0118\u0110\x03\x02\x02\x02\u0118\u0114\x03" +
		"\x02\x02\x02\u0119\u0137\x03\x02\x02\x02\u011A\u011B\f\x0E\x02\x02\u011B" +
		"\u011C\x07\x1B\x02\x02\u011C\u0136\x05<\x1F\x0E\u011D\u011E\f\r\x02\x02" +
		"\u011E\u011F\t\x03\x02\x02\u011F\u0136\x05<\x1F\x0E\u0120\u0121\f\f\x02" +
		"\x02\u0121\u0122\t\x04\x02\x02\u0122\u0136\x05<\x1F\r\u0123\u0124\f\v" +
		"\x02\x02\u0124\u0125\t\x05\x02\x02\u0125\u0136\x05<\x1F\f\u0126\u0127" +
		"\f\n\x02\x02\u0127\u0128\t\x06\x02\x02\u0128\u0136\x05<\x1F\v\u0129\u012A" +
		"\f\t\x02\x02\u012A\u012B\x07&\x02\x02\u012B\u0136\x05<\x1F\n\u012C\u012D" +
		"\f\b\x02\x02\u012D\u012E\x07\'\x02\x02\u012E\u0136\x05<\x1F\t\u012F\u0130" +
		"\f\x07\x02\x02\u0130\u0131\x07(\x02\x02\u0131\u0132\x05<\x1F\x02\u0132" +
		"\u0133\x07\x14\x02\x02\u0133\u0134\x05<\x1F\b\u0134\u0136\x03\x02\x02" +
		"\x02\u0135\u011A\x03\x02\x02\x02\u0135\u011D\x03\x02\x02\x02\u0135\u0120" +
		"\x03\x02\x02\x02\u0135\u0123\x03\x02\x02\x02\u0135\u0126\x03\x02\x02\x02" +
		"\u0135\u0129\x03\x02\x02\x02\u0135\u012C\x03\x02\x02\x02\u0135\u012F\x03" +
		"\x02\x02\x02\u0136\u0139\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137" +
		"\u0138\x03\x02\x02\x02\u0138=\x03\x02\x02\x02\u0139\u0137\x03\x02\x02" +
		"\x02\u013A\u0142\x07+\x02\x02\u013B\u0142\x07*\x02\x02\u013C\u0142\x07" +
		")\x02\x02\u013D\u013F\x07-\x02\x02\u013E\u0140\x05B\"\x02\u013F\u013E" +
		"\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0142\x03\x02\x02\x02" +
		"\u0141\u013A\x03\x02\x02\x02\u0141\u013B\x03\x02\x02\x02\u0141\u013C\x03" +
		"\x02\x02\x02\u0141\u013D\x03\x02\x02\x02\u0142?\x03\x02\x02\x02\u0143" +
		"\u0145\x07\x0E\x02\x02\u0144\u0146\x05:\x1E\x02\u0145\u0144\x03\x02\x02" +
		"\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148" +
		"\x07\x0F\x02\x02\u0148A\x03\x02\x02\x02\u0149\u014A\x07\x0E\x02\x02\u014A" +
		"\u014B\x05<\x1F\x02\u014B\u014C\x07\x0F\x02\x02\u014C\u014E\x03\x02\x02" +
		"\x02\u014D\u0149\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u014D" +
		"\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150C\x03\x02\x02\x02\x1E" +
		"JQWfls\x84\x8D\x92\xA0\xA7\xAC\xB9\xC3\xD0\xD4\xDD\xF1\xFE\u0106\u0112" +
		"\u0118\u0135\u0137\u013F\u0141\u0145\u014F";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SimpleParser.__ATN) {
			SimpleParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SimpleParser._serializedATN));
		}

		return SimpleParser.__ATN;
	}

}

export class ParseContext extends ParserRuleContext {
	public repl(): ReplContext {
		return this.getRuleContext(0, ReplContext);
	}
	public EOF(): TerminalNode { return this.getToken(SimpleParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_parse; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterParse) {
			listener.enterParse(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitParse) {
			listener.exitParse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitParse) {
			return visitor.visitParse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReplContext extends ParserRuleContext {
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public functionDecl(): FunctionDeclContext[];
	public functionDecl(i: number): FunctionDeclContext;
	public functionDecl(i?: number): FunctionDeclContext | FunctionDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDeclContext);
		} else {
			return this.getRuleContext(i, FunctionDeclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_repl; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterRepl) {
			listener.enterRepl(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitRepl) {
			listener.exitRepl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitRepl) {
			return visitor.visitRepl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunTypeContext extends ParserRuleContext {
	public varType(): VarTypeContext | undefined {
		return this.tryGetRuleContext(0, VarTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_funType; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterFunType) {
			listener.enterFunType(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitFunType) {
			listener.exitFunType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitFunType) {
			return visitor.visitFunType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclContext extends ParserRuleContext {
	public funType(): FunTypeContext {
		return this.getRuleContext(0, FunTypeContext);
	}
	public Identifier(): TerminalNode { return this.getToken(SimpleParser.Identifier, 0); }
	public returnBlock(): ReturnBlockContext {
		return this.getRuleContext(0, ReturnBlockContext);
	}
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_functionDecl; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterFunctionDecl) {
			listener.enterFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitFunctionDecl) {
			listener.exitFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	public varType(): VarTypeContext {
		return this.getRuleContext(0, VarTypeContext);
	}
	public Identifier(): TerminalNode { return this.getToken(SimpleParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_param; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterParam) {
			listener.enterParam(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitParam) {
			listener.exitParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitParam) {
			return visitor.visitParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamListContext extends ParserRuleContext {
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_paramList; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterParamList) {
			listener.enterParamList(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitParamList) {
			listener.exitParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitParamList) {
			return visitor.visitParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnBlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_returnBlock; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterReturnBlock) {
			listener.enterReturnBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitReturnBlock) {
			listener.exitReturnBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitReturnBlock) {
			return visitor.visitReturnBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_statement; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundStatementContext extends ParserRuleContext {
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_compoundStatement; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterCompoundStatement) {
			listener.enterCompoundStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitCompoundStatement) {
			listener.exitCompoundStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitCompoundStatement) {
			return visitor.visitCompoundStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return SimpleParser.RULE_statements; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterStatements) {
			listener.enterStatements(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitStatements) {
			listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_varType; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterVarType) {
			listener.enterVarType(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitVarType) {
			listener.exitVarType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitVarType) {
			return visitor.visitVarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public varType(): VarTypeContext {
		return this.getRuleContext(0, VarTypeContext);
	}
	public initDeclaratorList(): InitDeclaratorListContext {
		return this.getRuleContext(0, InitDeclaratorListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitDeclaratorListContext extends ParserRuleContext {
	public initDeclarator(): InitDeclaratorContext[];
	public initDeclarator(i: number): InitDeclaratorContext;
	public initDeclarator(i?: number): InitDeclaratorContext | InitDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitDeclaratorContext);
		} else {
			return this.getRuleContext(i, InitDeclaratorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_initDeclaratorList; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterInitDeclaratorList) {
			listener.enterInitDeclaratorList(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitInitDeclaratorList) {
			listener.exitInitDeclaratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitInitDeclaratorList) {
			return visitor.visitInitDeclaratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitDeclaratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SimpleParser.Identifier, 0); }
	public dimensions(): DimensionsContext[];
	public dimensions(i: number): DimensionsContext;
	public dimensions(i?: number): DimensionsContext | DimensionsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DimensionsContext);
		} else {
			return this.getRuleContext(i, DimensionsContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_initDeclarator; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterInitDeclarator) {
			listener.enterInitDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitInitDeclarator) {
			listener.exitInitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitInitDeclarator) {
			return visitor.visitInitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimensionsContext extends ParserRuleContext {
	public Number(): TerminalNode { return this.getToken(SimpleParser.Number, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_dimensions; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterDimensions) {
			listener.enterDimensions(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitDimensions) {
			listener.exitDimensions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitDimensions) {
			return visitor.visitDimensions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_assignment; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SimpleParser.Identifier, 0); }
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public elseStat(): ElseStatContext | undefined {
		return this.tryGetRuleContext(0, ElseStatContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseStatContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_elseStat; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterElseStat) {
			listener.enterElseStat(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitElseStat) {
			listener.exitElseStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitElseStat) {
			return visitor.visitElseStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public caseStatement(): CaseStatementContext[];
	public caseStatement(i: number): CaseStatementContext;
	public caseStatement(i?: number): CaseStatementContext | CaseStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseStatementContext);
		} else {
			return this.getRuleContext(i, CaseStatementContext);
		}
	}
	public defaultCase(): DefaultCaseContext | undefined {
		return this.tryGetRuleContext(0, DefaultCaseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseStatementContext extends ParserRuleContext {
	public constantValue(): ConstantValueContext {
		return this.getRuleContext(0, ConstantValueContext);
	}
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_caseStatement; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterCaseStatement) {
			listener.enterCaseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitCaseStatement) {
			listener.exitCaseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitCaseStatement) {
			return visitor.visitCaseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultCaseContext extends ParserRuleContext {
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_defaultCase; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterDefaultCase) {
			listener.enterDefaultCase(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitDefaultCase) {
			listener.exitDefaultCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitDefaultCase) {
			return visitor.visitDefaultCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public forInitial(): ForInitialContext {
		return this.getRuleContext(0, ForInitialContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public assignment(): AssignmentContext {
		return this.getRuleContext(0, AssignmentContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitialContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_forInitial; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterForInitial) {
			listener.enterForInitial(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitForInitial) {
			listener.exitForInitial(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitForInitial) {
			return visitor.visitForInitial(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdListContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SimpleParser.Identifier);
		} else {
			return this.getToken(SimpleParser.Identifier, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_idList; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterIdList) {
			listener.enterIdList(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitIdList) {
			listener.exitIdList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitIdList) {
			return visitor.visitIdList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_exprList; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterExprList) {
			listener.enterExprList(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitExprList) {
			listener.exitExprList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitExprList) {
			return visitor.visitExprList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryMinusExpressionContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterUnaryMinusExpression) {
			listener.enterUnaryMinusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitUnaryMinusExpression) {
			listener.exitUnaryMinusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitUnaryMinusExpression) {
			return visitor.visitUnaryMinusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExpressionContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitNotExpression) {
			return visitor.visitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerExpressionContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterPowerExpression) {
			listener.enterPowerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitPowerExpression) {
			listener.exitPowerExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitPowerExpression) {
			return visitor.visitPowerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultExpressionContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterMultExpression) {
			listener.enterMultExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitMultExpression) {
			listener.exitMultExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitMultExpression) {
			return visitor.visitMultExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddExpressionContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterAddExpression) {
			listener.enterAddExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitAddExpression) {
			listener.exitAddExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitAddExpression) {
			return visitor.visitAddExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CompExpressionContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterCompExpression) {
			listener.enterCompExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitCompExpression) {
			listener.exitCompExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitCompExpression) {
			return visitor.visitCompExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqExpressionContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterEqExpression) {
			listener.enterEqExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitEqExpression) {
			listener.exitEqExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitEqExpression) {
			return visitor.visitEqExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndExpressionContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrExpressionContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterOrExpression) {
			listener.enterOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitOrExpression) {
			listener.exitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitOrExpression) {
			return visitor.visitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TernaryExpressionContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterTernaryExpression) {
			listener.enterTernaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitTernaryExpression) {
			listener.exitTernaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitTernaryExpression) {
			return visitor.visitTernaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantExpressionContext extends ExpressionContext {
	public constantValue(): ConstantValueContext {
		return this.getRuleContext(0, ConstantValueContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterConstantExpression) {
			listener.enterConstantExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitConstantExpression) {
			listener.exitConstantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExpressionContext extends ExpressionContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterFunctionCallExpression) {
			listener.enterFunctionCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitFunctionCallExpression) {
			listener.exitFunctionCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpression) {
			return visitor.visitFunctionCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VariableExpressionContext extends ExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(SimpleParser.Identifier, 0); }
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterVariableExpression) {
			listener.enterVariableExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitVariableExpression) {
			listener.exitVariableExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitVariableExpression) {
			return visitor.visitVariableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BracketExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterBracketExpression) {
			listener.enterBracketExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitBracketExpression) {
			listener.exitBracketExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitBracketExpression) {
			return visitor.visitBracketExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantValueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_constantValue; }
	public copyFrom(ctx: ConstantValueContext): void {
		super.copyFrom(ctx);
	}
}
export class NumberExpressionContext extends ConstantValueContext {
	public Number(): TerminalNode { return this.getToken(SimpleParser.Number, 0); }
	constructor(ctx: ConstantValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterNumberExpression) {
			listener.enterNumberExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitNumberExpression) {
			listener.exitNumberExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitNumberExpression) {
			return visitor.visitNumberExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolExpressionContext extends ConstantValueContext {
	public Bool(): TerminalNode { return this.getToken(SimpleParser.Bool, 0); }
	constructor(ctx: ConstantValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterBoolExpression) {
			listener.enterBoolExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitBoolExpression) {
			listener.exitBoolExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitBoolExpression) {
			return visitor.visitBoolExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullExpressionContext extends ConstantValueContext {
	constructor(ctx: ConstantValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterNullExpression) {
			listener.enterNullExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitNullExpression) {
			listener.exitNullExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitNullExpression) {
			return visitor.visitNullExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringExpressionContext extends ConstantValueContext {
	public String(): TerminalNode { return this.getToken(SimpleParser.String, 0); }
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(ctx: ConstantValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterStringExpression) {
			listener.enterStringExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitStringExpression) {
			listener.exitStringExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitStringExpression) {
			return visitor.visitStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_list; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexesContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_indexes; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterIndexes) {
			listener.enterIndexes(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitIndexes) {
			listener.exitIndexes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitIndexes) {
			return visitor.visitIndexes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


