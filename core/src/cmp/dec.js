/**

T0 - main encoding
    T1 - data-processing and miscellaneous instructions
        T11 - Extra load/store                                                              **
        T12 - Multiply and Accumulate
            • MUL/MULS
            • MLA/MLAS
            • UMAAL
            • MLS
            • UMULL/UMULLS
        T13 - Synchronization primitives and Load-Acquire/Store-Release                     **
        T14 - Miscellaneous
            • BX
            • BXJ
            • BLX (register)
            • CLZ
        T15 - Halfword Multiply and Accumulate                                              **
        T16 - Data-processing register (immediate shift)
            T161 - Integer Data Processing (three register, immediate shift)                **
            T162 - Integer Test and Compare (two register, immediate shift)
                • TST (register) - Shift or rotate by value variant
                • TST (register) - Rotate right with extend variant
                • TEQ (register) - Shift or rotate by value variant
                • TEQ (register) - Rotate right with extend variant
                • CMP (register) - Shift or rotate by value variant
                • CMP (register) - Rotate right with extend variant
                • CMN (register) - Shift or rotate by value variant
                • CMN (register) - Rotate right with extend variant
            T163 - Logical Arithmetic (three register, immediate shift)
                • ORR, ORRS (register) - ORRS, shift or rotate by value variant
                • ORR, ORRS (register) - ORRS, rotate right with extend variant
                • MOV, MOVS (register) - MOVS, shift or rotate by value variant
                • MOV, MOVS (register) - MOVS, rotate right with extend variant
                • BIC, BICS (register) - BICS, shift or rotate by value variant
                • BIC, BICS (register) - BICS, rotate right with extend variant
                • MVN, MVNS (register) - MVNS, shift or rotate by value variant
                • MVN, MVNS (register) - MVNS, rotate right with extend variant
        T17 - Data-processing register (register shift)                                     **
        T18 - Data-processing immediate
            T181 - Integer Data Processing (two register and immediate)
                • AND, ANDS (immediate)
                • EOR, EORS (immediate)
                • SUB, SUBS (immediate) - SUB variant
                • SUB, SUBS (SP minus immediate) - SUB variant 
                • ADR - A2
                • SUB, SUBS (immediate) - SUBS variant
                • SUB, SUBS (SP minus immediate) - SUBS variant 
                • RSB, RSBS (immediate)
                • ADD, ADDS (immediate) - ADD variant
                • ADD, ADDS (SP plus immediate) - ADD variant 
                • ADR - A1
                • ADD, ADDS (immediate) - ADDS variant
                • ADD, ADDS (SP plus immediate) - ADDS variant
                • ADC, ADCS (immediate)
                • SBC, SBCS (immediate)
                • RSC, RSCS (immediate)
            T182 - Move Halfword (immediate) 
                • MOV, MOVS (immediate)
                • MOVT
            T183 - Move Special Register and Hints (immediate)                              **
            T184 - Integer Test and Compare (one register and immediate) 
                • TST (immediate)
                • TEQ (immediate)
                • CMP (immediate)
                • CMN (immediate)
            T185 - Logical Arithmetic (two register and immediate)
                • ORR, ORRS (immediate)
                • MOV, MOVS (immediate)
                • BIC, BICS (immediate)
                • MVN, MVNS (immediate)

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

    T4 - Media instructions                                                                 **

    T5 - Branch, branch with link, and block data transfer
        T51 - Exception Save/Restore                                                        **
        T52 - Load/Store Multiple                                                           **
        T53 - Branch (immediate)
            • B
            • BL (immediate)
            • BLX (immediate)

    T6 - System register access, Advanced SIMD, floating-point, and Supervisor call         **

    T7 - Unconditional instructions                                                         **

 */

import { MNEM } from "../lib/def.js";

export class Dec {
  // Machine code decoder
  constructor() {
    this.INSTRUCTION = null;

    // prettier-ignore
    this.T0 = [
        [["_ne", 0b1111],         ["_eqC", "00x"],        ["_any"],           ["_lup", "_T1"]],                             // data-processing and miscellaneous instructions
        [["_ne", 0b1111],         ["_eq", 0b010],         ["_any"],           ["_lup", "_T2"]],                             // Load/Store Word, Unsigned Byte (immediate, literal)
        [["_ne", 0b1111],         ["_eq", 0b011],         ["_eq", 0b0],       ["_lup", "_T3"]],                             // Load/Store Word, Unsigned Byte (register)
        [["_ne", 0b1111],         ["_eq", 0b011],         ["_eq", 0b1],       ["_ret", undefined]],                         // Media instructions
        [["_any"],                ["_eqC", "10x"],        ["_any"],           ["_lup", "_T5"]],                             // Branch, branch with link, and block data transfer
        [["_any"],                ["_eqC", "11x"],        ["_any"],           ["_ret", undefined]],                         // System register access, Advanced SIMD, floating-point, and Supervisor call
        [["_eq", 0b1111],         ["_eqC", "0xx"],        ["_any"],           ["_ret", undefined]],                         // Unconditional instructions
    ];
    // prettier-ignore
    this.T1 = [
        [["_eq", 0b0],        ["_any"],               ["_eq", 0b1],       ["_ne", 0b00],      ["_eq", 0b1],       ["_ret", undefined]],                         // Extra load/store 
        [["_eq", 0b0],        ["_eqC", "0xxxx"],      ["_eq", 0b1],       ["_eq", 0b00],      ["_eq", 0b1],       ["_lup", "_T12"]],                            // Multiply and Accumulate 
        [["_eq", 0b0],        ["_eqC", "1xxxx"],      ["_eq", 0b1],       ["_eq", 0b00],      ["_eq", 0b1],       ["_ret", undefined]],                         // Synchronization primitives and Load-Acquire/Store-Release 
        [["_eq", 0b0],        ["_eqC", "10xx0"],      ["_eq", 0b0],       ["_any"],           ["_any"],           ["_lup", "_T14"]],                            // Miscellaneous 
        [["_eq", 0b0],        ["_eqC", "10xx0"],      ["_eq", 0b1],       ["_any"],           ["_eq", 0b0],       ["_ret", undefined]],                         // Halfword Multiply and Accumulate  
        [["_eq", 0b0],        ["_neC", "10xx0"],      ["_any"],           ["_any"],           ["_eq", 0b0],       ["_lup", "_T16"]],                            // Data-processing register (immediate shift) 
        [["_eq", 0b0],        ["_neC", "10xx0"],      ["_eq", 0b0],       ["_any"],           ["_eq", 0b1],       ["_ret", undefined]],                         // Data-processing register (register shift)
        [["_eq", 0b1],        ["_any"],               ["_any"],           ["_any"],           ["_any"],           ["_lup", "_T18"]],                            // Data-processing immediate
    ];
    // prettier-ignore
    this.T12 = [
      [["_eq", 0b000],      ["_any"],           ["_ret", MNEM.MUL_MULS]],           // MUL/MULS
      [["_eq", 0b001],      ["_any"],           ["_ret", "MLA_MLAS"]],              // MLA/MLAS
      [["_eq", 0b010],      ["_eq", 0b0],       ["_ret", "UMAAL"]],                 // UMAAL
      [["_eq", 0b010],      ["_eq", 0b1],       ["_ret", undefined]],               // Unallocated
      [["_eq", 0b011],      ["_eq", 0b0],       ["_ret", "MLS"]],                   // MLS
      [["_eq", 0b011],      ["_eq", 0b1],       ["_ret", undefined]],               // Unallocated
      [["_eq", 0b100],      ["_any"],           ["_ret", "UMULL_UMULLS"]],          // UMULL/UMULLS
    ]
    // prettier-ignore
    this.T14 = [
      // TODO: not all opcodes implemented
      [["_eq", 0b01],         ["_eq", 0b001],         ["_ret", MNEM.BX]],                 // BX
      [["_eq", 0b01],         ["_eq", 0b010],         ["_ret", MNEM.BXJ]],                // BXJ
      [["_eq", 0b01],         ["_eq", 0b011],         ["_ret", MNEM.BLX_REG]],            // BLX (register)
      [["_eq", 0b11],         ["_eq", 0b001],         ["_ret", MNEM.CLZ]],                // CLZ
    ];
    // prettier-ignore
    this.T16 = [
      [["_eqC", "0x"],        ["_any"],           ["_ret", undefined]],           // Integer Data Processing (three register, immediate shift)
      [["_eq", 0b10],         ["_eq", 0b1],       ["_lup", "_T162"]],             // Integer Test and Compare (two register, immediate shift)
      [["_eq", 0b11],         ["_any"],           ["_lup", "_T163"]],             // Logical Arithmetic (three register, immediate shift)
    ];
    // prettier-ignore
    this.T162 = [
      [["_eq", 0b00],        ["_ne", 0b0000011],           ["_ret", "TST_SFT_ROT_VAL"]],            // TST (register) - Shift or rotate by value variant
      [["_eq", 0b00],        ["_eq", 0b0000011],           ["_ret", "TST_ROT_EXT"]],                // TST (register) - Rotate right with extend variant
      [["_eq", 0b01],        ["_ne", 0b0000011],           ["_ret", "TEQ_SFT_ROT_VAL"]],            // TEQ (register) - Shift or rotate by value variant
      [["_eq", 0b01],        ["_eq", 0b0000011],           ["_ret", "TEQ_ROT_EXT"]],                // TEQ (register) - Rotate right with extend variant
      [["_eq", 0b10],        ["_ne", 0b0000011],           ["_ret", "CMP_SFT_ROT_VAL"]],            // CMP (register) - Shift or rotate by value variant
      [["_eq", 0b10],        ["_eq", 0b0000011],           ["_ret", "CMP_ROT_EXT"]],                // CMP (register) - Rotate right with extend variant
      [["_eq", 0b11],        ["_ne", 0b0000011],           ["_ret", "CMN_SFT_ROT_VAL"]],            // CMN (register) - Shift or rotate by value variant
      [["_eq", 0b11],        ["_eq", 0b0000011],           ["_ret", "CMN_ROT_EXT"]],                // CMN (register) - Rotate right with extend variant
    ];
    // prettier-ignore
    this.T163 = [
      [["_eq", 0b00],        ["_ne", 0b0000011],           ["_ret", "ORR_ORRS_SFT_ROT_VAL"]],            // ORR, ORRS (register) - ORRS, shift or rotate by value variant
      [["_eq", 0b00],        ["_eq", 0b0000011],           ["_ret", "ORR_ORRS_ROT_EXT"]],                // ORR, ORRS (register) - ORRS, rotate right with extend variant
      [["_eq", 0b01],        ["_ne", 0b0000011],           ["_ret", "MOV_MOVS_SFT_ROT_VAL"]],            // MOV, MOVS (register) - MOVS, shift or rotate by value variant
      [["_eq", 0b01],        ["_eq", 0b0000011],           ["_ret", "MOV_MOVS_ROT_EXT"]],                // MOV, MOVS (register) - MOVS, rotate right with extend variant
      [["_eq", 0b10],        ["_ne", 0b0000011],           ["_ret", "BIC_BICS_SFT_ROT_VAL"]],            // BIC, BICS (register) - BICS, shift or rotate by value variant
      [["_eq", 0b10],        ["_eq", 0b0000011],           ["_ret", "BIC_BICS_ROT_EXT"]],                // BIC, BICS (register) - BICS, rotate right with extend variant
      [["_eq", 0b11],        ["_ne", 0b0000011],           ["_ret", "MVN_MVNS_SFT_ROT_VAL"]],            // MVN, MVNS (register) - MVNS, shift or rotate by value variant
      [["_eq", 0b11],        ["_eq", 0b0000011],           ["_ret", "MVN_MVNS_ROT_EXT"]],                // MVN, MVNS (register) - MVNS, rotate right with extend variant
    ];
    // prettier-ignore
    this.T18 = [
        [["_eqC", "0x"],        ["_any"],           ["_lup", "_T181"]],                             // Integer Data Processing (two register and immediate)
        [["_eq", 0b10],         ["_eq", 0b00],      ["_lup", "_T182"]],                             // Move Halfword (immediate) 
        [["_eq", 0b10],         ["_eq", 0b10],      ["_ret", undefined]],                           // Move Special Register and Hints (immediate) 
        [["_eq", 0b10],         ["_eqC", "x1"],     ["_lup", "_T184"]],                             // Integer Test and Compare (one register and immediate) 
        [["_eq", 0b11],         ["_any"],           ["_lup", "_T185"]],                             // Logical Arithmetic (two register and immediate)
    ]
    // prettier-ignore
    this.T181 = [
        [["_eq", 0b000],        ["_any"],       ["_any"],               ["_ret", MNEM.AND_ANDS_IMD]],           // AND, ANDS (immediate)
        [["_eq", 0b001],        ["_any"],       ["_any"],               ["_ret", MNEM.EOR_EORS_IMD]],           // EOR, EORS (immediate)
        [["_eq", 0b010],        ["_eq", 0b0],   ["_neC","11x1"],        ["_ret", MNEM.SUB_IMD]],                // SUB, SUBS (immediate) - SUB variant
        [["_eq", 0b010],        ["_eq", 0b0],   ["_eq", 0b1101],        ["_ret", MNEM.SUB_IMD_SP]],             // SUB, SUBS (SP minus immediate) - SUB variant 
        [["_eq", 0b010],        ["_eq", 0b0],   ["_eq", 0b1111],        ["_ret", "ADR_A2"]],                    // ADR - A2
        [["_eq", 0b010],        ["_eq", 0b1],   ["_ne", 0b1101],        ["_ret", MNEM.SUBS_IMD]],               // SUB, SUBS (immediate) - SUBS variant
        [["_eq", 0b010],        ["_eq", 0b1],   ["_eq", 0b1101],        ["_ret", MNEM.SUBS_IMD_SP]],            // SUB, SUBS (SP minus immediate) - SUBS variant 
        [["_eq", 0b011],        ["_any"],       ["_any"],               ["_ret", MNEM.RSB_RSBS_IMD]],           // RSB, RSBS (immediate)
        [["_eq", 0b100],        ["_eq", 0b0],   ["_neC","11x1"],        ["_ret", MNEM.ADD_IMD]],                // ADD, ADDS (immediate) - ADD variant
        [["_eq", 0b100],        ["_eq", 0b0],   ["_eq", 0b1101],        ["_ret", MNEM.ADD_IMD_SP]],             // ADD, ADDS (SP plus immediate) - ADD variant 
        [["_eq", 0b100],        ["_eq", 0b0],   ["_eq", 0b1111],        ["_ret", "ADR_A1"]],                    // ADR - A1
        [["_eq", 0b100],        ["_eq", 0b1],   ["_ne", 0b1101],        ["_ret", MNEM.ADDS_IMD]],               // ADD, ADDS (immediate) - ADDS variant
        [["_eq", 0b100],        ["_eq", 0b1],   ["_eq", 0b1101],        ["_ret", MNEM.ADDS_IMD_SP]],            // ADD, ADDS (SP plus immediate) - ADDS variant
        [["_eq", 0b101],        ["_any"],       ["_any"],               ["_ret", MNEM.ADC_ADCS_IMD]],           // ADC, ADCS (immediate)
        [["_eq", 0b110],        ["_any"],       ["_any"],               ["_ret", MNEM.SBC_SBCS_IMD]],           // SBC, SBCS (immediate)
        [["_eq", 0b111],        ["_any"],       ["_any"],               ["_ret", MNEM.RSC_RSCS_IMD]],           // RSC, RSCS (immediate)
    ]
    // prettier-ignore
    this.T182 = [
        [["_eq", 0b0],      ["_ret", "MOV_MOVS_IMD"]],        // MOV, MOVS (immediate)
        [["_eq", 0b1],      ["_ret", "MOVT"]],                // MOVT
    ]
    // prettier-ignore
    this.T184 = [
        [["_eq", 0b00],     ["_ret", "TST_IMD"]],         // TST (immediate)
        [["_eq", 0b01],     ["_ret", "TEQ_IMD"]],         // TEQ (immediate)
        [["_eq", 0b10],     ["_ret", "CMP_IMD"]],         // CMP (immediate)
        [["_eq", 0b11],     ["_ret", "CMN_IMD"]],         // CMN (immediate)
    ]
    // prettier-ignore
    this.T185 = [
        [["_eq", 0b00],     ["_ret", "ORR_ORRS_IMD"]],         // ORR, ORRS (immediate)
        [["_eq", 0b01],     ["_ret", "MOV_MOVS_IMD"]],         // MOV, MOVS (immediate)
        [["_eq", 0b10],     ["_ret", "BIC_BICS_IMD"]],         // BIC, BICS (immediate)
        [["_eq", 0b11],     ["_ret", "MVN_MVNS_IMD"]],         // MVN, MVNS (immediate)
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
        [["_eq", 0b1111],       ["_eq", 0b0],       ["_ret", undefined]],                 // Exception Save/Restore
        [["_ne", 0b1111],       ["_eq", 0b0],       ["_ret", undefined]],                 // Load/Store Multiple
        [["_any"],               ["_eq", 0b1],       ["_lup", "_T53"]],                     // Branch (immediate)
    ]
    // prettier-ignore
    this.T53 = [
        [["_ne", 0b1111],       ["_eq", 0b0],       ["_ret", "B"]],             // B
        [["_ne", 0b1111],       ["_eq", 0b1],       ["_ret", "BL_IMD"]],        // BL/BLX (immediate)
        [["_eq", 0b1111],       ["_any"],           ["_ret", "BLX_IMD"]],       // BL/BLX (immediate)
    ]
  }

  decode(instruction) {
    this.INSTRUCTION = instruction;
    return {
      instruction,
      aluRoutine: this._T0(),
    };
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
      if (curV1 === "x") continue;
      if (curV1 !== curV2) return true;
    }
    return false;
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
      if (curV1 === "x") continue;
      if (curV1 !== curV2) return false;
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
    return undefined;
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
    return undefined;
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
    return undefined;
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
    return undefined;
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
    return undefined;
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
    return undefined;
  }

  _T14() {
    const op0 = (this.INSTRUCTION >>> 21) & (((1 << 2) >>> 0) - 1);
    const op1 = (this.INSTRUCTION >>> 4) & (((1 << 3) >>> 0) - 1);
    for (let i = 0, len = this.T14.length; i < len; i++) {
      const entry = this.T14[i];
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
    return undefined;
  }

  _T16() {
    const op0 = (this.INSTRUCTION >>> 23) & (((1 << 2) >>> 0) - 1);
    const op1 = (this.INSTRUCTION >>> 20) & (((1 << 1) >>> 0) - 1);
    for (let i = 0, len = this.T16.length; i < len; i++) {
      const entry = this.T16[i];
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
    return undefined;
  }

  _T162() {
    const opc = (this.INSTRUCTION >>> 21) & (((1 << 2) >>> 0) - 1);
    const imm5Stype = (this.INSTRUCTION >>> 5) & (((1 << 7) >>> 0) - 1);
    for (let i = 0, len = this.T162.length; i < len; i++) {
      const entry = this.T162[i];
      const [opc_func, opc_v1] = entry[0];
      const [imm5Stype_func, imm5Stype_v1] = entry[1];
      const fields = [
        this[opc_func].call(this, opc_v1, opc),
        this[imm5Stype_func].call(this, imm5Stype_v1, imm5Stype),
      ];
      if (fields.every((v) => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
  }

  _T163() {
    const opc = (this.INSTRUCTION >>> 21) & (((1 << 2) >>> 0) - 1);
    const imm5Stype = (this.INSTRUCTION >>> 5) & (((1 << 7) >>> 0) - 1);
    for (let i = 0, len = this.T163.length; i < len; i++) {
      const entry = this.T163[i];
      const [opc_func, opc_v1] = entry[0];
      const [imm5Stype_func, imm5Stype_v1] = entry[1];
      const fields = [
        this[opc_func].call(this, opc_v1, opc),
        this[imm5Stype_func].call(this, imm5Stype_v1, imm5Stype),
      ];
      if (fields.every((v) => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
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
    return undefined;
  }

  // TABLE 18x
  _T181() {
    const opc = (this.INSTRUCTION >>> 21) & (((1 << 3) >>> 0) - 1);
    const S = (this.INSTRUCTION >>> 20) & (((1 << 1) >>> 0) - 1);
    const Rn = (this.INSTRUCTION >>> 16) & (((1 << 4) >>> 0) - 1);
    for (let i = 0, len = this.T181.length; i < len; i++) {
      const entry = this.T181[i];
      const [opc_func, opc_v1] = entry[0];
      const [S_func, S_v1] = entry[1];
      const [Rn_func, Rn_v1] = entry[2];
      const fields = [
        this[opc_func].call(this, opc_v1, opc),
        this[S_func].call(this, S_v1, S),
        this[Rn_func].call(this, Rn_v1, Rn),
      ];
      if (fields.every((v) => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
  }

  _T182() {
    const H = (this.INSTRUCTION >>> 22) & (((1 << 1) >>> 0) - 1);
    for (let i = 0, len = this.T182.length; i < len; i++) {
      const entry = this.T182[i];
      const [H_func, H_v1] = entry[0];
      const fields = [this[H_func].call(this, H_v1, H)];
      if (fields.every((v) => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
  }

  _T184() {
    const opc = (this.INSTRUCTION >>> 21) & (((1 << 2) >>> 0) - 1);
    for (let i = 0, len = this.T184.length; i < len; i++) {
      const entry = this.T184[i];
      const [opc_func, opc_v1] = entry[0];
      const fields = [this[opc_func].call(this, opc_v1, opc)];
      if (fields.every((v) => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
  }

  _T185() {
    const opc = (this.INSTRUCTION >>> 21) & (((1 << 2) >>> 0) - 1);
    for (let i = 0, len = this.T185.length; i < len; i++) {
      const entry = this.T185[i];
      const [opc_func, opc_v1] = entry[0];
      const fields = [this[opc_func].call(this, opc_v1, opc)];
      if (fields.every((v) => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
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
    return undefined;
  }
}

/**
 * MUL, MULS
 * Multiply multiplies two register values. The least significant 32 bits of the result are written to the destination register.
 * These 32 bits do not depend on whether the source register values are considered to be signed values or unsigned values.
 *
 * BX
 * Branch and Exchange causes a branch to an address and instruction set specified by a register.
 *
 * BXJ
 * Branch and Exchange, previously Branch and Exchange Jazelle.
 * BXJ behaves as a BX instruction, see BX. This means it causes a branch to an address and instruction set specified by a register.
 *
 * BLX (register)
 * Branch with Link and Exchange (register) calls a subroutine at an address specified in the register,
 * and if necessary changes to the instruction set indicated by bit[0] of the register value.
 *
 * CLZ
 * Count Leading Zeros returns the number of binary zero bits before the first binary one bit in a value.
 *
 * AND, ANDS (immediate)
 * Bitwise AND (immediate) performs a bitwise AND of a register value and an immediate value, and writes the result to the destination register.
 * If the destination register is not the PC, the ANDS variant of the instruction updates the condition flags based on the result.
 *
 * EOR, EORS (immediate)
 * Bitwise Exclusive OR (immediate) performs a bitwise Exclusive OR of a register value and an immediate value, and writes the result to the destination register.
 * If the destination register is not the PC, the EORS variant of the instruction updates the condition flags based on the result.
 *
 * SUB, SUBS (immediate)
 * Subtract (immediate) subtracts an immediate value from a register value, and writes the result to the destination register.
 * If the destination register is not the PC, the SUBS variant of the instruction updates the condition flags based on the result.
 *
 * SUB, SUBS (SP minus immediate)
 * Subtract from SP (immediate) subtracts an immediate value from the SP value, and writes the result to the destination register.
 * If the destination register is not the PC, the SUBS variant of the instruction updates the condition flags based on the result.
 *
 * RSB, RSBS (immediate)
 * Reverse Subtract (immediate) subtracts a register value from an immediate value, and writes the result to the destination register.
 * If the destination register is not the PC, the RSBS variant of the instruction updates the condition flags based on the result.
 *
 * ADD, ADDS (immediate)
 * Add (immediate) adds an immediate value to a register value, and writes the result to the destination register.
 * If the destination register is not the PC, the ADDS variant of the instruction updates the condition flags based on the result.
 *
 * ADD, ADDS (SP plus immediate)
 * Add to SP (immediate) adds an immediate value to the SP value, and writes the result to the destination register.
 * If the destination register is not the PC, the ADDS variant of the instruction updates the condition flags based on the result.
 *
 * ADC, ADCS (immediate)
 * Add with Carry (immediate) adds an immediate value and the Carry flag value to a register value, and writes the result to the destination register.
 * If the destination register is not the PC, the ADCS variant of the instruction updates the condition flags based on the result.
 *
 * SBC, SBCS (immediate)
 * Subtract with Carry (immediate) subtracts an immediate value and the value of NOT (Carry flag) from a register value, and writes the result to the destination register.
 * If the destination register is not the PC, the SBCS variant of the instruction updates the condition flags based on the result.
 *
 * RSC, RSCS (immediate)
 * Reverse Subtract with Carry (immediate) subtracts a register value and the value of NOT (Carry flag) from an immediate value, and writes the result to the destination register.
 * If the destination register is not the PC, the RSCS variant of the instruction updates the condition flags based on the result.
 */
