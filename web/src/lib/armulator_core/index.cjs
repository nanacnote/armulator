// Constants used as keys to dispatch events
var ON_START_EVENT = "start";
var ON_STOP_EVENT = "stop";
var ON_PAUSE_EVENT = "pause";
var ON_RESUME_EVENT = "resume";
var ON_SPEED_CHANGE_EVENT = "speed-change";
var ON_RAM_WRITE_EVENT = "ram-write";
var ON_RAM_READ_EVENT = "ram-read";
var ON_BUFFER_32_WRITE_EVENT = "buffer-32-write";
var ON_BUFFER_32_READ_EVENT = "buffer-32-read";
var ON_PROC_LOAD = "on-proc-load";
var ON_FETCH_CYCLE = "fetch-cycle";
var ON_DECODE_CYCLE = "decode-cycle";
var ON_EXECUTE_CYCLE = "execute-cycle";

// Constant values that represent the status of an operation
var OK_CODE = 1; // indicates everything went right
var ERROR_CODE = 0; // indicates an error occurred

// Constants used to distinguish between different types of execution
var EXECUTION_KEY = 0; // indicates normal execution
var INTERRUPT_KEY = 256; // indicates interrupt execution

// Constants used to identify specific interrupt types
var UNDEFINED_INSTRUCTION_INTERRUPT = INTERRUPT_KEY + 1; // indicates an undefined instruction interrupt

// Constants used to identify different clock states
var STOP_CLOCK_KEY = 0; // indicates the system is in stop/idle state
var START_CLOCK_KEY = 1; // indicates the system is in start/active state
var PAUSE_CLOCK_KEY = 2; // indicates the system is in pause/suspended state

// Constants used to identify different clock speeds in ms
var FAST_CLOCK_SPEED = 200; // indicates the clock is running at fast speed
var NORMAL_CLOCK_SPEED = 500; // indicates the clock is running at normal speed
var SLOW_CLOCK_SPEED = 1000; // indicates the clock is running at slow speed

// Constants used to set the control bus to different modes
var C_BUS_READ_8_VAL = 65536; // sets the control bus to read 8-bit mode
var C_BUS_READ_16_VAL = 131072; // sets the control bus to read 16-bit mode
var C_BUS_READ_32_VAL = 196608; // sets the control bus to read 32-bit mode
var C_BUS_WRITE_8_VAL = 256; // sets the control bus to write 8-bit mode
var C_BUS_WRITE_16_VAL = 512; // sets the control bus to write 16-bit mode
var C_BUS_WRITE_32_VAL = 768; // sets the control bus to write 32-bit mode
var C_BUS_INTERRUPT_VAL = 1; // sets the control bus to interrupt mode

// Constant used to identify the RAM device
var RAM_DEV_KEY = 16777216;

// Constant used to specify the size of the RAM in bytes
var RAM_SIZE_IN_BYTE = 0.5 * 1024 * 1024;

var def = {
  __proto__: null,
  ON_START_EVENT: ON_START_EVENT,
  ON_STOP_EVENT: ON_STOP_EVENT,
  ON_PAUSE_EVENT: ON_PAUSE_EVENT,
  ON_RESUME_EVENT: ON_RESUME_EVENT,
  ON_SPEED_CHANGE_EVENT: ON_SPEED_CHANGE_EVENT,
  ON_RAM_WRITE_EVENT: ON_RAM_WRITE_EVENT,
  ON_RAM_READ_EVENT: ON_RAM_READ_EVENT,
  ON_BUFFER_32_WRITE_EVENT: ON_BUFFER_32_WRITE_EVENT,
  ON_BUFFER_32_READ_EVENT: ON_BUFFER_32_READ_EVENT,
  ON_PROC_LOAD: ON_PROC_LOAD,
  ON_FETCH_CYCLE: ON_FETCH_CYCLE,
  ON_DECODE_CYCLE: ON_DECODE_CYCLE,
  ON_EXECUTE_CYCLE: ON_EXECUTE_CYCLE,
  OK_CODE: OK_CODE,
  ERROR_CODE: ERROR_CODE,
  EXECUTION_KEY: EXECUTION_KEY,
  INTERRUPT_KEY: INTERRUPT_KEY,
  UNDEFINED_INSTRUCTION_INTERRUPT: UNDEFINED_INSTRUCTION_INTERRUPT,
  STOP_CLOCK_KEY: STOP_CLOCK_KEY,
  START_CLOCK_KEY: START_CLOCK_KEY,
  PAUSE_CLOCK_KEY: PAUSE_CLOCK_KEY,
  FAST_CLOCK_SPEED: FAST_CLOCK_SPEED,
  NORMAL_CLOCK_SPEED: NORMAL_CLOCK_SPEED,
  SLOW_CLOCK_SPEED: SLOW_CLOCK_SPEED,
  C_BUS_READ_8_VAL: C_BUS_READ_8_VAL,
  C_BUS_READ_16_VAL: C_BUS_READ_16_VAL,
  C_BUS_READ_32_VAL: C_BUS_READ_32_VAL,
  C_BUS_WRITE_8_VAL: C_BUS_WRITE_8_VAL,
  C_BUS_WRITE_16_VAL: C_BUS_WRITE_16_VAL,
  C_BUS_WRITE_32_VAL: C_BUS_WRITE_32_VAL,
  C_BUS_INTERRUPT_VAL: C_BUS_INTERRUPT_VAL,
  RAM_DEV_KEY: RAM_DEV_KEY,
  RAM_SIZE_IN_BYTE: RAM_SIZE_IN_BYTE
};

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

/**
 * Represents a system clock that can be started, stopped, paused, and resumed, and can have its speed changed.
 * It also has observers that can be registered to be notified of different clock cycles.
 * @extends EventTarget
 */
var Clk = /*#__PURE__*/function (_EventTarget) {
  _inheritsLoose(Clk, _EventTarget);
  /**
   * Creates a new Clk object.
   * @constructor
   */
  function Clk() {
    var _this;
    _this = _EventTarget.call(this) || this;

    /**
     *The ID of the current interval timer, or null if the clock is not currently running.
     *@type {?number}
     */
    _this.TICKER = null;

    /**
     *The number of clock cycles that have passed since the clock was started.
     *@type {number}
     */
    _this.COUNTER = 0;

    /**
     * The current cycle of the clock.
     * @type {number}
     */
    _this.CYCLE = 0;

    /**
     * @property {Array} CYCLE_EVENTS - A list of constants representing the different cycles in the processor.
     * @constant
     * @default
     */
    _this.CYCLE_EVENTS = [ON_FETCH_CYCLE, ON_DECODE_CYCLE, ON_EXECUTE_CYCLE];

    /**
     * The current state of the clock.
     * Can be one of STOP_CLOCK_KEY, START_CLOCK_KEY, or PAUSE_CLOCK_KEY.
     * @type {number}
     * @default STOP_CLOCK_KEY
     */
    _this.STATE = STOP_CLOCK_KEY;

    /**
     * The current speed of the clock in milliseconds.
     * Can be any positive number.
     * @type {number}
     * @default NORMAL_CLOCK_SPEED
     */
    _this.SPEED = NORMAL_CLOCK_SPEED;
    _this._trigger_observers = _this._trigger_observers.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Starts the system clock.
   * @fires ON_START_EVENT
   */
  var _proto = Clk.prototype;
  _proto.start = function start() {
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
   */;
  _proto.stop = function stop() {
    if (this.STATE != STOP_CLOCK_KEY) {
      clearInterval(this.TICKER);
      this.CYCLE = 0;
      this.COUNTER = 0;
      this.TICKER = null;
      this.STATE = STOP_CLOCK_KEY;
      this.dispatchEvent(new Event(ON_STOP_EVENT));
    }
  }

  /**
   * Pauses the system clock. If the clock is already paused, this method has no effect.
   *
   * @fires ON_PAUSE_EVENT when the clock is paused
   */;
  _proto.pause = function pause() {
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
   */;
  _proto.resume = function resume() {
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
   */;
  _proto.changeSpeed = function changeSpeed(val) {
    this.SPEED = val;
    if (this.TICKER) {
      clearInterval(this.TICKER);
      this.TICKER = setInterval(this._trigger_observers, this.SPEED);
    }
    this.dispatchEvent(new CustomEvent(ON_SPEED_CHANGE_EVENT, {
      detail: this.SPEED
    }));
  }

  /**
   * Triggers all registered observers for the current cycle and updates the counter and cycle state.
   * @private
   */;
  _proto._trigger_observers = function _trigger_observers() {
    // TODO: suspend on visibility change ie user leave current browser tab
    this.dispatchEvent(new Event(this.CYCLE_EVENTS[this.CYCLE]));
    if (this.STATE === START_CLOCK_KEY) {
      this.COUNTER++;
      this.CYCLE = this.COUNTER % this.CYCLE_EVENTS.length;
    }
  };
  return Clk;
}( /*#__PURE__*/_wrapNativeSuper(EventTarget));

/**
 * A class representing a memory buffer that can be read and written to.
 * @extends EventTarget
 */
var Ram = /*#__PURE__*/function (_EventTarget, _Symbol$iterator) {
  _inheritsLoose(Ram, _EventTarget);
  /**
   * Creates a new Ram object.
   * @constructor
   */
  function Ram() {
    var _this;
    _this = _EventTarget.call(this) || this;
    _this.START_ADDRESS = 0;
    _this.BUFFER = new DataView(new ArrayBuffer(RAM_SIZE_IN_BYTE), _this.START_ADDRESS);
    return _this;
  }

  /**
   * Reads an 8-bit value from the memory buffer at the specified byte offset.
   * @param {number} [byteOffset=0] - The byte offset at which to read the value.
   * @returns {number} The 8-bit value read from the memory buffer.
   * @fires ON_RAM_READ_EVENT
   */
  var _proto = Ram.prototype;
  _proto.read8 = function read8(byteOffset) {
    if (byteOffset === void 0) {
      byteOffset = 0;
    }
    var val = this.BUFFER.getUint8(byteOffset);
    this.dispatchEvent(new Event(ON_RAM_READ_EVENT));
    return val;
  }

  /**
   * Reads a 16-bit value from the memory buffer at the specified byte offset.
   * @param {number} [byteOffset=0] - The byte offset at which to read the value.
   * @returns {number} The 16-bit value read from the memory buffer.
   * @fires ON_RAM_READ_EVENT
   */;
  _proto.read16 = function read16(byteOffset) {
    if (byteOffset === void 0) {
      byteOffset = 0;
    }
    var val = this.BUFFER.getUint16(byteOffset);
    this.dispatchEvent(new Event(ON_RAM_READ_EVENT));
    return val;
  }

  /**
   * Reads a 32-bit value from the memory buffer at the specified byte offset.
   * @param {number} [byteOffset=0] - The byte offset at which to read the value.
   * @returns {number} The 32-bit value read from the memory buffer.
   * @fires ON_RAM_READ_EVENT
   */;
  _proto.read32 = function read32(byteOffset) {
    if (byteOffset === void 0) {
      byteOffset = 0;
    }
    var val = this.BUFFER.getUint32(byteOffset);
    this.dispatchEvent(new Event(ON_RAM_READ_EVENT));
    return val;
  }

  /**
   * Writes an 8-bit value to the memory buffer at the specified byte offset.
   * @param {number} val - The 8-bit value to write to the memory buffer.
   * @param {number} [byteOffset=0] - The byte offset at which to write the value.
   * @returns {number} The OK_CODE indicating success.
   * @fires ON_RAM_WRITE_EVENT
   */;
  _proto.write8 = function write8(val, byteOffset) {
    if (byteOffset === void 0) {
      byteOffset = 0;
    }
    this.BUFFER.setUint8(byteOffset, val);
    this.dispatchEvent(new Event(ON_RAM_WRITE_EVENT));
    return OK_CODE;
  }

  /**
   * Writes a 16-bit value to the memory buffer at the specified byte offset.
   * @param {number} val - The 16-bit value to write to the memory buffer.
   * @param {number} [byteOffset=0] - The byte offset at which to write the value.
   * @returns {number} The OK_CODE indicating success.
   * @fires ON_RAM_WRITE_EVENT
   */;
  _proto.write16 = function write16(val, byteOffset) {
    if (byteOffset === void 0) {
      byteOffset = 0;
    }
    this.BUFFER.setUint16(byteOffset, val);
    this.dispatchEvent(new Event(ON_RAM_WRITE_EVENT));
    return OK_CODE;
  }

  /**
   * Writes a 32-bit value to the memory buffer at the specified byte offset.
   * @param {number} val - The 32-bit value to write to the memory buffer.
   * @param {number} [byteOffset=0] - The byte offset at which to write the value.
   * @returns {number} The OK_CODE indicating success.
   * @fires ON_RAM_WRITE_EVENT
   */;
  _proto.write32 = function write32(val, byteOffset) {
    if (byteOffset === void 0) {
      byteOffset = 0;
    }
    this.BUFFER.setUint32(byteOffset, val);
    this.dispatchEvent(new Event(ON_RAM_WRITE_EVENT));
    return OK_CODE;
  }

  /**
   * Returns the length of the memory buffer in bytes.
   * @returns {number} The length of the memory buffer in bytes.
   */;
  _proto.getByteLength = function getByteLength() {
    return this.BUFFER.byteLength;
  }

  /**
   * Returns an array containing the binary representation of each byte in the memory buffer.
   * @returns {string[]} An array containing the binary representation of each byte in the memory buffer.
   */;
  _proto.view = function view() {
    return [].concat(this);
  }

  /**
   * An iterator function that allows the memory buffer to be iterated over with a `for-of` loop.
   * @returns {Object} An object with a `next` method that returns an object with a `value` property
   * representing the current byte in the memory buffer as a binary string, and a `done` property
   * indicating whether the end of the memory buffer has been reached.
   */;
  _proto[_Symbol$iterator] = function () {
    var _this2 = this;
    var index = 0;
    return {
      next: function next() {
        if (index < RAM_SIZE_IN_BYTE) {
          var binStr = _this2.BUFFER.getUint8(index).toString(2);
          var binStr32 = binStr.padStart(8, "0");
          index++;
          return {
            value: binStr32,
            done: false
          };
        } else {
          return {
            done: true
          };
        }
      }
    };
  };
  return Ram;
}( /*#__PURE__*/_wrapNativeSuper(EventTarget), Symbol.iterator);

/**
 * A class representing a 32-bit buffer that can be read from and written to.
 * @extends EventTarget
 */
var Buffer32Bit = /*#__PURE__*/function (_EventTarget, _Symbol$iterator) {
  _inheritsLoose(Buffer32Bit, _EventTarget);
  /**
   * Creates a new Buffer32Bit object.
   * @constructor
   */
  function Buffer32Bit() {
    var _this;
    _this = _EventTarget.call(this) || this;
    _this.IS_EMPTY = OK_CODE;
    _this.BUFFER = new DataView(new ArrayBuffer(4));
    return _this;
  }

  /**
   * Reads a 32-bit value from the buffer at the specified byte offset.
   * @param {number} [byteOffset=0] - The byte offset at which to read the value.
   * @returns {number} The 32-bit value read from the buffer.
   * @fires ON_BUFFER_32_READ_EVENT
   */
  var _proto = Buffer32Bit.prototype;
  _proto.read = function read(byteOffset) {
    if (byteOffset === void 0) {
      byteOffset = 0;
    }
    var val = this.BUFFER.getUint32(byteOffset);
    this.dispatchEvent(new Event(ON_BUFFER_32_READ_EVENT));
    return val;
  }

  /**
   * Writes a 32-bit value to the buffer at the specified byte offset.
   * @param {number} val - The 32-bit value to write to the buffer.
   * @param {number} [byteOffset=0] - The byte offset at which to write the value.
   * @returns {number} The OK_CODE indicating success.
   * @fires ON_BUFFER_32_WRITE_EVENT
   */;
  _proto.write = function write(val, byteOffset) {
    if (byteOffset === void 0) {
      byteOffset = 0;
    }
    this.BUFFER.setUint32(byteOffset, val);
    this.IS_EMPTY = ERROR_CODE;
    this.dispatchEvent(new Event(ON_BUFFER_32_WRITE_EVENT));
    return OK_CODE;
  }

  /**
   * Resets the buffer to all zeros.
   * @returns {number} The OK_CODE indicating success.
   */;
  _proto.flush = function flush() {
    this.BUFFER.setUint32(0, 0);
    this.IS_EMPTY = OK_CODE;
    return OK_CODE;
  }

  /**
   * Returns a string representation of the binary contents of the buffer.
   * @returns {string} A string representation of the binary contents of the buffer.
   */;
  _proto.view = function view() {
    return [].concat(this).join("");
  }

  /**
   * An iterator function that allows the buffer to be iterated over with a `for-of` loop.
   * @returns {Object} An object with a `next` method that returns an object with a `value` property
   * representing the current bit in the buffer as a binary string, and a `done` property
   * indicating whether the end of the buffer has been reached.
   */;
  _proto[_Symbol$iterator] = function () {
    var binStr = this.BUFFER.getUint32(0).toString(2);
    var binStr32 = binStr.padStart(32, "0");
    var index = 0;
    return {
      next: function next() {
        if (index < binStr32.length) {
          return {
            value: binStr32[index++],
            done: false
          };
        } else {
          return {
            done: true
          };
        }
      }
    };
  };
  return Buffer32Bit;
}( /*#__PURE__*/_wrapNativeSuper(EventTarget), Symbol.iterator);

/**
 * Represents a bus system that connects devices and allows them to communicate with each other.
 * It has three buffers for the address, data, and control signals, and can read and write data from and to devices.
 */
var Bus = /*#__PURE__*/function () {
  /**
   * Creates a new Bus instance.
   * @param {Object} dev - An object containing the devices connected to the bus.
   */
  function Bus(dev) {
    /**
     * An object containing the devices connected to the bus.
     * @type {Object}
     */
    this.DEVICES = dev;

    /**
     * The ADDRESS-BUS buffer.
     * @type {Buffer32Bit}
     */
    this.A_BUS_BUFFER = new Buffer32Bit();

    /**
     * The CONTROL-BUS buffer.
     * @type {Buffer32Bit}
     */
    this.C_BUS_BUFFER = new Buffer32Bit();

    /**
     * The DATA-BUS buffer.
     * @type {Buffer32Bit}
     */
    this.D_BUS_BUFFER = new Buffer32Bit();
    this.onTick = this.onTick.bind(this);
  }

  /**
   * Sets the value of the ADDRESS-BUS buffer.
   * @param {number} val - The value to set.
   */
  var _proto = Bus.prototype;
  _proto.setAddress = function setAddress(val) {
    // NOTE: first 8bits of address represents the device key
    this.A_BUS_BUFFER.write(val);
  }

  /**
   * Sets the value of the CONTROL-BUS buffer.
   * @param {number} val - The value to set.
   */;
  _proto.setControl = function setControl(val) {
    this.C_BUS_BUFFER.write(val);
  }

  /**
   * Sets the value of the DATA-BUS buffer.
   * @param {number} val - The value to set.
   */;
  _proto.setData = function setData(val) {
    this.D_BUS_BUFFER.write(val);
  }

  /**
   * Returns the value of the data bus.
   * @return {number} The value of the data bus.
   */;
  _proto.getData = function getData() {
    var data = this.D_BUS_BUFFER.read();
    this.D_BUS_BUFFER.flush();
    return data;
  }

  /**
   * Returns the values of the address, data, and control buses.
   * @return {Object} An object containing the values of the address, data, and control buses.
   */;
  _proto.view = function view() {
    return {
      address: this.A_BUS_BUFFER.view(),
      data: this.D_BUS_BUFFER.view(),
      control: this.C_BUS_BUFFER.view()
    };
  }

  /**
   * Handles bus transactions on each tick of the clock.
   * If the address bus buffer is not empty, it reads the device key and byte offset from the address bus buffer,
   * then determines the type of bus transaction based on the value in the control bus buffer.
   * If the transaction is a read operation, it reads the specified number of bytes from the device at the specified byte offset
   * and writes the data to the data bus buffer.
   * If the transaction is a write operation, it writes the data in the data bus buffer to the device at the specified byte offset.
   * If the transaction is an interrupt request, it logs a message indicating that interrupt handling is not yet implemented.
   * Finally, it flushes the address bus buffer.
   */;
  _proto.onTick = function onTick() {
    if (this.A_BUS_BUFFER.IS_EMPTY) return;
    var device = this.DEVICES[this.A_BUS_BUFFER.read() & (1 << 8) - 1 << 24 >>> 0];
    var byteOffset = this.A_BUS_BUFFER.read() ^ RAM_DEV_KEY;

    // read data from memory into register
    if (!(this.C_BUS_BUFFER.read() ^ C_BUS_READ_8_VAL)) {
      this.D_BUS_BUFFER.write(device.read8(byteOffset));
    }
    if (!(this.C_BUS_BUFFER.read() ^ C_BUS_READ_16_VAL)) {
      this.D_BUS_BUFFER.write(device.read16(byteOffset));
    }
    if (!(this.C_BUS_BUFFER.read() ^ C_BUS_READ_32_VAL)) {
      this.D_BUS_BUFFER.write(device.read32(byteOffset));
    }

    // write data from memory into register
    if (!(this.C_BUS_BUFFER.read() ^ C_BUS_WRITE_8_VAL)) {
      device.write8(this.D_BUS_BUFFER.read(), byteOffset);
    }
    if (!(this.C_BUS_BUFFER.read() ^ C_BUS_WRITE_16_VAL)) {
      device.write16(this.D_BUS_BUFFER.read(), byteOffset);
    }
    if (!(this.C_BUS_BUFFER.read() ^ C_BUS_WRITE_32_VAL)) {
      device.write32(this.D_BUS_BUFFER.read(), byteOffset);
    }

    // handle interrupts
    if (!(this.C_BUS_BUFFER.read() ^ C_BUS_INTERRUPT_VAL)) {
      console.log("TODO: handle interrupt signals here");
    }
    this.A_BUS_BUFFER.flush();
  };
  return Bus;
}();

var Cpu = /*#__PURE__*/function () {
  function Cpu(parts) {
    this.ALU = parts.alu;
    this.DEC = parts.dec;
    this.IVT = parts.ivt;
    this.BUS = parts.bus;
    this.REG = parts.reg;
    this.MMU = parts.mmu;
    this.CLK = parts.clk;
    this.CURRENT_INSTRUCTION = null;
    this.HANDLER_CODE = null;
    this.PROC_START_ADDRESS = 0;
    this.PROC_BYTE_SIZE = 0;
    this.STACK_BYTE_SIZE = 0;
    this.STACK_START_ADDRESS = 0;
    this._fetch = this._fetch.bind(this);
    this._decode = this._decode.bind(this);
    this._execute = this._execute.bind(this);
    this.MMU.conn2bus(this.BUS);
    this.CLK.addEventListener(ON_FETCH_CYCLE, this._fetch);
    this.CLK.addEventListener(ON_DECODE_CYCLE, this._decode);
    this.CLK.addEventListener(ON_EXECUTE_CYCLE, this._execute);
    this.CLK.addEventListener(ON_FETCH_CYCLE, this.BUS.onTick);
    this.CLK.addEventListener(ON_DECODE_CYCLE, this.BUS.onTick);
    this.CLK.addEventListener(ON_EXECUTE_CYCLE, this.BUS.onTick);
  }
  var _proto = Cpu.prototype;
  _proto.loadParsedElf = function loadParsedElf(ctx) {
    this.PROC_BYTE_SIZE = ctx.proCSize;
    this.STACK_BYTE_SIZE = ctx.stackSize;
    this.PROC_START_ADDRESS = this.MMU.byteAlloc(this.PROC_BYTE_SIZE, 0);
    this.STACK_START_ADDRESS = this.MMU.byteAlloc(this.STACK_BYTE_SIZE, this.PROC_START_ADDRESS + this.PROC_BYTE_SIZE + 4);
    this.REG.pc.write(this.PROC_START_ADDRESS);
    this.REG.sp.write(this.PROC_START_ADDRESS);
    this.MMU.loadProc(ctx.text);
    return this;
  };
  _proto.run = function run() {
    this.CLK.start();
    return this;
  };
  _proto._fetch = function _fetch() {
    if (this.REG.pc.read() < this.PROC_START_ADDRESS + this.PROC_BYTE_SIZE) {
      var pcRegAddr = this.REG.pc.read();
      var physicalMemAddr = this.MMU.map2ram(pcRegAddr);
      this.BUS.setAddress(physicalMemAddr);
      this.BUS.setControl(C_BUS_READ_32_VAL);
      this.REG.pc.write(pcRegAddr + 4);
    } else {
      this.CLK.stop();
    }
  };
  _proto._decode = function _decode() {
    this.CURRENT_INSTRUCTION = this.BUS.getData();
    if (this.CURRENT_INSTRUCTION) this.HANDLER_CODE = this.DEC.decode(this.CURRENT_INSTRUCTION);
  };
  _proto._execute = function _execute() {
    if (this.CURRENT_INSTRUCTION) {
      var type = this.HANDLER_CODE & (1 << 8) - 1 << 8 >>> 0;
      if (!(type ^ INTERRUPT_KEY)) {
        this.IVT.handle(this.HANDLER_CODE, this.CURRENT_INSTRUCTION);
      }
      if (!(type ^ EXECUTION_KEY)) {
        this.ALU.handle(this.HANDLER_CODE, this.CURRENT_INSTRUCTION);
      }
    }
  };
  return Cpu;
}();

/**
 * A class representing a set of registers in a processor.
 */
var Reg = /*#__PURE__*/function () {
  /**
   * Creates a new set of registers.
   * @constructor
   */
  function Reg() {
    this._r0 = new Buffer32Bit();
    this._r1 = new Buffer32Bit();
    this._r2 = new Buffer32Bit();
    this._r3 = new Buffer32Bit();
    this._r4 = new Buffer32Bit();
    this._r5 = new Buffer32Bit();
    this._r6 = new Buffer32Bit();
    this._r7 = new Buffer32Bit();
    this._r8 = new Buffer32Bit();
    this._r9 = new Buffer32Bit();
    this._r10 = new Buffer32Bit();
    this._r11 = new Buffer32Bit();
    this._r12 = new Buffer32Bit();
    this._r13 = new Buffer32Bit();
    this._r14 = new Buffer32Bit();
    this._r15 = new Buffer32Bit();
    this._cpsr = new Buffer32Bit();
  }

  /**
   * @returns {Buffer32Bit} The r0 general-purpose register. Can be used for any purpose.
   */
  _createClass(Reg, [{
    key: "r0",
    get: function get() {
      return this._r0;
    }

    /**
     * @returns {Buffer32Bit} The r1 general-purpose register. Can be used for any purpose.
     */
  }, {
    key: "r1",
    get: function get() {
      return this._r1;
    }

    /**
     * @returns {Buffer32Bit} The r2 general-purpose register. Can be used for any purpose.
     */
  }, {
    key: "r2",
    get: function get() {
      return this._r2;
    }

    /**
     * @returns {Buffer32Bit} The r3 general-purpose register. Can be used for any purpose.
     */
  }, {
    key: "r3",
    get: function get() {
      return this._r3;
    }

    /**
     * @returns {Buffer32Bit} The r4 general-purpose register. Can be used for any purpose.
     */
  }, {
    key: "r4",
    get: function get() {
      return this._r4;
    }

    /**
     * @returns {Buffer32Bit} The r5 general-purpose register. Can be used for any purpose.
     */
  }, {
    key: "r5",
    get: function get() {
      return this._r5;
    }

    /**
     * @returns {Buffer32Bit} The r6 general-purpose register. Can be used for any purpose.
     */
  }, {
    key: "r6",
    get: function get() {
      return this._r6;
    }

    /**
     * @returns {Buffer32Bit} The r7 general-purpose register. Can be used for any purpose.
     */
  }, {
    key: "r7",
    get: function get() {
      return this._r7;
    }

    /**
     * @returns {Buffer32Bit} The r8 general-purpose register. Can be used for any purpose.
     */
  }, {
    key: "r8",
    get: function get() {
      return this._r8;
    }

    /**
     * @returns {Buffer32Bit} The r9 general-purpose register. Can be used for any purpose.
     */
  }, {
    key: "r9",
    get: function get() {
      return this._r9;
    }

    /**
     * @returns {Buffer32Bit} The r10 general-purpose register. Can be used for any purpose.
     */
  }, {
    key: "r10",
    get: function get() {
      return this._r10;
    }

    /**
     * @returns {Buffer32Bit} The r11 general-purpose register. Can be used for any purpose.
     */
  }, {
    key: "r11",
    get: function get() {
      return this._r11;
    }

    /**
     * @returns {Buffer32Bit} The r12 general-purpose register. Can be used for any purpose.
     */
  }, {
    key: "r12",
    get: function get() {
      return this._r12;
    }

    /**
     * @returns {Buffer32Bit} The r13 stack pointer register. Points to the top of the stack.[SP]
     * @alias sp
     */
  }, {
    key: "r13",
    get: function get() {
      return this._r13;
    }

    /**
     * @returns {Buffer32Bit} The r14 link register. Stores the return address for function calls.
     * @alias lr
     */
  }, {
    key: "r14",
    get: function get() {
      return this._r14;
    }

    /**
     * @returns {Buffer32Bit} The r15 program counter register. Stores the address of the current instruction.
     * @alias pc
     */
  }, {
    key: "r15",
    get: function get() {
      return this._r15;
    }

    /**
     * @returns {Buffer32Bit} The r13 stack pointer register. Points to the top of the stack.
     * @alias sp
     */
  }, {
    key: "sp",
    get: function get() {
      return this._r13;
    }

    /**
     * @returns {Buffer32Bit} The r14 link register. Stores the return address for function calls.
     * @alias lr
     */
  }, {
    key: "lr",
    get: function get() {
      return this._r14;
    }

    /**
     * @returns {Buffer32Bit} The r15 program counter register. Stores the address of the current instruction.
     * @alias pc
     */
  }, {
    key: "pc",
    get: function get() {
      return this._r15;
    }

    /**
     * @returns {Buffer32Bit} The current program status register. Stores the current status of the processor, such as the current processor mode and condition flags.
     */
  }, {
    key: "cpsr",
    get: function get() {
      return this._cpsr;
    }
  }]);
  return Reg;
}();

var Mmu = /*#__PURE__*/function (_EventTarget) {
  _inheritsLoose(Mmu, _EventTarget);
  // virtual memory management unit
  function Mmu() {
    var _this;
    _this = _EventTarget.call(this) || this;
    _this.BUS = null;
    return _this;
  }
  var _proto = Mmu.prototype;
  _proto.conn2bus = function conn2bus(bus) {
    this.BUS = bus;
  };
  _proto.map2ram = function map2ram(virtAddr) {
    //TODO: implement virtual memory mapping tables
    return RAM_DEV_KEY | virtAddr;
  };
  _proto.byteAlloc = function byteAlloc(size, offset) {
    //TODO: implement virtual memory allocation
    return offset;
  };
  _proto.loadProc = function loadProc(instructions) {
    var ram = this.BUS.DEVICES[RAM_DEV_KEY];
    for (var i = 0 + ram.START_ADDRESS, len = instructions.length + ram.START_ADDRESS; i < len; i++) {
      ram.write32(instructions[i], 4 * i);
    }
    this.dispatchEvent(new Event(ON_PROC_LOAD));
  };
  return Mmu;
}( /*#__PURE__*/_wrapNativeSuper(EventTarget));

/**

T0 - main encoding
    T1 - data-processing and miscellaneous instructions
        T11 - Extra load/store                                                              **
        T12 - Multiply and Accumulate
            • MUL/MULS
        T13 - Synchronization primitives and Load-Acquire/Store-Release                     **
        T14 - Miscellaneous
            • BX
            • CLZ
        T15 - Halfword Multiply and Accumulate                                              **
        T16 - Data-processing register (immediate shift)

        T17 - Data-processing register (register shift)
        
        T18 - Data-processing immediate  
            T181 - Integer Data Processing (two register and immediate)
                • AND, ANDS (immediate)
                • EOR, EORS (immediate)
                • SUB, SUBS (immediate) - SUB variant
                • SUB, SUBS (SP minus immediate) - SUB variant 
                • ADR - A2
                • SUB, SUBS (immediate) - SUBS variant
                • SUB, SUBS (SP minus immediate) - SUBS variant 
                • RSB, RSBS (immediate)
                • ADD, ADDS (immediate) - ADD variant
                • ADD, ADDS (SP plus immediate) - ADD variant 
                • ADR - A1
                • ADD, ADDS (immediate) - ADDS variant
                • ADD, ADDS (SP plus immediate) - ADDS variant
                • ADC, ADCS (immediate)
                • SBC, SBCS (immediate)
                • RSC, RSCS (immediate)
            T182 - Move Halfword (immediate) 
                • MOV, MOVS (immediate)
                • MOVT
            T183 - Move Special Register and Hints (immediate)                              **
            T184 - Integer Test and Compare (one register and immediate) 
                • TST (immediate)
                • TEQ (immediate)
                • CMP (immediate)
                • CMN (immediate)
            T185 - Logical Arithmetic (two register and immediate)
                • ORR, ORRS (immediate)
                • MOV, MOVS (immediate)
                • BIC, BICS (immediate)
                • MVN, MVNS (immediate)

    T2 - Load/Store Word, Unsigned Byte (immediate, literal)
        • LDR(literal)
        • LDR(immediate) - Post index variant
        • LDR(immediate) - Offset variant
        • LDRB(literal)
        • LDRB(immediate) - Post index variant
        • LDRB(immediate) - Offset variant
        • STR(immediate) - Pre index variant
        • STR(immediate) - Post index variant
        • STR(immediate) - Offset variant
        • STRB(immediate) - Post index variant
        • STRB(immediate) - Offset variant

    T3 - Load/Store Word, Unsigned Byte (register)
        • LDR (register) - Pre-indexed variant
        • LDR (register) - Post indexed variant
        • LDRB (register) - Pre indexed variant
        • LDRB (register) - Post indexed variant
        • STR (register) - Pre-indexed variant
        • STR (register) - Post indexed variant
        • STRB (register) - Pre indexed variant
        • STRB (register) - Post indexed variant

    T4 - Media instructions                                                                 **

    T5 - Branch, branch with link, and block data transfer
        T51 - Exception Save/Restore                                                        **
        T52 - Load/Store Multiple                                                           **
        T53 - Branch (immediate)
            • B
            • BL (immediate)
            • BLX (immediate)

    T6 - System register access, Advanced SIMD, floating-point, and Supervisor call         **

    T7 - Unconditional instructions                                                         **

 */
var Dec = /*#__PURE__*/function () {
  // Machine code decoder
  function Dec() {
    this.INSTRUCTION = null;

    // prettier-ignore
    this.T0 = [[["_ne", 15], ["_eqC", "00x"], ["_any"], ["_lup", "_T1"]],
    // data-processing and miscellaneous instructions
    [["_ne", 15], ["_eq", 2], ["_any"], ["_lup", "_T2"]],
    // Load/Store Word, Unsigned Byte (immediate, literal)
    [["_ne", 15], ["_eq", 3], ["_eq", 0], ["_lup", "_T3"]],
    // Load/Store Word, Unsigned Byte (register)
    [["_ne", 15], ["_eq", 3], ["_eq", 1], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],
    // Media instructions
    [["_any"], ["_eqC", "10x"], ["_any"], ["_lup", "_T5"]],
    // Branch, branch with link, and block data transfer
    [["_any"], ["_eqC", "11x"], ["_any"], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],
    // System register access, Advanced SIMD, floating-point, and Supervisor call
    [["_eq", 15], ["_eqC", "0xx"], ["_any"], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]] // Unconditional instructions
    ];
    // prettier-ignore
    this.T1 = [[["_eq", 0], ["_any"], ["_eq", 1], ["_ne", 0], ["_eq", 1], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],
    // Extra load/store 
    [["_eq", 0], ["_eqC", "0xxxx"], ["_eq", 1], ["_eq", 0], ["_eq", 1], ["_lup", "_T12"]],
    // Multiply and Accumulate 
    [["_eq", 0], ["_eqC", "1xxxx"], ["_eq", 1], ["_eq", 0], ["_eq", 1], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],
    // Synchronization primitives and Load-Acquire/Store-Release 
    [["_eq", 0], ["_eqC", "10xx0"], ["_eq", 0], ["_any"], ["_any"], ["_lup", "_T14"]],
    // Miscellaneous 
    [["_eq", 0], ["_eqC", "10xx0"], ["_eq", 1], ["_any"], ["_eq", 0], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],
    // Halfword Multiply and Accumulate  
    [["_eq", 0], ["_neC", "10xx0"], ["_any"], ["_any"], ["_eq", 0], ["_lup", "_T16"]],
    // Data-processing register (immediate shift) 
    [["_eq", 0], ["_neC", "10xx0"], ["_eq", 0], ["_any"], ["_eq", 1], ["_lup", "_T16"]],
    // Data-processing register (register shift) 
    [["_eq", 1], ["_any"], ["_any"], ["_any"], ["_any"], ["_lup", "_T18"]] // Data-processing immediate  
    ];
    // prettier-ignore
    this.T12 = [
    // TODO: not all opcodes implemented 
    [["_eq", 0], ["_any"], ["_ret", "MUL_MULS"]] // MUL/MULS
    ];
    // prettier-ignore
    this.T14 = [
    // TODO: not all opcodes implemented
    [["_eq", 1], ["_eq", 1], ["_ret", "BX"]],
    // BX
    [["_eq", 3], ["_eq", 1], ["_ret", "CLZ"]] // CLZ
    ];
    // prettier-ignore
    this.T18 = [[["_eqC", "0x"], ["_any"], ["_lup", "_T181"]],
    // Integer Data Processing (two register and immediate)
    [["_eq", 2], ["_eq", 0], ["_lup", "_T182"]],
    // Move Halfword (immediate) 
    [["_eq", 2], ["_eq", 2], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],
    // Move Special Register and Hints (immediate) 
    [["_eq", 2], ["_eqC", "x1"], ["_lup", "_T184"]],
    // Integer Test and Compare (one register and immediate) 
    [["_eq", 3], ["_any"], ["_lup", "_T185"]] // Logical Arithmetic (two register and immediate)
    ];
    // prettier-ignore
    this.T181 = [[["_eq", 0], ["_any"], ["_any"], ["_ret", "AND_ANDS_IMD"]],
    // AND, ANDS (immediate)
    [["_eq", 1], ["_any"], ["_any"], ["_ret", "EOR_EORS_IMD"]],
    // EOR, EORS (immediate)
    [["_eq", 2], ["_eq", 0], ["_neC", "11x1"], ["_ret", "SUB_IMD"]],
    // SUB, SUBS (immediate) - SUB variant
    [["_eq", 2], ["_eq", 0], ["_eq", 13], ["_ret", "SUB_IMD_SP"]],
    // SUB, SUBS (SP minus immediate) - SUB variant 
    [["_eq", 2], ["_eq", 0], ["_eq", 15], ["_ret", "ADR_A2"]],
    // ADR - A2
    [["_eq", 2], ["_eq", 1], ["_ne", 13], ["_ret", "SUBS_IMD"]],
    // SUB, SUBS (immediate) - SUBS variant
    [["_eq", 2], ["_eq", 1], ["_eq", 13], ["_ret", "SUBS_IMD_SP"]],
    // SUB, SUBS (SP minus immediate) - SUBS variant 
    [["_eq", 3], ["_any"], ["_any"], ["_ret", "RSB_RSBS_IMD"]],
    // RSB, RSBS (immediate)
    [["_eq", 4], ["_eq", 0], ["_neC", "11x1"], ["_ret", "ADD_IMD"]],
    // ADD, ADDS (immediate) - ADD variant
    [["_eq", 4], ["_eq", 0], ["_eq", 13], ["_ret", "ADD_IMD_SP"]],
    // ADD, ADDS (SP plus immediate) - ADD variant 
    [["_eq", 4], ["_eq", 0], ["_eq", 15], ["_ret", "ADR_A1"]],
    // ADR - A1
    [["_eq", 4], ["_eq", 1], ["_ne", 13], ["_ret", "ADDS_IMD"]],
    // ADD, ADDS (immediate) - ADDS variant
    [["_eq", 4], ["_eq", 1], ["_eq", 13], ["_ret", "ADDS_IMD_SP"]],
    // ADD, ADDS (SP plus immediate) - ADDS variant
    [["_eq", 5], ["_any"], ["_any"], ["_ret", "ADC_ADCS_IMD"]],
    // ADC, ADCS (immediate)
    [["_eq", 6], ["_any"], ["_any"], ["_ret", "SBC_SBCS_IMD"]],
    // SBC, SBCS (immediate)
    [["_eq", 7], ["_any"], ["_any"], ["_ret", "RSC_RSCS_IMD"]] // RSC, RSCS (immediate)
    ];
    // prettier-ignore
    this.T182 = [[["_eq", 0], ["_ret", "MOV_MOVS_IMD"]],
    // MOV, MOVS (immediate)
    [["_eq", 1], ["_ret", "MOVT"]] // MOVT
    ];
    // prettier-ignore
    this.T184 = [[["_eq", 0], ["_ret", "TST_IMD"]],
    // TST (immediate)
    [["_eq", 1], ["_ret", "TEQ_IMD"]],
    // TEQ (immediate)
    [["_eq", 2], ["_ret", "CMP_IMD"]],
    // CMP (immediate)
    [["_eq", 3], ["_ret", "CMN_IMD"]] // CMN (immediate)
    ];
    // prettier-ignore
    this.T185 = [[["_eq", 0], ["_ret", "ORR_ORRS_IMD"]],
    // ORR, ORRS (immediate)
    [["_eq", 1], ["_ret", "MOV_MOVS_IMD"]],
    // MOV, MOVS (immediate)
    [["_eq", 2], ["_ret", "BIC_BICS_IMD"]],
    // BIC, BICS (immediate)
    [["_eq", 3], ["_ret", "MVN_MVNS_IMD"]] // MVN, MVNS (immediate)
    ];
    // prettier-ignore
    this.T2 = [
    // TODO: not all opcodes implemented 
    [["_ne", 1], ["_eq", 0], ["_eq", 1], ["_eq", 15], ["_ret", "LDR_LIT"]],
    // LDR(literal)
    [["_eq", 0], ["_eq", 0], ["_eq", 1], ["_ne", 15], ["_ret", "LDR_IMD_POST"]],
    // LDR(immediate) - Post index variant
    [["_eq", 2], ["_eq", 0], ["_eq", 1], ["_ne", 15], ["_ret", "LDR_IMD_OFST"]],
    // LDR(immediate) - Offset variant
    [["_ne", 1], ["_eq", 1], ["_eq", 1], ["_eq", 15], ["_ret", "LDRB_LIT"]],
    // LDRB(literal)
    [["_eq", 0], ["_eq", 1], ["_eq", 1], ["_ne", 15], ["_ret", "LDRB_IMD_POST"]],
    // LDRB(immediate) - Post index variant
    [["_eq", 2], ["_eq", 1], ["_eq", 1], ["_ne", 15], ["_ret", "LDRB_IMD_OFST"]],
    // LDRB(immediate) - Offset variant
    [["_eq", 3], ["_eq", 0], ["_eq", 0], ["_any"], ["_ret", "STR_IMD_PRE"]],
    // STR(immediate) - Pre index variant
    [["_eq", 0], ["_eq", 0], ["_eq", 0], ["_any"], ["_ret", "STR_IMD_POST"]],
    // STR(immediate) - Post index variant
    [["_eq", 2], ["_eq", 0], ["_eq", 0], ["_any"], ["_ret", "STR_IMD_OFST"]],
    // STR(immediate) - Offset variant
    [["_eq", 0], ["_eq", 1], ["_eq", 0], ["_any"], ["_ret", "STRB_IMD_POST"]],
    // STRB(immediate) - Post index variant
    [["_eq", 2], ["_eq", 1], ["_eq", 0], ["_any"], ["_ret", "STRB_IMD_OFST"]] // STRB(immediate) - Offset variant
    ];
    // prettier-ignore
    this.T3 = [
    // TODO: not all opcodes implemented 
    [["_eq", 1], ["_eq", 0], ["_any"], ["_eq", 1], ["_ret", "LDR_REG_PRE"]],
    // LDR (register) - Pre-indexed variant
    [["_eq", 0], ["_eq", 0], ["_eq", 0], ["_eq", 1], ["_ret", "LDR_REG_POST"]],
    // LDR (register) - Post indexed variant
    [["_eq", 1], ["_eq", 1], ["_any"], ["_eq", 1], ["_ret", "LDRB_REG_PRE"]],
    // LDRB (register) - Pre indexed variant
    [["_eq", 0], ["_eq", 1], ["_eq", 0], ["_eq", 1], ["_ret", "LDRB_REG_POST"]],
    // LDRB (register) - Post indexed variant
    [["_eq", 1], ["_eq", 0], ["_any"], ["_eq", 0], ["_ret", "STR_REG_PRE"]],
    // STR (register) - Pre-indexed variant
    [["_eq", 0], ["_eq", 0], ["_eq", 0], ["_eq", 0], ["_ret", "STR_REG_POST"]],
    // STR (register) - Post indexed variant
    [["_eq", 1], ["_eq", 1], ["_any"], ["_eq", 0], ["_ret", "STRB_REG_PRE"]],
    // STRB (register) - Pre indexed variant
    [["_eq", 0], ["_eq", 1], ["_eq", 0], ["_eq", 0], ["_ret", "STRB_REG_POST"]] // STRB (register) - Post indexed variant
    ];
    // prettier-ignore
    this.T5 = [[["_eq", 15], ["_eq", 0], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],
    // Exception Save/Restore
    [["_ne", 15], ["_eq", 0], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],
    // Load/Store Multiple
    [["any"], ["_eq", 1], ["_lup", "T53"]] // Branch (immediate)
    ];
    // prettier-ignore
    this.T53 = [[["_ne", 15], ["_eq", 0], ["_ret", "B"]],
    // B
    [["_ne", 15], ["_eq", 1], ["_ret", "BL"]],
    // BL/BLX (immediate)
    [["_eq", 15], ["_any"], ["_ret", "BLX"]] // BL/BLX (immediate)
    ];
  }
  var _proto = Dec.prototype;
  _proto.decode = function decode(inst) {
    this.INSTRUCTION = inst;
    return this._T0();
  };
  _proto._any = function _any() {
    return true;
  };
  _proto._lup = function _lup(fName) {
    return this[fName].call(this);
  };
  _proto._ret = function _ret(code) {
    return code;
  };
  _proto._ne = function _ne(v1, v2) {
    return !!(v1 ^ v2);
  };
  _proto._eq = function _eq(v1, v2) {
    return !(v1 ^ v2);
  };
  _proto._neC = function _neC(v1, v2) {
    var v2str = v2.toString(2);
    var v1len = v1.length;
    while (v2str.length < v1len) {
      v2str = "0" + v2str;
    }
    for (var i = 0; i < v1len; i++) {
      var curV1 = v1[i];
      var curV2 = v2str[i];
      if (curV1 == "x") continue;
      if (curV1 != curV2) return true;
    }
    return false;
  };
  _proto._eqC = function _eqC(v1, v2) {
    var v2str = v2.toString(2);
    var v1len = v1.length;
    while (v2str.length < v1len) {
      v2str = "0" + v2str;
    }
    for (var i = 0; i < v1len; i++) {
      var curV1 = v1[i];
      var curV2 = v2str[i];
      if (curV1 == "x") continue;
      if (curV1 != curV2) return false;
    }
    return true;
  }

  // TABLE 0
  ;
  _proto._T0 = function _T0() {
    var cond = this.INSTRUCTION >>> 28 & (1 << 4 >>> 0) - 1;
    var op0 = this.INSTRUCTION >>> 25 & (1 << 3 >>> 0) - 1;
    var op1 = this.INSTRUCTION >>> 4 & (1 << 1 >>> 0) - 1;
    for (var i = 0, len = this.T0.length; i < len; i++) {
      var entry = this.T0[i];
      var _entry$ = entry[0],
        cond_func = _entry$[0],
        cond_v1 = _entry$[1];
      var _entry$2 = entry[1],
        op0_func = _entry$2[0],
        op0_v1 = _entry$2[1];
      var _entry$3 = entry[2],
        op1_func = _entry$3[0],
        op1_v1 = _entry$3[1];
      var fields = [this[cond_func].call(this, cond_v1, cond), this[op0_func].call(this, op0_v1, op0), this[op1_func].call(this, op1_v1, op1)];
      if (fields.every(function (v) {
        return v;
      })) {
        var _entry$fields$length = entry[fields.length],
          caller = _entry$fields$length[0],
          callee = _entry$fields$length[1];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  }

  // TABLE x
  ;
  _proto._T1 = function _T1() {
    var op0 = this.INSTRUCTION >>> 25 & (1 << 1 >>> 0) - 1;
    var op1 = this.INSTRUCTION >>> 20 & (1 << 5 >>> 0) - 1;
    var op2 = this.INSTRUCTION >>> 7 & (1 << 1 >>> 0) - 1;
    var op3 = this.INSTRUCTION >>> 5 & (1 << 2 >>> 0) - 1;
    var op4 = this.INSTRUCTION >>> 4 & (1 << 1 >>> 0) - 1;
    for (var i = 0, len = this.T1.length; i < len; i++) {
      var entry = this.T1[i];
      var _entry$4 = entry[0],
        op0_func = _entry$4[0],
        op0_v1 = _entry$4[1];
      var _entry$5 = entry[1],
        op1_func = _entry$5[0],
        op1_v1 = _entry$5[1];
      var _entry$6 = entry[2],
        op2_func = _entry$6[0],
        op2_v1 = _entry$6[1];
      var _entry$7 = entry[3],
        op3_func = _entry$7[0],
        op3_v1 = _entry$7[1];
      var _entry$8 = entry[4],
        op4_func = _entry$8[0],
        op4_v1 = _entry$8[1];
      var fields = [this[op0_func].call(this, op0_v1, op0), this[op1_func].call(this, op1_v1, op1), this[op2_func].call(this, op2_v1, op2), this[op3_func].call(this, op3_v1, op3), this[op4_func].call(this, op4_v1, op4)];
      if (fields.every(function (v) {
        return v;
      })) {
        var _entry$fields$length2 = entry[fields.length],
          caller = _entry$fields$length2[0],
          callee = _entry$fields$length2[1];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  };
  _proto._T2 = function _T2() {
    var p = this.INSTRUCTION >>> 24 & (1 << 1 >>> 0) - 1;
    var w = this.INSTRUCTION >>> 21 & (1 << 1 >>> 0) - 1;
    var PW = (p << 1) + w;
    var o2 = this.INSTRUCTION >>> 22 & (1 << 1 >>> 0) - 1;
    var o1 = this.INSTRUCTION >>> 20 & (1 << 1 >>> 0) - 1;
    var Rn = this.INSTRUCTION >>> 16 & (1 << 4 >>> 0) - 1;
    for (var i = 0, len = this.T2.length; i < len; i++) {
      var entry = this.T2[i];
      var _entry$9 = entry[0],
        PW_func = _entry$9[0],
        PW_v1 = _entry$9[1];
      var _entry$10 = entry[1],
        o2_func = _entry$10[0],
        o2_v1 = _entry$10[1];
      var _entry$11 = entry[2],
        o1_func = _entry$11[0],
        o1_v1 = _entry$11[1];
      var _entry$12 = entry[3],
        Rn_func = _entry$12[0],
        Rn_v1 = _entry$12[1];
      var fields = [this[PW_func].call(this, PW_v1, PW), this[o2_func].call(this, o2_v1, o2), this[o1_func].call(this, o1_v1, o1), this[Rn_func].call(this, Rn_v1, Rn)];
      if (fields.every(function (v) {
        return v;
      })) {
        var _entry$fields$length3 = entry[fields.length],
          caller = _entry$fields$length3[0],
          callee = _entry$fields$length3[1];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  };
  _proto._T3 = function _T3() {
    var P = this.INSTRUCTION >>> 24 & (1 << 1 >>> 0) - 1;
    var o2 = this.INSTRUCTION >>> 22 & (1 << 1 >>> 0) - 1;
    var W = this.INSTRUCTION >>> 21 & (1 << 1 >>> 0) - 1;
    var o1 = this.INSTRUCTION >>> 20 & (1 << 1 >>> 0) - 1;
    for (var i = 0, len = this.T3.length; i < len; i++) {
      var entry = this.T3[i];
      var _entry$13 = entry[0],
        P_func = _entry$13[0],
        P_v1 = _entry$13[1];
      var _entry$14 = entry[1],
        o2_func = _entry$14[0],
        o2_v1 = _entry$14[1];
      var _entry$15 = entry[3],
        W_func = _entry$15[0],
        W_v1 = _entry$15[1];
      var _entry$16 = entry[2],
        o1_func = _entry$16[0],
        o1_v1 = _entry$16[1];
      var fields = [this[P_func].call(this, P_v1, P), this[o2_func].call(this, o2_v1, o2), this[W_func].call(this, W_v1, W), this[o1_func].call(this, o1_v1, o1)];
      if (fields.every(function (v) {
        return v;
      })) {
        var _entry$fields$length4 = entry[fields.length],
          caller = _entry$fields$length4[0],
          callee = _entry$fields$length4[1];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  };
  _proto._T5 = function _T5() {
    var cond = this.INSTRUCTION >>> 28 & (1 << 4 >>> 0) - 1;
    var op0 = this.INSTRUCTION >>> 25 & (1 << 1 >>> 0) - 1;
    for (var i = 0, len = this.T5.length; i < len; i++) {
      var entry = this.T5[i];
      var _entry$17 = entry[0],
        cond_func = _entry$17[0],
        cond_v1 = _entry$17[1];
      var _entry$18 = entry[1],
        op0_func = _entry$18[0],
        op0_v1 = _entry$18[1];
      var fields = [this[cond_func].call(this, cond_v1, cond), this[op0_func].call(this, op0_v1, op0)];
      if (fields.every(function (v) {
        return v;
      })) {
        var _entry$fields$length5 = entry[fields.length],
          caller = _entry$fields$length5[0],
          callee = _entry$fields$length5[1];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  }

  // TABLE - 1x
  ;
  _proto._T12 = function _T12() {
    var opc = this.INSTRUCTION >>> 21 & (1 << 3 >>> 0) - 1;
    var S = this.INSTRUCTION >>> 20 & (1 << 1 >>> 0) - 1;
    for (var i = 0, len = this.T12.length; i < len; i++) {
      var entry = this.T12[i];
      var _entry$19 = entry[0],
        opc_func = _entry$19[0],
        opc_v1 = _entry$19[1];
      var _entry$20 = entry[1],
        S_func = _entry$20[0],
        S_v1 = _entry$20[1];
      var fields = [this[opc_func].call(this, opc_v1, opc), this[S_func].call(this, S_v1, S)];
      if (fields.every(function (v) {
        return v;
      })) {
        var _entry$fields$length6 = entry[fields.length],
          caller = _entry$fields$length6[0],
          callee = _entry$fields$length6[1];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  };
  _proto._T14 = function _T14() {
    var op0 = this.INSTRUCTION >>> 21 & (1 << 2 >>> 0) - 1;
    var op1 = this.INSTRUCTION >>> 4 & (1 << 3 >>> 0) - 1;
    for (var i = 0, len = this.T14.length; i < len; i++) {
      var entry = this.T14[i];
      var _entry$21 = entry[0],
        op0_func = _entry$21[0],
        op0_v1 = _entry$21[1];
      var _entry$22 = entry[1],
        op1_func = _entry$22[0],
        op1_v1 = _entry$22[1];
      var fields = [this[op0_func].call(this, op0_v1, op0), this[op1_func].call(this, op1_v1, op1)];
      if (fields.every(function (v) {
        return v;
      })) {
        var _entry$fields$length7 = entry[fields.length],
          caller = _entry$fields$length7[0],
          callee = _entry$fields$length7[1];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  };
  _proto._T16 = function _T16() {
    return "T16";
  };
  _proto._T17 = function _T17() {
    return "T17";
  };
  _proto._T18 = function _T18() {
    var op0 = this.INSTRUCTION >>> 23 & (1 << 2 >>> 0) - 1;
    var op1 = this.INSTRUCTION >>> 20 & (1 << 2 >>> 0) - 1;
    for (var i = 0, len = this.T18.length; i < len; i++) {
      var entry = this.T18[i];
      var _entry$23 = entry[0],
        op0_func = _entry$23[0],
        op0_v1 = _entry$23[1];
      var _entry$24 = entry[1],
        op1_func = _entry$24[0],
        op1_v1 = _entry$24[1];
      var fields = [this[op0_func].call(this, op0_v1, op0), this[op1_func].call(this, op1_v1, op1)];
      if (fields.every(function (v) {
        return v;
      })) {
        var _entry$fields$length8 = entry[fields.length],
          caller = _entry$fields$length8[0],
          callee = _entry$fields$length8[1];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  }

  // TABLE 18x
  ;
  _proto._T181 = function _T181() {
    var opc = this.INSTRUCTION >>> 21 & (1 << 3 >>> 0) - 1;
    var S = this.INSTRUCTION >>> 20 & (1 << 1 >>> 0) - 1;
    var Rn = this.INSTRUCTION >>> 16 & (1 << 4 >>> 0) - 1;
    for (var i = 0, len = this.T181.length; i < len; i++) {
      var entry = this.T181[i];
      var _entry$25 = entry[0],
        opc_func = _entry$25[0],
        opc_v1 = _entry$25[1];
      var _entry$26 = entry[1],
        S_func = _entry$26[0],
        S_v1 = _entry$26[1];
      var _entry$27 = entry[2],
        Rn_func = _entry$27[0],
        Rn_v1 = _entry$27[1];
      var fields = [this[opc_func].call(this, opc_v1, opc), this[S_func].call(this, S_v1, S), this[Rn_func].call(this, Rn_v1, Rn)];
      if (fields.every(function (v) {
        return v;
      })) {
        var _entry$fields$length9 = entry[fields.length],
          caller = _entry$fields$length9[0],
          callee = _entry$fields$length9[1];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  };
  _proto._T182 = function _T182() {
    var H = this.INSTRUCTION >>> 22 & (1 << 1 >>> 0) - 1;
    for (var i = 0, len = this.T182.length; i < len; i++) {
      var entry = this.T182[i];
      var _entry$28 = entry[0],
        H_func = _entry$28[0],
        H_v1 = _entry$28[1];
      var fields = [this[H_func].call(this, H_v1, H)];
      if (fields.every(function (v) {
        return v;
      })) {
        var _entry$fields$length10 = entry[fields.length],
          caller = _entry$fields$length10[0],
          callee = _entry$fields$length10[1];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  };
  _proto._T184 = function _T184() {
    var opc = this.INSTRUCTION >>> 21 & (1 << 2 >>> 0) - 1;
    for (var i = 0, len = this.T184.length; i < len; i++) {
      var entry = this.T184[i];
      var _entry$29 = entry[0],
        opc_func = _entry$29[0],
        opc_v1 = _entry$29[1];
      var fields = [this[opc_func].call(this, opc_v1, opc)];
      if (fields.every(function (v) {
        return v;
      })) {
        var _entry$fields$length11 = entry[fields.length],
          caller = _entry$fields$length11[0],
          callee = _entry$fields$length11[1];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  };
  _proto._T185 = function _T185() {
    var opc = this.INSTRUCTION >>> 21 & (1 << 2 >>> 0) - 1;
    for (var i = 0, len = this.T185.length; i < len; i++) {
      var entry = this.T185[i];
      var _entry$30 = entry[0],
        opc_func = _entry$30[0],
        opc_v1 = _entry$30[1];
      var fields = [this[opc_func].call(this, opc_v1, opc)];
      if (fields.every(function (v) {
        return v;
      })) {
        var _entry$fields$length12 = entry[fields.length],
          caller = _entry$fields$length12[0],
          callee = _entry$fields$length12[1];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  }

  // TABLE 5x
  ;
  _proto._T53 = function _T53() {
    var cond = this.INSTRUCTION >>> 28 & (1 << 4 >>> 0) - 1;
    var H = this.INSTRUCTION >>> 24 & (1 << 1 >>> 0) - 1;
    for (var i = 0, len = this.T53.length; i < len; i++) {
      var entry = this.T53[i];
      var _entry$31 = entry[0],
        cond_func = _entry$31[0],
        cond_v1 = _entry$31[1];
      var _entry$32 = entry[1],
        H_func = _entry$32[0],
        H_v1 = _entry$32[1];
      var fields = [this[cond_func].call(this, cond_v1, cond), this[H_func].call(this, H_v1, H)];
      if (fields.every(function (v) {
        return v;
      })) {
        var _entry$fields$length13 = entry[fields.length],
          caller = _entry$fields$length13[0],
          callee = _entry$fields$length13[1];
        return this[caller].call(this, callee);
      }
    }
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  };
  return Dec;
}();

var Alu = /*#__PURE__*/function () {
  function Alu() {}
  var _proto = Alu.prototype;
  _proto.handle = function handle(code, inst) {
    console.log("Execute Opcode - " + code.toString(2) + " - " + inst.toString(16) + "\n\n");
  };
  return Alu;
}();

var Ivt = /*#__PURE__*/function () {
  // interrupt vector table
  function Ivt() {}
  var _proto = Ivt.prototype;
  _proto.handle = function handle(code, inst) {
    console.log("%c Handle Interrupt - " + code.toString(2) + " - " + inst.toString(16) + "\n\n", "background: black; color: white");
  };
  return Ivt;
}();

var _Bus;
var ram = new Ram();
var reg = new Reg();
var mmu = new Mmu();
var dec = new Dec();
var alu = new Alu();
var ivt = new Ivt();
var clk = new Clk();
var bus = new Bus((_Bus = {}, _Bus[RAM_DEV_KEY] = ram, _Bus));
var cpu = new Cpu({
  bus: bus,
  reg: reg,
  mmu: mmu,
  dec: dec,
  alu: alu,
  ivt: ivt,
  clk: clk,
  ram: ram
});

exports.DEF = def;
exports.alu = alu;
exports.bus = bus;
exports.clk = clk;
exports.cpu = cpu;
exports.dec = dec;
exports.ivt = ivt;
exports.mmu = mmu;
exports.ram = ram;
exports.reg = reg;
//# sourceMappingURL=index.cjs.map
