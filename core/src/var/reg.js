import { Buffer32Bit } from "../cmp/buf32.js";

export const r0 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
export const r1 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
export const r2 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
export const r3 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
export const r4 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
export const r5 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
export const r6 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
export const r7 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
export const r8 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
export const r9 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
export const r10 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
export const r11 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
export const r12 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.

export const r13 = new Buffer32Bit(); // // Stack pointer register. Points to the top of the stack. [SP]
export const r14 = new Buffer32Bit(); // Link register. Stores the return address for function calls. [LR]
export const r15 = new Buffer32Bit(); // // Program counter register. Stores the address of the current instruction. [PC]

export const cpsr = new Buffer32Bit(); //Current program status register. Stores the current status of the processor, such as the current processor mode and condition flags.
