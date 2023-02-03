import { ON_ALU_EXECUTE } from "../var/def";

export class Alu extends EventTarget {
  constructor() {
    super();
  }

  handle(code, inst, index) {
    console.log(
      `Execute Opcode - ${code.toString(2)} - ${inst.toString(16)}\n\n`
    );
    const detail = {
      code,
      inst,
      index,
      // TODO: calculate checksum from the above three val this way the consumer of the lib can do likewise and compare.
      // This will become necessary when complex arm instructions involving initialised data is introduced
      checksum: null,
    };
    this.dispatchEvent(new CustomEvent(ON_ALU_EXECUTE, { detail }));
  }
}
