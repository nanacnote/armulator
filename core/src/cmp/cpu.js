import {
  C_BUS_READ_32_VAL,
  DECODE_CYCLE_KEY,
  EXECUTE_CYCLE_KEY,
  EXECUTION_KEY,
  FETCH_CYCLE_KEY,
  INTERRUPT_KEY,
} from "../var/def.js";

export class Cpu {
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

  loadELF(elf) {
    this.PROG_BYTE_SIZE = elf.progSize;
    this.STACK_BYTE_SIZE = elf.stackSize;
    this.PROG_START_ADDRESS = this.MMU.byteAlloc(this.PROG_BYTE_SIZE, 0);
    this.STACK_START_ADDRESS = this.MMU.byteAlloc(
      this.STACK_BYTE_SIZE,
      this.PROG_START_ADDRESS + this.PROG_BYTE_SIZE + 4
    );
    this.REG.pc.write(this.PROG_START_ADDRESS);
    this.REG.sp.write(this.PROG_START_ADDRESS);
    this.MMU.loadProg(elf.progInst);
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
    this.HANDLER_CODE = this.DEC.decode(this.CURRENT_INSTRUCTION);
  }

  _execute() {
    const type = this.HANDLER_CODE & ((((1 << 8) - 1) << 8) >>> 0);

    if (!(type ^ INTERRUPT_KEY)) {
      this.IVT.handle(this.HANDLER_CODE);
    }

    if (!(type ^ EXECUTION_KEY)) {
      this.ALU.handle(this.HANDLER_CODE);
    }
  }
}
