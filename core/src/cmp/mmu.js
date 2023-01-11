import { RAM_DEV_KEY } from "../var/def.js";

export class Mmu {
  // virtual memory management unit
  constructor() {
    this.BUS = null;
  }

  conn2bus(bus) {
    this.BUS = bus;
  }

  map2ram(virtAddr) {
    //TODO: implement virtual memory mapping tables
    return RAM_DEV_KEY | virtAddr;
  }

  byteAlloc(size, offset) {
    //TODO: implement virtual memory allocation
    return offset;
  }

  initProg(instructions) {
    const ram = this.BUS.DEVICES[RAM_DEV_KEY];
    for (
      let i = 0 + ram.START_ADDRESS,
        len = instructions.length + ram.START_ADDRESS;
      i < len;
      i++
    ) {
      ram.write32(instructions[i], 4 * i);
    }
  }
}
