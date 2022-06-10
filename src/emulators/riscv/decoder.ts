import { sign } from "crypto";
import { operations } from "../../assemblers/riscv/Instruction";
import { signedSlice, unsignedSlice } from "../../utils/bits";

const operators: {[index:string]: {name:string,fmt:string}} = Object.entries(operations).reduce((res, [name,[fmt, opcode, f3, f7]]) => {
  res[`${opcode.toString(16)}_${f3.toString(16)}_${f7.toString(16)}`] = {name,fmt};
  return res;
}, {});

export const decode = (value: number) => {
  const opcode = unsignedSlice(value, 6, 0);
  const f3 = unsignedSlice(value, 14, 12);
  const f7 = unsignedSlice(value, 31, 25);
  const rs2    = unsignedSlice(value, 24, 20);
  const rs1    = unsignedSlice(value, 19, 15);
  const rd     = unsignedSlice(value, 11, 7);
  const op = operators[`${opcode.toString(16)}_${f3.toString(16)}_${f7.toString(16)}`];

  let imm;
  if (["slli", "srli", "srai"].includes(op.name)) {
    imm = rs2
  } else {
    if (op.fmt == "I") {
      imm = signedSlice(value, 31, 20);
    } else if (op.fmt == "S") {
      imm = signedSlice(value, 31, 25, 5) | unsignedSlice(value, 11, 7)
    } else if (op.fmt == "B") {
      imm = signedSlice(value, 31, 31, 12) | unsignedSlice(value, 7, 7,11) | unsignedSlice(30,25,5) | unsignedSlice(11,8,1);
    } else if (op.fmt == "U") {
      imm = signedSlice(value, 31, 12, 12);
    } else if (op.fmt == "J") {
      imm = signedSlice(value, 31, 31, 20) | unsignedSlice(value, 19,12,12) | unsignedSlice(value, 20,20,11) | unsignedSlice(30,21,1);
    } else
      imm = 0;
  }

  return {
    op: op.name,
    fmt: op.fmt,
    rs1, 
    rs2,
    rd,
    imm
  }
}