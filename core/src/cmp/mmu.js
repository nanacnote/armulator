import { Process } from "./proc.js";
import { RAM_DEV_KEY } from "../var/def.js";
import { fletcher16 } from "../lib/checksum.js";

/**
 * @module Core
 */

/**
 * Represents a virtual memory management unit (MMU).
 */
export class Mmu {
  /**
   * Creates an instance of the Mmu class.
   */
  constructor() {
    /**
     * Map of processes, with process ID as the key and Process instances as values.
     * @type {Map<number, Process>}
     */
    this.PROCESSES = new Map();
  }

  /**
   * Connects the MMU to a bus.
   * @param {object} bus - The bus object.
   */
  conn2bus(bus) {
    this.RAM = bus.DEVICES[RAM_DEV_KEY];
    this.PAGE_TABLE = null;
  }

  /**
   * Allocates memory for a new process and assigns page memory that maps to physical memory frame.
   * @param {number} size - The size of the process.
   * @returns {number} - The process ID.
   */
  palloc(size) {
    // TODO: implement paging lookup tables
    const pid = 1;
    const startAddr = 0;
    const endAddr = size;
    const proc = new Process(pid, startAddr, endAddr);
    this.PROCESSES.set(pid, proc);
    return pid;
  }

  /**
   * Allocates a section for a process and packs content into the allocated section.
   * @param {number} pid - The process ID.
   * @param {string} section - The section to allocate.
   * @param {number} size - The size of the section.
   * @param {Array<number>} content - The content to pack into the section.
   * @returns {Array<number>} - An array of checksums for each packed entry.
   */
  malloc(pid, section, size, content) {
    // given the pid allocate a section and pack content into the allocated section (nb skip packing if content is empty)
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

  /**
   * Returns the process instance given the process ID.
   * @param {number} pid - The process ID.
   * @returns {Process|null} - The process instance, or null if not found.
   */
  getProcessById(pid) {
    return this.PROCESSES.get(pid);
  }

  /**
   * Translates a virtual page address to a physical frame address.
   * @param {number} virtualAddress - The virtual page address.
   * @returns {number} - The physical frame address.
   */
  translate(virtualAddress) {
    return RAM_DEV_KEY | this._lookup(virtualAddress);
  }

  /**
   * Performs a lookup to translate a virtual address to a physical address.
   * @param {number} virtualAddress - The virtual address.
   * @returns {number} - The physical address.
   * @private
   */
  _lookup(virtualAddress) {
    // TODO: not yet implemented
    return virtualAddress;
  }
}
