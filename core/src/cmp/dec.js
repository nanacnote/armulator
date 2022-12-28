/**

T0 - main encoding
    T1 - data-processing and miscellaneous instructions
        T11 - Extra load/store 
        T12 - Multiply and Accumulate 
        T13 - Synchronization primitives and Load-Acquire/Store-Release 
        T14 - Miscellaneous 
        T15 - Halfword Multiply and Accumulate  
        T16 - Data-processing register (immediate shift) 
        T17 - Data-processing register (register shift) 
        T18 - Data-processing immediate  

    T2 - Load/Store Word, Unsigned Byte (immediate, literal)
    T3 - Load/Store Word, Unsigned Byte (register)
    T4 - Media instructions
    T5 - Branch, branch with link, and block data transfer
    T6 - System register access, Advanced SIMD, floating-point, and Supervisor call
    T7 - Unconditional instructions

 */

import {
  EMPTY_INSTRUCTION_INTERRUPT,
  UNIMPLEMENTED_INSTRUCTION_INTERRUPT,
} from "../var/def.js";

export class Decoder {
  constructor() {
    this.INSTRUCTION = null;

    // prettier-ignore
    this.T0 = [
      [["_ne", 0b1111],         ["_eqC", "00x"],        ["_any"],           "_lupT1"],
      [["_ne", 0b1111],         ["_eq", 0b010],         ["_any"],           "_lupT2"],
      [["_ne", 0b1111],         ["_eq", 0b011],         ["_eq", 0b0],       "_lupT3"],
      [["_ne", 0b1111],         ["_eq", 0b011],         ["_eq", 0b1],       "_lupT4"],
      [["_any"],                ["_eqC", "10x"],        ["_any"],           "_lupT5"],
      [["_any"],                ["_eqC", "11x"],        ["_any"],           "_lupT6"],
      [["_eq", 0b1111],         ["_eqC", "0xx"],        ["_any"],           "_lupT7"],
    ];
    // prettier-ignore
    this.T1 = [
        [["_eq", 0b0],        ["_any"],               ["_eq", 0b1],       ["_ne", 0b00],      ["_eq", 0b1],       "_lupT11"],
        [["_eq", 0b0],        ["_eqC", "0xxxx"],      ["_eq", 0b1],       ["_eq", 0b00],      ["_eq", 0b1],       "_lupT12"],
        [["_eq", 0b0],        ["_eqC", "1xxxx"],      ["_eq", 0b1],       ["_eq", 0b00],      ["_eq", 0b1],       "_lupT13"],
        [["_eq", 0b0],        ["_eqC", "10xx0"],      ["_eq", 0b0],       ["_any"],           ["_any"],           "_lupT14"],
        [["_eq", 0b0],        ["_eqC", "10xx0"],      ["_eq", 0b1],       ["_any"],           ["_eq", 0b0],       "_lupT15"],
        [["_eq", 0b0],        ["_neC", "10xx0"],      ["_any"],           ["_any"],           ["_eq", 0b0],       "_lupT16"],
        [["_eq", 0b0],        ["_neC", "10xx0"],      ["_eq", 0b0],       ["_any"],           ["_eq", 0b1],       "_lupT17"],
        [["_eq", 0b1],        ["_any"],               ["_any"],           ["_any"],           ["_any"],           "_lupT18"],
    ];
    // prettier-ignore
    this.T2 =[

    ]
  }

  _any() {
    return true;
  }

  _ne(v1, v2) {
    return !!(v1 ^ v2);
  }

  _eq(v1, v2) {
    return !(v1 ^ v2);
  }

  _neC(v1, v2) {
    let v2str = v2.toString(2);
    const v1len = v1.length;
    while (v2str.length < v1len) {
      v2str = "0" + v2str;
    }
    for (let i = 0; i < v1len; i++) {
      const curV1 = v1[i];
      const curV2 = v2str[i];
      if (curV1 == "x") continue;
      if (curV1 == curV2) return false;
    }
    return true;
  }

  _eqC(v1, v2) {
    let v2str = v2.toString(2);
    const v1len = v1.length;
    while (v2str.length < v1len) {
      v2str = "0" + v2str;
    }
    for (let i = 0; i < v1len; i++) {
      const curV1 = v1[i];
      const curV2 = v2str[i];
      if (curV1 == "x") continue;
      if (curV1 != curV2) return false;
    }
    return true;
  }

  // TABLE 0
  _lupT0() {
    const cond = (this.INSTRUCTION >>> 28) & (((1 << 4) >>> 0) - 1);
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
        return this[entry[3]].call(this);
      }
    }
    return UNIMPLEMENTED_INSTRUCTION_INTERRUPT;
  }

  // TABLE x
  _lupT1() {
    const op0 = (this.INSTRUCTION >>> 25) & (((1 << 1) >>> 0) - 1);
    const op1 = (this.INSTRUCTION >>> 20) & (((1 << 5) >>> 0) - 1);
    const op2 = (this.INSTRUCTION >>> 7) & (((1 << 1) >>> 0) - 1);
    const op3 = (this.INSTRUCTION >>> 5) & (((1 << 2) >>> 0) - 1);
    const op4 = (this.INSTRUCTION >>> 4) & (((1 << 1) >>> 0) - 1);
    for (let i = 0, len = this.T1.length; i < len; i++) {
      const entry = this.T1[i];
      const [op0_func, op0_v1] = entry[0];
      const [op1_func, op1_v1] = entry[1];
      const [op2_func, op2_v1] = entry[2];
      const [op3_func, op3_v1] = entry[3];
      const [op4_func, op4_v1] = entry[4];
      const field1 = this[op0_func].call(this, op0_v1, op0);
      const field2 = this[op1_func].call(this, op1_v1, op1);
      const field3 = this[op2_func].call(this, op2_v1, op2);
      const field4 = this[op3_func].call(this, op3_v1, op3);
      const field5 = this[op4_func].call(this, op4_v1, op4);
      if (field1 && field2 && field3 && field4 && field5) {
        return this[entry[5]].call(this);
      }
    }
    return UNIMPLEMENTED_INSTRUCTION_INTERRUPT;
  }

  _lupT2() {
    return "T2";
  }

  _lupT3() {
    return "T3";
  }

  _lupT4() {
    return "T4";
  }

  _lupT5() {
    return "T5";
  }

  _lupT6() {
    return "T6";
  }

  // TABLE - 1x
  _lupT11() {
    return "T11";
  }

  _lupT12() {
    return "T12";
  }

  _lupT13() {
    return "T13";
  }

  _lupT14() {
    return "T14";
  }

  _lupT15() {
    return "T15";
  }

  _lupT16() {
    return "T16";
  }

  _lupT17() {
    return "T17";
  }

  _lupT18() {
    return "T18";
  }

  decode(inst) {
    if ((this.INSTRUCTION = inst)) {
      const exec_handler = this._lupT0();
      this.INSTRUCTION = null;
      return exec_handler;
    } else {
      return EMPTY_INSTRUCTION_INTERRUPT;
    }
  }
}

const INSTRUCTION_SUBSET = [
  "ADC",
  "ADD",
  "ADR",
  "AND",
  "ASR",
  "BIC",
  "BL",
  "CMN",
  "CMP",
  "DCD",
  "END",
  "EOR",
  "EQU",
  "FILL",
  "LDM",
  "LDR",
  "LDR",
  "LSL",
  "LSR",
  "MOV",
  "MVN",
  "ORR",
  "ROR",
  "RRX",
  "RSB",
  "RSC",
  "SBC",
  "STM",
  "STR",
  "SUB",
  "TEQ",
  "TST",
];
