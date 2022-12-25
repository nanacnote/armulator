import { OK_CODE, RAM_SIZE } from "../var/def.js";

export class Ram {
  constructor() {
    this.init();
  }

  init() {
    this.BUFFER = new DataView(new ArrayBuffer(RAM_SIZE));
  }

  read(byteOffset = 0) {
    return this.BUFFER.getUint8(byteOffset);
  }

  write(val, byteOffset = 0) {
    this.BUFFER.setUint8(byteOffset, val);
    return OK_CODE;
  }
}
