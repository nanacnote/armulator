import { Buffer32Bit } from "../cmp/buf32.js";

export const registers = {
  r0: new Buffer32Bit(), // General-purpose. Can be used for any purpose.
  r1: new Buffer32Bit(), // General-purpose. Can be used for any purpose.
  r2: new Buffer32Bit(), // General-purpose. Can be used for any purpose.
  r3: new Buffer32Bit(), // General-purpose. Can be used for any purpose.
  r4: new Buffer32Bit(), // General-purpose. Can be used for any purpose.
  r5: new Buffer32Bit(), // General-purpose. Can be used for any purpose.
  r6: new Buffer32Bit(), // General-purpose. Can be used for any purpose.
  r7: new Buffer32Bit(), // General-purpose. Can be used for any purpose.
  r8: new Buffer32Bit(), // General-purpose. Can be used for any purpose.
  r9: new Buffer32Bit(), // General-purpose. Can be used for any purpose.
  r10: new Buffer32Bit(), // General-purpose. Can be used for any purpose.
  r11: new Buffer32Bit(), // General-purpose. Can be used for any purpose.
  r12: new Buffer32Bit(), // General-purpose. Can be used for any purpose.

  r13: new Buffer32Bit(), // // Stack pointer register. Points to the top of the stack. [SP]
  r14: new Buffer32Bit(), // Link register. Stores the return address for function calls. [LR]
  r15: new Buffer32Bit(), // // Program counter register. Stores the address of the current instruction. [PC]

  cpsr: new Buffer32Bit(), //Current program status register. Stores the current status of the processor, such as the current processor mode and condition flags.
};
