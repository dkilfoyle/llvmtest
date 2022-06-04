import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ItypeContext } from "../../antlr/SimpleASMParser";
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
  imm_11_5: maskBits(25,13),
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

const opcodes = {
  //       opcode     f3   f7
  add:   [ 0b0110011, 0x0, 0x00 ],
  sub:   [ 0b0110011, 0x0, 0x20 ],
  xor:   [ 0b0110011, 0x4, 0x00 ],
  or:    [ 0b0110011, 0x6, 0x00 ],
  and:   [ 0b0110011, 0x7, 0x00 ],
  sll:   [ 0b0110011, 0x1, 0x00 ],
  srl:   [ 0b0110011, 0x5, 0x00 ],
  sra:   [ 0b0110011, 0x5, 0x20 ],
  slt:   [ 0b0110011, 0x2, 0x00 ],
  sltu:  [ 0b0110011, 0x3, 0x00 ],
  addi:  [ 0b0010011, 0x0,      ],
  xori:  [ 0b0010011, 0x4,      ],
  ori:   [ 0b0010011, 0x6,      ],
  andi:  [ 0b0010011, 0x7,      ],
  slli:  [ 0b0010011, 0x1,      ],
  srli:  [ 0b0010011, 0x5,      ],
  srai:  [ 0b0010011, 0x5,      ],
  slti:  [ 0b0010011, 0x2,      ],
  sltiu: [ 0b0010011, 0x3,      ],
  lb:    [ 0b0000011, 0x0,      ],
  lh:    [ 0b0000011, 0x1,      ],
  lw:    [ 0b0000011, 0x2,      ],
  lbu:   [ 0b0000011, 0x4,      ],
  lhu:   [ 0b0000011, 0x5,      ],
  sb:    [ 0b0100011, 0x0,      ],
  sh:    [ 0b0100011, 0x1,      ],
  sw:    [ 0b0100011, 0x2,      ],
}

const setCode = (code: number, field: string, value: number) => {
  const [lo, mask] = instructionFields[field];
  return (code & ~(mask << lo)) | ((value & mask) << lo);
}

const signExtend = (value: number, bits: number) => {
  const shift = 31 - bits;
  return (value << shift) >> shift;
}

export class ByteCodeGenerator extends AbstractParseTreeVisitor<void> implements SimpleASMVisitor<void> {

  textBytes: ArrayBuffer;
  textView: DataView;

  constructor() {
    super();
    this.textBytes = new ArrayBuffer(1000);
    this.textView = new DataView(this.textBytes);
  }

  protected defaultResult() {
      return new ArrayBuffer(0);
  }

  visitItype(ctx: ItypeContext) {
    const [opcode, funct3, funct7] = opcodes[ctx._op.text];
    const rd = parseInt(registerNumbers[ctx._rd.text]);
    const rs1 = parseInt(registerNumbers[ctx._rs.text]);
    const imm = signExtend(parseInt(ctx.immediate().text), 12);

    let code = 0;
    code = setCode(code, "opcode", opcode);
    code = setCode(code, "funct3", funct3);
    code = setCode(code, "rd", rd);
    code = setCode(code, "rs1", rs1);
    code = setCode(code, "imm_11_0", imm);

    console.log(opcode, rd, funct3, rs1, imm);
    console.log(code, code.toString(16));
  }
}