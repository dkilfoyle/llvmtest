// Generated from /home/dkilfoyle/llvmtest/src/SimpleASM.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { SimpleASMListener } from "./SimpleASMListener";
import { SimpleASMVisitor } from "./SimpleASMVisitor";


export class SimpleASMParser extends Parser {
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
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly REG = 78;
	public static readonly INT = 79;
	public static readonly HEX = 80;
	public static readonly BIN = 81;
	public static readonly ID = 82;
	public static readonly String = 83;
	public static readonly Comment = 84;
	public static readonly Space = 85;
	public static readonly RULE_program = 0;
	public static readonly RULE_lines = 1;
	public static readonly RULE_line = 2;
	public static readonly RULE_directive = 3;
	public static readonly RULE_section = 4;
	public static readonly RULE_global = 5;
	public static readonly RULE_align = 6;
	public static readonly RULE_data = 7;
	public static readonly RULE_label = 8;
	public static readonly RULE_instruction = 9;
	public static readonly RULE_pseudo = 10;
	public static readonly RULE_environment = 11;
	public static readonly RULE_rtype = 12;
	public static readonly RULE_itype = 13;
	public static readonly RULE_stype = 14;
	public static readonly RULE_btype = 15;
	public static readonly RULE_jtype = 16;
	public static readonly RULE_utype = 17;
	public static readonly RULE_offset = 18;
	public static readonly RULE_register = 19;
	public static readonly RULE_immediate = 20;
	public static readonly RULE_numlist = 21;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "lines", "line", "directive", "section", "global", "align", 
		"data", "label", "instruction", "pseudo", "environment", "rtype", "itype", 
		"stype", "btype", "jtype", "utype", "offset", "register", "immediate", 
		"numlist",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'section'", "'.text'", "'.data'", "'.rodata'", "'.bss'", "'.global'", 
		"'.globl'", "'.align'", "'.string'", "'.ascii'", "'.asciiz'", "'.byte'", 
		"'.word'", "':'", "'la'", "','", "'li'", "'mv'", "'not'", "'seqz'", "'sltz'", 
		"'sgtz'", "'beqz'", "'bnez'", "'blez'", "'bgez'", "'bltz'", "'bgtz'", 
		"'bgt'", "'ble'", "'bgtu'", "'bltu'", "'j'", "'jal'", "'jr'", "'jalr'", 
		"'ret'", "'call'", "'ecall'", "'add'", "'sub'", "'xor'", "'or'", "'and'", 
		"'sll'", "'srl'", "'sra'", "'slt'", "'su'", "'addi'", "'xori'", "'andi'", 
		"'ori'", "'slli'", "'srli'", "'srai'", "'slti'", "'sltiu'", "'lb'", "'lw'", 
		"'('", "')'", "'sb'", "'sw'", "'beq'", "'bne'", "'blt'", "'bge'", "'bgeu'", 
		"'lui'", "'auipc'", "'zero'", "'ra'", "'sp'", "'gp'", "'tp'", "'fp'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "REG", "INT", "HEX", "BIN", "ID", "String", "Comment", "Space",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SimpleASMParser._LITERAL_NAMES, SimpleASMParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SimpleASMParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SimpleASM.g4"; }

	// @Override
	public get ruleNames(): string[] { return SimpleASMParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SimpleASMParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SimpleASMParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SimpleASMParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.lines();
			this.state = 45;
			this.match(SimpleASMParser.EOF);
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
	public lines(): LinesContext {
		let _localctx: LinesContext = new LinesContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SimpleASMParser.RULE_lines);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleASMParser.T__0) | (1 << SimpleASMParser.T__1) | (1 << SimpleASMParser.T__2) | (1 << SimpleASMParser.T__3) | (1 << SimpleASMParser.T__4) | (1 << SimpleASMParser.T__5) | (1 << SimpleASMParser.T__6) | (1 << SimpleASMParser.T__7) | (1 << SimpleASMParser.T__14) | (1 << SimpleASMParser.T__16) | (1 << SimpleASMParser.T__17) | (1 << SimpleASMParser.T__18) | (1 << SimpleASMParser.T__19) | (1 << SimpleASMParser.T__20) | (1 << SimpleASMParser.T__21) | (1 << SimpleASMParser.T__22) | (1 << SimpleASMParser.T__23) | (1 << SimpleASMParser.T__24) | (1 << SimpleASMParser.T__25) | (1 << SimpleASMParser.T__26) | (1 << SimpleASMParser.T__27) | (1 << SimpleASMParser.T__28) | (1 << SimpleASMParser.T__29) | (1 << SimpleASMParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SimpleASMParser.T__31 - 32)) | (1 << (SimpleASMParser.T__32 - 32)) | (1 << (SimpleASMParser.T__33 - 32)) | (1 << (SimpleASMParser.T__34 - 32)) | (1 << (SimpleASMParser.T__35 - 32)) | (1 << (SimpleASMParser.T__36 - 32)) | (1 << (SimpleASMParser.T__37 - 32)) | (1 << (SimpleASMParser.T__38 - 32)) | (1 << (SimpleASMParser.T__39 - 32)) | (1 << (SimpleASMParser.T__40 - 32)) | (1 << (SimpleASMParser.T__41 - 32)) | (1 << (SimpleASMParser.T__42 - 32)) | (1 << (SimpleASMParser.T__43 - 32)) | (1 << (SimpleASMParser.T__44 - 32)) | (1 << (SimpleASMParser.T__45 - 32)) | (1 << (SimpleASMParser.T__46 - 32)) | (1 << (SimpleASMParser.T__47 - 32)) | (1 << (SimpleASMParser.T__48 - 32)) | (1 << (SimpleASMParser.T__49 - 32)) | (1 << (SimpleASMParser.T__50 - 32)) | (1 << (SimpleASMParser.T__51 - 32)) | (1 << (SimpleASMParser.T__52 - 32)) | (1 << (SimpleASMParser.T__53 - 32)) | (1 << (SimpleASMParser.T__54 - 32)) | (1 << (SimpleASMParser.T__55 - 32)) | (1 << (SimpleASMParser.T__56 - 32)) | (1 << (SimpleASMParser.T__57 - 32)) | (1 << (SimpleASMParser.T__58 - 32)) | (1 << (SimpleASMParser.T__59 - 32)) | (1 << (SimpleASMParser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SimpleASMParser.T__63 - 64)) | (1 << (SimpleASMParser.T__64 - 64)) | (1 << (SimpleASMParser.T__65 - 64)) | (1 << (SimpleASMParser.T__66 - 64)) | (1 << (SimpleASMParser.T__67 - 64)) | (1 << (SimpleASMParser.T__68 - 64)) | (1 << (SimpleASMParser.T__69 - 64)) | (1 << (SimpleASMParser.T__70 - 64)) | (1 << (SimpleASMParser.ID - 64)))) !== 0)) {
				{
				{
				this.state = 47;
				this.line();
				}
				}
				this.state = 52;
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
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SimpleASMParser.RULE_line);
		try {
			this.state = 57;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 53;
				this.data();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 54;
				this.directive();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 55;
				this.instruction();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 56;
				this.label();
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
	public directive(): DirectiveContext {
		let _localctx: DirectiveContext = new DirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SimpleASMParser.RULE_directive);
		try {
			this.state = 62;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleASMParser.T__0:
			case SimpleASMParser.T__1:
			case SimpleASMParser.T__2:
			case SimpleASMParser.T__3:
			case SimpleASMParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 59;
				this.section();
				}
				break;
			case SimpleASMParser.T__5:
			case SimpleASMParser.T__6:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 60;
				this.global();
				}
				break;
			case SimpleASMParser.T__7:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 61;
				this.align();
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
	public section(): SectionContext {
		let _localctx: SectionContext = new SectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SimpleASMParser.RULE_section);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SimpleASMParser.T__0) {
				{
				this.state = 64;
				this.match(SimpleASMParser.T__0);
				}
			}

			this.state = 67;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleASMParser.T__1) | (1 << SimpleASMParser.T__2) | (1 << SimpleASMParser.T__3) | (1 << SimpleASMParser.T__4))) !== 0))) {
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
	public global(): GlobalContext {
		let _localctx: GlobalContext = new GlobalContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SimpleASMParser.RULE_global);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			_la = this._input.LA(1);
			if (!(_la === SimpleASMParser.T__5 || _la === SimpleASMParser.T__6)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 70;
			this.match(SimpleASMParser.ID);
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
	public align(): AlignContext {
		let _localctx: AlignContext = new AlignContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SimpleASMParser.RULE_align);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(SimpleASMParser.T__7);
			this.state = 73;
			this.immediate();
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
	public data(): DataContext {
		let _localctx: DataContext = new DataContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SimpleASMParser.RULE_data);
		let _la: number;
		try {
			this.state = 87;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 75;
				_localctx._name = this.label();
				this.state = 76;
				_localctx._type = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleASMParser.T__8) | (1 << SimpleASMParser.T__9) | (1 << SimpleASMParser.T__10))) !== 0))) {
					_localctx._type = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 77;
				this.match(SimpleASMParser.String);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 79;
				_localctx._name = this.label();
				this.state = 80;
				_localctx._type = this.match(SimpleASMParser.T__11);
				this.state = 81;
				this.numlist();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 83;
				_localctx._name = this.label();
				this.state = 84;
				_localctx._type = this.match(SimpleASMParser.T__12);
				this.state = 85;
				this.numlist();
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
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SimpleASMParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.match(SimpleASMParser.ID);
			this.state = 90;
			this.match(SimpleASMParser.T__13);
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
	public instruction(): InstructionContext {
		let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SimpleASMParser.RULE_instruction);
		try {
			this.state = 100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 92;
				this.pseudo();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 93;
				this.environment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 94;
				this.rtype();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 95;
				this.itype();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 96;
				this.stype();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 97;
				this.utype();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 98;
				this.jtype();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 99;
				this.btype();
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
	public pseudo(): PseudoContext {
		let _localctx: PseudoContext = new PseudoContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SimpleASMParser.RULE_pseudo);
		try {
			this.state = 206;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleASMParser.T__14:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 102;
				_localctx._op = this.match(SimpleASMParser.T__14);
				this.state = 103;
				_localctx._rd = this.register();
				this.state = 104;
				this.match(SimpleASMParser.T__15);
				this.state = 105;
				_localctx._id = this.match(SimpleASMParser.ID);
				}
				break;
			case SimpleASMParser.T__16:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 107;
				_localctx._op = this.match(SimpleASMParser.T__16);
				this.state = 108;
				_localctx._rd = this.register();
				this.state = 109;
				this.match(SimpleASMParser.T__15);
				this.state = 110;
				this.immediate();
				}
				break;
			case SimpleASMParser.T__17:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 112;
				_localctx._op = this.match(SimpleASMParser.T__17);
				this.state = 113;
				_localctx._rd = this.register();
				this.state = 114;
				this.match(SimpleASMParser.T__15);
				this.state = 115;
				_localctx._rs = this.register();
				}
				break;
			case SimpleASMParser.T__18:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 117;
				_localctx._op = this.match(SimpleASMParser.T__18);
				this.state = 118;
				_localctx._rd = this.register();
				this.state = 119;
				this.match(SimpleASMParser.T__15);
				this.state = 120;
				_localctx._rs = this.register();
				}
				break;
			case SimpleASMParser.T__19:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 122;
				_localctx._op = this.match(SimpleASMParser.T__19);
				this.state = 123;
				_localctx._rd = this.register();
				this.state = 124;
				this.match(SimpleASMParser.T__15);
				this.state = 125;
				_localctx._rs = this.register();
				}
				break;
			case SimpleASMParser.T__20:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 127;
				_localctx._op = this.match(SimpleASMParser.T__20);
				this.state = 128;
				_localctx._rd = this.register();
				this.state = 129;
				this.match(SimpleASMParser.T__15);
				this.state = 130;
				_localctx._rs = this.register();
				}
				break;
			case SimpleASMParser.T__21:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 132;
				_localctx._op = this.match(SimpleASMParser.T__21);
				this.state = 133;
				_localctx._rd = this.register();
				this.state = 134;
				this.match(SimpleASMParser.T__15);
				this.state = 135;
				_localctx._rs = this.register();
				}
				break;
			case SimpleASMParser.T__22:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 137;
				_localctx._op = this.match(SimpleASMParser.T__22);
				this.state = 138;
				_localctx._rd = this.register();
				this.state = 139;
				this.match(SimpleASMParser.T__15);
				this.state = 140;
				this.offset();
				}
				break;
			case SimpleASMParser.T__23:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 142;
				_localctx._op = this.match(SimpleASMParser.T__23);
				this.state = 143;
				_localctx._rd = this.register();
				this.state = 144;
				this.match(SimpleASMParser.T__15);
				this.state = 145;
				this.offset();
				}
				break;
			case SimpleASMParser.T__24:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 147;
				_localctx._op = this.match(SimpleASMParser.T__24);
				this.state = 148;
				_localctx._rd = this.register();
				this.state = 149;
				this.match(SimpleASMParser.T__15);
				this.state = 150;
				this.offset();
				}
				break;
			case SimpleASMParser.T__25:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 152;
				_localctx._op = this.match(SimpleASMParser.T__25);
				this.state = 153;
				_localctx._rd = this.register();
				this.state = 154;
				this.match(SimpleASMParser.T__15);
				this.state = 155;
				this.offset();
				}
				break;
			case SimpleASMParser.T__26:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 157;
				_localctx._op = this.match(SimpleASMParser.T__26);
				this.state = 158;
				_localctx._rd = this.register();
				this.state = 159;
				this.match(SimpleASMParser.T__15);
				this.state = 160;
				this.offset();
				}
				break;
			case SimpleASMParser.T__27:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 162;
				_localctx._op = this.match(SimpleASMParser.T__27);
				this.state = 163;
				_localctx._rd = this.register();
				this.state = 164;
				this.match(SimpleASMParser.T__15);
				this.state = 165;
				this.offset();
				}
				break;
			case SimpleASMParser.T__28:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 167;
				_localctx._op = this.match(SimpleASMParser.T__28);
				this.state = 168;
				_localctx._rs = this.register();
				this.state = 169;
				this.match(SimpleASMParser.T__15);
				this.state = 170;
				_localctx._rt = this.register();
				this.state = 171;
				this.match(SimpleASMParser.T__15);
				this.state = 172;
				this.offset();
				}
				break;
			case SimpleASMParser.T__29:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 174;
				_localctx._op = this.match(SimpleASMParser.T__29);
				this.state = 175;
				_localctx._rs = this.register();
				this.state = 176;
				this.match(SimpleASMParser.T__15);
				this.state = 177;
				_localctx._rt = this.register();
				this.state = 178;
				this.match(SimpleASMParser.T__15);
				this.state = 179;
				this.offset();
				}
				break;
			case SimpleASMParser.T__30:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 181;
				_localctx._op = this.match(SimpleASMParser.T__30);
				this.state = 182;
				_localctx._rs = this.register();
				this.state = 183;
				this.match(SimpleASMParser.T__15);
				this.state = 184;
				_localctx._rt = this.register();
				this.state = 185;
				this.match(SimpleASMParser.T__15);
				this.state = 186;
				this.offset();
				}
				break;
			case SimpleASMParser.T__31:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 188;
				_localctx._op = this.match(SimpleASMParser.T__31);
				this.state = 189;
				_localctx._rs = this.register();
				this.state = 190;
				this.match(SimpleASMParser.T__15);
				this.state = 191;
				_localctx._rt = this.register();
				this.state = 192;
				this.match(SimpleASMParser.T__15);
				this.state = 193;
				this.offset();
				}
				break;
			case SimpleASMParser.T__32:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 195;
				_localctx._op = this.match(SimpleASMParser.T__32);
				this.state = 196;
				this.offset();
				}
				break;
			case SimpleASMParser.T__33:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 197;
				_localctx._op = this.match(SimpleASMParser.T__33);
				this.state = 198;
				this.offset();
				}
				break;
			case SimpleASMParser.T__34:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 199;
				_localctx._op = this.match(SimpleASMParser.T__34);
				this.state = 200;
				_localctx._rs = this.register();
				}
				break;
			case SimpleASMParser.T__35:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 201;
				_localctx._op = this.match(SimpleASMParser.T__35);
				this.state = 202;
				_localctx._rs = this.register();
				}
				break;
			case SimpleASMParser.T__36:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 203;
				_localctx._op = this.match(SimpleASMParser.T__36);
				}
				break;
			case SimpleASMParser.T__37:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 204;
				_localctx._op = this.match(SimpleASMParser.T__37);
				this.state = 205;
				this.offset();
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
	public environment(): EnvironmentContext {
		let _localctx: EnvironmentContext = new EnvironmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SimpleASMParser.RULE_environment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(SimpleASMParser.T__38);
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
	public rtype(): RtypeContext {
		let _localctx: RtypeContext = new RtypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SimpleASMParser.RULE_rtype);
		try {
			this.state = 280;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleASMParser.T__39:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 210;
				_localctx._op = this.match(SimpleASMParser.T__39);
				this.state = 211;
				_localctx._rd = this.register();
				this.state = 212;
				this.match(SimpleASMParser.T__15);
				this.state = 213;
				_localctx._rs1 = this.register();
				this.state = 214;
				this.match(SimpleASMParser.T__15);
				this.state = 215;
				_localctx._rs2 = this.register();
				}
				break;
			case SimpleASMParser.T__40:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 217;
				_localctx._op = this.match(SimpleASMParser.T__40);
				this.state = 218;
				_localctx._rd = this.register();
				this.state = 219;
				this.match(SimpleASMParser.T__15);
				this.state = 220;
				_localctx._rs1 = this.register();
				this.state = 221;
				this.match(SimpleASMParser.T__15);
				this.state = 222;
				_localctx._rs2 = this.register();
				}
				break;
			case SimpleASMParser.T__41:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 224;
				_localctx._op = this.match(SimpleASMParser.T__41);
				this.state = 225;
				_localctx._rd = this.register();
				this.state = 226;
				this.match(SimpleASMParser.T__15);
				this.state = 227;
				_localctx._rs1 = this.register();
				this.state = 228;
				this.match(SimpleASMParser.T__15);
				this.state = 229;
				_localctx._rs2 = this.register();
				}
				break;
			case SimpleASMParser.T__42:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 231;
				_localctx._op = this.match(SimpleASMParser.T__42);
				this.state = 232;
				_localctx._rd = this.register();
				this.state = 233;
				this.match(SimpleASMParser.T__15);
				this.state = 234;
				_localctx._rs1 = this.register();
				this.state = 235;
				this.match(SimpleASMParser.T__15);
				this.state = 236;
				_localctx._rs2 = this.register();
				}
				break;
			case SimpleASMParser.T__43:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 238;
				_localctx._op = this.match(SimpleASMParser.T__43);
				this.state = 239;
				_localctx._rd = this.register();
				this.state = 240;
				this.match(SimpleASMParser.T__15);
				this.state = 241;
				_localctx._rs1 = this.register();
				this.state = 242;
				this.match(SimpleASMParser.T__15);
				this.state = 243;
				_localctx._rs2 = this.register();
				}
				break;
			case SimpleASMParser.T__44:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 245;
				_localctx._op = this.match(SimpleASMParser.T__44);
				this.state = 246;
				_localctx._rd = this.register();
				this.state = 247;
				this.match(SimpleASMParser.T__15);
				this.state = 248;
				_localctx._rs1 = this.register();
				this.state = 249;
				this.match(SimpleASMParser.T__15);
				this.state = 250;
				_localctx._rs2 = this.register();
				}
				break;
			case SimpleASMParser.T__45:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 252;
				_localctx._op = this.match(SimpleASMParser.T__45);
				this.state = 253;
				_localctx._rd = this.register();
				this.state = 254;
				this.match(SimpleASMParser.T__15);
				this.state = 255;
				_localctx._rs1 = this.register();
				this.state = 256;
				this.match(SimpleASMParser.T__15);
				this.state = 257;
				_localctx._rs2 = this.register();
				}
				break;
			case SimpleASMParser.T__46:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 259;
				_localctx._op = this.match(SimpleASMParser.T__46);
				this.state = 260;
				_localctx._rd = this.register();
				this.state = 261;
				this.match(SimpleASMParser.T__15);
				this.state = 262;
				_localctx._rs1 = this.register();
				this.state = 263;
				this.match(SimpleASMParser.T__15);
				this.state = 264;
				_localctx._rs2 = this.register();
				}
				break;
			case SimpleASMParser.T__47:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 266;
				_localctx._op = this.match(SimpleASMParser.T__47);
				this.state = 267;
				_localctx._rd = this.register();
				this.state = 268;
				this.match(SimpleASMParser.T__15);
				this.state = 269;
				_localctx._rs1 = this.register();
				this.state = 270;
				this.match(SimpleASMParser.T__15);
				this.state = 271;
				_localctx._rs2 = this.register();
				}
				break;
			case SimpleASMParser.T__48:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 273;
				_localctx._op = this.match(SimpleASMParser.T__48);
				this.state = 274;
				_localctx._rd = this.register();
				this.state = 275;
				this.match(SimpleASMParser.T__15);
				this.state = 276;
				_localctx._rs1 = this.register();
				this.state = 277;
				this.match(SimpleASMParser.T__15);
				this.state = 278;
				_localctx._rs2 = this.register();
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
	public itype(): ItypeContext {
		let _localctx: ItypeContext = new ItypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SimpleASMParser.RULE_itype);
		try {
			this.state = 367;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 282;
				_localctx._op = this.match(SimpleASMParser.T__49);
				this.state = 283;
				_localctx._rd = this.register();
				this.state = 284;
				this.match(SimpleASMParser.T__15);
				this.state = 285;
				_localctx._rs = this.register();
				this.state = 286;
				this.match(SimpleASMParser.T__15);
				this.state = 287;
				this.immediate();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 289;
				_localctx._op = this.match(SimpleASMParser.T__50);
				this.state = 290;
				_localctx._rd = this.register();
				this.state = 291;
				this.match(SimpleASMParser.T__15);
				this.state = 292;
				_localctx._rs = this.register();
				this.state = 293;
				this.match(SimpleASMParser.T__15);
				this.state = 294;
				this.immediate();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 296;
				_localctx._op = this.match(SimpleASMParser.T__51);
				this.state = 297;
				_localctx._rd = this.register();
				this.state = 298;
				this.match(SimpleASMParser.T__15);
				this.state = 299;
				_localctx._rs = this.register();
				this.state = 300;
				this.match(SimpleASMParser.T__15);
				this.state = 301;
				this.immediate();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 303;
				_localctx._op = this.match(SimpleASMParser.T__52);
				this.state = 304;
				_localctx._rd = this.register();
				this.state = 305;
				this.match(SimpleASMParser.T__15);
				this.state = 306;
				_localctx._rs = this.register();
				this.state = 307;
				this.match(SimpleASMParser.T__15);
				this.state = 308;
				this.immediate();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 310;
				_localctx._op = this.match(SimpleASMParser.T__53);
				this.state = 311;
				_localctx._rd = this.register();
				this.state = 312;
				this.match(SimpleASMParser.T__15);
				this.state = 313;
				_localctx._rs = this.register();
				this.state = 314;
				this.match(SimpleASMParser.T__15);
				this.state = 315;
				this.immediate();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 317;
				_localctx._op = this.match(SimpleASMParser.T__54);
				this.state = 318;
				_localctx._rd = this.register();
				this.state = 319;
				this.match(SimpleASMParser.T__15);
				this.state = 320;
				_localctx._rs = this.register();
				this.state = 321;
				this.match(SimpleASMParser.T__15);
				this.state = 322;
				this.immediate();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 324;
				_localctx._op = this.match(SimpleASMParser.T__55);
				this.state = 325;
				_localctx._rd = this.register();
				this.state = 326;
				this.match(SimpleASMParser.T__15);
				this.state = 327;
				_localctx._rs = this.register();
				this.state = 328;
				this.match(SimpleASMParser.T__15);
				this.state = 329;
				this.immediate();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 331;
				_localctx._op = this.match(SimpleASMParser.T__56);
				this.state = 332;
				_localctx._rd = this.register();
				this.state = 333;
				this.match(SimpleASMParser.T__15);
				this.state = 334;
				_localctx._rs = this.register();
				this.state = 335;
				this.match(SimpleASMParser.T__15);
				this.state = 336;
				this.immediate();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 338;
				_localctx._op = this.match(SimpleASMParser.T__57);
				this.state = 339;
				_localctx._rd = this.register();
				this.state = 340;
				this.match(SimpleASMParser.T__15);
				this.state = 341;
				_localctx._rs = this.register();
				this.state = 342;
				this.match(SimpleASMParser.T__15);
				this.state = 343;
				this.immediate();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 345;
				_localctx._op = this.match(SimpleASMParser.T__58);
				this.state = 346;
				_localctx._rd = this.register();
				this.state = 347;
				this.match(SimpleASMParser.T__15);
				this.state = 348;
				_localctx._rs = this.register();
				this.state = 349;
				this.match(SimpleASMParser.T__15);
				this.state = 350;
				this.immediate();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 352;
				_localctx._op = this.match(SimpleASMParser.T__59);
				this.state = 353;
				_localctx._rd = this.register();
				this.state = 354;
				this.match(SimpleASMParser.T__15);
				this.state = 355;
				this.immediate();
				this.state = 356;
				this.match(SimpleASMParser.T__60);
				this.state = 357;
				_localctx._rs = this.register();
				this.state = 358;
				this.match(SimpleASMParser.T__61);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 360;
				_localctx._op = this.match(SimpleASMParser.T__57);
				this.state = 361;
				_localctx._rd = this.register();
				this.state = 362;
				this.match(SimpleASMParser.T__15);
				this.state = 363;
				_localctx._rs = this.register();
				this.state = 364;
				this.match(SimpleASMParser.T__15);
				this.state = 365;
				this.immediate();
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
	public stype(): StypeContext {
		let _localctx: StypeContext = new StypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SimpleASMParser.RULE_stype);
		try {
			this.state = 385;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleASMParser.T__62:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 369;
				_localctx._op = this.match(SimpleASMParser.T__62);
				this.state = 370;
				_localctx._rs1 = this.register();
				this.state = 371;
				this.match(SimpleASMParser.T__15);
				this.state = 372;
				this.immediate();
				this.state = 373;
				this.match(SimpleASMParser.T__60);
				this.state = 374;
				_localctx._rs2 = this.register();
				this.state = 375;
				this.match(SimpleASMParser.T__61);
				}
				break;
			case SimpleASMParser.T__63:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 377;
				_localctx._op = this.match(SimpleASMParser.T__63);
				this.state = 378;
				_localctx._rs1 = this.register();
				this.state = 379;
				this.match(SimpleASMParser.T__15);
				this.state = 380;
				this.immediate();
				this.state = 381;
				this.match(SimpleASMParser.T__60);
				this.state = 382;
				_localctx._rs2 = this.register();
				this.state = 383;
				this.match(SimpleASMParser.T__61);
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
	public btype(): BtypeContext {
		let _localctx: BtypeContext = new BtypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SimpleASMParser.RULE_btype);
		try {
			this.state = 429;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleASMParser.T__64:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 387;
				_localctx._op = this.match(SimpleASMParser.T__64);
				this.state = 388;
				_localctx._rs1 = this.register();
				this.state = 389;
				this.match(SimpleASMParser.T__15);
				this.state = 390;
				_localctx._rs2 = this.register();
				this.state = 391;
				this.match(SimpleASMParser.T__15);
				this.state = 392;
				this.immediate();
				}
				break;
			case SimpleASMParser.T__65:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 394;
				_localctx._op = this.match(SimpleASMParser.T__65);
				this.state = 395;
				_localctx._rs1 = this.register();
				this.state = 396;
				this.match(SimpleASMParser.T__15);
				this.state = 397;
				_localctx._rs2 = this.register();
				this.state = 398;
				this.match(SimpleASMParser.T__15);
				this.state = 399;
				this.immediate();
				}
				break;
			case SimpleASMParser.T__66:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 401;
				_localctx._op = this.match(SimpleASMParser.T__66);
				this.state = 402;
				_localctx._rs1 = this.register();
				this.state = 403;
				this.match(SimpleASMParser.T__15);
				this.state = 404;
				_localctx._rs2 = this.register();
				this.state = 405;
				this.match(SimpleASMParser.T__15);
				this.state = 406;
				this.immediate();
				}
				break;
			case SimpleASMParser.T__67:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 408;
				_localctx._op = this.match(SimpleASMParser.T__67);
				this.state = 409;
				_localctx._rs1 = this.register();
				this.state = 410;
				this.match(SimpleASMParser.T__15);
				this.state = 411;
				_localctx._rs2 = this.register();
				this.state = 412;
				this.match(SimpleASMParser.T__15);
				this.state = 413;
				this.immediate();
				}
				break;
			case SimpleASMParser.T__31:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 415;
				_localctx._op = this.match(SimpleASMParser.T__31);
				this.state = 416;
				_localctx._rs1 = this.register();
				this.state = 417;
				this.match(SimpleASMParser.T__15);
				this.state = 418;
				_localctx._rs2 = this.register();
				this.state = 419;
				this.match(SimpleASMParser.T__15);
				this.state = 420;
				this.immediate();
				}
				break;
			case SimpleASMParser.T__68:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 422;
				_localctx._op = this.match(SimpleASMParser.T__68);
				this.state = 423;
				_localctx._rs1 = this.register();
				this.state = 424;
				this.match(SimpleASMParser.T__15);
				this.state = 425;
				_localctx._rs2 = this.register();
				this.state = 426;
				this.match(SimpleASMParser.T__15);
				this.state = 427;
				this.immediate();
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
	public jtype(): JtypeContext {
		let _localctx: JtypeContext = new JtypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SimpleASMParser.RULE_jtype);
		try {
			this.state = 444;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleASMParser.T__35:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 431;
				_localctx._op = this.match(SimpleASMParser.T__35);
				this.state = 432;
				_localctx._rd = this.register();
				this.state = 433;
				this.match(SimpleASMParser.T__15);
				this.state = 434;
				this.immediate();
				this.state = 435;
				this.match(SimpleASMParser.T__60);
				this.state = 436;
				_localctx._rs1 = this.register();
				this.state = 437;
				this.match(SimpleASMParser.T__61);
				}
				break;
			case SimpleASMParser.T__33:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 439;
				_localctx._op = this.match(SimpleASMParser.T__33);
				this.state = 440;
				_localctx._rd = this.register();
				this.state = 441;
				this.match(SimpleASMParser.T__15);
				this.state = 442;
				this.offset();
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
	public utype(): UtypeContext {
		let _localctx: UtypeContext = new UtypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SimpleASMParser.RULE_utype);
		try {
			this.state = 456;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleASMParser.T__69:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 446;
				_localctx._op = this.match(SimpleASMParser.T__69);
				this.state = 447;
				_localctx._rd = this.register();
				this.state = 448;
				this.match(SimpleASMParser.T__15);
				this.state = 449;
				this.immediate();
				}
				break;
			case SimpleASMParser.T__70:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 451;
				_localctx._op = this.match(SimpleASMParser.T__70);
				this.state = 452;
				_localctx._rd = this.register();
				this.state = 453;
				this.match(SimpleASMParser.T__15);
				this.state = 454;
				this.immediate();
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
	public offset(): OffsetContext {
		let _localctx: OffsetContext = new OffsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SimpleASMParser.RULE_offset);
		try {
			this.state = 460;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 458;
				this.immediate();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 459;
				this.match(SimpleASMParser.ID);
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
	public register(): RegisterContext {
		let _localctx: RegisterContext = new RegisterContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SimpleASMParser.RULE_register);
		let _la: number;
		try {
			this.state = 464;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleASMParser.T__71:
			case SimpleASMParser.T__72:
			case SimpleASMParser.T__73:
			case SimpleASMParser.T__74:
			case SimpleASMParser.T__75:
			case SimpleASMParser.T__76:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 462;
				_la = this._input.LA(1);
				if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SimpleASMParser.T__71 - 72)) | (1 << (SimpleASMParser.T__72 - 72)) | (1 << (SimpleASMParser.T__73 - 72)) | (1 << (SimpleASMParser.T__74 - 72)) | (1 << (SimpleASMParser.T__75 - 72)) | (1 << (SimpleASMParser.T__76 - 72)))) !== 0))) {
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
			case SimpleASMParser.REG:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 463;
				this.match(SimpleASMParser.REG);
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
	public immediate(): ImmediateContext {
		let _localctx: ImmediateContext = new ImmediateContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SimpleASMParser.RULE_immediate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 466;
			_la = this._input.LA(1);
			if (!(((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (SimpleASMParser.INT - 79)) | (1 << (SimpleASMParser.HEX - 79)) | (1 << (SimpleASMParser.BIN - 79)) | (1 << (SimpleASMParser.ID - 79)))) !== 0))) {
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
	public numlist(): NumlistContext {
		let _localctx: NumlistContext = new NumlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SimpleASMParser.RULE_numlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this.immediate();
			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SimpleASMParser.T__15) {
				{
				{
				this.state = 469;
				this.match(SimpleASMParser.T__15);
				this.state = 470;
				this.immediate();
				}
				}
				this.state = 475;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03W\u01DF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x07\x033\n\x03\f\x03\x0E\x036\v\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x05\x04<\n\x04\x03\x05\x03\x05\x03\x05\x05\x05" +
		"A\n\x05\x03\x06\x05\x06D\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x05\tZ\n\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x05\vg\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x05\f\xD1\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u011B\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u0172\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x05\x10\u0184\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\u01B0\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01BF" +
		"\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x05\x13\u01CB\n\x13\x03\x14\x03\x14\x05\x14\u01CF\n\x14" +
		"\x03\x15\x03\x15\x05\x15\u01D3\n\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03" +
		"\x17\x07\x17\u01DA\n\x17\f\x17\x0E\x17\u01DD\v\x17\x03\x17\x02\x02\x02" +
		"\x18\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02\x02\x07\x03\x02\x04\x07\x03\x02\b\t\x03\x02\v\r\x03\x02" +
		"JO\x03\x02QT\x02\u020D\x02.\x03\x02\x02\x02\x044\x03\x02\x02\x02\x06;" +
		"\x03\x02\x02\x02\b@\x03\x02\x02\x02\nC\x03\x02\x02\x02\fG\x03\x02\x02" +
		"\x02\x0EJ\x03\x02\x02\x02\x10Y\x03\x02\x02\x02\x12[\x03\x02\x02\x02\x14" +
		"f\x03\x02\x02\x02\x16\xD0\x03\x02\x02\x02\x18\xD2\x03\x02\x02\x02\x1A" +
		"\u011A\x03\x02\x02\x02\x1C\u0171\x03\x02\x02\x02\x1E\u0183\x03\x02\x02" +
		"\x02 \u01AF\x03\x02\x02\x02\"\u01BE\x03\x02\x02\x02$\u01CA\x03\x02\x02" +
		"\x02&\u01CE\x03\x02\x02\x02(\u01D2\x03\x02\x02\x02*\u01D4\x03\x02\x02" +
		"\x02,\u01D6\x03\x02\x02\x02./\x05\x04\x03\x02/0\x07\x02\x02\x030\x03\x03" +
		"\x02\x02\x0213\x05\x06\x04\x0221\x03\x02\x02\x0236\x03\x02\x02\x0242\x03" +
		"\x02\x02\x0245\x03\x02\x02\x025\x05\x03\x02\x02\x0264\x03\x02\x02\x02" +
		"7<\x05\x10\t\x028<\x05\b\x05\x029<\x05\x14\v\x02:<\x05\x12\n\x02;7\x03" +
		"\x02\x02\x02;8\x03\x02\x02\x02;9\x03\x02\x02\x02;:\x03\x02\x02\x02<\x07" +
		"\x03\x02\x02\x02=A\x05\n\x06\x02>A\x05\f\x07\x02?A\x05\x0E\b\x02@=\x03" +
		"\x02\x02\x02@>\x03\x02\x02\x02@?\x03\x02\x02\x02A\t\x03\x02\x02\x02BD" +
		"\x07\x03\x02\x02CB\x03\x02\x02\x02CD\x03\x02\x02\x02DE\x03\x02\x02\x02" +
		"EF\t\x02\x02\x02F\v\x03\x02\x02\x02GH\t\x03\x02\x02HI\x07T\x02\x02I\r" +
		"\x03\x02\x02\x02JK\x07\n\x02\x02KL\x05*\x16\x02L\x0F\x03\x02\x02\x02M" +
		"N\x05\x12\n\x02NO\t\x04\x02\x02OP\x07U\x02\x02PZ\x03\x02\x02\x02QR\x05" +
		"\x12\n\x02RS\x07\x0E\x02\x02ST\x05,\x17\x02TZ\x03\x02\x02\x02UV\x05\x12" +
		"\n\x02VW\x07\x0F\x02\x02WX\x05,\x17\x02XZ\x03\x02\x02\x02YM\x03\x02\x02" +
		"\x02YQ\x03\x02\x02\x02YU\x03\x02\x02\x02Z\x11\x03\x02\x02\x02[\\\x07T" +
		"\x02\x02\\]\x07\x10\x02\x02]\x13\x03\x02\x02\x02^g\x05\x16\f\x02_g\x05" +
		"\x18\r\x02`g\x05\x1A\x0E\x02ag\x05\x1C\x0F\x02bg\x05\x1E\x10\x02cg\x05" +
		"$\x13\x02dg\x05\"\x12\x02eg\x05 \x11\x02f^\x03\x02\x02\x02f_\x03\x02\x02" +
		"\x02f`\x03\x02\x02\x02fa\x03\x02\x02\x02fb\x03\x02\x02\x02fc\x03\x02\x02" +
		"\x02fd\x03\x02\x02\x02fe\x03\x02\x02\x02g\x15\x03\x02\x02\x02hi\x07\x11" +
		"\x02\x02ij\x05(\x15\x02jk\x07\x12\x02\x02kl\x07T\x02\x02l\xD1\x03\x02" +
		"\x02\x02mn\x07\x13\x02\x02no\x05(\x15\x02op\x07\x12\x02\x02pq\x05*\x16" +
		"\x02q\xD1\x03\x02\x02\x02rs\x07\x14\x02\x02st\x05(\x15\x02tu\x07\x12\x02" +
		"\x02uv\x05(\x15\x02v\xD1\x03\x02\x02\x02wx\x07\x15\x02\x02xy\x05(\x15" +
		"\x02yz\x07\x12\x02\x02z{\x05(\x15\x02{\xD1\x03\x02\x02\x02|}\x07\x16\x02" +
		"\x02}~\x05(\x15\x02~\x7F\x07\x12\x02\x02\x7F\x80\x05(\x15\x02\x80\xD1" +
		"\x03\x02\x02\x02\x81\x82\x07\x17\x02\x02\x82\x83\x05(\x15\x02\x83\x84" +
		"\x07\x12\x02\x02\x84\x85\x05(\x15\x02\x85\xD1\x03\x02\x02\x02\x86\x87" +
		"\x07\x18\x02\x02\x87\x88\x05(\x15\x02\x88\x89\x07\x12\x02\x02\x89\x8A" +
		"\x05(\x15\x02\x8A\xD1\x03\x02\x02\x02\x8B\x8C\x07\x19\x02\x02\x8C\x8D" +
		"\x05(\x15\x02\x8D\x8E\x07\x12\x02\x02\x8E\x8F\x05&\x14\x02\x8F\xD1\x03" +
		"\x02\x02\x02\x90\x91\x07\x1A\x02\x02\x91\x92\x05(\x15\x02\x92\x93\x07" +
		"\x12\x02\x02\x93\x94\x05&\x14\x02\x94\xD1\x03\x02\x02\x02\x95\x96\x07" +
		"\x1B\x02\x02\x96\x97\x05(\x15\x02\x97\x98\x07\x12\x02\x02\x98\x99\x05" +
		"&\x14\x02\x99\xD1\x03\x02\x02\x02\x9A\x9B\x07\x1C\x02\x02\x9B\x9C\x05" +
		"(\x15\x02\x9C\x9D\x07\x12\x02\x02\x9D\x9E\x05&\x14\x02\x9E\xD1\x03\x02" +
		"\x02\x02\x9F\xA0\x07\x1D\x02\x02\xA0\xA1\x05(\x15\x02\xA1\xA2\x07\x12" +
		"\x02\x02\xA2\xA3\x05&\x14\x02\xA3\xD1\x03\x02\x02\x02\xA4\xA5\x07\x1E" +
		"\x02\x02\xA5\xA6\x05(\x15\x02\xA6\xA7\x07\x12\x02\x02\xA7\xA8\x05&\x14" +
		"\x02\xA8\xD1\x03\x02\x02\x02\xA9\xAA\x07\x1F\x02\x02\xAA\xAB\x05(\x15" +
		"\x02\xAB\xAC\x07\x12\x02\x02\xAC\xAD\x05(\x15\x02\xAD\xAE\x07\x12\x02" +
		"\x02\xAE\xAF\x05&\x14\x02\xAF\xD1\x03\x02\x02\x02\xB0\xB1\x07 \x02\x02" +
		"\xB1\xB2\x05(\x15\x02\xB2\xB3\x07\x12\x02\x02\xB3\xB4\x05(\x15\x02\xB4" +
		"\xB5\x07\x12\x02\x02\xB5\xB6\x05&\x14\x02\xB6\xD1\x03\x02\x02\x02\xB7" +
		"\xB8\x07!\x02\x02\xB8\xB9\x05(\x15\x02\xB9\xBA\x07\x12\x02\x02\xBA\xBB" +
		"\x05(\x15\x02\xBB\xBC\x07\x12\x02\x02\xBC\xBD\x05&\x14\x02\xBD\xD1\x03" +
		"\x02\x02\x02\xBE\xBF\x07\"\x02\x02\xBF\xC0\x05(\x15\x02\xC0\xC1\x07\x12" +
		"\x02\x02\xC1\xC2\x05(\x15\x02\xC2\xC3\x07\x12\x02\x02\xC3\xC4\x05&\x14" +
		"\x02\xC4\xD1\x03\x02\x02\x02\xC5\xC6\x07#\x02\x02\xC6\xD1\x05&\x14\x02" +
		"\xC7\xC8\x07$\x02\x02\xC8\xD1\x05&\x14\x02\xC9\xCA\x07%\x02\x02\xCA\xD1" +
		"\x05(\x15\x02\xCB\xCC\x07&\x02\x02\xCC\xD1\x05(\x15\x02\xCD\xD1\x07\'" +
		"\x02\x02\xCE\xCF\x07(\x02\x02\xCF\xD1\x05&\x14\x02\xD0h\x03\x02\x02\x02" +
		"\xD0m\x03\x02\x02\x02\xD0r\x03\x02\x02\x02\xD0w\x03\x02\x02\x02\xD0|\x03" +
		"\x02\x02\x02\xD0\x81\x03\x02\x02\x02\xD0\x86\x03\x02\x02\x02\xD0\x8B\x03" +
		"\x02\x02\x02\xD0\x90\x03\x02\x02\x02\xD0\x95\x03\x02\x02\x02\xD0\x9A\x03" +
		"\x02\x02\x02\xD0\x9F\x03\x02\x02\x02\xD0\xA4\x03\x02\x02\x02\xD0\xA9\x03" +
		"\x02\x02\x02\xD0\xB0\x03\x02\x02\x02\xD0\xB7\x03\x02\x02\x02\xD0\xBE\x03" +
		"\x02\x02\x02\xD0\xC5\x03\x02\x02\x02\xD0\xC7\x03\x02\x02\x02\xD0\xC9\x03" +
		"\x02\x02\x02\xD0\xCB\x03\x02\x02\x02\xD0\xCD\x03\x02\x02\x02\xD0\xCE\x03" +
		"\x02\x02\x02\xD1\x17\x03\x02\x02\x02\xD2\xD3\x07)\x02\x02\xD3\x19\x03" +
		"\x02\x02\x02\xD4\xD5\x07*\x02\x02\xD5\xD6\x05(\x15\x02\xD6\xD7\x07\x12" +
		"\x02\x02\xD7\xD8\x05(\x15\x02\xD8\xD9\x07\x12\x02\x02\xD9\xDA\x05(\x15" +
		"\x02\xDA\u011B\x03\x02\x02\x02\xDB\xDC\x07+\x02\x02\xDC\xDD\x05(\x15\x02" +
		"\xDD\xDE\x07\x12\x02\x02\xDE\xDF\x05(\x15\x02\xDF\xE0\x07\x12\x02\x02" +
		"\xE0\xE1\x05(\x15\x02\xE1\u011B\x03\x02\x02\x02\xE2\xE3\x07,\x02\x02\xE3" +
		"\xE4\x05(\x15\x02\xE4\xE5\x07\x12\x02\x02\xE5\xE6\x05(\x15\x02\xE6\xE7" +
		"\x07\x12\x02\x02\xE7\xE8\x05(\x15\x02\xE8\u011B\x03\x02\x02\x02\xE9\xEA" +
		"\x07-\x02\x02\xEA\xEB\x05(\x15\x02\xEB\xEC\x07\x12\x02\x02\xEC\xED\x05" +
		"(\x15\x02\xED\xEE\x07\x12\x02\x02\xEE\xEF\x05(\x15\x02\xEF\u011B\x03\x02" +
		"\x02\x02\xF0\xF1\x07.\x02\x02\xF1\xF2\x05(\x15\x02\xF2\xF3\x07\x12\x02" +
		"\x02\xF3\xF4\x05(\x15\x02\xF4\xF5\x07\x12\x02\x02\xF5\xF6\x05(\x15\x02" +
		"\xF6\u011B\x03\x02\x02\x02\xF7\xF8\x07/\x02\x02\xF8\xF9\x05(\x15\x02\xF9" +
		"\xFA\x07\x12\x02\x02\xFA\xFB\x05(\x15\x02\xFB\xFC\x07\x12\x02\x02\xFC" +
		"\xFD\x05(\x15\x02\xFD\u011B\x03\x02\x02\x02\xFE\xFF\x070\x02\x02\xFF\u0100" +
		"\x05(\x15\x02\u0100\u0101\x07\x12\x02\x02\u0101\u0102\x05(\x15\x02\u0102" +
		"\u0103\x07\x12\x02\x02\u0103\u0104\x05(\x15\x02\u0104\u011B\x03\x02\x02" +
		"\x02\u0105\u0106\x071\x02\x02\u0106\u0107\x05(\x15\x02\u0107\u0108\x07" +
		"\x12\x02\x02\u0108\u0109\x05(\x15\x02\u0109\u010A\x07\x12\x02\x02\u010A" +
		"\u010B\x05(\x15\x02\u010B\u011B\x03\x02\x02\x02\u010C\u010D\x072\x02\x02" +
		"\u010D\u010E\x05(\x15\x02\u010E\u010F\x07\x12\x02\x02\u010F\u0110\x05" +
		"(\x15\x02\u0110\u0111\x07\x12\x02\x02\u0111\u0112\x05(\x15\x02\u0112\u011B" +
		"\x03\x02\x02\x02\u0113\u0114\x073\x02\x02\u0114\u0115\x05(\x15\x02\u0115" +
		"\u0116\x07\x12\x02\x02\u0116\u0117\x05(\x15\x02\u0117\u0118\x07\x12\x02" +
		"\x02\u0118\u0119\x05(\x15\x02\u0119\u011B\x03\x02\x02\x02\u011A\xD4\x03" +
		"\x02\x02\x02\u011A\xDB\x03\x02\x02\x02\u011A\xE2\x03\x02\x02\x02\u011A" +
		"\xE9\x03\x02\x02\x02\u011A\xF0\x03\x02\x02\x02\u011A\xF7\x03\x02\x02\x02" +
		"\u011A\xFE\x03\x02\x02\x02\u011A\u0105\x03\x02\x02\x02\u011A\u010C\x03" +
		"\x02\x02\x02\u011A\u0113\x03\x02\x02\x02\u011B\x1B\x03\x02\x02\x02\u011C" +
		"\u011D\x074\x02\x02\u011D\u011E\x05(\x15\x02\u011E\u011F\x07\x12\x02\x02" +
		"\u011F\u0120\x05(\x15\x02\u0120\u0121\x07\x12\x02\x02\u0121\u0122\x05" +
		"*\x16\x02\u0122\u0172\x03\x02\x02\x02\u0123\u0124\x075\x02\x02\u0124\u0125" +
		"\x05(\x15\x02\u0125\u0126\x07\x12\x02\x02\u0126\u0127\x05(\x15\x02\u0127" +
		"\u0128\x07\x12\x02\x02\u0128\u0129\x05*\x16\x02\u0129\u0172\x03\x02\x02" +
		"\x02\u012A\u012B\x076\x02\x02\u012B\u012C\x05(\x15\x02\u012C\u012D\x07" +
		"\x12\x02\x02\u012D\u012E\x05(\x15\x02\u012E\u012F\x07\x12\x02\x02\u012F" +
		"\u0130\x05*\x16\x02\u0130\u0172\x03\x02\x02\x02\u0131\u0132\x077\x02\x02" +
		"\u0132\u0133\x05(\x15\x02\u0133\u0134\x07\x12\x02\x02\u0134\u0135\x05" +
		"(\x15\x02\u0135\u0136\x07\x12\x02\x02\u0136\u0137\x05*\x16\x02\u0137\u0172" +
		"\x03\x02\x02\x02\u0138\u0139\x078\x02\x02\u0139\u013A\x05(\x15\x02\u013A" +
		"\u013B\x07\x12\x02\x02\u013B\u013C\x05(\x15\x02\u013C\u013D\x07\x12\x02" +
		"\x02\u013D\u013E\x05*\x16\x02\u013E\u0172\x03\x02\x02\x02\u013F\u0140" +
		"\x079\x02\x02\u0140\u0141\x05(\x15\x02\u0141\u0142\x07\x12\x02\x02\u0142" +
		"\u0143\x05(\x15\x02\u0143\u0144\x07\x12\x02\x02\u0144\u0145\x05*\x16\x02" +
		"\u0145\u0172\x03\x02\x02\x02\u0146\u0147\x07:\x02\x02\u0147\u0148\x05" +
		"(\x15\x02\u0148\u0149\x07\x12\x02\x02\u0149\u014A\x05(\x15\x02\u014A\u014B" +
		"\x07\x12\x02\x02\u014B\u014C\x05*\x16\x02\u014C\u0172\x03\x02\x02\x02" +
		"\u014D\u014E\x07;\x02\x02\u014E\u014F\x05(\x15\x02\u014F\u0150\x07\x12" +
		"\x02\x02\u0150\u0151\x05(\x15\x02\u0151\u0152\x07\x12\x02\x02\u0152\u0153" +
		"\x05*\x16\x02\u0153\u0172\x03\x02\x02\x02\u0154\u0155\x07<\x02\x02\u0155" +
		"\u0156\x05(\x15\x02\u0156\u0157\x07\x12\x02\x02\u0157\u0158\x05(\x15\x02" +
		"\u0158\u0159\x07\x12\x02\x02\u0159\u015A\x05*\x16\x02\u015A\u0172\x03" +
		"\x02\x02\x02\u015B\u015C\x07=\x02\x02\u015C\u015D\x05(\x15\x02\u015D\u015E" +
		"\x07\x12\x02\x02\u015E\u015F\x05(\x15\x02\u015F\u0160\x07\x12\x02\x02" +
		"\u0160\u0161\x05*\x16\x02\u0161\u0172\x03\x02\x02\x02\u0162\u0163\x07" +
		">\x02\x02\u0163\u0164\x05(\x15\x02\u0164\u0165\x07\x12\x02\x02\u0165\u0166" +
		"\x05*\x16\x02\u0166\u0167\x07?\x02\x02\u0167\u0168\x05(\x15\x02\u0168" +
		"\u0169\x07@\x02\x02\u0169\u0172\x03\x02\x02\x02\u016A\u016B\x07<\x02\x02" +
		"\u016B\u016C\x05(\x15\x02\u016C\u016D\x07\x12\x02\x02\u016D\u016E\x05" +
		"(\x15\x02\u016E\u016F\x07\x12\x02\x02\u016F\u0170\x05*\x16\x02\u0170\u0172" +
		"\x03\x02\x02\x02\u0171\u011C\x03\x02\x02\x02\u0171\u0123\x03\x02\x02\x02" +
		"\u0171\u012A\x03\x02\x02\x02\u0171\u0131\x03\x02\x02\x02\u0171\u0138\x03" +
		"\x02\x02\x02\u0171\u013F\x03\x02\x02\x02\u0171\u0146\x03\x02\x02\x02\u0171" +
		"\u014D\x03\x02\x02\x02\u0171\u0154\x03\x02\x02\x02\u0171\u015B\x03\x02" +
		"\x02\x02\u0171\u0162\x03\x02\x02\x02\u0171\u016A\x03\x02\x02\x02\u0172" +
		"\x1D\x03\x02\x02\x02\u0173\u0174\x07A\x02\x02\u0174\u0175\x05(\x15\x02" +
		"\u0175\u0176\x07\x12\x02\x02\u0176\u0177\x05*\x16\x02\u0177\u0178\x07" +
		"?\x02\x02\u0178\u0179\x05(\x15\x02\u0179\u017A\x07@\x02\x02\u017A\u0184" +
		"\x03\x02\x02\x02\u017B\u017C\x07B\x02\x02\u017C\u017D\x05(\x15\x02\u017D" +
		"\u017E\x07\x12\x02\x02\u017E\u017F\x05*\x16\x02\u017F\u0180\x07?\x02\x02" +
		"\u0180\u0181\x05(\x15\x02\u0181\u0182\x07@\x02\x02\u0182\u0184\x03\x02" +
		"\x02\x02\u0183\u0173\x03\x02\x02\x02\u0183\u017B\x03\x02\x02\x02\u0184" +
		"\x1F\x03\x02\x02\x02\u0185\u0186\x07C\x02\x02\u0186\u0187\x05(\x15\x02" +
		"\u0187\u0188\x07\x12\x02\x02\u0188\u0189\x05(\x15\x02\u0189\u018A\x07" +
		"\x12\x02\x02\u018A\u018B\x05*\x16\x02\u018B\u01B0\x03\x02\x02\x02\u018C" +
		"\u018D\x07D\x02\x02\u018D\u018E\x05(\x15\x02\u018E\u018F\x07\x12\x02\x02" +
		"\u018F\u0190\x05(\x15\x02\u0190\u0191\x07\x12\x02\x02\u0191\u0192\x05" +
		"*\x16\x02\u0192\u01B0\x03\x02\x02\x02\u0193\u0194\x07E\x02\x02\u0194\u0195" +
		"\x05(\x15\x02\u0195\u0196\x07\x12\x02\x02\u0196\u0197\x05(\x15\x02\u0197" +
		"\u0198\x07\x12\x02\x02\u0198\u0199\x05*\x16\x02\u0199\u01B0\x03\x02\x02" +
		"\x02\u019A\u019B\x07F\x02\x02\u019B\u019C\x05(\x15\x02\u019C\u019D\x07" +
		"\x12\x02\x02\u019D\u019E\x05(\x15\x02\u019E\u019F\x07\x12\x02\x02\u019F" +
		"\u01A0\x05*\x16\x02\u01A0\u01B0\x03\x02\x02\x02\u01A1\u01A2\x07\"\x02" +
		"\x02\u01A2\u01A3\x05(\x15\x02\u01A3\u01A4\x07\x12\x02\x02\u01A4\u01A5" +
		"\x05(\x15\x02\u01A5\u01A6\x07\x12\x02\x02\u01A6\u01A7\x05*\x16\x02\u01A7" +
		"\u01B0\x03\x02\x02\x02\u01A8\u01A9\x07G\x02\x02\u01A9\u01AA\x05(\x15\x02" +
		"\u01AA\u01AB\x07\x12\x02\x02\u01AB\u01AC\x05(\x15\x02\u01AC\u01AD\x07" +
		"\x12\x02\x02\u01AD\u01AE\x05*\x16\x02\u01AE\u01B0\x03\x02\x02\x02\u01AF" +
		"\u0185\x03\x02\x02\x02\u01AF\u018C\x03\x02\x02\x02\u01AF\u0193\x03\x02" +
		"\x02\x02\u01AF\u019A\x03\x02\x02\x02\u01AF\u01A1\x03\x02\x02\x02\u01AF" +
		"\u01A8\x03\x02\x02\x02\u01B0!\x03\x02\x02\x02\u01B1\u01B2\x07&\x02\x02" +
		"\u01B2\u01B3\x05(\x15\x02\u01B3\u01B4\x07\x12\x02\x02\u01B4\u01B5\x05" +
		"*\x16\x02\u01B5\u01B6\x07?\x02\x02\u01B6\u01B7\x05(\x15\x02\u01B7\u01B8" +
		"\x07@\x02\x02\u01B8\u01BF\x03\x02\x02\x02\u01B9\u01BA\x07$\x02\x02\u01BA" +
		"\u01BB\x05(\x15\x02\u01BB\u01BC\x07\x12\x02\x02\u01BC\u01BD\x05&\x14\x02" +
		"\u01BD\u01BF\x03\x02\x02\x02\u01BE\u01B1\x03\x02\x02\x02\u01BE\u01B9\x03" +
		"\x02\x02\x02\u01BF#\x03\x02\x02\x02\u01C0\u01C1\x07H\x02\x02\u01C1\u01C2" +
		"\x05(\x15\x02\u01C2\u01C3\x07\x12\x02\x02\u01C3\u01C4\x05*\x16\x02\u01C4" +
		"\u01CB\x03\x02\x02\x02\u01C5\u01C6\x07I\x02\x02\u01C6\u01C7\x05(\x15\x02" +
		"\u01C7\u01C8\x07\x12\x02\x02\u01C8\u01C9\x05*\x16\x02\u01C9\u01CB\x03" +
		"\x02\x02\x02\u01CA\u01C0\x03\x02\x02\x02\u01CA\u01C5\x03\x02\x02\x02\u01CB" +
		"%\x03\x02\x02\x02\u01CC\u01CF\x05*\x16\x02\u01CD\u01CF\x07T\x02\x02\u01CE" +
		"\u01CC\x03\x02\x02\x02\u01CE\u01CD\x03\x02\x02\x02\u01CF\'\x03\x02\x02" +
		"\x02\u01D0\u01D3\t\x05\x02\x02\u01D1\u01D3\x07P\x02\x02\u01D2\u01D0\x03" +
		"\x02\x02\x02\u01D2\u01D1\x03\x02\x02\x02\u01D3)\x03\x02\x02\x02\u01D4" +
		"\u01D5\t\x06\x02\x02\u01D5+\x03\x02\x02\x02\u01D6\u01DB\x05*\x16\x02\u01D7" +
		"\u01D8\x07\x12\x02\x02\u01D8\u01DA\x05*\x16\x02\u01D9\u01D7\x03\x02\x02" +
		"\x02\u01DA\u01DD\x03\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB\u01DC" +
		"\x03\x02\x02\x02\u01DC-\x03\x02\x02\x02\u01DD\u01DB\x03\x02\x02\x02\x12" +
		"4;@CYf\xD0\u011A\u0171\u0183\u01AF\u01BE\u01CA\u01CE\u01D2\u01DB";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SimpleASMParser.__ATN) {
			SimpleASMParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SimpleASMParser._serializedATN));
		}

		return SimpleASMParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public lines(): LinesContext {
		return this.getRuleContext(0, LinesContext);
	}
	public EOF(): TerminalNode { return this.getToken(SimpleASMParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_program; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinesContext extends ParserRuleContext {
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_lines; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterLines) {
			listener.enterLines(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitLines) {
			listener.exitLines(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitLines) {
			return visitor.visitLines(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public data(): DataContext | undefined {
		return this.tryGetRuleContext(0, DataContext);
	}
	public directive(): DirectiveContext | undefined {
		return this.tryGetRuleContext(0, DirectiveContext);
	}
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_line; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectiveContext extends ParserRuleContext {
	public section(): SectionContext | undefined {
		return this.tryGetRuleContext(0, SectionContext);
	}
	public global(): GlobalContext | undefined {
		return this.tryGetRuleContext(0, GlobalContext);
	}
	public align(): AlignContext | undefined {
		return this.tryGetRuleContext(0, AlignContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_directive; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterDirective) {
			listener.enterDirective(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitDirective) {
			listener.exitDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitDirective) {
			return visitor.visitDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SectionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_section; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterSection) {
			listener.enterSection(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitSection) {
			listener.exitSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitSection) {
			return visitor.visitSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GlobalContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(SimpleASMParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_global; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterGlobal) {
			listener.enterGlobal(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitGlobal) {
			listener.exitGlobal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitGlobal) {
			return visitor.visitGlobal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlignContext extends ParserRuleContext {
	public immediate(): ImmediateContext {
		return this.getRuleContext(0, ImmediateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_align; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterAlign) {
			listener.enterAlign(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitAlign) {
			listener.exitAlign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitAlign) {
			return visitor.visitAlign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataContext extends ParserRuleContext {
	public _name: LabelContext;
	public _type: Token;
	public String(): TerminalNode | undefined { return this.tryGetToken(SimpleASMParser.String, 0); }
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	public numlist(): NumlistContext | undefined {
		return this.tryGetRuleContext(0, NumlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_data; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterData) {
			listener.enterData(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitData) {
			listener.exitData(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitData) {
			return visitor.visitData(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(SimpleASMParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_label; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public pseudo(): PseudoContext | undefined {
		return this.tryGetRuleContext(0, PseudoContext);
	}
	public environment(): EnvironmentContext | undefined {
		return this.tryGetRuleContext(0, EnvironmentContext);
	}
	public rtype(): RtypeContext | undefined {
		return this.tryGetRuleContext(0, RtypeContext);
	}
	public itype(): ItypeContext | undefined {
		return this.tryGetRuleContext(0, ItypeContext);
	}
	public stype(): StypeContext | undefined {
		return this.tryGetRuleContext(0, StypeContext);
	}
	public utype(): UtypeContext | undefined {
		return this.tryGetRuleContext(0, UtypeContext);
	}
	public jtype(): JtypeContext | undefined {
		return this.tryGetRuleContext(0, JtypeContext);
	}
	public btype(): BtypeContext | undefined {
		return this.tryGetRuleContext(0, BtypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_instruction; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitInstruction) {
			return visitor.visitInstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PseudoContext extends ParserRuleContext {
	public _op: Token;
	public _rd: RegisterContext;
	public _id: Token;
	public _rs: RegisterContext;
	public _rt: RegisterContext;
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(SimpleASMParser.ID, 0); }
	public immediate(): ImmediateContext | undefined {
		return this.tryGetRuleContext(0, ImmediateContext);
	}
	public offset(): OffsetContext | undefined {
		return this.tryGetRuleContext(0, OffsetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_pseudo; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterPseudo) {
			listener.enterPseudo(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitPseudo) {
			listener.exitPseudo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitPseudo) {
			return visitor.visitPseudo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnvironmentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_environment; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterEnvironment) {
			listener.enterEnvironment(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitEnvironment) {
			listener.exitEnvironment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitEnvironment) {
			return visitor.visitEnvironment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RtypeContext extends ParserRuleContext {
	public _op: Token;
	public _rd: RegisterContext;
	public _rs1: RegisterContext;
	public _rs2: RegisterContext;
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_rtype; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterRtype) {
			listener.enterRtype(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitRtype) {
			listener.exitRtype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitRtype) {
			return visitor.visitRtype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ItypeContext extends ParserRuleContext {
	public _op: Token;
	public _rd: RegisterContext;
	public _rs: RegisterContext;
	public immediate(): ImmediateContext {
		return this.getRuleContext(0, ImmediateContext);
	}
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_itype; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterItype) {
			listener.enterItype(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitItype) {
			listener.exitItype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitItype) {
			return visitor.visitItype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StypeContext extends ParserRuleContext {
	public _op: Token;
	public _rs1: RegisterContext;
	public _rs2: RegisterContext;
	public immediate(): ImmediateContext {
		return this.getRuleContext(0, ImmediateContext);
	}
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_stype; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterStype) {
			listener.enterStype(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitStype) {
			listener.exitStype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitStype) {
			return visitor.visitStype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BtypeContext extends ParserRuleContext {
	public _op: Token;
	public _rs1: RegisterContext;
	public _rs2: RegisterContext;
	public immediate(): ImmediateContext {
		return this.getRuleContext(0, ImmediateContext);
	}
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_btype; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterBtype) {
			listener.enterBtype(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitBtype) {
			listener.exitBtype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitBtype) {
			return visitor.visitBtype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JtypeContext extends ParserRuleContext {
	public _op: Token;
	public _rd: RegisterContext;
	public _rs1: RegisterContext;
	public immediate(): ImmediateContext | undefined {
		return this.tryGetRuleContext(0, ImmediateContext);
	}
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	public offset(): OffsetContext | undefined {
		return this.tryGetRuleContext(0, OffsetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_jtype; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterJtype) {
			listener.enterJtype(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitJtype) {
			listener.exitJtype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitJtype) {
			return visitor.visitJtype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UtypeContext extends ParserRuleContext {
	public _op: Token;
	public _rd: RegisterContext;
	public immediate(): ImmediateContext {
		return this.getRuleContext(0, ImmediateContext);
	}
	public register(): RegisterContext {
		return this.getRuleContext(0, RegisterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_utype; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterUtype) {
			listener.enterUtype(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitUtype) {
			listener.exitUtype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitUtype) {
			return visitor.visitUtype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OffsetContext extends ParserRuleContext {
	public immediate(): ImmediateContext | undefined {
		return this.tryGetRuleContext(0, ImmediateContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(SimpleASMParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_offset; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterOffset) {
			listener.enterOffset(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitOffset) {
			listener.exitOffset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitOffset) {
			return visitor.visitOffset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RegisterContext extends ParserRuleContext {
	public REG(): TerminalNode | undefined { return this.tryGetToken(SimpleASMParser.REG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_register; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterRegister) {
			listener.enterRegister(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitRegister) {
			listener.exitRegister(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitRegister) {
			return visitor.visitRegister(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImmediateContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(SimpleASMParser.INT, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(SimpleASMParser.HEX, 0); }
	public BIN(): TerminalNode | undefined { return this.tryGetToken(SimpleASMParser.BIN, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(SimpleASMParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_immediate; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterImmediate) {
			listener.enterImmediate(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitImmediate) {
			listener.exitImmediate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitImmediate) {
			return visitor.visitImmediate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumlistContext extends ParserRuleContext {
	public immediate(): ImmediateContext[];
	public immediate(i: number): ImmediateContext;
	public immediate(i?: number): ImmediateContext | ImmediateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImmediateContext);
		} else {
			return this.getRuleContext(i, ImmediateContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleASMParser.RULE_numlist; }
	// @Override
	public enterRule(listener: SimpleASMListener): void {
		if (listener.enterNumlist) {
			listener.enterNumlist(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleASMListener): void {
		if (listener.exitNumlist) {
			listener.exitNumlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleASMVisitor<Result>): Result {
		if (visitor.visitNumlist) {
			return visitor.visitNumlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


