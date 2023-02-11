import {
  NORMAL_CLOCK_SPEED,
  PAUSE_CLOCK_KEY,
  START_CLOCK_KEY,
  STOP_CLOCK_KEY,
  ON_STOP,
  ON_START,
  ON_PAUSE,
  ON_RESUME,
  ON_SPEED_CHANGE,
  ON_FETCH_CYCLE_START,
  ON_DECODE_CYCLE_START,
  ON_EXECUTE_CYCLE_START,
  ON_FETCH_CYCLE_END,
  ON_DECODE_CYCLE_END,
  ON_EXECUTE_CYCLE_END,
  ON_STEP,
} from "../var/def.js";

/**
 * Represents a system clock that can be started, stopped, paused, and resumed, and can have its speed changed.
 * It also has observers that can be registered to be notified of different clock cycles.
 * @extends EventTarget
 */
export class Clk extends EventTarget {
  /**
   * Creates a new Clk object.
   * @constructor
   */
  constructor() {
    super();

    /**
     *The ID of the current interval timer, or null if the clock is not currently running.
     *@type {?number}
     */
    this.TICKER = null;

    /**
     *The current cycle of the clock.
     *@type {number}
     */
    this.CYCLE = 0;

    /**
     * @property {Array} CYCLE_START_EVENTS - A list of constants representing the different start of cycles in the processor.
     * @constant
     * @default
     */
    this.CYCLE_START_EVENTS = [
      ON_FETCH_CYCLE_START,
      ON_DECODE_CYCLE_START,
      ON_EXECUTE_CYCLE_START,
    ];

    /**
     * @property {Array} CYCLE_END_EVENTS - A list of constants representing the different end of cycles in the processor.
     * @constant
     * @default
     */
    this.CYCLE_END_EVENTS = [
      ON_FETCH_CYCLE_END,
      ON_DECODE_CYCLE_END,
      ON_EXECUTE_CYCLE_END,
    ];

    /**
     * The current state of the clock.
     * Can be one of STOP_CLOCK_KEY, START_CLOCK_KEY, or PAUSE_CLOCK_KEY.
     * @type {number}
     * @default STOP_CLOCK_KEY
     */
    this.STATE = STOP_CLOCK_KEY;

    /**
     * The current speed of the clock in milliseconds.
     * Can be any positive number.
     * @type {number}
     * @default NORMAL_CLOCK_SPEED
     */
    this.SPEED = NORMAL_CLOCK_SPEED;

    this._trigger_observers = this._trigger_observers.bind(this);
  }

  /**
   * Starts the system clock.
   * @fires ON_START
   */
  start() {
    if (this.STATE !== START_CLOCK_KEY) {
      this.STATE = START_CLOCK_KEY;
      this.dispatchEvent(new Event(ON_START));
      this.TICKER = setInterval(this._trigger_observers, this.SPEED);
    }
  }

  /**
   * Stops the clock, resetting the counter and cycle to their default values, and sets the state to `STOP_CLOCK_KEY`.
   * If the clock is already stopped, this method does nothing.
   *
   * @fires ON_STOP when the clock is stopped
   */
  stop() {
    if (this.STATE !== STOP_CLOCK_KEY) {
      clearInterval(this.TICKER);
      this.CYCLE = 0;
      this.CYCLE = 0;
      this.TICKER = null;
      this.STATE = STOP_CLOCK_KEY;
      this.dispatchEvent(new Event(ON_STOP));
    }
  }

  /**
   * Pauses the system clock. If the clock is already paused, this method has no effect.
   *
   * @fires ON_PAUSE when the clock is paused
   */
  pause() {
    if (this.STATE !== PAUSE_CLOCK_KEY) {
      clearInterval(this.TICKER);
      this.TICKER = null;
      this.STATE = PAUSE_CLOCK_KEY;
      this.dispatchEvent(new Event(ON_PAUSE));
    }
  }

  /**
   * Resumes the clock if it is currently paused.
   *
   * @fires ON_RESUME when the clock is resumed
   */
  resume() {
    if (this.STATE === PAUSE_CLOCK_KEY) {
      this.STATE = START_CLOCK_KEY;
      this.dispatchEvent(new Event(ON_RESUME));
      this.TICKER = setInterval(this._trigger_observers, this.SPEED);
    }
  }

  /**
   * Resumes the clock if it is currently paused and pause it after 3 clocks.
   *
   * @fires ON_RESUME when the clock is resumed
   */
  step() {
    if (this.STATE === PAUSE_CLOCK_KEY) {
      this.STATE = START_CLOCK_KEY;
      this.dispatchEvent(new Event(ON_STEP));
      setTimeout(() => {
        this._trigger_observers();
        setTimeout(() => {
          this._trigger_observers();
          setTimeout(() => {
            this._trigger_observers();
            this.pause();
          }, this.SPEED);
        }, this.SPEED);
      }, this.SPEED);
    }
  }

  /**
   * Changes the speed of the clock.
   *
   * @param {number} val - The new speed of the clock, in milliseconds.
   * @fires ON_SPEED_CHANGE the clock speed is changed
   */
  changeSpeed(val) {
    this.SPEED = val;
    if (this.TICKER) {
      clearInterval(this.TICKER);
      this.TICKER = setInterval(this._trigger_observers, this.SPEED);
    }
    this.dispatchEvent(
      new CustomEvent(ON_SPEED_CHANGE, { detail: this.SPEED })
    );
  }

  /**
   * Triggers all registered observers for the current cycle and updates the counter and cycle state.
   * @private
   */
  _trigger_observers() {
    // TODO: suspend on visibility change ie user leave current browser tab
    this.dispatchEvent(new Event(this.CYCLE_START_EVENTS[this.CYCLE]));
    this.dispatchEvent(new Event(this.CYCLE_END_EVENTS[this.CYCLE]));
    this.CYCLE =
      this.CYCLE < this.CYCLE_START_EVENTS.length - 1 ? this.CYCLE + 1 : 0;
  }
}
