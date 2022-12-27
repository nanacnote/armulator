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

// devices
const ram = new Ram();

// bus
const bus = new Bus({ [RAM_DEV_KEY]: ram });

// cpu
const cpu = new Cpu(bus);

// clock
const clock = new Clock({
  [FETCH_CYCLE_KEY]: [bus.onTick, cpu.fetch],
  [DECODE_CYCLE_KEY]: [bus.onTick, cpu.decode],
  [EXECUTE_CYCLE_KEY]: [bus.onTick, cpu.execute],
});
clock.start();

//////////////////////////
ram.write32(0b11100011101000000000000000000000, 0);
ram.write32(0b00010001000000000000000000000000, 8);

setTimeout(() => {
  clock.stop();
  console.log(`Clock stopped after: ${clock.COUNTER} ticks`);
}, 5000);
