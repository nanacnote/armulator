// Generic value definition
const OK_CODE = 1; // indicates everything went right
const ERROR_CODE = 0; // indicates everything went right

// Execution and Interrupt key
const EXECUTION_KEY = 0b0000000000000000;
const INTERRUPT_KEY = 0b0000000100000000;

// Interrupt handler codes
const UNDEFINED_INSTRUCTION_INTERRUPT = INTERRUPT_KEY + 0b00000001;

// Clock class:: CYCLE value definitions
const FETCH_CYCLE_KEY = 0; // the state of the machine is set to fetch
const DECODE_CYCLE_KEY = 1; // the state of the machine is set to decode
const EXECUTE_CYCLE_KEY = 2; // the state of the machine is set to execute
const CYCLE_SIZE = 3; // the number of states the machine can exist in

// Clock class:: STATE value definitions
const STOP_CLOCK_KEY = 0; // indicates the system is in stop/idle state
const START_CLOCK_KEY = 1; // indicates the system is in start/active state
const PAUSE_CLOCK_KEY = 2; // indicates the system is in pause/suspended state
const NORMAL_CLOCK_SPEED = 50; // indicates the clock is running at normal speed    // TODO: change to 500

// Bus class:: CONTROL BUS value definitions
const C_BUS_READ_8_VAL = 0b00000000000000010000000000000000; // sets the control bus to read mode
const C_BUS_READ_16_VAL = 0b00000000000000100000000000000000; // sets the control bus to read mode
const C_BUS_READ_32_VAL = 0b00000000000000110000000000000000; // sets the control bus to read mode
const C_BUS_WRITE_8_VAL = 0b00000000000000000000000100000000; // sets the control bus to write mode
const C_BUS_WRITE_16_VAL = 0b00000000000000000000001000000000; // sets the control bus to write mode
const C_BUS_WRITE_32_VAL = 0b00000000000000000000001100000000; // sets the control bus to write mode
const C_BUS_INTERRUPT_VAL = 0b00000000000000000000000000000001; // sets the control bus to interrupt mode

// Bus class:: DEVICES key
const RAM_DEV_KEY = 0b00000001000000000000000000000000;

// Ram class::
const RAM_SIZE_IN_BYTE = 2 * 1024 * 1024;

class Clk {
  // system clock
  constructor() {
    this.OBSERVERS = {
      [FETCH_CYCLE_KEY]: [],
      [DECODE_CYCLE_KEY]: [],
      [EXECUTE_CYCLE_KEY]: []
    };
    this.TICKER = null;
    this.COUNTER = 0;
    this.CYCLE = FETCH_CYCLE_KEY;
    this.STATE = STOP_CLOCK_KEY;
    this.SPEED = NORMAL_CLOCK_SPEED;
    this._trigger_observers = this._trigger_observers.bind(this);
  }
  addObserver(cycleKey, obsFuncs) {
    this.OBSERVERS[cycleKey].push(...(Array.isArray(obsFuncs) ? obsFuncs : [obsFuncs]));
  }
  start() {
    this.STATE = START_CLOCK_KEY;
    this.TICKER = setInterval(this._trigger_observers, this.SPEED);
  }
  stop() {
    if (this.TICKER) clearInterval(this.TICKER);
    this.COUNTER = 0;
    this.CYCLE = FETCH_CYCLE_KEY;
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
    const funcs = this.OBSERVERS[this.CYCLE];
    for (let i = 0, len = funcs.length; i < len; i++) {
      funcs[i].call();
    }
    if (this.STATE == START_CLOCK_KEY) {
      this.COUNTER++;
      this.CYCLE = this.COUNTER % CYCLE_SIZE;
    }
  }
}

class Ram {
  constructor() {
    this.START_ADDRESS = 0;
    this.BUFFER = new DataView(new ArrayBuffer(RAM_SIZE_IN_BYTE), this.START_ADDRESS);
  }
  read8(byteOffset = 0) {
    return this.BUFFER.getUint8(byteOffset);
  }
  read16(byteOffset = 0) {
    return this.BUFFER.getUint16(byteOffset);
  }
  read32(byteOffset = 0) {
    return this.BUFFER.getUint32(byteOffset);
  }
  write8(val, byteOffset = 0) {
    this.BUFFER.setUint8(byteOffset, val);
    return OK_CODE;
  }
  write16(val, byteOffset = 0) {
    this.BUFFER.setUint16(byteOffset, val);
    return OK_CODE;
  }
  write32(val, byteOffset = 0) {
    this.BUFFER.setUint32(byteOffset, val);
    return OK_CODE;
  }
  view() {
    return [...this];
  }
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < RAM_SIZE_IN_BYTE) {
          const binStr = this.BUFFER.getUint8(index).toString(2);
          const binStr32 = "00000000".substring(binStr.length) + binStr;
          index++;
          return {
            value: binStr32.split("").map(v => +v),
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

class Buffer32Bit {
  constructor() {
    this.IS_EMPTY = OK_CODE;
    this.BUFFER = new DataView(new ArrayBuffer(4));
  }
  read(byteOffset = 0) {
    return this.BUFFER.getUint32(byteOffset);
  }
  write(val, byteOffset = 0) {
    this.BUFFER.setUint32(byteOffset, val);
    this.IS_EMPTY = ERROR_CODE;
    return OK_CODE;
  }
  flush() {
    this.BUFFER.setUint32(0, 0);
    this.IS_EMPTY = OK_CODE;
    return OK_CODE;
  }
  view() {
    return [...this];
  }
  [Symbol.iterator]() {
    const binStr = this.BUFFER.getUint32(0).toString(2);
    const binStr32 = "00000000000000000000000000000000".substring(binStr.length) + binStr;
    let index = 0;
    return {
      next: () => {
        if (index < binStr32.length) {
          return {
            value: +binStr32[index++],
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

class Bus {
  constructor(dev) {
    this.DEVICES = dev;
    this.A_BUS_BUFFER = new Buffer32Bit();
    this.D_BUS_BUFFER = new Buffer32Bit();
    this.C_BUS_BUFFER = new Buffer32Bit();
    this.onTick = this.onTick.bind(this);
  }
  setAddress(val) {
    // NOTE: first 8bits of address represents the device key
    this.A_BUS_BUFFER.write(val);
  }
  setData(val) {
    this.D_BUS_BUFFER.write(val);
  }
  getData() {
    const data = this.D_BUS_BUFFER.read();
    this.D_BUS_BUFFER.flush();
    return data;
  }
  setControl(val) {
    this.C_BUS_BUFFER.write(val);
  }
  view() {
    return {
      address: this.A_BUS_BUFFER.view(),
      data: this.D_BUS_BUFFER.view(),
      control: this.C_BUS_BUFFER.view()
    };
  }
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
  }
}

class Cpu {
  constructor(parts) {
    this.ALU = parts.alu;
    this.DEC = parts.dec;
    this.IVT = parts.ivt;
    this.BUS = parts.bus;
    this.REG = parts.reg;
    this.MMU = parts.mmu;
    this.CLK = parts.clk;
    this.CURRENT_INSTRUCTION = null;
    this.HANDLER_CODE = null;
    this.PROG_START_ADDRESS = 0;
    this.PROG_BYTE_SIZE = 0;
    this.STACK_BYTE_SIZE = 0;
    this.STACK_START_ADDRESS = 0;
    this._fetch = this._fetch.bind(this);
    this._decode = this._decode.bind(this);
    this._execute = this._execute.bind(this);
    this.MMU.conn2bus(this.BUS);
    this.CLK.addObserver(FETCH_CYCLE_KEY, [this._fetch, this.BUS.onTick]);
    this.CLK.addObserver(DECODE_CYCLE_KEY, [this._decode, this.BUS.onTick]);
    this.CLK.addObserver(EXECUTE_CYCLE_KEY, [this._execute, this.BUS.onTick]);
  }
  loadProg(ctx) {
    this.PROG_BYTE_SIZE = ctx.progSize;
    this.STACK_BYTE_SIZE = ctx.stackSize;
    this.PROG_START_ADDRESS = this.MMU.byteAlloc(this.PROG_BYTE_SIZE, 0);
    this.STACK_START_ADDRESS = this.MMU.byteAlloc(this.STACK_BYTE_SIZE, this.PROG_START_ADDRESS + this.PROG_BYTE_SIZE + 4);
    this.REG.pc.write(this.PROG_START_ADDRESS);
    this.REG.sp.write(this.PROG_START_ADDRESS);
    this.MMU.initProg(ctx.text);
    return this;
  }
  run() {
    this.CLK.start();
    return this;
  }
  _fetch() {
    if (this.REG.pc.read() < this.PROG_START_ADDRESS + this.PROG_BYTE_SIZE) {
      const pcRegAddr = this.REG.pc.read();
      const physicalMemAddr = this.MMU.map2ram(pcRegAddr);
      this.BUS.setAddress(physicalMemAddr);
      this.BUS.setControl(C_BUS_READ_32_VAL);
      this.REG.pc.write(pcRegAddr + 4);
    } else {
      this.CLK.stop();
    }
  }
  _decode() {
    this.CURRENT_INSTRUCTION = this.BUS.getData();
    if (this.CURRENT_INSTRUCTION) this.HANDLER_CODE = this.DEC.decode(this.CURRENT_INSTRUCTION);
  }
  _execute() {
    if (this.CURRENT_INSTRUCTION) {
      const type = this.HANDLER_CODE & (1 << 8) - 1 << 8 >>> 0;
      if (!(type ^ INTERRUPT_KEY)) {
        this.IVT.handle(this.HANDLER_CODE, this.CURRENT_INSTRUCTION);
      }
      if (!(type ^ EXECUTION_KEY)) {
        this.ALU.handle(this.HANDLER_CODE, this.CURRENT_INSTRUCTION);
      }
    }
  }
}

class Reg {
  constructor() {
    this._r0 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r1 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r2 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r3 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r4 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r5 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r6 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r7 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r8 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r9 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r10 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r11 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.
    this._r12 = new Buffer32Bit(); // General-purpose. Can be used for any purpose.

    this._r13 = new Buffer32Bit(); // // Stack pointer register. Points to the top of the stack. [SP]
    this._r14 = new Buffer32Bit(); // Link register. Stores the return address for function calls. [LR]
    this._r15 = new Buffer32Bit(); // // Program counter register. Stores the address of the current instruction. [PC]

    this._cpsr = new Buffer32Bit(); //Current program status register. Stores the current status of the processor, such as the current processor mode and condition flags.}
  }

  get r0() {
    return this._r0;
  }
  get r1() {
    return this._r1;
  }
  get r2() {
    return this._r2;
  }
  get r3() {
    return this._r3;
  }
  get r4() {
    return this._r4;
  }
  get r5() {
    return this._r5;
  }
  get r6() {
    return this._r6;
  }
  get r7() {
    return this._r7;
  }
  get r8() {
    return this._r8;
  }
  get r9() {
    return this._r9;
  }
  get r10() {
    return this._r10;
  }
  get r11() {
    return this._r11;
  }
  get r12() {
    return this._r12;
  }
  get r13() {
    return this._r13;
  }
  get r14() {
    return this._r14;
  }
  get r15() {
    return this._r15;
  }
  get sp() {
    return this._r13;
  }
  get lr() {
    return this._r14;
  }
  get pc() {
    return this._r15;
  }
  get cpsr() {
    return this._cpsr;
  }
}

class Mmu {
  // virtual memory management unit
  constructor() {
    this.BUS = null;
  }
  conn2bus(bus) {
    this.BUS = bus;
  }
  map2ram(virtAddr) {
    //TODO: implement virtual memory mapping tables
    return RAM_DEV_KEY | virtAddr;
  }
  byteAlloc(size, offset) {
    //TODO: implement virtual memory allocation
    return offset;
  }
  initProg(instructions) {
    const ram = this.BUS.DEVICES[RAM_DEV_KEY];
    for (let i = 0 + ram.START_ADDRESS, len = instructions.length + ram.START_ADDRESS; i < len; i++) {
      ram.write32(instructions[i], 4 * i);
    }
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
    [["_ne", 0b1111], ["_eq", 0b011], ["_eq", 0b1], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],
    // Media instructions
    [["_any"], ["_eqC", "10x"], ["_any"], ["_lup", "_T5"]],
    // Branch, branch with link, and block data transfer
    [["_any"], ["_eqC", "11x"], ["_any"], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],
    // System register access, Advanced SIMD, floating-point, and Supervisor call
    [["_eq", 0b1111], ["_eqC", "0xx"], ["_any"], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]] // Unconditional instructions
    ];
    // prettier-ignore
    this.T1 = [[["_eq", 0b0], ["_any"], ["_eq", 0b1], ["_ne", 0b00], ["_eq", 0b1], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],
    // Extra load/store 
    [["_eq", 0b0], ["_eqC", "0xxxx"], ["_eq", 0b1], ["_eq", 0b00], ["_eq", 0b1], ["_lup", "_T12"]],
    // Multiply and Accumulate 
    [["_eq", 0b0], ["_eqC", "1xxxx"], ["_eq", 0b1], ["_eq", 0b00], ["_eq", 0b1], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],
    // Synchronization primitives and Load-Acquire/Store-Release 
    [["_eq", 0b0], ["_eqC", "10xx0"], ["_eq", 0b0], ["_any"], ["_any"], ["_lup", "_T14"]],
    // Miscellaneous 
    [["_eq", 0b0], ["_eqC", "10xx0"], ["_eq", 0b1], ["_any"], ["_eq", 0b0], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],
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
    [["_eq", 0b10], ["_eq", 0b10], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],
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
    this.T5 = [[["_eq", 0b1111], ["_eq", 0b0], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],
    // Exception Save/Restore
    [["_ne", 0b1111], ["_eq", 0b0], ["_ret", UNDEFINED_INSTRUCTION_INTERRUPT]],
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

  decode(inst) {
    this.INSTRUCTION = inst;
    return this._T0();
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
      if (curV1 == "x") continue;
      if (curV1 != curV2) return true;
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
      if (curV1 == "x") continue;
      if (curV1 != curV2) return false;
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
    return UNDEFINED_INSTRUCTION_INTERRUPT;
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
    return UNDEFINED_INSTRUCTION_INTERRUPT;
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
    return UNDEFINED_INSTRUCTION_INTERRUPT;
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
    return UNDEFINED_INSTRUCTION_INTERRUPT;
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
    return UNDEFINED_INSTRUCTION_INTERRUPT;
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
    return UNDEFINED_INSTRUCTION_INTERRUPT;
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
    return UNDEFINED_INSTRUCTION_INTERRUPT;
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
    return UNDEFINED_INSTRUCTION_INTERRUPT;
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
    return UNDEFINED_INSTRUCTION_INTERRUPT;
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
    return UNDEFINED_INSTRUCTION_INTERRUPT;
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
    return UNDEFINED_INSTRUCTION_INTERRUPT;
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
    return UNDEFINED_INSTRUCTION_INTERRUPT;
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
    return UNDEFINED_INSTRUCTION_INTERRUPT;
  }
}

class Alu {
  constructor() {}
  handle(code, inst) {
    console.log(`Execute Opcode - ${code.toString(2)} - ${inst.toString(16)}\n\n`);
  }
}

class Ivt {
  // interrupt vector table
  constructor() {}
  handle(code, inst) {
    console.log(`%c Handle Interrupt - ${code.toString(2)} - ${inst.toString(16)}\n\n`, "background: black; color: white");
  }
}

const bus = new Bus({
  [RAM_DEV_KEY]: new Ram()
});
const cpu = new Cpu({
  bus,
  reg: new Reg(),
  mmu: new Mmu(),
  dec: new Dec(),
  alu: new Alu(),
  ivt: new Ivt(),
  clk: new Clk()
});

export { cpu };
//# sourceMappingURL=index.modern.js.map
