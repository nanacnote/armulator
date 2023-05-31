import { extractBits, fletcher16, setBit } from "../lib/utils.js";
import { MNEM, ON_ALU_EXECUTE } from "../lib/def.js";

/**
 * @module Core
 */

/**
 * Represents an arithmetic logic unit (ALU).
 * @extends {EventTarget}
 */
export class Alu extends EventTarget {
  /**
   * Creates an instance of the Alu class.
   */
  constructor() {
    super();
  }

  /**
   * Connects the ALU to a register.
   * @param {object} reg - The register object.
   */
  conn2reg(reg) {
    this.REGS = [...reg];
    this.CPSR = this.REGS[this.REGS.length - 1];
  }

  updateCPSR(flag, val) {
    // TODO: implement all flags
    switch (flag) {
      case "N":
        this.CPSR.write(setBit(this.CPSR.read(), 31, val));
        break;
      case "Z":
        this.CPSR.write(setBit(this.CPSR.read(), 30, val));
        break;
      case "C":
        this.CPSR.write(setBit(this.CPSR.read(), 29, val));
        break;
      case "V":
        this.CPSR.write(setBit(this.CPSR.read(), 28, val));
        break;
      default:
        break;
    }
  }

  /**
   * Calls the ALU to execute an opcode.
   * @param {object} options - The options for the call.
   * @param {number} options.pid - The process ID.
   * @param {number} options.routine - The routine.
   * @param {number} options.instruction - The instruction.
   * @param {number} options.virtualAddress - The virtual address.
   */
  call({ pid, routine, instruction, virtualAddress }) {
    if (routine && this[routine]) {
      this[routine].call(this, instruction);
      this.dispatchEvent(
        new CustomEvent(ON_ALU_EXECUTE, {
          detail: {
            pid,
            instruction,
            virtualAddress,
            checkSum: fletcher16(`${pid}-${instruction}-${virtualAddress}`),
          },
        })
      );
      console.log(
        `Execute Opcode - ${routine.toString(2)} - ${instruction.toString(
          16
        )}\n\n`
      );
    } else {
      console.log(
        `%c Unsupported Opcode - ${routine.toString(
          2
        )} - ${instruction.toString(16)}\n\n`,
        "background: black; color: white"
      );
    }
  }

  [MNEM.MUL_MULS](instruction) {
    const rd = extractBits(instruction, 16, 4);
    const rn = extractBits(instruction, 0, 4);
    const rm = extractBits(instruction, 8, 4);
    const setflags = extractBits(instruction, 20, 1);

    const result = this.REGS[rn].read() * this.REGS[rm].read();
    this.REGS[rd].write(result);

    if (setflags) {
      this.updateCPSR("N", extractBits(result, 31, 1));
      this.updateCPSR("Z", result === 0 ? 1 : 0);
    }
  }
}

// const rd = extractBits(instruction, 0, 4)
// const rn = extractBits(instruction, 0, 4)
// const rm = extractBits(instruction, 0, 4)
// const setflags = extractBits(instruction, 0, 1)
