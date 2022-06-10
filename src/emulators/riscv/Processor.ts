import { unsignedSlice } from "../../utils/bits";
import { decode } from "./decoder";

export class Processor {
  x: Int32Array;
  pc: number;
  mepc: number;
  fetchData: number;
  x1: number;
  x2: number;
  aluResult: number;
  branchTaken: boolean;
  loadData: number;
  state: string;
  fetchError: any;
  instr: { op: string; fmt: string; rs1: number; rs2: number; rd: number; imm: number; };

  constructor(nx: number, bus:Bus) {
    this.x = new Int32Array(nx);
    this.bus = bus;
    this.reset();
  }

  reset() {
    // set all registers to 0
    for (let i = 0; i < this.x.length; i++) this.x[i] = 0;
    this.pc = 0;
    this.mepc = 0;
    this.fetchData = 0;
    this.decode();
    this.x1 = 0;
    this.x2 = 0;
    this.aluResult = 0;
    this.branchTaken = false;
    this.loadData = 0;
    this.state = "fetch";
  }

  fetch() {
    this.fetchData = this.bus.read(this.pc, 4, false);
    this.fetchError = this.bus.error;
    this.state = "decode";
  }

  decode() {
    this.instr = decode(this.fetchData);
  }
}