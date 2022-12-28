import { Clock } from "./src/cmp/clock.js";
import {
  DECODE_CYCLE_KEY,
  EXECUTE_CYCLE_KEY,
  FETCH_CYCLE_KEY,
  RAM_DEV_KEY,
} from "./src/var/def.js";
import { Bus } from "./src/cmp/bus.js";
import { Ram } from "./src/cmp/ram.js";
import { Cpu } from "./src/cmp/cpu.js";
import { Decoder } from "./src/cmp/dec.js";
import { registers } from "./src/var/reg.js";

const ram = new Ram();
const dec = new Decoder();
const bus = new Bus({ [RAM_DEV_KEY]: ram });
const cpu = new Cpu({ bus, dec, registers });
const clock = new Clock({
  [FETCH_CYCLE_KEY]: [bus.onTick, cpu.fetch],
  [DECODE_CYCLE_KEY]: [bus.onTick, cpu.decode],
  [EXECUTE_CYCLE_KEY]: [bus.onTick, cpu.execute],
});
clock.start();

//////////////////////////

ram.write32(0b11100011101000000000000000000000, 0);
ram.write32(0b00110101000000000000000000010000, 8);
ram.write32(0b11100111100111110000000000000000, 16);

setTimeout(() => {
  clock.stop();
  console.log(`Clock stopped after: ${clock.COUNTER} ticks`);
}, 5000);
