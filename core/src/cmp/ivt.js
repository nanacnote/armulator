export class Ivt {
  // interrupt vector table
  constructor() {}

  handle(code) {
    console.log(`Handle Interrupt - ${code.toString(2)}\n\n`);
  }
}
