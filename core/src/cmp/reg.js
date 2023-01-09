import { Buffer32Bit } from "./buf.js";

/**
 * A class representing a set of registers in a processor.
 */
export class Reg {
  /**
   * Creates a new set of registers.
   * @constructor
   */
  constructor() {
    this._r0 = new Buffer32Bit();
    this._r1 = new Buffer32Bit();
    this._r2 = new Buffer32Bit();
    this._r3 = new Buffer32Bit();
    this._r4 = new Buffer32Bit();
    this._r5 = new Buffer32Bit();
    this._r6 = new Buffer32Bit();
    this._r7 = new Buffer32Bit();
    this._r8 = new Buffer32Bit();
    this._r9 = new Buffer32Bit();
    this._r10 = new Buffer32Bit();
    this._r11 = new Buffer32Bit();
    this._r12 = new Buffer32Bit();
    this._r13 = new Buffer32Bit();
    this._r14 = new Buffer32Bit();
    this._r15 = new Buffer32Bit();
    this._cpsr = new Buffer32Bit();
  }

  /**
   * @returns {Buffer32Bit} The r0 general-purpose register. Can be used for any purpose.
   */
  get r0() {
    return this._r0;
  }

  /**
   * @returns {Buffer32Bit} The r1 general-purpose register. Can be used for any purpose.
   */
  get r1() {
    return this._r1;
  }

  /**
   * @returns {Buffer32Bit} The r2 general-purpose register. Can be used for any purpose.
   */
  get r2() {
    return this._r2;
  }

  /**
   * @returns {Buffer32Bit} The r3 general-purpose register. Can be used for any purpose.
   */
  get r3() {
    return this._r3;
  }

  /**
   * @returns {Buffer32Bit} The r4 general-purpose register. Can be used for any purpose.
   */
  get r4() {
    return this._r4;
  }

  /**
   * @returns {Buffer32Bit} The r5 general-purpose register. Can be used for any purpose.
   */
  get r5() {
    return this._r5;
  }

  /**
   * @returns {Buffer32Bit} The r6 general-purpose register. Can be used for any purpose.
   */
  get r6() {
    return this._r6;
  }

  /**
   * @returns {Buffer32Bit} The r7 general-purpose register. Can be used for any purpose.
   */
  get r7() {
    return this._r7;
  }

  /**
   * @returns {Buffer32Bit} The r8 general-purpose register. Can be used for any purpose.
   */
  get r8() {
    return this._r8;
  }

  /**
   * @returns {Buffer32Bit} The r9 general-purpose register. Can be used for any purpose.
   */
  get r9() {
    return this._r9;
  }

  /**
   * @returns {Buffer32Bit} The r10 general-purpose register. Can be used for any purpose.
   */
  get r10() {
    return this._r10;
  }

  /**
   * @returns {Buffer32Bit} The r11 general-purpose register. Can be used for any purpose.
   */
  get r11() {
    return this._r11;
  }

  /**
   * @returns {Buffer32Bit} The r12 general-purpose register. Can be used for any purpose.
   */
  get r12() {
    return this._r12;
  }

  /**
   * @returns {Buffer32Bit} The r13 stack pointer register. Points to the top of the stack.[SP]
   * @alias sp
   */
  get r13() {
    return this._r13;
  }

  /**
   * @returns {Buffer32Bit} The r14 link register. Stores the return address for function calls.
   * @alias lr
   */
  get r14() {
    return this._r14;
  }

  /**
   * @returns {Buffer32Bit} The r15 program counter register. Stores the address of the current instruction.
   * @alias pc
   */
  get r15() {
    return this._r15;
  }

  /**
   * @returns {Buffer32Bit} The r13 stack pointer register. Points to the top of the stack.
   * @alias sp
   */
  get sp() {
    return this._r13;
  }

  /**
   * @returns {Buffer32Bit} The r14 link register. Stores the return address for function calls.
   * @alias lr
   */
  get lr() {
    return this._r14;
  }

  /**
   * @returns {Buffer32Bit} The r15 program counter register. Stores the address of the current instruction.
   * @alias pc
   */
  get pc() {
    return this._r15;
  }

  /**
   * @returns {Buffer32Bit} The current program status register. Stores the current status of the processor, such as the current processor mode and condition flags.
   */
  get cpsr() {
    return this._cpsr;
  }
}
