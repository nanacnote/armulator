import {
  C_BUS_READ_32_VAL,
  ON_FETCH_CYCLE,
  ON_DECODE_CYCLE,
  ON_EXECUTE_CYCLE,
  EXECUTION_KEY,
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

  loadParsedElf(ctx) {
    this.PROC_BYTE_SIZE = ctx.procSize;
    this.STACK_BYTE_SIZE = ctx.stackSize;
    this.PROC_START_ADDRESS = this.MMU.byteAlloc(this.PROC_BYTE_SIZE, 0);
    this.STACK_START_ADDRESS = this.MMU.byteAlloc(
      this.STACK_BYTE_SIZE,
      this.PROC_START_ADDRESS + this.PROC_BYTE_SIZE + 4
    );
    this.REG.pc.write(this.PROC_START_ADDRESS);
    this.REG.sp.write(this.PROC_START_ADDRESS);
    this.MMU.loadProc(ctx.text);
    return this;
  }

  run() {
    this.CLK.start();
    return this;
  }

  _fetch() {
    if (this.REG.pc.read() < this.PROC_START_ADDRESS + this.PROC_BYTE_SIZE) {
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
    if (this.CURRENT_INSTRUCTION)
      this.HANDLER_CODE = this.DEC.decode(this.CURRENT_INSTRUCTION);
  }

  _execute() {
    if (this.CURRENT_INSTRUCTION) {
      const type = this.HANDLER_CODE & ((((1 << 8) - 1) << 8) >>> 0);

      if (!(type ^ INTERRUPT_KEY)) {
        this.IVT.handle(this.HANDLER_CODE, this.CURRENT_INSTRUCTION);
      }

      if (!(type ^ EXECUTION_KEY)) {
        this.ALU.handle(this.HANDLER_CODE, this.CURRENT_INSTRUCTION);
      }
    }
  }
}
