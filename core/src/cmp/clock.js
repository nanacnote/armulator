import {
  FETCH_CYCLE_KEY,
  DECODE_CYCLE_KEY,
  EXECUTE_CYCLE_KEY,
  NORMAL_CLOCK_SPEED,
  CYCLE_SIZE,
  PAUSE_CLOCK_KEY,
  START_CLOCK_KEY,
  STOP_CLOCK_KEY,
  ON_STOP_EVENT,
  ON_START_EVENT,
  ON_PAUSE_EVENT,
  ON_RESUME_EVENT,
  ON_SPEED_CHANGE_EVENT,
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
     *An object containing arrays of observer functions that are called during different clock cycles.
     *The keys represent the clock cycle, and the values are arrays of observer functions.
     *@type {Object.<string, function[]>}
     */
    this.OBSERVERS = {
      [FETCH_CYCLE_KEY]: [],
      [DECODE_CYCLE_KEY]: [],
      [EXECUTE_CYCLE_KEY]: [],
    };

    /**
     *The ID of the current interval timer, or null if the clock is not currently running.
     *@type {?number}
     */
    this.TICKER = null;

    /**
     *The number of clock cycles that have passed since the clock was started.
     *@type {number}
     */
    this.COUNTER = 0;

    /**
     * The current cycle of the clock.
     * Can be one of FETCH_CYCLE_KEY, DECODE_CYCLE_KEY, or EXECUTE_CYCLE_KEY.
     * @type {number}
     * @default FETCH_CYCLE_KEY
     */
    this.CYCLE = FETCH_CYCLE_KEY;

    /**
     * The current state of the clock.
     * Can be one of STOP_CLOCK_KEY, START_CLOCK_KEY, or PAUSE_CLOCK_KEY.
     * @type {string}
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
   * Adds one or more observer functions to be called during a specific clock cycle.
   * @param {number} cycleKey - The key of the clock cycle to observe (one of the FETCH_CYCLE_KEY, DECODE_CYCLE_KEY, or EXECUTE_CYCLE_KEY constants).
   * @param {Function|Function[]} obsFuncs - A single observer function or an array of observer functions to be called during the specified clock cycle.
   */
  addObserver(cycleKey, obsFuncs) {
    this.OBSERVERS[cycleKey].push(
      ...(Array.isArray(obsFuncs) ? obsFuncs : [obsFuncs])
    );
  }

  /**
   * Starts the system clock.
   * @fires ON_START_EVENT
   */
  start() {
    if (this.STATE != START_CLOCK_KEY) {
      this.STATE = START_CLOCK_KEY;
      this.dispatchEvent(new Event(ON_START_EVENT));
      this.TICKER = setInterval(this._trigger_observers, this.SPEED);
    }
  }

  /**
   * Stops the clock, resetting the counter and cycle to their default values, and sets the state to `STOP_CLOCK_KEY`.
   * If the clock is already stopped, this method does nothing.
   *
   * @fires ON_STOP_EVENT when the clock is stopped
   */
  stop() {
    if (this.STATE != STOP_CLOCK_KEY) {
      clearInterval(this.TICKER);
      this.COUNTER = 0;
      this.TICKER = null;
      this.CYCLE = FETCH_CYCLE_KEY;
      this.STATE = STOP_CLOCK_KEY;
      this.dispatchEvent(new Event(ON_STOP_EVENT));
    }
  }

  /**
   * Pauses the system clock. If the clock is already paused, this method has no effect.
   *
   * @fires ON_PAUSE_EVENT when the clock is paused
   */
  pause() {
    if (this.STATE != PAUSE_CLOCK_KEY) {
      clearInterval(this.TICKER);
      this.TICKER = null;
      this.STATE = PAUSE_CLOCK_KEY;
      this.dispatchEvent(new Event(ON_PAUSE_EVENT));
    }
  }

  /**
   * Resumes the clock if it is currently paused.
   *
   * @fires ON_RESUME_EVENTwhen the clock is resumed
   */
  resume() {
    if (this.STATE === PAUSE_CLOCK_KEY) {
      this.STATE = START_CLOCK_KEY;
      this.dispatchEvent(new Event(ON_RESUME_EVENT));
      this.TICKER = setInterval(this._trigger_observers, this.SPEED);
    }
  }

  /**
   * Changes the speed of the clock.
   *
   * @param {number} val - The new speed of the clock, in milliseconds.
   * @fires ON_SPEED_CHANGE_EVENT the clock speed is changed
   */
  changeSpeed(val) {
    this.SPEED = val;
    if (this.TICKER) {
      clearInterval(this.TICKER);
      this.TICKER = setInterval(this._trigger_observers, this.SPEED);
    }
    this.dispatchEvent(
      new CustomEvent(ON_SPEED_CHANGE_EVENT, { detail: this.SPEED })
    );
  }

  /**
   * Triggers the registered observers for the current clock cycle.
   * @private
   */
  _trigger_observers() {
    for (const func of this.OBSERVERS[this.CYCLE]) {
      func.call();
    }
    if (this.STATE === START_CLOCK_KEY) {
      this.COUNTER++;
      this.CYCLE = this.COUNTER % CYCLE_SIZE;
    }
  }
}
