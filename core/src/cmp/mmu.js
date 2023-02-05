import { Process } from "./proc.js";
import { RAM_DEV_KEY } from "../var/def.js";
import { fletcher16 } from "../lib/checksum.js";

export class Mmu {
  // virtual memory management unit
  constructor() {
    this.PROCESSES = new Map();
  }

  conn2bus(bus) {
    this.RAM = bus.DEVICES[RAM_DEV_KEY];
    this.PAGE_TABLE = null;
  }

  // create new process and assign page memory which maps to physical memory frame
  processAlloc(size) {
    // TODO: implement paging lookup tables
    const pid = 1;
    const startAddr = 0;
    const endAddr = size;
    const proc = new Process(pid, startAddr, endAddr);
    this.PROCESSES.set(pid, proc);
    return pid;
  }

  // return the process instance given the pid
  for(pid) {
    return this.PROCESSES.get(pid);
  }

  // given the pid allocate a section and pack content into the allocated section (nb skip packing if content is empty)
  malloc(pid, section, size, content) {
    let contentChecksums = [];
    const proc = this.PROCESSES.get(pid);
    const startAddr = proc.set(section, size || 4);
    for (let i = startAddr, len = startAddr + content.length; i < len; i++) {
      const entry = content[i];
      const virtualAddr = i * 4;
      const physicalAddr = this._lookup(virtualAddr);
      this.RAM.write32(entry, physicalAddr);
      contentChecksums.push(fletcher16(`${pid}-${entry}-${virtualAddr}`));
    }
    return contentChecksums;
  }

  // translate a virtual page address to a physical frame address
  translate(virtualAddress) {
    return RAM_DEV_KEY | this._lookup(virtualAddress);
  }

  _lookup(virtualAddress) {
    return virtualAddress;
  }
}
