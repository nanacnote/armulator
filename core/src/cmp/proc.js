import {
  BSS_SECTION,
  ENV_SECTION,
  HEAP_SECTION,
  INIT_DATA_SECTION,
  STACK_SECTION,
  TEXT_SECTION,
} from "../var/def.js";

/**
 * @module Core
 */

/**
 * Represents a process.
 */
export class Process {
  /**
   * Creates an instance of the Process class.
   * start and end byte are inclusive
   * @param {number} pid - The process ID.
   * @param {number} startAddr - The start address of the process.
   * @param {number} endAddr - The end address of the process.
   */
  constructor(pid, startAddr, endAddr) {
    /**
     * The process ID.
     * @type {number}
     */
    this.PID = pid;

    /**
     * The start address of the process.
     * @type {number}
     */
    this.PROC_START_ADDRESS = startAddr;

    /**
     * The end address of the process.
     * @type {number}
     */
    this.PROC_END_ADDRESS = endAddr;

    // TODO: implement allocation of stack and heap size and manage their growth
    // stack grows down heap grows up
  }

  /**
   * Sets the specified section and returns the start address.
   * @param {string} section - The section to set. Must be one of the section constants (BSS_SECTION, ENV_SECTION, HEAP_SECTION, INIT_DATA_SECTION, STACK_SECTION, TEXT_SECTION).
   * @param {number} size - The size of the section.
   * @returns {number} - The start address of the section.
   */
  set(section, size) {
    switch (section) {
      case ENV_SECTION:
        this.ENV_START_ADDRESS = this.PROC_END_ADDRESS - size;
        this.ENV_END_ADDRESS = this.PROC_END_ADDRESS;
        return this.ENV_START_ADDRESS;

      case STACK_SECTION:
        this.STACK_SEC_START_ADDRESS = this.ENV_START_ADDRESS - 1;
        this.STACK_SEC_END_ADDRESS = this.ENV_START_ADDRESS + 2;
        return this.STACK_SEC_START_ADDRESS;

      case HEAP_SECTION:
        this.HEAP_START_ADDRESS = this.BSS_SEC_END_ADDRESS + 1;
        this.HEAP_END_ADDRESS = this.BSS_SEC_END_ADDRESS + 2;
        return this.HEAP_START_ADDRESS;

      case BSS_SECTION:
        this.BSS_SEC_START_ADDRESS = this.INIT_DATA_SEC_END_ADDRESS + 1;
        this.BSS_SEC_END_ADDRESS = this.BSS_SEC_START_ADDRESS + size;
        return this.BSS_SEC_START_ADDRESS;

      case INIT_DATA_SECTION:
        this.INIT_DATA_SEC_START_ADDRESS = this.TEXT_SEC_END_ADDRESS + 1;
        this.INIT_DATA_SEC_END_ADDRESS =
          this.INIT_DATA_SEC_START_ADDRESS + size;
        return this.INIT_DATA_SEC_START_ADDRESS;

      case TEXT_SECTION:
        this.TEXT_SEC_START_ADDRESS = this.PROC_START_ADDRESS;
        this.TEXT_SEC_END_ADDRESS = this.TEXT_SEC_START_ADDRESS + size;
        return this.TEXT_SEC_START_ADDRESS;

      default:
        // TODO: call an interrupt signal here
        break;
    }
  }
}
