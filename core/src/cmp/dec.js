/**

T0 - main encoding
T1 - data-processing and miscellaneous instructions
T2 - Load/Store Word, Unsigned Byte (immediate, literal)
T3 - Load/Store Word, Unsigned Byte (register)
T4 - Media instructions
T5 - Branch, branch with link, and block data transfer
T6 - System register access, Advanced SIMD, floating-point, and Supervisor call
T7 - Unconditional instructions

 */

export class Decoder {
  constructor() {
    this.INSTRUCTION = null;

    this.T0 = [
      [["_ne", 1111], ["_eq", 0b000], ["_any"], "_lupT1"],
      [["_ne", 1111], ["_eq", 0b001], ["_any"], "_lupT1"],
      [["_ne", 1111], ["_eq", 0b010], ["_any"], "_lupT2"],
      [["_ne", 1111], ["_eq", 0b011], ["_eq", 0b0], "_lupT3"],
      [["_ne", 1111], ["_eq", 0b011], ["_eq", 0b1], "_lupT4"],
      [["_any"], ["_eq", 0b100], ["_any"], "_lupT5"],
      [["_any"], ["_eq", 0b101], ["_any"], "_lupT5"],
      [["_any"], ["_eq", 0b110], ["_any"], "_lupT6"],
      [["_any"], ["_eq", 0b111], ["_any"], "_lupT6"],
      [["_eq", 0b1111], ["_eq", 0b000], ["_any"], "_lupT7"],
      [["_eq", 0b1111], ["_eq", 0b001], ["_any"], "_lupT7"],
      [["_eq", 0b1111], ["_eq", 0b010], ["_any"], "_lupT7"],
      [["_eq", 0b1111], ["_eq", 0b011], ["_any"], "_lupT7"],
    ];
  }

  _ne(v1, v2) {
    return !!(v1 ^ v2);
  }

  _eq(v1, v2) {
    return !(v1 ^ v2);
  }

  _any() {
    return true;
  }

  _lupT0() {
    const cond = (this.INSTRUCTION >>> 28) & (((1 << 31) >>> 0) - 1);
    const op0 = (this.INSTRUCTION >>> 25) & (((1 << 3) >>> 0) - 1);
    const op1 = (this.INSTRUCTION >>> 4) & (((1 << 1) >>> 0) - 1);

    for (let i = 0, len = this.T0.length; i < len; i++) {
      const entry = this.T0[i];
      const [cond_func, cond_v1] = entry[0];
      const [op0_func, op0_v1] = entry[1];
      const [op1_func, op1_v1] = entry[2];
      const field1 = this[cond_func].call(this, cond_v1, cond);
      const field2 = this[op0_func].call(this, op0_v1, op0);
      const field3 = this[op1_func].call(this, op1_v1, op1);
      if (field1 && field2 && field3) {
        this[entry[3]].call(this);
      }
    }
  }

  _lupT1() {
    console.log("T1");
  }

  _lupT2() {
    console.log("T2");
  }

  _lupT3() {
    console.log("T3");
  }

  _lupT4() {
    console.log("T4");
  }

  _lupT5() {
    console.log("T5");
  }

  _lupT6() {
    console.log("T6");
  }

  init(inst) {
    this.INSTRUCTION = inst;
    if (this.INSTRUCTION) {
      this._lupT0();
    }
  }
}
