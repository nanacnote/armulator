import { OK_CODE, RAM_SIZE_IN_BYTE } from "../var/def.js";

export class Ram {
  constructor() {
    this.init();
  }

  init() {
    this.BUFFER = new DataView(new ArrayBuffer(RAM_SIZE_IN_BYTE));
  }

  read8(byteOffset = 0) {
    return this.BUFFER.getUint8(byteOffset);
  }

  read16(byteOffset = 0) {
    return this.BUFFER.getUint16(byteOffset);
  }

  read32(byteOffset = 0) {
    return this.BUFFER.getUint32(byteOffset);
  }

  write8(val, byteOffset = 0) {
    this.BUFFER.setUint8(byteOffset, val);
    return OK_CODE;
  }

  write16(val, byteOffset = 0) {
    this.BUFFER.setUint16(byteOffset, val);
    return OK_CODE;
  }

  write32(val, byteOffset = 0) {
    this.BUFFER.setUint32(byteOffset, val);
    return OK_CODE;
  }

  view() {
    return [...this];
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < RAM_SIZE_IN_BYTE) {
          const binStr = this.BUFFER.getUint8(index).toString(2);
          const binStr32 = "00000000".substring(binStr.length) + binStr;
          index++;
          return { value: binStr32.split("").map((v) => +v), done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}
