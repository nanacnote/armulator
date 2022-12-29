/**

T0 - main encoding
    T1 - data-processing and miscellaneous instructions
        T11 - Extra load/store **
        T12 - Multiply and Accumulate **
            • MUL/MULS
        T13 - Synchronization primitives and Load-Acquire/Store-Release **
        T14 - Miscellaneous **
        T15 - Halfword Multiply and Accumulate **
        T16 - Data-processing register (immediate shift) 
        T17 - Data-processing register (register shift) 
        T18 - Data-processing immediate  
            T181 - Integer Data Processing (two register and immediate)
            T182 - Move Halfword (immediate) 
            T183 - Move Special Register and Hints (immediate) 
            T184 - Integer Test and Compare (one register and immediate) 
            T185 - Logical Arithmetic (two register and immediate)

    T2 - Load/Store Word, Unsigned Byte (immediate, literal)
        • LDR(literal)
        • LDR(immediate) - Post index variant
        • LDR(immediate) - Offset variant
        • LDRB(literal)
        • LDRB(immediate) - Post index variant
        • LDRB(immediate) - Offset variant
        • STR(immediate) - Pre index variant
        • STR(immediate) - Post index variant
        • STR(immediate) - Offset variant
        • STRB(immediate) - Post index variant
        • STRB(immediate) - Offset variant

    T3 - Load/Store Word, Unsigned Byte (register)
        • LDR (register) - Pre-indexed variant
        • LDR (register) - Post indexed variant
        • LDRB (register) - Pre indexed variant
        • LDRB (register) - Post indexed variant
        • STR (register) - Pre-indexed variant
        • STR (register) - Post indexed variant
        • STRB (register) - Pre indexed variant
        • STRB (register) - Post indexed variant

    T4 - Media instructions **

    T5 - Branch, branch with link, and block data transfer
        T51 - Exception Save/Restore **
        T52 - Load/Store Multiple **
        T53 - Branch (immediate)
            • B
            • BL (immediate)
            • BLX (immediate)

    T6 - System register access, Advanced SIMD, floating-point, and Supervisor call **

    T7 - Unconditional instructions **

 */

import {
  EMPTY_INSTRUCTION_INTERRUPT,
  UNDEFINED_INSTRUCTION_INTERRUPT,
} from "../var/def.js";

export class Decoder {
  constructor() {
    this.INSTRUCTION = null;

    // prettier-ignore
    this.T0 = [
        [["_ne", 0b1111],         ["_eqC", "00x"],        ["_any"],           ["_lup", "_T1"]],                             // data-processing and miscellaneous instructions
        [["_ne", 0b1111],         ["_eq", 0b010],         ["_any"],           ["_lup", "_T2"]],                             // Load/Store Word, Unsigned Byte (immediate, literal)
        [["_ne", 0b1111],         ["_eq", 0b011],         ["_eq", 0b0],       ["_lup", "_T3"]],                             // Load/Store Word, Unsigned Byte (register)
        [["_ne", 0b1111],         ["_eq", 0b011],         ["_eq", 0b1],       ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],   // Media instructions
        [["_any"],                ["_eqC", "10x"],        ["_any"],           ["_lup", "_T5"]],                             // Branch, branch with link, and block data transfer
        [["_any"],                ["_eqC", "11x"],        ["_any"],           ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],   // System register access, Advanced SIMD, floating-point, and Supervisor call
        [["_eq", 0b1111],         ["_eqC", "0xx"],        ["_any"],           ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],   // Unconditional instructions
    ];
    // prettier-ignore
    this.T1 = [
        [["_eq", 0b0],        ["_any"],               ["_eq", 0b1],       ["_ne", 0b00],      ["_eq", 0b1],       ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],   // Extra load/store 
        [["_eq", 0b0],        ["_eqC", "0xxxx"],      ["_eq", 0b1],       ["_eq", 0b00],      ["_eq", 0b1],       ["_lup", "_T12"]],                            // Multiply and Accumulate 
        [["_eq", 0b0],        ["_eqC", "1xxxx"],      ["_eq", 0b1],       ["_eq", 0b00],      ["_eq", 0b1],       ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],   // Synchronization primitives and Load-Acquire/Store-Release 
        [["_eq", 0b0],        ["_eqC", "10xx0"],      ["_eq", 0b0],       ["_any"],           ["_any"],           ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],   // Miscellaneous 
        [["_eq", 0b0],        ["_eqC", "10xx0"],      ["_eq", 0b1],       ["_any"],           ["_eq", 0b0],       ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],   // Halfword Multiply and Accumulate  
        [["_eq", 0b0],        ["_neC", "10xx0"],      ["_any"],           ["_any"],           ["_eq", 0b0],       ["_lup", "_T16"]],                            // Data-processing register (immediate shift) 
        [["_eq", 0b0],        ["_neC", "10xx0"],      ["_eq", 0b0],       ["_any"],           ["_eq", 0b1],       ["_lup", "_T17"]],                            // Data-processing register (register shift) 
        [["_eq", 0b1],        ["_any"],               ["_any"],           ["_any"],           ["_any"],           ["_lup", "_T18"]],                            // Data-processing immediate  
    ];
    // prettier-ignore
    this.T12 = [
        // TODO: not all opcodes implemented 
        [["_eq", 0b000],       ["_any"],       ["_ret", "MUL_MULS"]],         // MUL/MULS
    ]
    // prettier-ignore
    this.T18 = [
        [[], [], []],    // Integer Data Processing (two register and immediate)
        [[], [], []],    // Move Halfword (immediate) 
        [[], [], []],    // Move Special Register and Hints (immediate) 
        [[], [], []],    // Integer Test and Compare (one register and immediate) 
        [[], [], []],    // Logical Arithmetic (two register and immediate)
    ]
    // prettier-ignore
    this.T2 = [
        // TODO: not all opcodes implemented 
        [["_ne", 0b01],       ["_eq", 0b0],       ["_eq", 0b1],       ["_eq", 0b1111],        ["_ret", "LDR_LIT"]],          // LDR(literal)
        [["_eq", 0b00],       ["_eq", 0b0],       ["_eq", 0b1],       ["_ne", 0b1111],        ["_ret", "LDR_IMD_POST"]],     // LDR(immediate) - Post index variant
        [["_eq", 0b10],       ["_eq", 0b0],       ["_eq", 0b1],       ["_ne", 0b1111],        ["_ret", "LDR_IMD_OFST"]],     // LDR(immediate) - Offset variant
        [["_ne", 0b01],       ["_eq", 0b1],       ["_eq", 0b1],       ["_eq", 0b1111],        ["_ret", "LDRB_LIT"]],         // LDRB(literal)
        [["_eq", 0b00],       ["_eq", 0b1],       ["_eq", 0b1],       ["_ne", 0b1111],        ["_ret", "LDRB_IMD_POST"]],    // LDRB(immediate) - Post index variant
        [["_eq", 0b10],       ["_eq", 0b1],       ["_eq", 0b1],       ["_ne", 0b1111],        ["_ret", "LDRB_IMD_OFST"]],    // LDRB(immediate) - Offset variant
        [["_eq", 0b11],       ["_eq", 0b0],       ["_eq", 0b0],       ["_any"],               ["_ret", "STR_IMD_PRE"]],      // STR(immediate) - Pre index variant
        [["_eq", 0b00],       ["_eq", 0b0],       ["_eq", 0b0],       ["_any"],               ["_ret", "STR_IMD_POST"]],     // STR(immediate) - Post index variant
        [["_eq", 0b10],       ["_eq", 0b0],       ["_eq", 0b0],       ["_any"],               ["_ret", "STR_IMD_OFST"]],     // STR(immediate) - Offset variant
        [["_eq", 0b00],       ["_eq", 0b1],       ["_eq", 0b0],       ["_any"],               ["_ret", "STRB_IMD_POST"]],    // STRB(immediate) - Post index variant
        [["_eq", 0b10],       ["_eq", 0b1],       ["_eq", 0b0],       ["_any"],               ["_ret", "STRB_IMD_OFST"]],    // STRB(immediate) - Offset variant
    ];
    // prettier-ignore
    this.T3 = [
        // TODO: not all opcodes implemented 
        [["_eq", 0b1],      ["_eq", 0b0],       ["_any"],           ["_eq", 0b1],       ["_ret", "LDR_REG_PRE"]],        // LDR (register) - Pre-indexed variant
        [["_eq", 0b0],      ["_eq", 0b0],       ["_eq", 0b0],       ["_eq", 0b1],       ["_ret", "LDR_REG_POST"]],       // LDR (register) - Post indexed variant
        [["_eq", 0b1],      ["_eq", 0b1],       ["_any"],           ["_eq", 0b1],       ["_ret", "LDRB_REG_PRE"]],       // LDRB (register) - Pre indexed variant
        [["_eq", 0b0],      ["_eq", 0b1],       ["_eq", 0b0],       ["_eq", 0b1],       ["_ret", "LDRB_REG_POST"]],      // LDRB (register) - Post indexed variant
        [["_eq", 0b1],      ["_eq", 0b0],       ["_any"],           ["_eq", 0b0],       ["_ret", "STR_REG_PRE"]],        // STR (register) - Pre-indexed variant
        [["_eq", 0b0],      ["_eq", 0b0],       ["_eq", 0b0],       ["_eq", 0b0],       ["_ret", "STR_REG_POST"]],       // STR (register) - Post indexed variant
        [["_eq", 0b1],      ["_eq", 0b1],       ["_any"],           ["_eq", 0b0],       ["_ret", "STRB_REG_PRE"]],       // STRB (register) - Pre indexed variant
        [["_eq", 0b0],      ["_eq", 0b1],       ["_eq", 0b0],       ["_eq", 0b0],       ["_ret", "STRB_REG_POST"]],      // STRB (register) - Post indexed variant
    ];
    // prettier-ignore
    this.T5 = [
        [["_eq", 0b1111],       ["_eq", 0b0],       ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],        // Exception Save/Restore
        [["_ne", 0b1111],       ["_eq", 0b0],       ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],        // Load/Store Multiple
        [["any"],               ["_eq", 0b1],       ["_lup", "T53"]],                                  // Branch (immediate)
    ]
    // prettier-ignore
    this.T53 = [
        [["_ne", 0b1111],       ["_eq", 0b0],       ["_ret", "B"]],         // B
        [["_ne", 0b1111],       ["_eq", 0b1],       ["_ret", "BL"]],        // BL (immediate)
        [["_eq", 0b1111],       ["_any"],           ["_ret", "BLX"]],       // BLX (immediate)
    ]
  }

  decode(inst) {
    if ((this.INSTRUCTION = inst)) {
      const exec_handler = this._T0();
      this.INSTRUCTION = null;
      return exec_handler;
    } else {
      return EMPTY_INSTRUCTION_INTERRUPT;
    }
  }

  _any() {
    return true;
  }

  _lup(fName) {
    return this[fName].call(this);
  }

  _ret(code) {
    return code;
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
  _T0() {
    const cond = (this.INSTRUCTION >>> 28) & (((1 << 4) >>> 0) - 1);
    const op0 = (this.INSTRUCTION >>> 25) & (((1 << 3) >>> 0) - 1);
    const op1 = (this.INSTRUCTION >>> 4) & (((1 << 1) >>> 0) - 1);
    for (let i = 0, len = this.T0.length; i < len; i++) {
      const entry = this.T0[i];
      const [cond_func, cond_v1] = entry[0];
      const [op0_func, op0_v1] = entry[1];
      const [op1_func, op1_v1] = entry[2];
      const fields = [
        this[cond_func].call(this, cond_v1, cond),
        this[op0_func].call(this, op0_v1, op0),
        this[op1_func].call(this, op1_v1, op1),
      ];
      if (fields.every((v) => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  }

  // TABLE x
  _T1() {
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
      const fields = [
        this[op0_func].call(this, op0_v1, op0),
        this[op1_func].call(this, op1_v1, op1),
        this[op2_func].call(this, op2_v1, op2),
        this[op3_func].call(this, op3_v1, op3),
        this[op4_func].call(this, op4_v1, op4),
      ];
      if (fields.every((v) => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  }

  _T2() {
    const p = (this.INSTRUCTION >>> 24) & (((1 << 1) >>> 0) - 1);
    const w = (this.INSTRUCTION >>> 21) & (((1 << 1) >>> 0) - 1);
    const PW = (p << 1) + w;
    const o2 = (this.INSTRUCTION >>> 22) & (((1 << 1) >>> 0) - 1);
    const o1 = (this.INSTRUCTION >>> 20) & (((1 << 1) >>> 0) - 1);
    const Rn = (this.INSTRUCTION >>> 16) & (((1 << 4) >>> 0) - 1);
    for (let i = 0, len = this.T2.length; i < len; i++) {
      const entry = this.T2[i];
      const [PW_func, PW_v1] = entry[0];
      const [o2_func, o2_v1] = entry[1];
      const [o1_func, o1_v1] = entry[2];
      const [Rn_func, Rn_v1] = entry[3];
      const fields = [
        this[PW_func].call(this, PW_v1, PW),
        this[o2_func].call(this, o2_v1, o2),
        this[o1_func].call(this, o1_v1, o1),
        this[Rn_func].call(this, Rn_v1, Rn),
      ];
      if (fields.every((v) => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  }

  _T3() {
    const P = (this.INSTRUCTION >>> 24) & (((1 << 1) >>> 0) - 1);
    const o2 = (this.INSTRUCTION >>> 22) & (((1 << 1) >>> 0) - 1);
    const W = (this.INSTRUCTION >>> 21) & (((1 << 1) >>> 0) - 1);
    const o1 = (this.INSTRUCTION >>> 20) & (((1 << 1) >>> 0) - 1);
    for (let i = 0, len = this.T3.length; i < len; i++) {
      const entry = this.T3[i];
      const [P_func, P_v1] = entry[0];
      const [o2_func, o2_v1] = entry[1];
      const [W_func, W_v1] = entry[3];
      const [o1_func, o1_v1] = entry[2];
      const fields = [
        this[P_func].call(this, P_v1, P),
        this[o2_func].call(this, o2_v1, o2),
        this[W_func].call(this, W_v1, W),
        this[o1_func].call(this, o1_v1, o1),
      ];
      if (fields.every((v) => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  }

  _T5() {
    const cond = (this.INSTRUCTION >>> 28) & (((1 << 4) >>> 0) - 1);
    const op0 = (this.INSTRUCTION >>> 25) & (((1 << 1) >>> 0) - 1);
    for (let i = 0, len = this.T5.length; i < len; i++) {
      const entry = this.T5[i];
      const [cond_func, cond_v1] = entry[0];
      const [op0_func, op0_v1] = entry[1];
      const fields = [
        this[cond_func].call(this, cond_v1, cond),
        this[op0_func].call(this, op0_v1, op0),
      ];
      if (fields.every((v) => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  }

  // TABLE - 1x
  _T12() {
    const opc = (this.INSTRUCTION >>> 21) & (((1 << 3) >>> 0) - 1);
    const S = (this.INSTRUCTION >>> 20) & (((1 << 1) >>> 0) - 1);
    for (let i = 0, len = this.T12.length; i < len; i++) {
      const entry = this.T12[i];
      const [opc_func, opc_v1] = entry[0];
      const [S_func, S_v1] = entry[1];
      const fields = [
        this[opc_func].call(this, opc_v1, opc),
        this[S_func].call(this, S_v1, S),
      ];
      if (fields.every((v) => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  }

  _T16() {
    return "T16";
  }

  _T17() {
    return "T17";
  }

  _T18() {
    const op0 = (this.INSTRUCTION >>> 23) & (((1 << 2) >>> 0) - 1);
    const op1 = (this.INSTRUCTION >>> 20) & (((1 << 2) >>> 0) - 1);
    for (let i = 0, len = this.T18.length; i < len; i++) {
      const entry = this.T18[i];
      const [op0_func, op0_v1] = entry[0];
      const [op1_func, op1_v1] = entry[1];
      const fields = [
        this[op0_func].call(this, op0_v1, op0),
        this[op1_func].call(this, op1_v1, op1),
      ];
      if (fields.every((v) => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  }

  // TABLE 5x
  _T53() {
    const cond = (this.INSTRUCTION >>> 28) & (((1 << 4) >>> 0) - 1);
    const H = (this.INSTRUCTION >>> 24) & (((1 << 1) >>> 0) - 1);
    for (let i = 0, len = this.T53.length; i < len; i++) {
      const entry = this.T53[i];
      const [cond_func, cond_v1] = entry[0];
      const [H_func, H_v1] = entry[1];
      const fields = [
        this[cond_func].call(this, cond_v1, cond),
        this[H_func].call(this, H_v1, H),
      ];
      if (fields.every((v) => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
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
