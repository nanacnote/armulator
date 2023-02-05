import { fletcher16 } from "../lib/checksum.js";
import { ON_ALU_EXECUTE } from "../var/def.js";

export class Alu extends EventTarget {
  constructor() {
    super();
  }

  call({ pid, routine, instruction, virtualAddress }) {
    if (routine) {
      console.log(
        `Execute Opcode - ${routine.toString(2)} - ${instruction.toString(
          16
        )}\n\n`
      );
      this.dispatchEvent(
        new CustomEvent(ON_ALU_EXECUTE, {
          detail: fletcher16(`${pid}-${instruction}-${virtualAddress}`),
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
