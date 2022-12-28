import {
  C_BUS_READ_32_VAL,
  EXECUTION_KEY,
  INTERRUPT_KEY,
  RAM_DEV_KEY,
} from "../var/def.js";

export class Cpu {
  constructor(parts) {
    this.ALU = parts.alu;
    this.DECODER = parts.dec;
    this.IVT = parts.ivt;
    this.BUS = parts.bus;
    this.REGISTERS = parts.registers;

    this.CURRENT_INSTRUCTION = null;
    this.HANDLER_CODE = null;

    this.fetch = this.fetch.bind(this);
    this.decode = this.decode.bind(this);
    this.execute = this.execute.bind(this);
  }

  fetch() {
    const pc_addr = this.REGISTERS.r15.read();
    this.BUS.setAddress(RAM_DEV_KEY + pc_addr);
    this.BUS.setControl(C_BUS_READ_32_VAL);
    this.REGISTERS.r15.write(pc_addr + 8);
  }

  decode() {
    this.CURRENT_INSTRUCTION = this.BUS.getData();
    this.HANDLER_CODE = this.DECODER.decode(this.CURRENT_INSTRUCTION);
  }

  execute() {
    const type = this.HANDLER_CODE & ((((1 << 8) - 1) << 8) >>> 0);

    if (!(type ^ INTERRUPT_KEY)) {
      this.IVT.handle(this.HANDLER_CODE);
    }

    if (!(type ^ EXECUTION_KEY)) {
      this.ALU.handle(this.HANDLER_CODE);
    }
  }
}
