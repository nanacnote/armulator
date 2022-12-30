import { Buffer32Bit } from "./buf.js";

export class Reg {
  constructor() {
    this._r0 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r1 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r2 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r3 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r4 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r5 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r6 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r7 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r8 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r9 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r10 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r11 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r12 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.

    this._r13 = new Buffer32Bit(); // // Stack pointer register. Points to the top of the stack. [SP]
    this._r14 = new Buffer32Bit(); // Link register. Stores the return address for function calls. [LR]
    this._r15 = new Buffer32Bit(); // // Program counter register. Stores the address of the current instruction. [PC]

    this._cpsr = new Buffer32Bit(); //Current program status register. Stores the current status of the processor, such as the current processor mode and condition flags.}
  }

  get r0() {
    return this._r0;
  }
  get r1() {
    return this._r1;
  }
  get r2() {
    return this._r2;
  }
  get r3() {
    return this._r3;
  }
  get r4() {
    return this._r4;
  }
  get r5() {
    return this._r5;
  }
  get r6() {
    return this._r6;
  }
  get r7() {
    return this._r7;
  }
  get r8() {
    return this._r8;
  }
  get r9() {
    return this._r9;
  }
  get r10() {
    return this._r10;
  }
  get r11() {
    return this._r11;
  }
  get r12() {
    return this._r12;
  }
  get r13() {
    return this._r13;
  }
  get r14() {
    return this._r14;
  }
  get r15() {
    return this._r15;
  }
  get sp() {
    return this._r13;
  }
  get lr() {
    return this._r14;
  }
  get pc() {
    return this._r15;
  }
  get cpsr() {
    return this._cpsr;
  }
}
