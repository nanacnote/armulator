import * as DEF from "./var/def.js";

import { Clk } from "./cmp/clock.js";
import { Ram } from "./cmp/ram.js";
import { Bus } from "./cmp/bus.js";
import { Cpu } from "./cmp/cpu.js";
import { Reg } from "./cmp/reg.js";
import { Mmu } from "./cmp/mmu.js";
import { Dec } from "./cmp/dec.js";
import { Alu } from "./cmp/alu.js";

const ram = new Ram();
const reg = new Reg();
const mmu = new Mmu();
const dec = new Dec();
const alu = new Alu();
const clk = new Clk();

const bus = new Bus({ [DEF.RAM_DEV_KEY]: ram });
const cpu = new Cpu({ bus, reg, mmu, dec, alu, clk, ram });

export { DEF, cpu, bus, reg, mmu, dec, alu, clk, ram };
