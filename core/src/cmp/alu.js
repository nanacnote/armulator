import { fletcher16 } from "../lib/checksum.js";
import { ON_ALU_EXECUTE } from "../var/def.js";

export class Alu extends EventTarget {
  constructor() {
    super();
  }

  conn2reg(reg) {
    this.REG = reg;
  }

  call({ pid, routine, instruction, virtualAddress }) {
    if (routine) {
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
