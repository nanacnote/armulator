import {
  OK_CODE,
  ON_RAM_READ,
  ON_RAM_WRITE,
  RAM_SIZE_IN_BYTE,
} from "../var/def.js";

/**
 * @module Core
 */

/**
 * A class representing a memory buffer that can be read and written to.
 * @extends EventTarget
 */
export class Ram extends EventTarget {
  /**
   * Creates a new Ram object.
   * @constructor
   */
  constructor() {
    super();

    this.START_ADDRESS = 0;

    this.BUFFER = new DataView(
      new ArrayBuffer(RAM_SIZE_IN_BYTE),
      this.START_ADDRESS
    );
  }

  /**
   * Reads an 8-bit value from the memory buffer at the specified byte offset.
   * @param {number} [byteOffset=0] - The byte offset at which to read the value.
   * @returns {number} The 8-bit value read from the memory buffer.
   * @fires ON_RAM_READ
   */
  read8(byteOffset = 0) {
    const val = this.BUFFER.getUint8(byteOffset);
    this.dispatchEvent(new Event(ON_RAM_READ));
    return val;
  }

  /**
   * Reads a 16-bit value from the memory buffer at the specified byte offset.
   * @param {number} [byteOffset=0] - The byte offset at which to read the value.
   * @returns {number} The 16-bit value read from the memory buffer.
   * @fires ON_RAM_READ
   */
  read16(byteOffset = 0) {
    const val = this.BUFFER.getUint16(byteOffset);
    this.dispatchEvent(new Event(ON_RAM_READ));
    return val;
  }

  /**
   * Reads a 32-bit value from the memory buffer at the specified byte offset.
   * @param {number} [byteOffset=0] - The byte offset at which to read the value.
   * @returns {number} The 32-bit value read from the memory buffer.
   * @fires ON_RAM_READ
   */
  read32(byteOffset = 0) {
    const val = this.BUFFER.getUint32(byteOffset);
    this.dispatchEvent(new Event(ON_RAM_READ));
    return val;
  }

  /**
   * Writes an 8-bit value to the memory buffer at the specified byte offset.
   * @param {number} val - The 8-bit value to write to the memory buffer.
   * @param {number} [byteOffset=0] - The byte offset at which to write the value.
   * @returns {number} The OK_CODE indicating success.
   * @fires ON_RAM_WRITE
   */
  write8(val, byteOffset = 0) {
    this.BUFFER.setUint8(byteOffset, val);
    this.dispatchEvent(new Event(ON_RAM_WRITE));
    return OK_CODE;
  }

  /**
   * Writes a 16-bit value to the memory buffer at the specified byte offset.
   * @param {number} val - The 16-bit value to write to the memory buffer.
   * @param {number} [byteOffset=0] - The byte offset at which to write the value.
   * @returns {number} The OK_CODE indicating success.
   * @fires ON_RAM_WRITE
   */
  write16(val, byteOffset = 0) {
    this.BUFFER.setUint16(byteOffset, val);
    this.dispatchEvent(new Event(ON_RAM_WRITE));
    return OK_CODE;
  }

  /**
   * Writes a 32-bit value to the memory buffer at the specified byte offset.
   * @param {number} val - The 32-bit value to write to the memory buffer.
   * @param {number} [byteOffset=0] - The byte offset at which to write the value.
   * @returns {number} The OK_CODE indicating success.
   * @fires ON_RAM_WRITE
   */

  write32(val, byteOffset = 0) {
    this.BUFFER.setUint32(byteOffset, val);
    this.dispatchEvent(new Event(ON_RAM_WRITE));
    return OK_CODE;
  }

  /**
   * Returns the length of the memory buffer in bytes.
   * @returns {number} The length of the memory buffer in bytes.
   */
  getByteLength() {
    return this.BUFFER.byteLength;
  }

  /**
   * Returns an array containing the binary representation of each byte in the memory buffer.
   * @returns {string[]} An array containing the binary representation of each byte in the memory buffer.
   */
  view() {
    return [...this];
  }

  /**
   * An iterator function that allows the memory buffer to be iterated over with a `for-of` loop.
   * @returns {Object} An object with a `next` method that returns an object with a `value` property
   * representing the current byte in the memory buffer as a binary string, and a `done` property
   * indicating whether the end of the memory buffer has been reached.
   */
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < RAM_SIZE_IN_BYTE) {
          const binStr = this.BUFFER.getUint8(index).toString(2);
          const binStr32 = binStr.padStart(8, "0");
          index++;
          return { value: binStr32, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}
