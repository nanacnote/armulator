import { Buffer32Bit } from "../cmp/buf32.js";

const r0 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
const r1 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
const r2 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
const r3 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
const r4 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
const r5 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
const r6 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
const r7 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
const r8 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
const r9 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
const r10 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
const r11 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
const r12 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.

const sp = new Buffer32Bit(); // Stack pointer register. Points to the top of the stack.
const lr = new Buffer32Bit(); // Link register. Stores the return address for function calls.
const pc = new Buffer32Bit(); // Program counter register. Stores the address of the current instruction.
const cpsr = new Buffer32Bit(); //Current program status register. Stores the current status of the processor, such as the current processor mode and condition flags.
