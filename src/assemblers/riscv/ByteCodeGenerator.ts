// adapted from:
// https://github.com/andrescv/jupiter

import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { DataContext, EnvironmentContext, ItypeContext, JtypeContext, LabelContext, PseudoContext, RtypeContext, StypeContext, UtypeContext } from "../../antlr/SimpleASMParser";
import { SimpleASMVisitor } from "../../antlr/SimpleASMVisitor";

const maskBits = (lo:number, hi:number = lo) => {
  let mask = 0;
  for (let i = lo, j=0; i<=hi; i++, j++) mask |= 1 << j;
  return [
    lo,
    mask
  ]
}

// 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 09 08 07 06 05 04 03 02 01 00
// {       funct7     } {     rs2    } {     rs1    } {  f3  } {      rd    } {      opcode      }   R Type
// {             imm[11:0]           } {     rs1    } {  f3  } {      rd    } {      opcode      }   I Type
// {     imm[11:5]    } {     rs2    } {     rs1    } {  f3  } {  imm[4:0]  } {      opcode      }   S Type

interface InstructionField {
  lo: number,
  mask: number
}

const instructionFields = {
  all: maskBits(0,31),
  opcode: maskBits(0,6),
  funct3: maskBits(12,14),
  funct5: maskBits(27,13),
  funct7: maskBits(25,31),
  rd: maskBits(7,11),
  rs1: maskBits(15, 19),
  rs2: maskBits(20, 24),
  rs3: maskBits(27, 31),
  imm_11_0: maskBits(20,31),
  imm_4_0: maskBits(7,11),
  imm_11_5: maskBits(25,31),
  imm_11b: maskBits(7),
  imm_4_1: maskBits(8, 11),
  imm_10_5: maskBits(25, 30),
  imm_12: maskBits(31),
  imm_31_12: maskBits(12, 31),
  imm_19_12: maskBits(12, 19),
  imm_11j: maskBits(20),
  imm_10_1: maskBits(21, 30),
  imm_20: maskBits(31)
}

const registerNumbers = {
  zero: 0,
  ra:  1,
  sp:  2,
  gp:  3,
  tp:  4,
  t0:  5,
  t1:  6,
  t2:  7,
  s0:  8,
  fp:  8,
  s1:  9,
  a0:  10,
  a1: 11,
  a2: 12,
  a3: 13,
  a4: 14,
  a5: 15,
  a6: 16,
  a7: 17,
  s2: 18,
  s3: 19,
  s4: 20,
  s5: 21,
  s6: 22,
  s7: 23,
  s8: 24,
  s9: 25,
  s10: 26,
  s11: 27,
  t3: 28,
  t4: 29,
  t5: 30,
  t6: 31,
  x0: 0,
  x1: 1,
  x2: 2,
  x3: 3,
  x4: 4,
  x5: 5,
  x6: 6,
  x7: 7,
  x8: 8,
  x9: 9,
  x10: 0,
  x11: 11,
  x12: 12,
  x13: 13,
  x14: 14,
  x15: 15,
  x16: 16,
  x17: 17,
  x18: 18,
  x19: 19,
  x20: 20,
  x21: 21,
  x22: 22,
  x23: 23,
  x24: 24,
  x25: 25,
  x26: 26,
  x27: 27,
  x28: 28,
  x29: 29,
  x30: 30,
  x31: 31
}

// prettier-ignore
const operations = {
  //       fmt  opcode     f3   f7
  add:   [ "R", 0b0110011, 0x0, 0x00 ], // __ rd, rs1, rs2 
  sub:   [ "R", 0b0110011, 0x0, 0x20 ], // __ rd, rs1, rs2
  xor:   [ "R", 0b0110011, 0x4, 0x00 ], // __ rd, rs1, rs2
  or:    [ "R", 0b0110011, 0x6, 0x00 ], // __ rd, rs1, rs2
  and:   [ "R", 0b0110011, 0x7, 0x00 ], // __ rd, rs1, rs2
  sll:   [ "R", 0b0110011, 0x1, 0x00 ], // __ rd, rs1, rs2
  srl:   [ "R", 0b0110011, 0x5, 0x00 ], // __ rd, rs1, rs2
  sra:   [ "R", 0b0110011, 0x5, 0x20 ], // __ rd, rs1, rs2
  slt:   [ "R", 0b0110011, 0x2, 0x00 ], // __ rd, rs1, rs2
  sltu:  [ "R", 0b0110011, 0x3, 0x00 ], // __ rd, rs1, rs2
  addi:  [ "I", 0b0010011, 0x0,      ], // __ rd, rs1, imm
  xori:  [ "I", 0b0010011, 0x4,      ], // __ rd, rs1, imm
  ori:   [ "I", 0b0010011, 0x6,      ], // __ rd, rs1, imm
  andi:  [ "I", 0b0010011, 0x7,      ], // __ rd, rs1, imm
  slli:  [ "I", 0b0010011, 0x1,      ], // __ rd, rs1, imm
  srli:  [ "I", 0b0010011, 0x5,      ], // __ rd, rs1, imm
  srai:  [ "I", 0b0010011, 0x5,      ], // __ rd, rs1, imm
  slti:  [ "I", 0b0010011, 0x2,      ], // __ rd, rs1, imm
  sltiu: [ "I", 0b0010011, 0x3,      ], // __ rd, rs1, imm
  lb:    [ "I", 0b0000011, 0x0,      ], // l__ rd, rs1, imm
  lh:    [ "I", 0b0000011, 0x1,      ], // l__ rd, rs1, imm
  lw:    [ "I", 0b0000011, 0x2,      ], // l__ rd, rs1, imm
  lbu:   [ "I", 0b0000011, 0x4,      ], // l__ rd, rs1, imm
  lhu:   [ "I", 0b0000011, 0x5,      ], // l__ rd, rs1, imm
  sb:    [ "S", 0b0100011, 0x0,      ], // s_  rs1, rs2, imm
  sh:    [ "S", 0b0100011, 0x1,      ], // s_  rs1, rs2, imm
  sw:    [ "S", 0b0100011, 0x2,      ], // s_  rs1, rs2, imm
  beq:   [ "B", 0b1100011, 0x0,      ], // b__ rs1, rs2, imm 
  bne:   [ "B", 0b1100011, 0x1,      ], // b__ rs1, rs2, imm
  blt:   [ "B", 0b1100011, 0x4,      ], // b__ rs1, rs2, imm
  bge:   [ "B", 0b1100011, 0x5,      ], // b__ rs1, rs2, imm
  bltu:  [ "B", 0b1100011, 0x6,      ], // b__ rs1, rs2, imm
  bgeu:  [ "B", 0b1100011, 0x7,      ], // b__ rs1, rs2, imm
  jal:   [ "J", 0b1101111,    ,      ], // jal rd, imm
  jalr:  [ "I", 0b1100111, 0x0,      ], // jalr rd, rs1, imm
  lui:   [ "U", 0b0110111,    ,      ],
  auipc: [ "U", 0b0010111,    ,      ],
  ecall: [ "I", 0b1110011, 0x0,      ]
}

// prettier-ignore
const pseudos = {
  nop:    {name: "addi",  rd: 0, rs1: 0,         imm: 0 },
  li:     {name: "addi",         rs1: 0                 },
  mv:     {name: "addi",                         imm: 0 },
  not:    {name: "xori",                         imm: -1},
  neg:    {name: "sub",          rs1: 0                 },
  seqz:   {name: "sltiu",                        imm: 1 },
  snez:   {name: "sltu",         rs1: 0                 },
  sgtz:   {name: "slt",          rs1: 0                 },
  sltz:   {name: "slt",                  rs2: 0         },
  beqz:   {name: "beq",                  rs2: 0         },
  bnez:   {name: "bne",                  rs2: 0         },
  blez:   {name: "bge",          rs1: 0                 },
  bgez:   {name: "bge",                  rs2: 0         },
  bltz:   {name: "blt",                  rs2: 0         },
  bgtz:   {name: "blt",          rs1: 0                 },
  j:      {name: "jal",   rd: 0                         },
  jr:     {name: "jalr",  rd: 0,                 imm: 0 },
  jal:    {name: "jal",   rd: 1                         },
  jalr:   {name: "jalr",  rd: 1,                 imm: 0 },
  ret:    {name: "jalr",  rd: 0, rs1: 1,         imm: 0 },
  call:   {name: "jalr",  rd: 1, rs1: 1,                },
}

const setCode = (code: number, field: string, value: number) => {
  const [lo, mask] = instructionFields[field];
  return (code & ~(mask << lo)) | ((value & mask) << lo);
}

const signExtend = (value: number, bits: number) => {
  const shift = 31 - bits;
  return (value << shift) >> shift;
}

const getBits = (n: number, end: number, start: number) => {
  return (n >> start) & ((1 << (end-start)) - 1);
} 

type SymbolTable = {[index:string]: number};
type InstructionType = "I" | "R" | "S" | "B" | "J" | "U";

interface InstructionParameters {
  rs1?: number;
  rs2?: number;
  rd?: number;
  imm?: number;
  offset?: number | string;
  symbol?: string;
}

class Instruction {
  iType: InstructionType;
  opName: string;
  params: InstructionParameters;
  line: number;
  col: number;
  machineCode: number;

  constructor(opName: string, params: InstructionParameters, pos: [number, number]) {
    this.iType = operations[opName][0];
    this.opName = opName;
    this.params = params;
    this.line = pos[0];
    this.col = pos[1];
    this.machineCode = 0;
  }

  build(index: number, symbols: SymbolTable) {
    // convert string offset to immediate
    // calculate machinecode

    if (typeof(this.params.offset) == "string") {
      this.params.imm = symbols[this.params.offset] - (index*4); 
    }

    if (this.params.symbol) {
      this.params.imm = symbols[this.params.symbol]
    }

    const [fmt, opcode, funct3, funct7] = operations[this.opName];

    let code = 0;
    code = setCode(code, "opcode", opcode)
    switch (this.iType) {
      case "I":
        code = setCode(code, "funct3", funct3);
        code = setCode(code, "rd", this.params.rd);
        code = setCode(code, "rs1", this.params.rs1);
        code = setCode(code, "imm_11_0", this.params.imm);
        break;
      case "R":
        code = setCode(code, "funct3", funct3);
        code = setCode(code, "funct7", funct7);
        code = setCode(code, "rd", this.params.rd);
        code = setCode(code, "rs1", this.params.rs1);
        code = setCode(code, "rs2", this.params.rs2);
        break;
      case "S":
        code = setCode(code, "funct3", funct3);
        code = setCode(code, "rs1", this.params.rs1);
        code = setCode(code, "rs2", this.params.rs2);
        code = setCode(code, "imm_4_0", this.params.imm);
        code = setCode(code, "imm_11_5", this.params.imm >>> 5);
        break;
      case "B":
        code = setCode(code, "funct3", funct3);
        code = setCode(code, "rs1", this.params.rs1);
        code = setCode(code, "rs2", this.params.rs2);
        code = setCode(code, "imm_11b", this.params.imm >>> 11);
        code = setCode(code, "imm_4_1", this.params.imm >>> 1);
        code = setCode(code, "imm_10_5", this.params.imm >>> 5);
        code = setCode(code, "imm_12", this.params.imm >>> 12);
        break;
      case "J":
        code = setCode(code, "rd", this.params.rd);
        code = setCode(code, "imm_19_12", this.params.imm >>> 12);
        code = setCode(code, "imm_11j", this.params.imm >>> 11);
        code = setCode(code, "imm_10_1", this.params.imm >>> 1);
        code = setCode(code, "imm_20", this.params.imm >>> 20);
        break;
      case "U":
        code = setCode(code, "rd", this.params.rd);
        code = setCode(code, "imm_31_12", this.params.imm >>> 12);
        break;
      default:
        throw new Error();
    }
    this.machineCode = code >>> 0;
  }

  formatMachineCode() {
    return "0x" + this.machineCode.toString(16).padStart(8,"0");
  }

  formatInstruction() {
    const xs = this.machineCode.toString(2).padStart(32, "0");
    switch (this.iType) {
      case "R":
      case "S":
      case "B":
        return  xs.slice(31-31, 31-25+1) + 
          "_" + xs.slice(31-24, 31-20+1) +
          "_" + xs.slice(31-19, 31-15+1) +
          "_" + xs.slice(31-14, 31-12+1) +
          "_" + xs.slice(31-11, 31-7+1) +
          "_" + xs.slice(31-6, 31-0+1);
      case "I":
        return  xs.slice(31-31, 31-20+1) + 
          "_" + xs.slice(31-19, 31-15+1) +
          "_" + xs.slice(31-14, 31-12+1) +
          "_" + xs.slice(31-11, 31-7+1) +
          "_" + xs.slice(31-6,  31-0+1);
      case "J":
      case "U":
        return  xs.slice(31-31, 31-12+1) + 
          "_" + xs.slice(31-11, 31-7+1) +
          "_" + xs.slice(31-6,  31-0+1);
      default:
        throw new Error();
    }
  }
}

export class ByteCodeGenerator extends AbstractParseTreeVisitor<void> implements SimpleASMVisitor<void> {

  // textBytes: ArrayBuffer;
  // textView: DataView;
  instructions: Instruction[];
  symbols: SymbolTable;
  staticData: Uint8Array;
  staticPointer: number;

  constructor() {
    super();
    this.reset();
  }

  reset() {
    // this.textBytes = new ArrayBuffer(1000);
    // this.textView = new DataView(this.params.textBytes);
    this.instructions = new Array<Instruction>();
    this.symbols = {};
    this.staticData = new Uint8Array(1024);
    this.staticPointer = 0;
  }

  protected defaultResult() {
  }

  buildMachineCode() {
    this.instructions.forEach((ins,i) => ins.build(i, this.symbols))
  }

  printSymbols() {
    Object.entries(this.symbols).forEach(symbol => {
      const [name, offset] = symbol;
      console.log(`${name.padStart(20," ")} : ${offset.toString().padStart(4," ")} = 0x${offset.toString(16)}`)
    })
  }

  printStatements() {
    this.instructions.forEach((ins,i) => {
      console.log(`0x${(i*4).toString(16).padStart(3,"0")} ${ins.formatMachineCode()} ${ins.formatInstruction().padStart(37," ")}`);
    })
  }

  visitLabel(ctx:LabelContext) {
    const label = ctx.ID().text;
    this.symbols[label] = this.instructions.length*4;
  }

  getPos(ctx: ParserRuleContext): [number, number] {
    return [ctx.start.line, ctx.start.charPositionInLine];
  }

  visitData(ctx: DataContext) {
    const name = ctx._name.text;
    const type = ctx._type.text;

    this.symbols[name] = 0x1000_0000 + this.staticPointer;

    switch (type) {
      case '.string':
      case '.ascii':
      case '.asciiz': {
        const data = ctx.String().text;
        for (let i = 0; i < data.length; i++) {
          this.staticData[this.staticPointer++] = data.charCodeAt(i);
        }
        break;
      }
      case '.byte':
      case '.word':
        // TODO
        break;
      default:
        throw new Error();
    }
  }

  visitEnvironment(ctx: EnvironmentContext) {
    this.instructions.push(new Instruction("ecall", {}, this.getPos(ctx)))
  }

  visitItype(ctx: ItypeContext) {
    const rd = parseInt(registerNumbers[ctx._rd.text]);
    const rs1 = parseInt(registerNumbers[ctx._rs1.text]);
    const imm = parseInt(ctx.immediate().text) >>> 0;
    this.instructions.push(new Instruction(ctx._op.text, {rd, rs1, imm}, this.getPos(ctx)));
  }

  visitRtype(ctx: RtypeContext) {
    const rd = parseInt(registerNumbers[ctx._rd.text]);
    const rs1 = parseInt(registerNumbers[ctx._rs1.text]);
    const rs2 = parseInt(registerNumbers[ctx._rs2.text]);
    this.instructions.push(new Instruction(ctx._op.text, {rs1, rs2, rd}, this.getPos(ctx)));
  }

  visitStype(ctx: StypeContext) {
    const rs1 = parseInt(registerNumbers[ctx._rs1.text]);
    const rs2 = parseInt(registerNumbers[ctx._rs2.text]);
    const imm = parseInt(ctx.immediate().text) >>> 0; 
    this.instructions.push(new Instruction(ctx._op.text, {imm, rs1, rs2}, this.getPos(ctx)));
  }

  visitBtype(ctx: StypeContext) {
    const rs1 = parseInt(registerNumbers[ctx._rs1.text]);
    const rs2 = parseInt(registerNumbers[ctx._rs2.text]);
    const imm = parseInt(ctx.immediate().text) >>> 0;
    this.instructions.push(new Instruction(ctx._op.text, {imm, rs1, rs2}, this.getPos(ctx)));
  }

  visitJtype(ctx:JtypeContext) {
    const rd = parseInt(registerNumbers[ctx._rd.text]);
    const imm = parseInt(ctx.immediate().text); 
    this.instructions.push(new Instruction(ctx._op.text, {rd, imm}, this.getPos(ctx)));
  }

  visitUtype(ctx: UtypeContext) {
    const rd = parseInt(registerNumbers[ctx._rd.text]);
    const imm = parseInt(ctx.immediate().text) >>> 0;
    this.instructions.push(new Instruction(ctx._op.text, {rd, imm}, this.getPos(ctx)));
  }

  visitPseudo(ctx: PseudoContext) {
    const op = ctx._op.text;
    const rs1 = ctx._rs1 ? parseInt(registerNumbers[ctx._rs1.text]) : undefined;
    const rs2 = ctx._rs2 ? parseInt(registerNumbers[ctx._rs2.text]) : undefined;
    const rd = ctx._rd ? parseInt(registerNumbers[ctx._rd.text]) : undefined;
    const imm = ctx.immediate() ? parseInt(ctx.immediate().text) : undefined;
    const offset = ctx.offset() ? ctx.offset().text : undefined;
    const symbol = ctx._symbol ? ctx._symbol.text : undefined;

    if (op == "la") {
      this.instructions.push(new Instruction("auipc", {rd, symbol}, this.getPos(ctx)))
      this.instructions.push(new Instruction("addi", {rd, rs1:rd, symbol}, this.getPos(ctx)))
      return;
    }

    if (op == "li" && imm > 0b111111111111) {
      this.instructions.push(new Instruction("lui", {rd, imm: getBits(imm, 31, 12)}, this.getPos(ctx)));
      this.instructions.push(new Instruction("addi", {rd, rs1:rd, imm: getBits(imm, 11, 0)}, this.getPos(ctx)));
      return;
    }

    const rop = pseudos[op];
    this.instructions.push(new Instruction(rop.name, {...{rs1, rs2, rd, imm, offset}, ...rop}, this.getPos(ctx)));
  }
}