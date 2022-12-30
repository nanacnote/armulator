import {
  FETCH_CYCLE_KEY,
  DECODE_CYCLE_KEY,
  EXECUTE_CYCLE_KEY,
  NORMAL_CLOCK_SPEED,
  CYCLE_SIZE,
  PAUSE_CLOCK_KEY,
  START_CLOCK_KEY,
  STOP_CLOCK_KEY,
} from "../var/def.js";

export class Clk {
  // system clock
  constructor() {
    this.OBSERVERS = {
      [FETCH_CYCLE_KEY]: [],
      [DECODE_CYCLE_KEY]: [],
      [EXECUTE_CYCLE_KEY]: [],
    };

    this.TICKER = null;
    this.COUNTER = 0;

    this.CYCLE = FETCH_CYCLE_KEY;
    this.STATE = STOP_CLOCK_KEY;
    this.SPEED = NORMAL_CLOCK_SPEED;

    this._trigger_observers = this._trigger_observers.bind(this);
  }

  addObserver(cycleKey, obsFuncs) {
    this.OBSERVERS[cycleKey].push(
      ...(Array.isArray(obsFuncs) ? obsFuncs : [obsFuncs])
    );
  }

  start() {
    this.STATE = START_CLOCK_KEY;
    this.TICKER = setInterval(this._trigger_observers, this.SPEED);
  }

  stop() {
    if (this.TICKER) clearInterval(this.TICKER);
    this.STATE = STOP_CLOCK_KEY;
  }

  pause() {
    if (this.TICKER) clearInterval(this.TICKER);
    this.STATE = PAUSE_CLOCK_KEY;
  }

  resume() {
    this.STATE = START_CLOCK_KEY;
    this.TICKER = setInterval(this._trigger_observers, this.SPEED);
  }

  change_speed(val) {
    this.SPEED = val;
    this.pause();
    this.resume();
  }

  _trigger_observers() {
    if (this.OBSERVERS.hasOwnProperty(this.CYCLE)) {
      this.OBSERVERS[this.CYCLE].forEach((func) => {
        func.call();
      });
      this.COUNTER++;
      this.CYCLE = this.COUNTER % CYCLE_SIZE;
    }
  }
}
