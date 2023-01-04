export class Ivt {
  // interrupt vector table
  constructor() {}

  handle(code, inst) {
    console.log(
      `%c Handle Interrupt - ${code.toString(2)} - ${inst.toString(16)}\n\n`,
      "background: black; color: white"
    );
  }
}
