export class Alu {
  constructor() {}

  handle(code) {
    console.log(
      `Execute Opcode - ${code.toString(2)} - ${window.currentInstruction}\n\n`
    );
  }
}
