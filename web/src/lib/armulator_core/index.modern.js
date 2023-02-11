// Constants used as keys to dispatch events
const ON_START = "start";
const ON_STOP = "stop";
const ON_PAUSE = "pause";
const ON_RESUME = "resume";
const ON_STEP = "step";
const ON_SPEED_CHANGE = "speed-change";
const ON_RAM_WRITE = "ram-write";
const ON_RAM_READ = "ram-read";
const ON_BUFFER_32_WRITE = "buffer-32-write";
const ON_BUFFER_32_READ = "buffer-32-read";
const ON_FETCH_CYCLE_START = "fetch-cycle_start";
const ON_DECODE_CYCLE_START = "decode-cycle_start";
const ON_EXECUTE_CYCLE_START = "execute-cycle_start";
const ON_FETCH_CYCLE_END = "fetch-cycle_end";
const ON_DECODE_CYCLE_END = "decode-cycle_end";
const ON_EXECUTE_CYCLE_END = "execute-cycle_end";
const ON_REG_WRITE = "reg-write";
const ON_REG_READ = "reg-read";
const ON_ALU_EXECUTE = "alu-execute";

// Const values that represent the name of the memory section of a process
const ENV_SECTION = "env-section";
const STACK_SECTION = "stack-section";
const HEAP_SECTION = "heap-section";
const BSS_SECTION = "bss-section";
const INIT_DATA_SECTION = "init-data-section";
const TEXT_SECTION = "text-section";

// Constant values that represent the status of an operation
const OK_CODE = 1; // indicates everything went right
const ERROR_CODE = 0; // indicates an error occurred

// Constants used to identify different clock states
const STOP_CLOCK_KEY = 0; // indicates the system is in stop/idle state
const START_CLOCK_KEY = 1; // indicates the system is in start/active state
const PAUSE_CLOCK_KEY = 2; // indicates the system is in pause/suspended state

// Constants used to identify different clock speeds in ms
const FAST_CLOCK_SPEED = 200; // indicates the clock is running at fast speed
const NORMAL_CLOCK_SPEED = 500; // indicates the clock is running at normal speed
const SLOW_CLOCK_SPEED = 1000; // indicates the clock is running at slow speed

// Constants used to set the control bus to different modes
const C_BUS_READ_8_VAL = 0b00000000000000010000000000000000; // sets the control bus to read 8-bit mode
const C_BUS_READ_16_VAL = 0b00000000000000100000000000000000; // sets the control bus to read 16-bit mode
const C_BUS_READ_32_VAL = 0b00000000000000110000000000000000; // sets the control bus to read 32-bit mode
const C_BUS_WRITE_8_VAL = 0b00000000000000000000000100000000; // sets the control bus to write 8-bit mode
const C_BUS_WRITE_16_VAL = 0b00000000000000000000001000000000; // sets the control bus to write 16-bit mode
const C_BUS_WRITE_32_VAL = 0b00000000000000000000001100000000; // sets the control bus to write 32-bit mode
const C_BUS_INTERRUPT_VAL = 0b00000000000000000000000000000001; // sets the control bus to interrupt mode

// Constant used to identify the RAM device
const RAM_DEV_KEY = 0b00000001000000000000000000000000;

// Constant used to specify the size of the RAM in bytes
const RAM_SIZE_IN_BYTE = 0.5 * 1024 * 1024;

var def = {
  __proto__: null,
  ON_START: ON_START,
  ON_STOP: ON_STOP,
  ON_PAUSE: ON_PAUSE,
  ON_RESUME: ON_RESUME,
  ON_STEP: ON_STEP,
  ON_SPEED_CHANGE: ON_SPEED_CHANGE,
  ON_RAM_WRITE: ON_RAM_WRITE,
  ON_RAM_READ: ON_RAM_READ,
  ON_BUFFER_32_WRITE: ON_BUFFER_32_WRITE,
  ON_BUFFER_32_READ: ON_BUFFER_32_READ,
  ON_FETCH_CYCLE_START: ON_FETCH_CYCLE_START,
  ON_DECODE_CYCLE_START: ON_DECODE_CYCLE_START,
  ON_EXECUTE_CYCLE_START: ON_EXECUTE_CYCLE_START,
  ON_FETCH_CYCLE_END: ON_FETCH_CYCLE_END,
  ON_DECODE_CYCLE_END: ON_DECODE_CYCLE_END,
  ON_EXECUTE_CYCLE_END: ON_EXECUTE_CYCLE_END,
  ON_REG_WRITE: ON_REG_WRITE,
  ON_REG_READ: ON_REG_READ,
  ON_ALU_EXECUTE: ON_ALU_EXECUTE,
  ENV_SECTION: ENV_SECTION,
  STACK_SECTION: STACK_SECTION,
  HEAP_SECTION: HEAP_SECTION,
  BSS_SECTION: BSS_SECTION,
  INIT_DATA_SECTION: INIT_DATA_SECTION,
  TEXT_SECTION: TEXT_SECTION,
  OK_CODE: OK_CODE,
  ERROR_CODE: ERROR_CODE,
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

/**
 * Represents a system clock that can be started, stopped, paused, and resumed, and can have its speed changed.
 * It also has observers that can be registered to be notified of different clock cycles.
 * @extends EventTarget
 */
class Clk extends EventTarget {
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
    this.CYCLE_START_EVENTS = [ON_FETCH_CYCLE_START, ON_DECODE_CYCLE_START, ON_EXECUTE_CYCLE_START];

    /**
     * @property {Array} CYCLE_END_EVENTS - A list of constants representing the different end of cycles in the processor.
     * @constant
     * @default
     */
    this.CYCLE_END_EVENTS = [ON_FETCH_CYCLE_END, ON_DECODE_CYCLE_END, ON_EXECUTE_CYCLE_END];

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
    this.dispatchEvent(new CustomEvent(ON_SPEED_CHANGE, {
      detail: this.SPEED
    }));
  }

  /**
   * Triggers all registered observers for the current cycle and updates the counter and cycle state.
   * @private
   */
  _trigger_observers() {
    // TODO: suspend on visibility change ie user leave current browser tab
    this.dispatchEvent(new Event(this.CYCLE_START_EVENTS[this.CYCLE]));
    this.dispatchEvent(new Event(this.CYCLE_END_EVENTS[this.CYCLE]));
    this.CYCLE = this.CYCLE < this.CYCLE_START_EVENTS.length - 1 ? this.CYCLE + 1 : 0;
  }
}

/**
 * A class representing a memory buffer that can be read and written to.
 * @extends EventTarget
 */
class Ram extends EventTarget {
  /**
   * Creates a new Ram object.
   * @constructor
   */
  constructor() {
    super();
    this.START_ADDRESS = 0;
    this.BUFFER = new DataView(new ArrayBuffer(RAM_SIZE_IN_BYTE), this.START_ADDRESS);
  }

  /**
   * Reads an 8-bit value from the memory buffer at the specified byte offset.
   * @param {number} [byteOffset=0] - The byte offset at which to read the value.
   * @returns {number} The 8-bit value read from the memory buffer.
   * @fires ON_RAM_READ
   */
  read8(byteOffset = 0) {
    const val = this.BUFFER.getUint8(byteOffset);
    this.dispatchEvent(new Event(ON_RAM_READ));
    return val;
  }

  /**
   * Reads a 16-bit value from the memory buffer at the specified byte offset.
   * @param {number} [byteOffset=0] - The byte offset at which to read the value.
   * @returns {number} The 16-bit value read from the memory buffer.
   * @fires ON_RAM_READ
   */
  read16(byteOffset = 0) {
    const val = this.BUFFER.getUint16(byteOffset);
    this.dispatchEvent(new Event(ON_RAM_READ));
    return val;
  }

  /**
   * Reads a 32-bit value from the memory buffer at the specified byte offset.
   * @param {number} [byteOffset=0] - The byte offset at which to read the value.
   * @returns {number} The 32-bit value read from the memory buffer.
   * @fires ON_RAM_READ
   */
  read32(byteOffset = 0) {
    const val = this.BUFFER.getUint32(byteOffset);
    this.dispatchEvent(new Event(ON_RAM_READ));
    return val;
  }

  /**
   * Writes an 8-bit value to the memory buffer at the specified byte offset.
   * @param {number} val - The 8-bit value to write to the memory buffer.
   * @param {number} [byteOffset=0] - The byte offset at which to write the value.
   * @returns {number} The OK_CODE indicating success.
   * @fires ON_RAM_WRITE
   */
  write8(val, byteOffset = 0) {
    this.BUFFER.setUint8(byteOffset, val);
    this.dispatchEvent(new Event(ON_RAM_WRITE));
    return OK_CODE;
  }

  /**
   * Writes a 16-bit value to the memory buffer at the specified byte offset.
   * @param {number} val - The 16-bit value to write to the memory buffer.
   * @param {number} [byteOffset=0] - The byte offset at which to write the value.
   * @returns {number} The OK_CODE indicating success.
   * @fires ON_RAM_WRITE
   */
  write16(val, byteOffset = 0) {
    this.BUFFER.setUint16(byteOffset, val);
    this.dispatchEvent(new Event(ON_RAM_WRITE));
    return OK_CODE;
  }

  /**
   * Writes a 32-bit value to the memory buffer at the specified byte offset.
   * @param {number} val - The 32-bit value to write to the memory buffer.
   * @param {number} [byteOffset=0] - The byte offset at which to write the value.
   * @returns {number} The OK_CODE indicating success.
   * @fires ON_RAM_WRITE
   */

  write32(val, byteOffset = 0) {
    this.BUFFER.setUint32(byteOffset, val);
    this.dispatchEvent(new Event(ON_RAM_WRITE));
    return OK_CODE;
  }

  /**
   * Returns the length of the memory buffer in bytes.
   * @returns {number} The length of the memory buffer in bytes.
   */
  getByteLength() {
    return this.BUFFER.byteLength;
  }

  /**
   * Returns an array containing the binary representation of each byte in the memory buffer.
   * @returns {string[]} An array containing the binary representation of each byte in the memory buffer.
   */
  view() {
    return [...this];
  }

  /**
   * An iterator function that allows the memory buffer to be iterated over with a `for-of` loop.
   * @returns {Object} An object with a `next` method that returns an object with a `value` property
   * representing the current byte in the memory buffer as a binary string, and a `done` property
   * indicating whether the end of the memory buffer has been reached.
   */
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < RAM_SIZE_IN_BYTE) {
          const binStr = this.BUFFER.getUint8(index).toString(2);
          const binStr32 = binStr.padStart(8, "0");
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
  }
}

/**
 * A class representing a 32-bit buffer that can be read from and written to.
 * @extends EventTarget
 */
class Buffer32Bit extends EventTarget {
  /**
   * Creates a new Buffer32Bit object.
   * @param {String} name - A name to identify the buffer by.
   * @constructor
   */
  constructor(name) {
    super();

    /**
     * A name to identify the buffer.
     * @type {String}
     */
    this.NAME = name;

    /**
     * A code indicating whether the buffer is empty.
     * @type {number}
     */
    this.IS_EMPTY = OK_CODE;

    /**
     * A DataView object representing the buffer.
     * @type {DataView}
     */
    this.BUFFER = new DataView(new ArrayBuffer(4));
  }

  /**
   * Reads a 32-bit value from the buffer at the specified byte offset.
   * @param {number} [byteOffset=0] - The byte offset at which to read the value.
   * @returns {number} The 32-bit value read from the buffer.
   * @fires ON_BUFFER_32_READ
   */
  read(byteOffset = 0) {
    const val = this.BUFFER.getUint32(byteOffset);
    this.dispatchEvent(new CustomEvent(ON_BUFFER_32_READ, {
      detail: this
    }));
    return val;
  }

  /**
   * Writes a 32-bit value to the buffer at the specified byte offset.
   * @param {number} val - The 32-bit value to write to the buffer.
   * @param {number} [byteOffset=0] - The byte offset at which to write the value.
   * @returns {number} The OK_CODE indicating success.
   * @fires ON_BUFFER_32_WRITE
   */
  write(val, byteOffset = 0) {
    this.BUFFER.setUint32(byteOffset, val);
    this.IS_EMPTY = ERROR_CODE;
    this.dispatchEvent(new CustomEvent(ON_BUFFER_32_WRITE, {
      detail: this
    }));
    return OK_CODE;
  }

  /**
   * Resets the buffer to all zeros.
   * @returns {number} The OK_CODE indicating success.
   * @fires ON_BUFFER_32_WRITE
   */
  flush() {
    this.BUFFER.setUint32(0, 0);
    this.IS_EMPTY = OK_CODE;
    this.dispatchEvent(new CustomEvent(ON_BUFFER_32_WRITE, {
      detail: this
    }));
    return OK_CODE;
  }

  /**
   * Returns a string representation of the binary contents of the buffer.
   * @returns {string} A string representation of the binary contents of the buffer.
   */
  view() {
    return [...this].join("");
  }

  /**
   * An iterator function that allows the buffer to be iterated over with a `for-of` loop.
   * @returns {Object} An object with a `next` method that returns an object with a `value` property
   * representing the current bit in the buffer as a binary string, and a `done` property
   * indicating whether the end of the buffer has been reached.
   */
  [Symbol.iterator]() {
    let index = 0;
    const binStr = this.BUFFER.getUint32(0).toString(2);
    const binStr32 = binStr.padStart(32, "0");
    return {
      next: () => {
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
  }
}

/**
 * Represents a bus system that connects devices and allows them to communicate with each other.
 * It has three buffers for the address, data, and control signals, and can read and write data from and to devices.
 */
class Bus {
  /**
   * Creates a new Bus instance.
   * @param {Object} dev - An object containing the devices connected to the bus.
   * @constructor
   */
  constructor(dev) {
    /**
     * An object containing the devices connected to the bus.
     * @type {Object}
     */
    this.DEVICES = dev;

    /**
     * The ADDRESS-BUS buffer.
     * @type {Buffer32Bit}
     */
    this.A_BUS_BUFFER = new Buffer32Bit("ADDRESS_BUS");

    /**
     * The CONTROL-BUS buffer.
     * @type {Buffer32Bit}
     */
    this.C_BUS_BUFFER = new Buffer32Bit("CONTROL_BUS");

    /**
     * The DATA-BUS buffer.
     * @type {Buffer32Bit}
     */
    this.D_BUS_BUFFER = new Buffer32Bit("DATA_BUS");
    this.onTick = this.onTick.bind(this);
  }

  /**
   * Sets the value of the ADDRESS-BUS buffer.
   * @param {number} val - The value to set.
   */
  setAddress(val) {
    // NOTE: first 8bits of address represents the device key
    this.A_BUS_BUFFER.write(val);
  }

  /**
   * Sets the value of the CONTROL-BUS buffer.
   * @param {number} val - The value to set.
   */
  setControl(val) {
    this.C_BUS_BUFFER.write(val);
  }

  /**
   * Sets the value of the DATA-BUS buffer.
   * @param {number} val - The value to set.
   */
  setData(val) {
    this.D_BUS_BUFFER.write(val);
  }

  /**
   * Returns the value of the data bus.
   * @return {number} The value of the data bus.
   */
  getData() {
    const data = this.D_BUS_BUFFER.read();
    this.D_BUS_BUFFER.flush();
    return data;
  }

  /**
   * Returns the values of the address, data, and control buses.
   * @return {Object} An object containing the values of the address, data, and control buses.
   */
  view() {
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
   */
  onTick() {
    if (this.A_BUS_BUFFER.IS_EMPTY) return;
    const device = this.DEVICES[this.A_BUS_BUFFER.read() & (1 << 8) - 1 << 24 >>> 0];
    const byteOffset = this.A_BUS_BUFFER.read() ^ RAM_DEV_KEY;

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

    // write data from register into memory
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
  }
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/**
 * A class representing the Central Processing Unit (CPU) of a computer.
 *
 * The Cpu class acts as a coordinator of different hardware components and
 * handles the fetch-decode-execute cycle.
 */
class Cpu {
  /**
   * Creates an instance of Cpu.
   *
   * @param {Object} parts - The hardware components required by the CPU.
   * @param {ALU} parts.alu - The Arithmetic Logic Unit of the CPU.
   * @param {DEC} parts.dec - The Instruction Decoder of the CPU.
   * @param {BUS} parts.bus - The Data Bus of the CPU.
   * @param {REG} parts.reg - The Register Bank of the CPU.
   * @param {MMU} parts.mmu - The Memory Management Unit of the CPU.
   * @param {CLK} parts.clk - The Clock of the CPU.
   */
  constructor(parts) {
    this.ALU = parts.alu;
    this.DEC = parts.dec;
    this.BUS = parts.bus;
    this.REG = parts.reg;
    this.MMU = parts.mmu;
    this.CLK = parts.clk;
    this.CURRENT_PID = 0;
    this.CURRENT_INSTRUCTION = null;
    this.ALU_ROUTINE = null;
    this.MMU.conn2bus(this.BUS);
    this.ALU.conn2reg(this.REG);
    this._fetch = this._fetch.bind(this);
    this._decode = this._decode.bind(this);
    this._execute = this._execute.bind(this);
    this.CLK.addEventListener(ON_FETCH_CYCLE_START, this._fetch);
    this.CLK.addEventListener(ON_DECODE_CYCLE_START, this._decode);
    this.CLK.addEventListener(ON_EXECUTE_CYCLE_START, this._execute);
    this.CLK.addEventListener(ON_FETCH_CYCLE_START, this.BUS.onTick);
    this.CLK.addEventListener(ON_DECODE_CYCLE_START, this.BUS.onTick);
    this.CLK.addEventListener(ON_EXECUTE_CYCLE_START, this.BUS.onTick);
  }

  /**
   * Start the fetch-decode-execute cycle.
   *
   * @returns {Cpu} The Cpu instance.
   */
  run() {
    this.CLK.start();
    return this;
  }

  /**
   * Spawn a process by initializing the Program Counter (PC) and Stack Pointer (SP).
   *
   * @param {number} pid - The Process ID of the process to spawn.
   * @returns {Cpu} The Cpu instance.
   */

  spawn(pid) {
    this.REG.pc.write(this.MMU.for(pid).PROC_START_ADDRESS);
    this.REG.sp.write(this.MMU.for(pid).STACK_SEC_START_ADDRESS);
    this.CURRENT_PID = pid;
    return this;
  }

  /**
   * Load an Executable and Linkable Format (ELF) file into memory.
   *
   * @param {Object} elf - The ELF file to be loaded.
   * @param {number} elf.procSize - The size of the process.
   * @param {number} elf.envSize - The size of the environment section of the ELF file.
   * @param {Array} elf.envContent - The content of the environment section of the ELF file.
   * @param {number} elf.textSize - The size of the text section of the ELF file.
   * @param {Array} elf.textContent - The content of the text section of the ELF file.
   * @param {number} elf.initDataSize - The size of the initialized data section of the ELF file.
   * @param {Array} elf.initDataContent - The content of the initialized data section of the ELF file.
   * @param {number} elf.bssSize - The size of the block started by symbol section of the ELF file.
   * @param {Array} elf.bssContent - The content of the block started by symbol section of the ELF file.
   * @returns {Object} The loaded ELF file with additional properties (pid, envUUUID, textUUUID, initDataUUID, bssUUID).
   */
  load(elf) {
    const pid = this.MMU.processAlloc(elf.procSize);
    const extELF = _extends({}, elf, {
      pid
    });

    // order is important
    extELF["envUUIDS"] = this.MMU.malloc(pid, ENV_SECTION, elf.envSize, elf.envContent);
    this.MMU.malloc(pid, STACK_SECTION, undefined, []);
    extELF["textUUIDS"] = this.MMU.malloc(pid, TEXT_SECTION, elf.textSize, elf.textContent);
    extELF["initDataUUIDS"] = this.MMU.malloc(pid, INIT_DATA_SECTION, elf.initDataSize, elf.initDataContent);
    extELF["bssUUIDS"] = this.MMU.malloc(pid, BSS_SECTION, elf.bssSize, elf.bssContent);
    this.MMU.malloc(pid, HEAP_SECTION, undefined, []);
    return extELF;
  }

  /**
   * Fetches the instruction from memory using the bus and saves the instruction address in the PC register.
   * @private
   */
  _fetch() {
    if (this.REG.pc.read() < this.MMU.for(this.CURRENT_PID).TEXT_SEC_END_ADDRESS) {
      const pc = this.REG.pc.read();
      this.BUS.setAddress(this.MMU.translate(pc));
      this.BUS.setControl(C_BUS_READ_32_VAL);
      this.REG.pc.write(pc + 4);
    } else {
      this.CLK.stop();
    }
  }

  /**
   * Decodes the instruction fetched by the bus and saves the decoded instruction and ALU routine.
   * @private
   */
  _decode() {
    const {
      instruction,
      aluRoutine
    } = this.DEC.decode(this.BUS.getData());
    this.CURRENT_INSTRUCTION = instruction;
    this.ALU_ROUTINE = aluRoutine;
  }

  /**
   * Executes the ALU routine associated with the decoded instruction.
   * @private
   */
  _execute() {
    this.ALU.call({
      pid: this.CURRENT_PID,
      routine: this.ALU_ROUTINE,
      instruction: this.CURRENT_INSTRUCTION,
      virtualAddress: this.REG.pc.read() - 4
    });
  }
}

/**
 * A class representing a set of registers in a processor.
 * @extends EventTarget
 */
class Reg extends EventTarget {
  /**
   * Creates a new set of registers.
   * @constructor
   */
  constructor() {
    super();
    this._r1 = new Buffer32Bit("r1");
    this._r2 = new Buffer32Bit("r2");
    this._r3 = new Buffer32Bit("r3");
    this._r4 = new Buffer32Bit("r4");
    this._r5 = new Buffer32Bit("r5");
    this._r6 = new Buffer32Bit("r6");
    this._r7 = new Buffer32Bit("r7");
    this._r8 = new Buffer32Bit("r8");
    this._r9 = new Buffer32Bit("r9");
    this._r10 = new Buffer32Bit("r10");
    this._r11 = new Buffer32Bit("r11");
    this._r12 = new Buffer32Bit("r12");
    this._sp = new Buffer32Bit("sp");
    this._lr = new Buffer32Bit("lr");
    this._pc = new Buffer32Bit("pc");
    this._cpsr = new Buffer32Bit("cpsr");
    this._readEventHandler = this._readEventHandler.bind(this);
    this._writeEventHandler = this._writeEventHandler.bind(this);
    this._r1.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r2.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r3.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r4.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r5.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r6.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r7.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r8.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r9.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r10.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r11.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r12.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._sp.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._lr.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._pc.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._cpsr.addEventListener(ON_BUFFER_32_READ, this._readEventHandler);
    this._r1.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r2.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r3.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r4.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r5.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r6.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r7.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r8.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r9.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r10.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r11.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._r12.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._sp.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._lr.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._pc.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
    this._cpsr.addEventListener(ON_BUFFER_32_WRITE, this._writeEventHandler);
  }

  /**
   * @returns {Buffer32Bit} The r1 general-purpose register. Can be used for any purpose.
   */
  get r1() {
    return this._r1;
  }

  /**
   * @returns {Buffer32Bit} The r2 general-purpose register. Can be used for any purpose.
   */
  get r2() {
    return this._r2;
  }

  /**
   * @returns {Buffer32Bit} The r3 general-purpose register. Can be used for any purpose.
   */
  get r3() {
    return this._r3;
  }

  /**
   * @returns {Buffer32Bit} The r4 general-purpose register. Can be used for any purpose.
   */
  get r4() {
    return this._r4;
  }

  /**
   * @returns {Buffer32Bit} The r5 general-purpose register. Can be used for any purpose.
   */
  get r5() {
    return this._r5;
  }

  /**
   * @returns {Buffer32Bit} The r6 general-purpose register. Can be used for any purpose.
   */
  get r6() {
    return this._r6;
  }

  /**
   * @returns {Buffer32Bit} The r7 general-purpose register. Can be used for any purpose.
   */
  get r7() {
    return this._r7;
  }

  /**
   * @returns {Buffer32Bit} The r8 general-purpose register. Can be used for any purpose.
   */
  get r8() {
    return this._r8;
  }

  /**
   * @returns {Buffer32Bit} The r9 general-purpose register. Can be used for any purpose.
   */
  get r9() {
    return this._r9;
  }

  /**
   * @returns {Buffer32Bit} The r10 general-purpose register. Can be used for any purpose.
   */
  get r10() {
    return this._r10;
  }

  /**
   * @returns {Buffer32Bit} The r11 general-purpose register. Can be used for any purpose.
   */
  get r11() {
    return this._r11;
  }

  /**
   * @returns {Buffer32Bit} The r12 general-purpose register. Can be used for any purpose.
   */
  get r12() {
    return this._r12;
  }

  /**
   * @returns {Buffer32Bit} The r13 stack pointer register. Points to the top of the stack.[alias SP]
   */
  get sp() {
    return this._sp;
  }

  /**
   * @returns {Buffer32Bit} The r14 link register. Stores the return address for function calls.[alias LR]
   */
  get lr() {
    return this._lr;
  }

  /**
   * @returns {Buffer32Bit} The r15 program counter register. Stores the address of the current instruction.[alias PC]
   */
  get pc() {
    return this._pc;
  }

  /**
   * @returns {Buffer32Bit} The current program status register.
   * Stores the current status of the processor, such as the current processor mode and condition flags.
   */
  get cpsr() {
    return this._cpsr;
  }

  /**
   * The event handler for the ON_REG_READ event.
   * @param {CustomEvent} event - The ON_REG_READ event.
   * @private
   */
  _readEventHandler({
    detail
  }) {
    this.dispatchEvent(new CustomEvent(ON_REG_READ, {
      detail
    }));
  }

  /**
   * The event handler for the ON_REG_WRITE event.
   * @param {CustomEvent} event - The ON_REG_WRITE event.
   * @private
   */
  _writeEventHandler({
    detail
  }) {
    this.dispatchEvent(new CustomEvent(ON_REG_WRITE, {
      detail
    }));
  }

  /**
   * Allows an instance of Reg class(this) to be used in a for...of loop returning one of the
   * registers in each iteration.
   * @returns {Object} An object conforming to the iterator protocol with a `next` method.
   * The `next` method returns an object with two properties: `value` and `done`.
   * The `value` property represents the next value in the iteration.
   * The `done` property is a boolean indicating if the iteration has finished.
   */
  [Symbol.iterator]() {
    const registers = [this.r1, this.r2, this.r3, this.r4, this.r5, this.r6, this.r7, this.r8, this.r9, this.r10, this.r11, this.r12, this.sp, this.lr, this.pc, this.cpsr];
    let index = 0;
    return {
      next: () => {
        if (index < registers.length) {
          return {
            value: registers[index++],
            done: false
          };
        } else {
          return {
            done: true
          };
        }
      }
    };
  }
}

// NOTE: start and end byte are inclusive

class Process {
  constructor(pid, startAddr, endAddr) {
    this.PID = pid;
    this.PROC_START_ADDRESS = startAddr;
    this.PROC_END_ADDRESS = endAddr;

    // TODO: implement allocation of stack and heap size and manage their growth
    // stack grows down heap grows up
  }

  set(section, size) {
    switch (section) {
      case ENV_SECTION:
        this.ENV_START_ADDRESS = this.PROC_END_ADDRESS - size;
        this.ENV_END_ADDRESS = this.PROC_END_ADDRESS;
        return this.ENV_START_ADDRESS;
      case STACK_SECTION:
        this.STACK_SEC_START_ADDRESS = this.ENV_START_ADDRESS - 1;
        this.STACK_SEC_END_ADDRESS = this.ENV_START_ADDRESS + 2;
        return this.STACK_SEC_START_ADDRESS;
      case HEAP_SECTION:
        this.HEAP_START_ADDRESS = this.BSS_SEC_END_ADDRESS + 1;
        this.HEAP_END_ADDRESS = this.BSS_SEC_END_ADDRESS + 2;
        return this.HEAP_START_ADDRESS;
      case BSS_SECTION:
        this.BSS_SEC_START_ADDRESS = this.INIT_DATA_SEC_END_ADDRESS + 1;
        this.BSS_SEC_END_ADDRESS = this.BSS_SEC_START_ADDRESS + size;
        return this.BSS_SEC_START_ADDRESS;
      case INIT_DATA_SECTION:
        this.INIT_DATA_SEC_START_ADDRESS = this.TEXT_SEC_END_ADDRESS + 1;
        this.INIT_DATA_SEC_END_ADDRESS = this.INIT_DATA_SEC_START_ADDRESS + size;
        return this.INIT_DATA_SEC_START_ADDRESS;
      case TEXT_SECTION:
        this.TEXT_SEC_START_ADDRESS = this.PROC_START_ADDRESS;
        this.TEXT_SEC_END_ADDRESS = this.TEXT_SEC_START_ADDRESS + size;
        return this.TEXT_SEC_START_ADDRESS;
    }
  }
}

/**
 * Calculates the Fletcher-16 checksum of a string of data.
 *
 * @param {string} data - The data to be checksummed.
 * @returns {number} - The calculated 16-bit checksum value.
 */
function fletcher16(data) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < data.length; i++) {
    sum1 = (sum1 + data.charCodeAt(i)) % 255;
    sum2 = (sum2 + sum1) % 255;
  }
  return sum2 << 8 | sum1;
}

class Mmu {
  // virtual memory management unit
  constructor() {
    this.PROCESSES = new Map();
  }
  conn2bus(bus) {
    this.RAM = bus.DEVICES[RAM_DEV_KEY];
    this.PAGE_TABLE = null;
  }

  // create new process and assign page memory which maps to physical memory frame
  processAlloc(size) {
    // TODO: implement paging lookup tables
    const pid = 1;
    const startAddr = 0;
    const endAddr = size;
    const proc = new Process(pid, startAddr, endAddr);
    this.PROCESSES.set(pid, proc);
    return pid;
  }

  // return the process instance given the pid
  for(pid) {
    return this.PROCESSES.get(pid);
  }

  // given the pid allocate a section and pack content into the allocated section (nb skip packing if content is empty)
  malloc(pid, section, size, content) {
    let contentChecksums = [];
    const proc = this.PROCESSES.get(pid);
    const startAddr = proc.set(section, size || 4);
    for (let i = startAddr, len = startAddr + content.length; i < len; i++) {
      const entry = content[i];
      const virtualAddr = i * 4;
      const physicalAddr = this._lookup(virtualAddr);
      this.RAM.write32(entry, physicalAddr);
      contentChecksums.push(fletcher16(`${pid}-${entry}-${virtualAddr}`));
    }
    return contentChecksums;
  }

  // translate a virtual page address to a physical frame address
  translate(virtualAddress) {
    return RAM_DEV_KEY | this._lookup(virtualAddress);
  }
  _lookup(virtualAddress) {
    return virtualAddress;
  }
}

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

class Dec {
  // Machine code decoder
  constructor() {
    this.INSTRUCTION = null;

    // prettier-ignore
    this.T0 = [[["_ne", 0b1111], ["_eqC", "00x"], ["_any"], ["_lup", "_T1"]],
    // data-processing and miscellaneous instructions
    [["_ne", 0b1111], ["_eq", 0b010], ["_any"], ["_lup", "_T2"]],
    // Load/Store Word, Unsigned Byte (immediate, literal)
    [["_ne", 0b1111], ["_eq", 0b011], ["_eq", 0b0], ["_lup", "_T3"]],
    // Load/Store Word, Unsigned Byte (register)
    [["_ne", 0b1111], ["_eq", 0b011], ["_eq", 0b1], ["_ret", undefined]],
    // Media instructions
    [["_any"], ["_eqC", "10x"], ["_any"], ["_lup", "_T5"]],
    // Branch, branch with link, and block data transfer
    [["_any"], ["_eqC", "11x"], ["_any"], ["_ret", undefined]],
    // System register access, Advanced SIMD, floating-point, and Supervisor call
    [["_eq", 0b1111], ["_eqC", "0xx"], ["_any"], ["_ret", undefined]] // Unconditional instructions
    ];
    // prettier-ignore
    this.T1 = [[["_eq", 0b0], ["_any"], ["_eq", 0b1], ["_ne", 0b00], ["_eq", 0b1], ["_ret", undefined]],
    // Extra load/store 
    [["_eq", 0b0], ["_eqC", "0xxxx"], ["_eq", 0b1], ["_eq", 0b00], ["_eq", 0b1], ["_lup", "_T12"]],
    // Multiply and Accumulate 
    [["_eq", 0b0], ["_eqC", "1xxxx"], ["_eq", 0b1], ["_eq", 0b00], ["_eq", 0b1], ["_ret", undefined]],
    // Synchronization primitives and Load-Acquire/Store-Release 
    [["_eq", 0b0], ["_eqC", "10xx0"], ["_eq", 0b0], ["_any"], ["_any"], ["_lup", "_T14"]],
    // Miscellaneous 
    [["_eq", 0b0], ["_eqC", "10xx0"], ["_eq", 0b1], ["_any"], ["_eq", 0b0], ["_ret", undefined]],
    // Halfword Multiply and Accumulate  
    [["_eq", 0b0], ["_neC", "10xx0"], ["_any"], ["_any"], ["_eq", 0b0], ["_lup", "_T16"]],
    // Data-processing register (immediate shift) 
    [["_eq", 0b0], ["_neC", "10xx0"], ["_eq", 0b0], ["_any"], ["_eq", 0b1], ["_lup", "_T16"]],
    // Data-processing register (register shift) 
    [["_eq", 0b1], ["_any"], ["_any"], ["_any"], ["_any"], ["_lup", "_T18"]] // Data-processing immediate  
    ];
    // prettier-ignore
    this.T12 = [
    // TODO: not all opcodes implemented 
    [["_eq", 0b000], ["_any"], ["_ret", "MUL_MULS"]] // MUL/MULS
    ];
    // prettier-ignore
    this.T14 = [
    // TODO: not all opcodes implemented
    [["_eq", 0b01], ["_eq", 0b001], ["_ret", "BX"]],
    // BX
    [["_eq", 0b11], ["_eq", 0b001], ["_ret", "CLZ"]] // CLZ
    ];
    // prettier-ignore
    this.T18 = [[["_eqC", "0x"], ["_any"], ["_lup", "_T181"]],
    // Integer Data Processing (two register and immediate)
    [["_eq", 0b10], ["_eq", 0b00], ["_lup", "_T182"]],
    // Move Halfword (immediate) 
    [["_eq", 0b10], ["_eq", 0b10], ["_ret", undefined]],
    // Move Special Register and Hints (immediate) 
    [["_eq", 0b10], ["_eqC", "x1"], ["_lup", "_T184"]],
    // Integer Test and Compare (one register and immediate) 
    [["_eq", 0b11], ["_any"], ["_lup", "_T185"]] // Logical Arithmetic (two register and immediate)
    ];
    // prettier-ignore
    this.T181 = [[["_eq", 0b000], ["_any"], ["_any"], ["_ret", "AND_ANDS_IMD"]],
    // AND, ANDS (immediate)
    [["_eq", 0b001], ["_any"], ["_any"], ["_ret", "EOR_EORS_IMD"]],
    // EOR, EORS (immediate)
    [["_eq", 0b010], ["_eq", 0b0], ["_neC", "11x1"], ["_ret", "SUB_IMD"]],
    // SUB, SUBS (immediate) - SUB variant
    [["_eq", 0b010], ["_eq", 0b0], ["_eq", 0b1101], ["_ret", "SUB_IMD_SP"]],
    // SUB, SUBS (SP minus immediate) - SUB variant 
    [["_eq", 0b010], ["_eq", 0b0], ["_eq", 0b1111], ["_ret", "ADR_A2"]],
    // ADR - A2
    [["_eq", 0b010], ["_eq", 0b1], ["_ne", 0b1101], ["_ret", "SUBS_IMD"]],
    // SUB, SUBS (immediate) - SUBS variant
    [["_eq", 0b010], ["_eq", 0b1], ["_eq", 0b1101], ["_ret", "SUBS_IMD_SP"]],
    // SUB, SUBS (SP minus immediate) - SUBS variant 
    [["_eq", 0b011], ["_any"], ["_any"], ["_ret", "RSB_RSBS_IMD"]],
    // RSB, RSBS (immediate)
    [["_eq", 0b100], ["_eq", 0b0], ["_neC", "11x1"], ["_ret", "ADD_IMD"]],
    // ADD, ADDS (immediate) - ADD variant
    [["_eq", 0b100], ["_eq", 0b0], ["_eq", 0b1101], ["_ret", "ADD_IMD_SP"]],
    // ADD, ADDS (SP plus immediate) - ADD variant 
    [["_eq", 0b100], ["_eq", 0b0], ["_eq", 0b1111], ["_ret", "ADR_A1"]],
    // ADR - A1
    [["_eq", 0b100], ["_eq", 0b1], ["_ne", 0b1101], ["_ret", "ADDS_IMD"]],
    // ADD, ADDS (immediate) - ADDS variant
    [["_eq", 0b100], ["_eq", 0b1], ["_eq", 0b1101], ["_ret", "ADDS_IMD_SP"]],
    // ADD, ADDS (SP plus immediate) - ADDS variant
    [["_eq", 0b101], ["_any"], ["_any"], ["_ret", "ADC_ADCS_IMD"]],
    // ADC, ADCS (immediate)
    [["_eq", 0b110], ["_any"], ["_any"], ["_ret", "SBC_SBCS_IMD"]],
    // SBC, SBCS (immediate)
    [["_eq", 0b111], ["_any"], ["_any"], ["_ret", "RSC_RSCS_IMD"]] // RSC, RSCS (immediate)
    ];
    // prettier-ignore
    this.T182 = [[["_eq", 0b0], ["_ret", "MOV_MOVS_IMD"]],
    // MOV, MOVS (immediate)
    [["_eq", 0b1], ["_ret", "MOVT"]] // MOVT
    ];
    // prettier-ignore
    this.T184 = [[["_eq", 0b00], ["_ret", "TST_IMD"]],
    // TST (immediate)
    [["_eq", 0b01], ["_ret", "TEQ_IMD"]],
    // TEQ (immediate)
    [["_eq", 0b10], ["_ret", "CMP_IMD"]],
    // CMP (immediate)
    [["_eq", 0b11], ["_ret", "CMN_IMD"]] // CMN (immediate)
    ];
    // prettier-ignore
    this.T185 = [[["_eq", 0b00], ["_ret", "ORR_ORRS_IMD"]],
    // ORR, ORRS (immediate)
    [["_eq", 0b01], ["_ret", "MOV_MOVS_IMD"]],
    // MOV, MOVS (immediate)
    [["_eq", 0b10], ["_ret", "BIC_BICS_IMD"]],
    // BIC, BICS (immediate)
    [["_eq", 0b11], ["_ret", "MVN_MVNS_IMD"]] // MVN, MVNS (immediate)
    ];
    // prettier-ignore
    this.T2 = [
    // TODO: not all opcodes implemented 
    [["_ne", 0b01], ["_eq", 0b0], ["_eq", 0b1], ["_eq", 0b1111], ["_ret", "LDR_LIT"]],
    // LDR(literal)
    [["_eq", 0b00], ["_eq", 0b0], ["_eq", 0b1], ["_ne", 0b1111], ["_ret", "LDR_IMD_POST"]],
    // LDR(immediate) - Post index variant
    [["_eq", 0b10], ["_eq", 0b0], ["_eq", 0b1], ["_ne", 0b1111], ["_ret", "LDR_IMD_OFST"]],
    // LDR(immediate) - Offset variant
    [["_ne", 0b01], ["_eq", 0b1], ["_eq", 0b1], ["_eq", 0b1111], ["_ret", "LDRB_LIT"]],
    // LDRB(literal)
    [["_eq", 0b00], ["_eq", 0b1], ["_eq", 0b1], ["_ne", 0b1111], ["_ret", "LDRB_IMD_POST"]],
    // LDRB(immediate) - Post index variant
    [["_eq", 0b10], ["_eq", 0b1], ["_eq", 0b1], ["_ne", 0b1111], ["_ret", "LDRB_IMD_OFST"]],
    // LDRB(immediate) - Offset variant
    [["_eq", 0b11], ["_eq", 0b0], ["_eq", 0b0], ["_any"], ["_ret", "STR_IMD_PRE"]],
    // STR(immediate) - Pre index variant
    [["_eq", 0b00], ["_eq", 0b0], ["_eq", 0b0], ["_any"], ["_ret", "STR_IMD_POST"]],
    // STR(immediate) - Post index variant
    [["_eq", 0b10], ["_eq", 0b0], ["_eq", 0b0], ["_any"], ["_ret", "STR_IMD_OFST"]],
    // STR(immediate) - Offset variant
    [["_eq", 0b00], ["_eq", 0b1], ["_eq", 0b0], ["_any"], ["_ret", "STRB_IMD_POST"]],
    // STRB(immediate) - Post index variant
    [["_eq", 0b10], ["_eq", 0b1], ["_eq", 0b0], ["_any"], ["_ret", "STRB_IMD_OFST"]] // STRB(immediate) - Offset variant
    ];
    // prettier-ignore
    this.T3 = [
    // TODO: not all opcodes implemented 
    [["_eq", 0b1], ["_eq", 0b0], ["_any"], ["_eq", 0b1], ["_ret", "LDR_REG_PRE"]],
    // LDR (register) - Pre-indexed variant
    [["_eq", 0b0], ["_eq", 0b0], ["_eq", 0b0], ["_eq", 0b1], ["_ret", "LDR_REG_POST"]],
    // LDR (register) - Post indexed variant
    [["_eq", 0b1], ["_eq", 0b1], ["_any"], ["_eq", 0b1], ["_ret", "LDRB_REG_PRE"]],
    // LDRB (register) - Pre indexed variant
    [["_eq", 0b0], ["_eq", 0b1], ["_eq", 0b0], ["_eq", 0b1], ["_ret", "LDRB_REG_POST"]],
    // LDRB (register) - Post indexed variant
    [["_eq", 0b1], ["_eq", 0b0], ["_any"], ["_eq", 0b0], ["_ret", "STR_REG_PRE"]],
    // STR (register) - Pre-indexed variant
    [["_eq", 0b0], ["_eq", 0b0], ["_eq", 0b0], ["_eq", 0b0], ["_ret", "STR_REG_POST"]],
    // STR (register) - Post indexed variant
    [["_eq", 0b1], ["_eq", 0b1], ["_any"], ["_eq", 0b0], ["_ret", "STRB_REG_PRE"]],
    // STRB (register) - Pre indexed variant
    [["_eq", 0b0], ["_eq", 0b1], ["_eq", 0b0], ["_eq", 0b0], ["_ret", "STRB_REG_POST"]] // STRB (register) - Post indexed variant
    ];
    // prettier-ignore
    this.T5 = [[["_eq", 0b1111], ["_eq", 0b0], ["_ret", undefined]],
    // Exception Save/Restore
    [["_ne", 0b1111], ["_eq", 0b0], ["_ret", undefined]],
    // Load/Store Multiple
    [["any"], ["_eq", 0b1], ["_lup", "T53"]] // Branch (immediate)
    ];
    // prettier-ignore
    this.T53 = [[["_ne", 0b1111], ["_eq", 0b0], ["_ret", "B"]],
    // B
    [["_ne", 0b1111], ["_eq", 0b1], ["_ret", "BL"]],
    // BL/BLX (immediate)
    [["_eq", 0b1111], ["_any"], ["_ret", "BLX"]] // BL/BLX (immediate)
    ];
  }

  decode(instruction) {
    this.INSTRUCTION = instruction;
    return {
      instruction,
      aluRoutine: this._T0()
    };
  }
  _any() {
    return true;
  }
  _lup(fName) {
    return this[fName].call(this);
  }
  _ret(code) {
    return code;
  }
  _ne(v1, v2) {
    return !!(v1 ^ v2);
  }
  _eq(v1, v2) {
    return !(v1 ^ v2);
  }
  _neC(v1, v2) {
    let v2str = v2.toString(2);
    const v1len = v1.length;
    while (v2str.length < v1len) {
      v2str = "0" + v2str;
    }
    for (let i = 0; i < v1len; i++) {
      const curV1 = v1[i];
      const curV2 = v2str[i];
      if (curV1 === "x") continue;
      if (curV1 !== curV2) return true;
    }
    return false;
  }
  _eqC(v1, v2) {
    let v2str = v2.toString(2);
    const v1len = v1.length;
    while (v2str.length < v1len) {
      v2str = "0" + v2str;
    }
    for (let i = 0; i < v1len; i++) {
      const curV1 = v1[i];
      const curV2 = v2str[i];
      if (curV1 === "x") continue;
      if (curV1 !== curV2) return false;
    }
    return true;
  }

  // TABLE 0
  _T0() {
    const cond = this.INSTRUCTION >>> 28 & (1 << 4 >>> 0) - 1;
    const op0 = this.INSTRUCTION >>> 25 & (1 << 3 >>> 0) - 1;
    const op1 = this.INSTRUCTION >>> 4 & (1 << 1 >>> 0) - 1;
    for (let i = 0, len = this.T0.length; i < len; i++) {
      const entry = this.T0[i];
      const [cond_func, cond_v1] = entry[0];
      const [op0_func, op0_v1] = entry[1];
      const [op1_func, op1_v1] = entry[2];
      const fields = [this[cond_func].call(this, cond_v1, cond), this[op0_func].call(this, op0_v1, op0), this[op1_func].call(this, op1_v1, op1)];
      if (fields.every(v => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
  }

  // TABLE x
  _T1() {
    const op0 = this.INSTRUCTION >>> 25 & (1 << 1 >>> 0) - 1;
    const op1 = this.INSTRUCTION >>> 20 & (1 << 5 >>> 0) - 1;
    const op2 = this.INSTRUCTION >>> 7 & (1 << 1 >>> 0) - 1;
    const op3 = this.INSTRUCTION >>> 5 & (1 << 2 >>> 0) - 1;
    const op4 = this.INSTRUCTION >>> 4 & (1 << 1 >>> 0) - 1;
    for (let i = 0, len = this.T1.length; i < len; i++) {
      const entry = this.T1[i];
      const [op0_func, op0_v1] = entry[0];
      const [op1_func, op1_v1] = entry[1];
      const [op2_func, op2_v1] = entry[2];
      const [op3_func, op3_v1] = entry[3];
      const [op4_func, op4_v1] = entry[4];
      const fields = [this[op0_func].call(this, op0_v1, op0), this[op1_func].call(this, op1_v1, op1), this[op2_func].call(this, op2_v1, op2), this[op3_func].call(this, op3_v1, op3), this[op4_func].call(this, op4_v1, op4)];
      if (fields.every(v => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
  }
  _T2() {
    const p = this.INSTRUCTION >>> 24 & (1 << 1 >>> 0) - 1;
    const w = this.INSTRUCTION >>> 21 & (1 << 1 >>> 0) - 1;
    const PW = (p << 1) + w;
    const o2 = this.INSTRUCTION >>> 22 & (1 << 1 >>> 0) - 1;
    const o1 = this.INSTRUCTION >>> 20 & (1 << 1 >>> 0) - 1;
    const Rn = this.INSTRUCTION >>> 16 & (1 << 4 >>> 0) - 1;
    for (let i = 0, len = this.T2.length; i < len; i++) {
      const entry = this.T2[i];
      const [PW_func, PW_v1] = entry[0];
      const [o2_func, o2_v1] = entry[1];
      const [o1_func, o1_v1] = entry[2];
      const [Rn_func, Rn_v1] = entry[3];
      const fields = [this[PW_func].call(this, PW_v1, PW), this[o2_func].call(this, o2_v1, o2), this[o1_func].call(this, o1_v1, o1), this[Rn_func].call(this, Rn_v1, Rn)];
      if (fields.every(v => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
  }
  _T3() {
    const P = this.INSTRUCTION >>> 24 & (1 << 1 >>> 0) - 1;
    const o2 = this.INSTRUCTION >>> 22 & (1 << 1 >>> 0) - 1;
    const W = this.INSTRUCTION >>> 21 & (1 << 1 >>> 0) - 1;
    const o1 = this.INSTRUCTION >>> 20 & (1 << 1 >>> 0) - 1;
    for (let i = 0, len = this.T3.length; i < len; i++) {
      const entry = this.T3[i];
      const [P_func, P_v1] = entry[0];
      const [o2_func, o2_v1] = entry[1];
      const [W_func, W_v1] = entry[3];
      const [o1_func, o1_v1] = entry[2];
      const fields = [this[P_func].call(this, P_v1, P), this[o2_func].call(this, o2_v1, o2), this[W_func].call(this, W_v1, W), this[o1_func].call(this, o1_v1, o1)];
      if (fields.every(v => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
  }
  _T5() {
    const cond = this.INSTRUCTION >>> 28 & (1 << 4 >>> 0) - 1;
    const op0 = this.INSTRUCTION >>> 25 & (1 << 1 >>> 0) - 1;
    for (let i = 0, len = this.T5.length; i < len; i++) {
      const entry = this.T5[i];
      const [cond_func, cond_v1] = entry[0];
      const [op0_func, op0_v1] = entry[1];
      const fields = [this[cond_func].call(this, cond_v1, cond), this[op0_func].call(this, op0_v1, op0)];
      if (fields.every(v => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
  }

  // TABLE - 1x
  _T12() {
    const opc = this.INSTRUCTION >>> 21 & (1 << 3 >>> 0) - 1;
    const S = this.INSTRUCTION >>> 20 & (1 << 1 >>> 0) - 1;
    for (let i = 0, len = this.T12.length; i < len; i++) {
      const entry = this.T12[i];
      const [opc_func, opc_v1] = entry[0];
      const [S_func, S_v1] = entry[1];
      const fields = [this[opc_func].call(this, opc_v1, opc), this[S_func].call(this, S_v1, S)];
      if (fields.every(v => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
  }
  _T14() {
    const op0 = this.INSTRUCTION >>> 21 & (1 << 2 >>> 0) - 1;
    const op1 = this.INSTRUCTION >>> 4 & (1 << 3 >>> 0) - 1;
    for (let i = 0, len = this.T14.length; i < len; i++) {
      const entry = this.T14[i];
      const [op0_func, op0_v1] = entry[0];
      const [op1_func, op1_v1] = entry[1];
      const fields = [this[op0_func].call(this, op0_v1, op0), this[op1_func].call(this, op1_v1, op1)];
      if (fields.every(v => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
  }
  _T16() {
    return "T16";
  }
  _T17() {
    return "T17";
  }
  _T18() {
    const op0 = this.INSTRUCTION >>> 23 & (1 << 2 >>> 0) - 1;
    const op1 = this.INSTRUCTION >>> 20 & (1 << 2 >>> 0) - 1;
    for (let i = 0, len = this.T18.length; i < len; i++) {
      const entry = this.T18[i];
      const [op0_func, op0_v1] = entry[0];
      const [op1_func, op1_v1] = entry[1];
      const fields = [this[op0_func].call(this, op0_v1, op0), this[op1_func].call(this, op1_v1, op1)];
      if (fields.every(v => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
  }

  // TABLE 18x
  _T181() {
    const opc = this.INSTRUCTION >>> 21 & (1 << 3 >>> 0) - 1;
    const S = this.INSTRUCTION >>> 20 & (1 << 1 >>> 0) - 1;
    const Rn = this.INSTRUCTION >>> 16 & (1 << 4 >>> 0) - 1;
    for (let i = 0, len = this.T181.length; i < len; i++) {
      const entry = this.T181[i];
      const [opc_func, opc_v1] = entry[0];
      const [S_func, S_v1] = entry[1];
      const [Rn_func, Rn_v1] = entry[2];
      const fields = [this[opc_func].call(this, opc_v1, opc), this[S_func].call(this, S_v1, S), this[Rn_func].call(this, Rn_v1, Rn)];
      if (fields.every(v => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
  }
  _T182() {
    const H = this.INSTRUCTION >>> 22 & (1 << 1 >>> 0) - 1;
    for (let i = 0, len = this.T182.length; i < len; i++) {
      const entry = this.T182[i];
      const [H_func, H_v1] = entry[0];
      const fields = [this[H_func].call(this, H_v1, H)];
      if (fields.every(v => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
  }
  _T184() {
    const opc = this.INSTRUCTION >>> 21 & (1 << 2 >>> 0) - 1;
    for (let i = 0, len = this.T184.length; i < len; i++) {
      const entry = this.T184[i];
      const [opc_func, opc_v1] = entry[0];
      const fields = [this[opc_func].call(this, opc_v1, opc)];
      if (fields.every(v => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
  }
  _T185() {
    const opc = this.INSTRUCTION >>> 21 & (1 << 2 >>> 0) - 1;
    for (let i = 0, len = this.T185.length; i < len; i++) {
      const entry = this.T185[i];
      const [opc_func, opc_v1] = entry[0];
      const fields = [this[opc_func].call(this, opc_v1, opc)];
      if (fields.every(v => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
  }

  // TABLE 5x
  _T53() {
    const cond = this.INSTRUCTION >>> 28 & (1 << 4 >>> 0) - 1;
    const H = this.INSTRUCTION >>> 24 & (1 << 1 >>> 0) - 1;
    for (let i = 0, len = this.T53.length; i < len; i++) {
      const entry = this.T53[i];
      const [cond_func, cond_v1] = entry[0];
      const [H_func, H_v1] = entry[1];
      const fields = [this[cond_func].call(this, cond_v1, cond), this[H_func].call(this, H_v1, H)];
      if (fields.every(v => v)) {
        const [caller, callee] = entry[fields.length];
        return this[caller].call(this, callee);
      }
    }
    return undefined;
  }
}

class Alu extends EventTarget {
  constructor() {
    super();
  }
  conn2reg(reg) {
    this.REG = reg;
  }
  call({
    pid,
    routine,
    instruction,
    virtualAddress
  }) {
    if (routine) {
      console.log(`Execute Opcode - ${routine.toString(2)} - ${instruction.toString(16)}\n\n`);
      const reg = this.REG[["r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "r10", "r11", "r12", "lr", "cpsr"][Math.floor(Math.random() * (Math.floor(13) - Math.ceil(0) + 1)) + Math.ceil(0)]];
      reg.write(instruction);
      this.dispatchEvent(new CustomEvent(ON_ALU_EXECUTE, {
        detail: {
          pid,
          instruction,
          virtualAddress,
          checkSum: fletcher16(`${pid}-${instruction}-${virtualAddress}`)
        }
      }));
    } else {
      console.log(`%c undefined - ${instruction.toString(16)}\n\n`, "background: black; color: white");
    }
  }
}

const ram = new Ram();
const reg = new Reg();
const mmu = new Mmu();
const dec = new Dec();
const alu = new Alu();
const clk = new Clk();
const bus = new Bus({
  [RAM_DEV_KEY]: ram
});
const cpu = new Cpu({
  bus,
  reg,
  mmu,
  dec,
  alu,
  clk,
  ram
});

export { def as DEF, alu, bus, clk, cpu, dec, mmu, ram, reg };
//# sourceMappingURL=index.modern.js.map
