import {
  ERROR_CODE,
  OK_CODE,
  ON_BUFFER_32_READ_EVENT,
  ON_BUFFER_32_WRITE_EVENT,
} from "../var/def.js";

/**
 * A class representing a 32-bit buffer that can be read from and written to.
 * @extends EventTarget
 */
export class Buffer32Bit extends EventTarget {
  /**
   * Creates a new Buffer32Bit object.
   * @constructor
   */
  constructor() {
    super();

    this.IS_EMPTY = OK_CODE;

    this.BUFFER = new DataView(new ArrayBuffer(4));
  }

  /**
   * Reads a 32-bit value from the buffer at the specified byte offset.
   * @param {number} [byteOffset=0] - The byte offset at which to read the value.
   * @returns {number} The 32-bit value read from the buffer.
   * @fires ON_BUFFER_32_READ_EVENT
   */
  read(byteOffset = 0) {
    const val = this.BUFFER.getUint32(byteOffset);
    this.dispatchEvent(new Event(ON_BUFFER_32_READ_EVENT));
    return val;
  }

  /**
   * Writes a 32-bit value to the buffer at the specified byte offset.
   * @param {number} val - The 32-bit value to write to the buffer.
   * @param {number} [byteOffset=0] - The byte offset at which to write the value.
   * @returns {number} The OK_CODE indicating success.
   * @fires ON_BUFFER_32_WRITE_EVENT
   */

  write(val, byteOffset = 0) {
    this.BUFFER.setUint32(byteOffset, val);
    this.IS_EMPTY = ERROR_CODE;
    this.dispatchEvent(new Event(ON_BUFFER_32_WRITE_EVENT));
    return OK_CODE;
  }

  /**
   * Resets the buffer to all zeros.
   * @returns {number} The OK_CODE indicating success.
   */

  flush() {
    this.BUFFER.setUint32(0, 0);
    this.IS_EMPTY = OK_CODE;
    return OK_CODE;
  }

  /**
   * Returns a string representation of the binary contents of the buffer.
   * @returns {string} A string representation of the binary contents of the buffer.
   */
  view() {
    return [...this].join("");
  }

  /**
   * An iterator function that allows the buffer to be iterated over with a `for-of` loop.
   * @returns {Object} An object with a `next` method that returns an object with a `value` property
   * representing the current bit in the buffer as a binary string, and a `done` property
   * indicating whether the end of the buffer has been reached.
   */
  [Symbol.iterator]() {
    const binStr = this.BUFFER.getUint32(0).toString(2);
    const binStr32 = binStr.padStart(32, "0");
    let index = 0;
    return {
      next: () => {
        if (index < binStr32.length) {
          return { value: binStr32[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}
