import { C_BUS_READ_32_VAL, RAM_DEV_KEY } from "../var/def.js";

export class Cpu {
  constructor(parts) {
    this.BUS = parts.bus;
    this.DECODER = parts.dec;
    this.REGISTERS = parts.registers;

    this.CURRENT_INSTRUCTION = null;

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
    const inst = this.BUS.getData();
    this.DECODER.init(inst);
  }

  execute() {
    console.log("EXECUTE CYCLE");
    console.log("");
  }
}
