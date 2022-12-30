import {
  DECODE_CYCLE_KEY,
  EXECUTE_CYCLE_KEY,
  FETCH_CYCLE_KEY,
  RAM_DEV_KEY,
} from "./src/var/def.js";

import { Clk } from "./src/cmp/clock.js";
import { Ram } from "./src/cmp/ram.js";
import { Bus } from "./src/cmp/bus.js";
import { Cpu } from "./src/cmp/cpu.js";
import { Reg } from "./src/cmp/reg.js";
import { Mmu } from "./src/cmp/mmu.js";
import { Dec } from "./src/cmp/dec.js";
import { Alu } from "./src/cmp/alu.js";
import { Ivt } from "./src/cmp/ivt.js";

const bus = new Bus({ [RAM_DEV_KEY]: new Ram() });

const cpu = new Cpu({
  bus,
  reg: new Reg(),
  mmu: new Mmu(),
  dec: new Dec(),
  alu: new Alu(),
  ivt: new Ivt(),
  clk: new Clk(),
});

/////////////
cpu
  .loadELF({
    progSize: 48,
    stackSize: 48,
    progInst: [
      0xe35300f5, // cmp     r3, #245
      0xe52d7004, // push    {r7}
      0xe24dd00c, // sub     sp, sp, #12
      0xe28d7000, // add     r7, sp, #0
      0xe5870004, // str     r0, [r7, #4]
      0xe5973004, // ldr     r3, [r7, #4]
      0xe0030393, // mul     r3, r3, r3
      0xe1a00003, // mov     r0, r3
      0xe297700c, // adds    r7, r7, #12
      0xe1a0d007, // mov     sp, r7
      0xe49d7004, // ldr     r7, [sp], #4
      0xe12fff1e, // bx      lr
    ],
  })
  .run();
