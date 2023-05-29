import {
  ON_BUFFER_32_WRITE,
  ON_BUFFER_32_READ,
  ON_REG_READ,
  ON_REG_WRITE,
} from "../var/def.js";
import { Buffer32Bit } from "./buf.js";

/**
 * @module Core
 */

/**
 * A class representing a set of registers in a processor.
 * @extends EventTarget
 */
export class Reg extends EventTarget {
  /**
   * Creates a new set of registers.
   * @constructor
   */
  constructor() {
    super();

    this._r0 = new Buffer32Bit("r0");
    this._r1 = new Buffer32Bit("r1");
    this._r2 = new Buffer32Bit("r2");
    this._r3 = new Buffer32Bit("r3");
    this._r4 = new Buffer32Bit("r4");
    this._r5 = new Buffer32Bit("r5");
    this._r6 = new Buffer32Bit("r6");
    this._r7 = new Buffer32Bit("r7");
    this._r8 = new Buffer32Bit("r8");
    this._r9 = new Buffer32Bit("r9");
    this._r10 = new Buffer32Bit("r10");
    this._r11 = new Buffer32Bit("r11");
    this._r12 = new Buffer32Bit("r12");
    this._sp = new Buffer32Bit("sp");
    this._lr = new Buffer32Bit("lr");
    this._pc = new Buffer32Bit("pc");
    this._cpsr = new Buffer32Bit("cpsr");

    this._readEventHandler = this._readEventHandler.bind(this);
    this._writeEventHandler = this._writeEventHandler.bind(this);

    this._r0.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r1.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r2.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r3.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r4.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r5.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r6.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r7.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r8.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r9.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r10.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r11.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r12.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._sp.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._lr.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._pc.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._cpsr.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);

    this._r0.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r1.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r2.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r3.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r4.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r5.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r6.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r7.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r8.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r9.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r10.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r11.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r12.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._sp.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._lr.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._pc.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._cpsr.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
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
   * @returns {Buffer32Bit} The r13 stack pointer register. Points to the top of the stack.[alias SP]
   */
  get sp() {
    return this._sp;
  }

  /**
   * @returns {Buffer32Bit} The r14 link register. Stores the return address for function calls.[alias LR]
   */
  get lr() {
    return this._lr;
  }

  /**
   * @returns {Buffer32Bit} The r15 program counter register. Stores the address of the current instruction.[alias PC]
   */
  get pc() {
    return this._pc;
  }

  /**
   * @returns {Buffer32Bit} The current program status register.
   * Stores the current status of the processor, such as the current processor mode and condition flags.
   */
  get cpsr() {
    return this._cpsr;
  }

  /**
   * The event handler for the ON_REG_READ event.
   * @param {CustomEvent} event - The ON_REG_READ event.
   * @private
   */
  _readEventHandler({ detail }) {
    this.dispatchEvent(new CustomEvent(ON_REG_READ, { detail }));
  }

  /**
   * The event handler for the ON_REG_WRITE event.
   * @param {CustomEvent} event - The ON_REG_WRITE event.
   * @private
   */
  _writeEventHandler({ detail }) {
    this.dispatchEvent(new CustomEvent(ON_REG_WRITE, { detail }));
  }

  /**
   * Allows an instance of Reg class(this) to be used in a for...of loop returning one of the
   * registers in each iteration.
   * @returns {Object} An object conforming to the iterator protocol with a `next` method.
   * The `next` method returns an object with two properties: `value` and `done`.
   * The `value` property represents the next value in the iteration.
   * The `done` property is a boolean indicating if the iteration has finished.
   */
  [Symbol.iterator]() {
    const registers = [
      this.r0,
      this.r1,
      this.r2,
      this.r3,
      this.r4,
      this.r5,
      this.r6,
      this.r7,
      this.r8,
      this.r9,
      this.r10,
      this.r11,
      this.r12,
      this.sp,
      this.lr,
      this.pc,
      this.cpsr,
    ];
    let index = 0;
    return {
      next: () => {
        if (index < registers.length) {
          return { value: registers[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}
