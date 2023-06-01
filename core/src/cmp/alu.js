import {
  countLeadingZeros,
  expandImmediateWithCarry,
  extractBits,
  fletcher16,
  setBit,
} from "../lib/utils.js";
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
    this.REG = reg;
    this.REGS = [...this.REG];
    this.CPSR = this.REGS[this.REGS.length - 1];
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
        `Executed Routine - ${routine.toString()} - ${instruction.toString(
          16
        )}\n\n`
      );
    } else {
      console.log(
        `%c Unsupported Instruction - ${instruction.toString(16)}\n\n`,
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
      this.REG.cpsr.N = extractBits(result, 31, 1);
      this.REG.cpsr.Z = result === 0 ? 1 : 0;
    }
  }

  [MNEM.BX](instruction) {
    const rm = extractBits(instruction, 0, 4);
    const target = this.REGS[rm].read();
    this.REG.pc.write(target);
  }

  [MNEM.BLX_REG](instruction) {
    const rm = extractBits(instruction, 0, 4);
    const target = this.REGS[rm].read();
    this.REG.lr.write(this.REG.pc.read() + 4);
    this.REG.pc.write(target);
  }

  [MNEM.CLZ](instruction) {
    const rd = extractBits(instruction, 12, 4);
    const rm = extractBits(instruction, 0, 4);
    const result = countLeadingZeros(this.REGS[rm].read());
    this.REGS[rd].write(result);
  }

  [MNEM.AND_ANDS_IMD](instruction) {
    const rd = extractBits(instruction, 12, 4);
    const rn = extractBits(instruction, 16, 4);
    const imm12 = extractBits(instruction, 0, 12);
    const setflags = extractBits(instruction, 20, 1);
    const { imm32, carryOut } = expandImmediateWithCarry(imm12, 0);
    const result = this.REGS[rn].read() & imm32;
    this.REGS[rd].write(result);

    // TODO: raise ALUExceptionReturn(result) if destination === pc and setflags
    if (setflags) {
      this.REG.cpsr.N = extractBits(result, 31, 1);
      this.REG.cpsr.Z = result === 0 ? 1 : 0;
      this.REG.cpsr.C = carryOut;
    }
  }
}

// const rd = extractBits(instruction, 0, 4)
// const rn = extractBits(instruction, 0, 4)
// const rm = extractBits(instruction, 0, 4)
// const setflags = extractBits(instruction, 0, 1)
