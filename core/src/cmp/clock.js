import {
  FETCH_CYCLE_KEY,
  NORMAL_CLOCK_SPEED,
  CYCLE_SIZE,
  PAUSE_CLOCK_KEY,
  START_CLOCK_KEY,
  STOP_CLOCK_KEY,
} from "../var/def.js";

export class Clock {
  constructor(obs) {
    this.OBSERVERS = obs;

    this.TICKER = null;
    this.COUNTER = 0;

    this.CYCLE = FETCH_CYCLE_KEY;
    this.STATE = STOP_CLOCK_KEY;
    this.SPEED = NORMAL_CLOCK_SPEED;

    this._trigger_observers = this._trigger_observers.bind(this);
  }

  start() {
    this.STATE = START_CLOCK_KEY;
    this.TICKER = setInterval(this._trigger_observers, this.SPEED);
    // TODO: add logic to load instructions
  }

  stop() {
    if (this.TICKER) clearInterval(this.TICKER);
    this.STATE = STOP_CLOCK_KEY;
    // TODO: add logic to empty register and memory
  }

  pause() {
    if (this.TICKER) clearInterval(this.TICKER);
    this.STATE = PAUSE_CLOCK_KEY;
    // TODO: add logic to save state so that resuming is seamless
  }

  resume() {
    this.STATE = START_CLOCK_KEY;
    this.TICKER = setInterval(this._trigger_observers, this.SPEED);
    // TODO: add logic to restore state from pause
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
