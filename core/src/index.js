import { RAM_DEV_KEY } from "./var/def.js";

import { Clk } from "./cmp/clock.js";
import { Ram } from "./cmp/ram.js";
import { Bus } from "./cmp/bus.js";
import { Cpu } from "./cmp/cpu.js";
import { Reg } from "./cmp/reg.js";
import { Mmu } from "./cmp/mmu.js";
import { Dec } from "./cmp/dec.js";
import { Alu } from "./cmp/alu.js";
import { Ivt } from "./cmp/ivt.js";

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

export { cpu };
