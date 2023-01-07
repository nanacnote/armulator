import { OK_CODE, ON_RAM_WRITE_EVENT, RAM_SIZE_IN_BYTE } from "../var/def.js";

export class Ram extends EventTarget {
  constructor() {
    super();
    this.START_ADDRESS = 0;
    this.BUFFER = new DataView(
      new ArrayBuffer(RAM_SIZE_IN_BYTE),
      this.START_ADDRESS
    );
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
    this.dispatchEvent(new Event(ON_RAM_WRITE_EVENT));
    return OK_CODE;
  }

  write16(val, byteOffset = 0) {
    this.BUFFER.setUint16(byteOffset, val);
    this.dispatchEvent(new Event(ON_RAM_WRITE_EVENT));
    return OK_CODE;
  }

  write32(val, byteOffset = 0) {
    this.BUFFER.setUint32(byteOffset, val);
    this.dispatchEvent(new Event(ON_RAM_WRITE_EVENT));
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
