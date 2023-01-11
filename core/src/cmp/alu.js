export class Alu {
  constructor() {}

  handle(code, inst) {
    console.log(
      `Execute Opcode - ${code.toString(2)} - ${inst.toString(16)}\n\n`
    );
  }
}
