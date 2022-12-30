import { ERROR_CODE, OK_CODE } from "../var/def.js";

export class Buffer32Bit {
  constructor() {
    this.IS_EMPTY = OK_CODE;
    this.BUFFER = new DataView(new ArrayBuffer(4));
  }

  read(byteOffset = 0) {
    return this.BUFFER.getUint32(byteOffset);
  }

  write(val, byteOffset = 0) {
    this.BUFFER.setUint32(byteOffset, val);
    this.IS_EMPTY = ERROR_CODE;
    return OK_CODE;
  }

  flush() {
    this.BUFFER.setUint32(0, 0);
    this.IS_EMPTY = OK_CODE;
    return OK_CODE;
  }

  view() {
    return [...this];
  }

  [Symbol.iterator]() {
    const binStr = this.BUFFER.getUint32(0).toString(2);
    const binStr32 =
      "00000000000000000000000000000000".substring(binStr.length) + binStr;
    let index = 0;
    return {
      next: () => {
        if (index < binStr32.length) {
          return { value: +binStr32[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}
