// Generated from /home/dean/llvmtest/src/Simple.g4 by ANTLR 4.7.3-SNAPSHOT


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
	public static readonly Bool = 36;
	public static readonly Number = 37;
	public static readonly Identifier = 38;
	public static readonly String = 39;
	public static readonly Comment = 40;
	public static readonly Space = 41;
	public static readonly RULE_parse = 0;
	public static readonly RULE_repl = 1;
	public static readonly RULE_funType = 2;
	public static readonly RULE_functionDecl = 3;
	public static readonly RULE_param = 4;
	public static readonly RULE_paramList = 5;
	public static readonly RULE_block = 6;
	public static readonly RULE_statement = 7;
	public static readonly RULE_varType = 8;
	public static readonly RULE_variableDeclaration = 9;
	public static readonly RULE_initDeclaratorList = 10;
	public static readonly RULE_initDeclarator = 11;
	public static readonly RULE_assignment = 12;
	public static readonly RULE_functionCall = 13;
	public static readonly RULE_ifStatement = 14;
	public static readonly RULE_ifStat = 15;
	public static readonly RULE_elseIfStat = 16;
	public static readonly RULE_elseStat = 17;
	public static readonly RULE_forStatement = 18;
	public static readonly RULE_forInitial = 19;
	public static readonly RULE_whileStatement = 20;
	public static readonly RULE_idList = 21;
	public static readonly RULE_exprList = 22;
	public static readonly RULE_expression = 23;
	public static readonly RULE_list = 24;
	public static readonly RULE_indexes = 25;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "repl", "funType", "functionDecl", "param", "paramList", "block", 
		"statement", "varType", "variableDeclaration", "initDeclaratorList", "initDeclarator", 
		"assignment", "functionCall", "ifStatement", "ifStat", "elseIfStat", "elseStat", 
		"forStatement", "forInitial", "whileStatement", "idList", "exprList", 
		"expression", "list", "indexes",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'void'", "'('", "')'", "'{'", "'}'", "','", "'return'", "';'", 
		"'int'", "'string'", "'='", "'if'", "'else'", "'for'", "'while'", "'-'", 
		"'!'", "'^'", "'*'", "'/'", "'%'", "'+'", "'>='", "'<='", "'>'", "'<'", 
		"'=='", "'!='", "'&&'", "'||'", "'?'", "':'", "'null'", "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "Bool", "Number", "Identifier", "String", "Comment", "Space",
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
			this.state = 52;
			this.repl();
			this.state = 53;
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
			this.state = 58;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 55;
					this.functionDecl();
					}
					}
				}
				this.state = 60;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 61;
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
	public funType(): FunTypeContext {
		let _localctx: FunTypeContext = new FunTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SimpleParser.RULE_funType);
		try {
			this.state = 65;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleParser.T__8:
			case SimpleParser.T__9:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 63;
				this.varType();
				}
				break;
			case SimpleParser.T__0:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 64;
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
			this.state = 67;
			this.funType();
			this.state = 68;
			this.match(SimpleParser.Identifier);
			this.state = 69;
			this.match(SimpleParser.T__1);
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleParser.T__8 || _la === SimpleParser.T__9) {
				{
				this.state = 70;
				this.paramList();
				}
			}

			this.state = 73;
			this.match(SimpleParser.T__2);
			this.state = 74;
			this.match(SimpleParser.T__3);
			this.state = 75;
			this.block();
			this.state = 76;
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
			this.state = 78;
			this.varType();
			this.state = 79;
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
			this.state = 81;
			this.param();
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleParser.T__5) {
				{
				{
				this.state = 82;
				this.match(SimpleParser.T__5);
				this.state = 83;
				this.param();
				}
				}
				this.state = 88;
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SimpleParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (SimpleParser.T__8 - 9)) | (1 << (SimpleParser.T__9 - 9)) | (1 << (SimpleParser.T__11 - 9)) | (1 << (SimpleParser.T__13 - 9)) | (1 << (SimpleParser.T__14 - 9)) | (1 << (SimpleParser.Identifier - 9)))) !== 0)) {
				{
				{
				this.state = 89;
				this.statement();
				}
				}
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleParser.T__6) {
				{
				this.state = 95;
				this.match(SimpleParser.T__6);
				this.state = 96;
				this.expression(0);
				this.state = 97;
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
			this.state = 113;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 101;
				this.variableDeclaration();
				this.state = 102;
				this.match(SimpleParser.T__7);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 104;
				this.assignment();
				this.state = 105;
				this.match(SimpleParser.T__7);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 107;
				this.functionCall();
				this.state = 108;
				this.match(SimpleParser.T__7);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 110;
				this.ifStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 111;
				this.forStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 112;
				this.whileStatement();
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
	public varType(): VarTypeContext {
		let _localctx: VarTypeContext = new VarTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SimpleParser.RULE_varType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
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
		this.enterRule(_localctx, 18, SimpleParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.varType();
			this.state = 118;
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
		this.enterRule(_localctx, 20, SimpleParser.RULE_initDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.initDeclarator();
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleParser.T__5) {
				{
				{
				this.state = 121;
				this.match(SimpleParser.T__5);
				this.state = 122;
				this.initDeclarator();
				}
				}
				this.state = 127;
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
		this.enterRule(_localctx, 22, SimpleParser.RULE_initDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.match(SimpleParser.Identifier);
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleParser.T__10) {
				{
				this.state = 129;
				this.match(SimpleParser.T__10);
				this.state = 130;
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SimpleParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(SimpleParser.Identifier);
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleParser.T__33) {
				{
				this.state = 134;
				this.indexes();
				}
			}

			this.state = 137;
			this.match(SimpleParser.T__10);
			this.state = 138;
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
		this.enterRule(_localctx, 26, SimpleParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(SimpleParser.Identifier);
			this.state = 141;
			this.match(SimpleParser.T__1);
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleParser.T__1) | (1 << SimpleParser.T__15) | (1 << SimpleParser.T__16))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SimpleParser.T__32 - 33)) | (1 << (SimpleParser.T__33 - 33)) | (1 << (SimpleParser.Bool - 33)) | (1 << (SimpleParser.Number - 33)) | (1 << (SimpleParser.Identifier - 33)) | (1 << (SimpleParser.String - 33)))) !== 0)) {
				{
				this.state = 142;
				this.exprList();
				}
			}

			this.state = 145;
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
		this.enterRule(_localctx, 28, SimpleParser.RULE_ifStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.ifStat();
			this.state = 151;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 148;
					this.elseIfStat();
					}
					}
				}
				this.state = 153;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleParser.T__12) {
				{
				this.state = 154;
				this.elseStat();
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
	public ifStat(): IfStatContext {
		let _localctx: IfStatContext = new IfStatContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SimpleParser.RULE_ifStat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.match(SimpleParser.T__11);
			this.state = 158;
			this.expression(0);
			this.state = 159;
			this.match(SimpleParser.T__3);
			this.state = 160;
			this.block();
			this.state = 161;
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
	public elseIfStat(): ElseIfStatContext {
		let _localctx: ElseIfStatContext = new ElseIfStatContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SimpleParser.RULE_elseIfStat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(SimpleParser.T__12);
			this.state = 164;
			this.match(SimpleParser.T__11);
			this.state = 165;
			this.expression(0);
			this.state = 166;
			this.match(SimpleParser.T__3);
			this.state = 167;
			this.block();
			this.state = 168;
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
	public elseStat(): ElseStatContext {
		let _localctx: ElseStatContext = new ElseStatContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SimpleParser.RULE_elseStat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.match(SimpleParser.T__12);
			this.state = 171;
			this.match(SimpleParser.T__3);
			this.state = 172;
			this.block();
			this.state = 173;
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
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SimpleParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.match(SimpleParser.T__13);
			this.state = 176;
			this.match(SimpleParser.T__1);
			this.state = 177;
			this.forInitial();
			this.state = 178;
			this.match(SimpleParser.T__7);
			this.state = 179;
			this.expression(0);
			this.state = 180;
			this.match(SimpleParser.T__7);
			this.state = 181;
			this.assignment();
			this.state = 182;
			this.match(SimpleParser.T__2);
			this.state = 183;
			this.match(SimpleParser.T__3);
			this.state = 184;
			this.block();
			this.state = 185;
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
	public forInitial(): ForInitialContext {
		let _localctx: ForInitialContext = new ForInitialContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SimpleParser.RULE_forInitial);
		try {
			this.state = 189;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleParser.T__8:
			case SimpleParser.T__9:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 187;
				this.variableDeclaration();
				}
				break;
			case SimpleParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 188;
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
		this.enterRule(_localctx, 40, SimpleParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.match(SimpleParser.T__14);
			this.state = 192;
			this.expression(0);
			this.state = 193;
			this.match(SimpleParser.T__3);
			this.state = 194;
			this.block();
			this.state = 195;
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
	public idList(): IdListContext {
		let _localctx: IdListContext = new IdListContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SimpleParser.RULE_idList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.match(SimpleParser.Identifier);
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleParser.T__5) {
				{
				{
				this.state = 198;
				this.match(SimpleParser.T__5);
				this.state = 199;
				this.match(SimpleParser.Identifier);
				}
				}
				this.state = 204;
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
		this.enterRule(_localctx, 44, SimpleParser.RULE_exprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.expression(0);
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleParser.T__5) {
				{
				{
				this.state = 206;
				this.match(SimpleParser.T__5);
				this.state = 207;
				this.expression(0);
				}
				}
				this.state = 212;
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
		let _startState: number = 46;
		this.enterRecursionRule(_localctx, 46, SimpleParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 214;
				(_localctx as UnaryMinusExpressionContext)._op = this.match(SimpleParser.T__15);
				this.state = 215;
				this.expression(18);
				}
				break;

			case 2:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 216;
				(_localctx as NotExpressionContext)._op = this.match(SimpleParser.T__16);
				this.state = 217;
				this.expression(17);
				}
				break;

			case 3:
				{
				_localctx = new NumberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 218;
				this.match(SimpleParser.Number);
				}
				break;

			case 4:
				{
				_localctx = new BoolExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 219;
				this.match(SimpleParser.Bool);
				}
				break;

			case 5:
				{
				_localctx = new NullExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 220;
				this.match(SimpleParser.T__32);
				}
				break;

			case 6:
				{
				_localctx = new FunctionCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 221;
				this.functionCall();
				this.state = 223;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 222;
					this.indexes();
					}
					break;
				}
				}
				break;

			case 7:
				{
				_localctx = new ListExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 225;
				this.list();
				this.state = 227;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 226;
					this.indexes();
					}
					break;
				}
				}
				break;

			case 8:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 229;
				this.match(SimpleParser.Identifier);
				this.state = 231;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 230;
					this.indexes();
					}
					break;
				}
				}
				break;

			case 9:
				{
				_localctx = new StringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 233;
				this.match(SimpleParser.String);
				this.state = 235;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 234;
					this.indexes();
					}
					break;
				}
				}
				break;

			case 10:
				{
				_localctx = new BracketExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 237;
				this.match(SimpleParser.T__1);
				this.state = 238;
				this.expression(0);
				this.state = 239;
				this.match(SimpleParser.T__2);
				this.state = 241;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 240;
					this.indexes();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 274;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 272;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleParser.RULE_expression);
						this.state = 245;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 246;
						(_localctx as PowerExpressionContext)._op = this.match(SimpleParser.T__17);
						this.state = 247;
						this.expression(16);
						}
						break;

					case 2:
						{
						_localctx = new MultExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleParser.RULE_expression);
						this.state = 248;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 249;
						(_localctx as MultExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleParser.T__18) | (1 << SimpleParser.T__19) | (1 << SimpleParser.T__20))) !== 0))) {
							(_localctx as MultExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 250;
						this.expression(16);
						}
						break;

					case 3:
						{
						_localctx = new AddExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleParser.RULE_expression);
						this.state = 251;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 252;
						(_localctx as AddExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === SimpleParser.T__15 || _la === SimpleParser.T__21)) {
							(_localctx as AddExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 253;
						this.expression(15);
						}
						break;

					case 4:
						{
						_localctx = new CompExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleParser.RULE_expression);
						this.state = 254;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 255;
						(_localctx as CompExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleParser.T__22) | (1 << SimpleParser.T__23) | (1 << SimpleParser.T__24) | (1 << SimpleParser.T__25))) !== 0))) {
							(_localctx as CompExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 256;
						this.expression(14);
						}
						break;

					case 5:
						{
						_localctx = new EqExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleParser.RULE_expression);
						this.state = 257;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 258;
						(_localctx as EqExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === SimpleParser.T__26 || _la === SimpleParser.T__27)) {
							(_localctx as EqExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 259;
						this.expression(13);
						}
						break;

					case 6:
						{
						_localctx = new AndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleParser.RULE_expression);
						this.state = 260;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 261;
						(_localctx as AndExpressionContext)._op = this.match(SimpleParser.T__28);
						this.state = 262;
						this.expression(12);
						}
						break;

					case 7:
						{
						_localctx = new OrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleParser.RULE_expression);
						this.state = 263;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 264;
						(_localctx as OrExpressionContext)._op = this.match(SimpleParser.T__29);
						this.state = 265;
						this.expression(11);
						}
						break;

					case 8:
						{
						_localctx = new TernaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SimpleParser.RULE_expression);
						this.state = 266;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 267;
						(_localctx as TernaryExpressionContext)._op = this.match(SimpleParser.T__30);
						this.state = 268;
						this.expression(0);
						this.state = 269;
						this.match(SimpleParser.T__31);
						this.state = 270;
						this.expression(10);
						}
						break;
					}
					}
				}
				this.state = 276;
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
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SimpleParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this.match(SimpleParser.T__33);
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleParser.T__1) | (1 << SimpleParser.T__15) | (1 << SimpleParser.T__16))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SimpleParser.T__32 - 33)) | (1 << (SimpleParser.T__33 - 33)) | (1 << (SimpleParser.Bool - 33)) | (1 << (SimpleParser.Number - 33)) | (1 << (SimpleParser.Identifier - 33)) | (1 << (SimpleParser.String - 33)))) !== 0)) {
				{
				this.state = 278;
				this.exprList();
				}
			}

			this.state = 281;
			this.match(SimpleParser.T__34);
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
		this.enterRule(_localctx, 50, SimpleParser.RULE_indexes);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 283;
					this.match(SimpleParser.T__33);
					this.state = 284;
					this.expression(0);
					this.state = 285;
					this.match(SimpleParser.T__34);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 289;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
		case 23:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 16);

		case 1:
			return this.precpred(this._ctx, 15);

		case 2:
			return this.precpred(this._ctx, 14);

		case 3:
			return this.precpred(this._ctx, 13);

		case 4:
			return this.precpred(this._ctx, 12);

		case 5:
			return this.precpred(this._ctx, 11);

		case 6:
			return this.precpred(this._ctx, 10);

		case 7:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03+\u0126\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x07\x03;\n\x03\f\x03\x0E\x03>\v\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x05\x04D\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05J\n\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x07\x07W\n\x07\f\x07\x0E\x07Z\v\x07\x03\b\x07\b]\n\b" +
		"\f\b\x0E\b`\v\b\x03\b\x03\b\x03\b\x03\b\x05\bf\n\b\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tt\n\t\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x07\f~\n\f\f\f\x0E\f\x81\v\f\x03" +
		"\r\x03\r\x03\r\x05\r\x86\n\r\x03\x0E\x03\x0E\x05\x0E\x8A\n\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x92\n\x0F\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x07\x10\x98\n\x10\f\x10\x0E\x10\x9B\v\x10\x03\x10" +
		"\x05\x10\x9E\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15\xC0" +
		"\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17" +
		"\x03\x17\x07\x17\xCB\n\x17\f\x17\x0E\x17\xCE\v\x17\x03\x18\x03\x18\x03" +
		"\x18\x07\x18\xD3\n\x18\f\x18\x0E\x18\xD6\v\x18\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\xE2\n" +
		"\x19\x03\x19\x03\x19\x05\x19\xE6\n\x19\x03\x19\x03\x19\x05\x19\xEA\n\x19" +
		"\x03\x19\x03\x19\x05\x19\xEE\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05" +
		"\x19\xF4\n\x19\x05\x19\xF6\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0113\n\x19\f\x19\x0E\x19\u0116" +
		"\v\x19\x03\x1A\x03\x1A\x05\x1A\u011A\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x06\x1B\u0122\n\x1B\r\x1B\x0E\x1B\u0123\x03\x1B\x02" +
		"\x02\x030\x1C\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x02\x02\x07\x03\x02\v\f\x03\x02\x15" +
		"\x17\x04\x02\x12\x12\x18\x18\x03\x02\x19\x1C\x03\x02\x1D\x1E\x02\u0137" +
		"\x026\x03\x02\x02\x02\x04<\x03\x02\x02\x02\x06C\x03\x02\x02\x02\bE\x03" +
		"\x02\x02\x02\nP\x03\x02\x02\x02\fS\x03\x02\x02\x02\x0E^\x03\x02\x02\x02" +
		"\x10s\x03\x02\x02\x02\x12u\x03\x02\x02\x02\x14w\x03\x02\x02\x02\x16z\x03" +
		"\x02\x02\x02\x18\x82\x03\x02\x02\x02\x1A\x87\x03\x02\x02\x02\x1C\x8E\x03" +
		"\x02\x02\x02\x1E\x95\x03\x02\x02\x02 \x9F\x03\x02\x02\x02\"\xA5\x03\x02" +
		"\x02\x02$\xAC\x03\x02\x02\x02&\xB1\x03\x02\x02\x02(\xBF\x03\x02\x02\x02" +
		"*\xC1\x03\x02\x02\x02,\xC7\x03\x02\x02\x02.\xCF\x03\x02\x02\x020\xF5\x03" +
		"\x02\x02\x022\u0117\x03\x02\x02\x024\u0121\x03\x02\x02\x0267\x05\x04\x03" +
		"\x0278\x07\x02\x02\x038\x03\x03\x02\x02\x029;\x05\b\x05\x02:9\x03\x02" +
		"\x02\x02;>\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=?\x03\x02" +
		"\x02\x02><\x03\x02\x02\x02?@\x05\x0E\b\x02@\x05\x03\x02\x02\x02AD\x05" +
		"\x12\n\x02BD\x07\x03\x02\x02CA\x03\x02\x02\x02CB\x03\x02\x02\x02D\x07" +
		"\x03\x02\x02\x02EF\x05\x06\x04\x02FG\x07(\x02\x02GI\x07\x04\x02\x02HJ" +
		"\x05\f\x07\x02IH\x03\x02\x02\x02IJ\x03\x02\x02\x02JK\x03\x02\x02\x02K" +
		"L\x07\x05\x02\x02LM\x07\x06\x02\x02MN\x05\x0E\b\x02NO\x07\x07\x02\x02" +
		"O\t\x03\x02\x02\x02PQ\x05\x12\n\x02QR\x07(\x02\x02R\v\x03\x02\x02\x02" +
		"SX\x05\n\x06\x02TU\x07\b\x02\x02UW\x05\n\x06\x02VT\x03\x02\x02\x02WZ\x03" +
		"\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02Y\r\x03\x02\x02\x02ZX" +
		"\x03\x02\x02\x02[]\x05\x10\t\x02\\[\x03\x02\x02\x02]`\x03\x02\x02\x02" +
		"^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_e\x03\x02\x02\x02`^\x03\x02\x02" +
		"\x02ab\x07\t\x02\x02bc\x050\x19\x02cd\x07\n\x02\x02df\x03\x02\x02\x02" +
		"ea\x03\x02\x02\x02ef\x03\x02\x02\x02f\x0F\x03\x02\x02\x02gh\x05\x14\v" +
		"\x02hi\x07\n\x02\x02it\x03\x02\x02\x02jk\x05\x1A\x0E\x02kl\x07\n\x02\x02" +
		"lt\x03\x02\x02\x02mn\x05\x1C\x0F\x02no\x07\n\x02\x02ot\x03\x02\x02\x02" +
		"pt\x05\x1E\x10\x02qt\x05&\x14\x02rt\x05*\x16\x02sg\x03\x02\x02\x02sj\x03" +
		"\x02\x02\x02sm\x03\x02\x02\x02sp\x03\x02\x02\x02sq\x03\x02\x02\x02sr\x03" +
		"\x02\x02\x02t\x11\x03\x02\x02\x02uv\t\x02\x02\x02v\x13\x03\x02\x02\x02" +
		"wx\x05\x12\n\x02xy\x05\x16\f\x02y\x15\x03\x02\x02\x02z\x7F\x05\x18\r\x02" +
		"{|\x07\b\x02\x02|~\x05\x18\r\x02}{\x03\x02\x02\x02~\x81\x03\x02\x02\x02" +
		"\x7F}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x17\x03\x02\x02\x02" +
		"\x81\x7F\x03\x02\x02\x02\x82\x85\x07(\x02\x02\x83\x84\x07\r\x02\x02\x84" +
		"\x86\x050\x19\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86" +
		"\x19\x03\x02\x02\x02\x87\x89\x07(\x02\x02\x88\x8A\x054\x1B\x02\x89\x88" +
		"\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C" +
		"\x07\r\x02\x02\x8C\x8D\x050\x19\x02\x8D\x1B\x03\x02\x02\x02\x8E\x8F\x07" +
		"(\x02\x02\x8F\x91\x07\x04\x02\x02\x90\x92\x05.\x18\x02\x91\x90\x03\x02" +
		"\x02\x02\x91\x92\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x07\x05" +
		"\x02\x02\x94\x1D\x03\x02\x02\x02\x95\x99\x05 \x11\x02\x96\x98\x05\"\x12" +
		"\x02\x97\x96\x03\x02\x02\x02\x98\x9B\x03\x02\x02\x02\x99\x97\x03\x02\x02" +
		"\x02\x99\x9A\x03\x02\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02" +
		"\x02\x9C\x9E\x05$\x13\x02\x9D\x9C\x03\x02\x02\x02\x9D\x9E\x03\x02\x02" +
		"\x02\x9E\x1F\x03\x02\x02\x02\x9F\xA0\x07\x0E\x02\x02\xA0\xA1\x050\x19" +
		"\x02\xA1\xA2\x07\x06\x02\x02\xA2\xA3\x05\x0E\b\x02\xA3\xA4\x07\x07\x02" +
		"\x02\xA4!\x03\x02\x02\x02\xA5\xA6\x07\x0F\x02\x02\xA6\xA7\x07\x0E\x02" +
		"\x02\xA7\xA8\x050\x19\x02\xA8\xA9\x07\x06\x02\x02\xA9\xAA\x05\x0E\b\x02" +
		"\xAA\xAB\x07\x07\x02\x02\xAB#\x03\x02\x02\x02\xAC\xAD\x07\x0F\x02\x02" +
		"\xAD\xAE\x07\x06\x02\x02\xAE\xAF\x05\x0E\b\x02\xAF\xB0\x07\x07\x02\x02" +
		"\xB0%\x03\x02\x02\x02\xB1\xB2\x07\x10\x02\x02\xB2\xB3\x07\x04\x02\x02" +
		"\xB3\xB4\x05(\x15\x02\xB4\xB5\x07\n\x02\x02\xB5\xB6\x050\x19\x02\xB6\xB7" +
		"\x07\n\x02\x02\xB7\xB8\x05\x1A\x0E\x02\xB8\xB9\x07\x05\x02\x02\xB9\xBA" +
		"\x07\x06\x02\x02\xBA\xBB\x05\x0E\b\x02\xBB\xBC\x07\x07\x02\x02\xBC\'\x03" +
		"\x02\x02\x02\xBD\xC0\x05\x14\v\x02\xBE\xC0\x05\x1A\x0E\x02\xBF\xBD\x03" +
		"\x02\x02\x02\xBF\xBE\x03\x02\x02\x02\xC0)\x03\x02\x02\x02\xC1\xC2\x07" +
		"\x11\x02\x02\xC2\xC3\x050\x19\x02\xC3\xC4\x07\x06\x02\x02\xC4\xC5\x05" +
		"\x0E\b\x02\xC5\xC6\x07\x07\x02\x02\xC6+\x03\x02\x02\x02\xC7\xCC\x07(\x02" +
		"\x02\xC8\xC9\x07\b\x02\x02\xC9\xCB\x07(\x02\x02\xCA\xC8\x03\x02\x02\x02" +
		"\xCB\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02" +
		"\xCD-\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF\xD4\x050\x19\x02\xD0" +
		"\xD1\x07\b\x02\x02\xD1\xD3\x050\x19\x02\xD2\xD0\x03\x02\x02\x02\xD3\xD6" +
		"\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5/" +
		"\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD7\xD8\b\x19\x01\x02\xD8\xD9" +
		"\x07\x12\x02\x02\xD9\xF6\x050\x19\x14\xDA\xDB\x07\x13\x02\x02\xDB\xF6" +
		"\x050\x19\x13\xDC\xF6\x07\'\x02\x02\xDD\xF6\x07&\x02\x02\xDE\xF6\x07#" +
		"\x02\x02\xDF\xE1\x05\x1C\x0F\x02\xE0\xE2\x054\x1B\x02\xE1\xE0\x03\x02" +
		"\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xF6\x03\x02\x02\x02\xE3\xE5\x052" +
		"\x1A\x02\xE4\xE6\x054\x1B\x02\xE5\xE4\x03\x02\x02\x02\xE5\xE6\x03\x02" +
		"\x02\x02\xE6\xF6\x03\x02\x02\x02\xE7\xE9\x07(\x02\x02\xE8\xEA\x054\x1B" +
		"\x02\xE9\xE8\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xF6\x03\x02\x02" +
		"\x02\xEB\xED\x07)\x02\x02\xEC\xEE\x054\x1B\x02\xED\xEC\x03\x02\x02\x02" +
		"\xED\xEE\x03\x02\x02\x02\xEE\xF6\x03\x02\x02\x02\xEF\xF0\x07\x04\x02\x02" +
		"\xF0\xF1\x050\x19\x02\xF1\xF3\x07\x05\x02\x02\xF2\xF4\x054\x1B\x02\xF3" +
		"\xF2\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF6\x03\x02\x02\x02\xF5" +
		"\xD7\x03\x02\x02\x02\xF5\xDA\x03\x02\x02\x02\xF5\xDC\x03\x02\x02\x02\xF5" +
		"\xDD\x03\x02\x02\x02\xF5\xDE\x03\x02\x02\x02\xF5\xDF\x03\x02\x02\x02\xF5" +
		"\xE3\x03\x02\x02\x02\xF5\xE7\x03\x02\x02\x02\xF5\xEB\x03\x02\x02\x02\xF5" +
		"\xEF\x03\x02\x02\x02\xF6\u0114\x03\x02\x02\x02\xF7\xF8\f\x12\x02\x02\xF8" +
		"\xF9\x07\x14\x02\x02\xF9\u0113\x050\x19\x12\xFA\xFB\f\x11\x02\x02\xFB" +
		"\xFC\t\x03\x02\x02\xFC\u0113\x050\x19\x12\xFD\xFE\f\x10\x02\x02\xFE\xFF" +
		"\t\x04\x02\x02\xFF\u0113\x050\x19\x11\u0100\u0101\f\x0F\x02\x02\u0101" +
		"\u0102\t\x05\x02\x02\u0102\u0113\x050\x19\x10\u0103\u0104\f\x0E\x02\x02" +
		"\u0104\u0105\t\x06\x02\x02\u0105\u0113\x050\x19\x0F\u0106\u0107\f\r\x02" +
		"\x02\u0107\u0108\x07\x1F\x02\x02\u0108\u0113\x050\x19\x0E\u0109\u010A" +
		"\f\f\x02\x02\u010A\u010B\x07 \x02\x02\u010B\u0113\x050\x19\r\u010C\u010D" +
		"\f\v\x02\x02\u010D\u010E\x07!\x02\x02\u010E\u010F\x050\x19\x02\u010F\u0110" +
		"\x07\"\x02\x02\u0110\u0111\x050\x19\f\u0111\u0113\x03\x02\x02\x02\u0112" +
		"\xF7\x03\x02\x02\x02\u0112\xFA\x03\x02\x02\x02\u0112\xFD\x03\x02\x02\x02" +
		"\u0112\u0100\x03\x02\x02\x02\u0112\u0103\x03\x02\x02\x02\u0112\u0106\x03" +
		"\x02\x02\x02\u0112\u0109\x03\x02\x02\x02\u0112\u010C\x03\x02\x02\x02\u0113" +
		"\u0116\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0114\u0115\x03\x02" +
		"\x02\x02\u01151\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0117\u0119" +
		"\x07$\x02\x02\u0118\u011A\x05.\x18\x02\u0119\u0118\x03\x02\x02\x02\u0119" +
		"\u011A\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x07%\x02" +
		"\x02\u011C3\x03\x02\x02\x02\u011D\u011E\x07$\x02\x02\u011E\u011F\x050" +
		"\x19\x02\u011F\u0120\x07%\x02\x02\u0120\u0122\x03\x02\x02\x02\u0121\u011D" +
		"\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02" +
		"\u0123\u0124\x03\x02\x02\x02\u01245\x03\x02\x02\x02\x1C<CIX^es\x7F\x85" +
		"\x89\x91\x99\x9D\xBF\xCC\xD4\xE1\xE5\xE9\xED\xF3\xF5\u0112\u0114\u0119" +
		"\u0123";
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
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
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
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
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


export class BlockContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return SimpleParser.RULE_block; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
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
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
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


export class AssignmentContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SimpleParser.Identifier, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
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
	public ifStat(): IfStatContext {
		return this.getRuleContext(0, IfStatContext);
	}
	public elseIfStat(): ElseIfStatContext[];
	public elseIfStat(i: number): ElseIfStatContext;
	public elseIfStat(i?: number): ElseIfStatContext | ElseIfStatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseIfStatContext);
		} else {
			return this.getRuleContext(i, ElseIfStatContext);
		}
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


export class IfStatContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_ifStat; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterIfStat) {
			listener.enterIfStat(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitIfStat) {
			listener.exitIfStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitIfStat) {
			return visitor.visitIfStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseIfStatContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleParser.RULE_elseIfStat; }
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterElseIfStat) {
			listener.enterElseIfStat(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitElseIfStat) {
			listener.exitElseIfStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitElseIfStat) {
			return visitor.visitElseIfStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseStatContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
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
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
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
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
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
export class NumberExpressionContext extends ExpressionContext {
	public Number(): TerminalNode { return this.getToken(SimpleParser.Number, 0); }
	constructor(ctx: ExpressionContext) {
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
export class BoolExpressionContext extends ExpressionContext {
	public Bool(): TerminalNode { return this.getToken(SimpleParser.Bool, 0); }
	constructor(ctx: ExpressionContext) {
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
export class NullExpressionContext extends ExpressionContext {
	constructor(ctx: ExpressionContext) {
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
export class FunctionCallExpressionContext extends ExpressionContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
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
export class ListExpressionContext extends ExpressionContext {
	public list(): ListContext {
		return this.getRuleContext(0, ListContext);
	}
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SimpleListener): void {
		if (listener.enterListExpression) {
			listener.enterListExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitListExpression) {
			listener.exitListExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitListExpression) {
			return visitor.visitListExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends ExpressionContext {
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
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringExpressionContext extends ExpressionContext {
	public String(): TerminalNode { return this.getToken(SimpleParser.String, 0); }
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(ctx: ExpressionContext) {
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
export class BracketExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
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


