import {
  DECODE_CYCLE_KEY,
  EXECUTE_CYCLE_KEY,
  FETCH_CYCLE_KEY,
  RAM_DEV_KEY,
} from "./src/var/def.js";
import { registers } from "./src/var/reg.js";

import { Alu } from "./src/cmp/alu.js";
import { Decoder } from "./src/cmp/dec.js";
import { Ivt } from "./src/cmp/ivt.js";
import { Ram } from "./src/cmp/ram.js";
import { Bus } from "./src/cmp/bus.js";
import { Cpu } from "./src/cmp/cpu.js";
import { Clock } from "./src/cmp/clock.js";

const alu = new Alu();
const dec = new Decoder();
const ivt = new Ivt();
const ram = new Ram();
const bus = new Bus({ [RAM_DEV_KEY]: ram });
const cpu = new Cpu({ alu, dec, ivt, bus, registers });
const clock = new Clock({
  [FETCH_CYCLE_KEY]: [bus.onTick, cpu.fetch],
  [DECODE_CYCLE_KEY]: [bus.onTick, cpu.decode],
  [EXECUTE_CYCLE_KEY]: [bus.onTick, cpu.execute],
});
clock.start();

//////////////////////////

// ram.write32(0b11100011101000000001000000000011, 0); // MOV R1, #3
// ram.write32(0b11100010100000010000000000000101, 8); // ADD R0, R1, #5
// ram.write32(0b11100101101000010000000000000100, 16); // STR R0, [R1, #4]!
// ram.write32(0b11100100100100010000000000001100, 24); // LDR R0, [R1], #12,

let mem_offset = -4;
[
  0xe52d7004, 0xe24dd00c, 0xe28d7000, 0xe5870004, 0xe5973004, 0xe0030393,
  0xe1a00003, 0xe297700c, 0xe1a0d007, 0xe49d7004, 0xe12fff1e,
].forEach((inst) => ram.write32(inst, (mem_offset += 4)));

setTimeout(() => {
  clock.stop();
  console.log(`Clock stopped after: ${clock.COUNTER} ticks`);
}, 20000);

// push    {r7}
// sub     sp, sp, #12
// add     r7, sp, #0
// str     r0, [r7, #4]
// ldr     r3, [r7, #4]
// mul     r3, r3, r3
// mov     r0, r3
// adds    r7, r7, #12
// mov     sp, r7
// ldr     r7, [sp], #4
// bx      lr
