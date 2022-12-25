import { Clock } from "./src/cmp/clock.js";
import {
  C_BUS_READ_VAL,
  C_BUS_WRITE_VAL,
  DECODE_CYCLE_KEY,
  EXECUTE_CYCLE_KEY,
  FETCH_CYCLE_KEY,
  RAM_DEV_KEY,
} from "./src/var/def.js";
import { Bus } from "./src/cmp/bus.js";
import { Ram } from "./src/cmp/ram.js";

const bus = new Bus({ [RAM_DEV_KEY]: new Ram() });
const clock = new Clock({
  [FETCH_CYCLE_KEY]: [bus.onTick],
  [DECODE_CYCLE_KEY]: [bus.onTick],
  [EXECUTE_CYCLE_KEY]: [bus.onTick],
});
clock.start();

//////////////////////////

setTimeout(() => {
  clock.stop();
  console.log(`Clock stopped after: ${clock.COUNTER} ticks`);
}, 10000);

setTimeout(() => {
  bus.address(RAM_DEV_KEY + 20000);
  bus.control(C_BUS_READ_VAL);
}, 750);

setTimeout(() => {
  bus.address(RAM_DEV_KEY + 20000);
  bus.data(255);
  bus.control(C_BUS_WRITE_VAL);
}, 1500);

setTimeout(() => {
  bus.address(RAM_DEV_KEY + 20000);
  bus.control(C_BUS_READ_VAL);
}, 2250);
