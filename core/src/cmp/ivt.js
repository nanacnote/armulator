export class Ivt {
  // interrupt vector table
  constructor() {}

  handle(code) {
    console.log(
      `%c Handle Interrupt - ${code.toString(2)} - ${
        window.currentInstruction
      }\n\n`,
      "background: black; color: white"
    );
  }
}
