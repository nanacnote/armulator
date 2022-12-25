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
}
