import { C_BUS_READ_32_VAL, RAM_DEV_KEY } from "../var/def.js";
import { r15 } from "../var/reg.js";
import { Decoder } from "./dec.js";

export class Cpu {
  constructor(bus) {
    this.BUS = bus;

    this.CURRENT_INSTRUCTION = null;

    this.fetch = this.fetch.bind(this);
    this.decode = this.decode.bind(this);
    this.execute = this.execute.bind(this);
  }

  fetch() {
    const pc_addr = r15.read();
    this.BUS.setAddress(RAM_DEV_KEY + pc_addr);
    this.BUS.setControl(C_BUS_READ_32_VAL);
    r15.write(pc_addr + 8);
  }

  decode() {
    const inst = this.BUS.getData();
    new Decoder(inst).init();
  }

  execute() {
    console.log("EXECUTE CYCLE");
    console.log("");
  }
}
