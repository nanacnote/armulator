import { fletcher16 } from "../lib/checksum.js";
import { ON_ALU_EXECUTE } from "../var/def.js";

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
    if (routine && instruction) {
      console.log(
        `Execute Opcode - ${routine.toString(2)} - ${instruction.toString(
          16
        )}\n\n`
      );
      const reg =
        this.REG[
          [
            "r1",
            "r2",
            "r3",
            "r4",
            "r5",
            "r6",
            "r7",
            "r8",
            "r9",
            "r10",
            "r11",
            "r12",
            "lr",
            "cpsr",
          ][
            Math.floor(Math.random() * (Math.floor(13) - Math.ceil(0) + 1)) +
              Math.ceil(0)
          ]
        ];
      reg.write(instruction);
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
    } else {
      console.log(
        `%c undefined - ${instruction.toString(16)}\n\n`,
        "background: black; color: white"
      );
    }
  }
}
