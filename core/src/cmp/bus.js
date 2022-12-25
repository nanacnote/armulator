import {
  C_BUS_INTERRUPT_VAL,
  C_BUS_READ_VAL,
  C_BUS_WRITE_VAL,
  RAM_DEV_KEY,
} from "../var/def.js";
import { Buffer32Bit } from "./buf32.js";

export class Bus {
  constructor(dev) {
    this.DEVICES = dev;

    this.A_BUS_BUFFER = new Buffer32Bit();
    this.D_BUS_BUFFER = new Buffer32Bit();
    this.C_BUS_BUFFER = new Buffer32Bit();

    this.onTick = this.onTick.bind(this);
  }

  address(val) {
    // NOTE: first 8bits of address represents the device key
    this.A_BUS_BUFFER.write(val);
  }

  data(val) {
    this.D_BUS_BUFFER.write(val);
  }

  control(val) {
    this.C_BUS_BUFFER.write(val);
  }

  onTick() {
    if (this.A_BUS_BUFFER.IS_EMPTY) return;
    const tmp = new Buffer32Bit();
    tmp.BUFFER.setInt8(0, this.A_BUS_BUFFER.BUFFER.getUint8());
    const device = this.DEVICES[tmp.read()];
    const byteOffset = this.A_BUS_BUFFER.read() ^ RAM_DEV_KEY;

    if (!(this.C_BUS_BUFFER.read() ^ C_BUS_READ_VAL)) {
      const val = device.read(byteOffset);
      console.log(`Value from RAM addr ${byteOffset.toString(16)}: ${val}`);
      // TODO: load the read value into a register
    }

    if (!(this.C_BUS_BUFFER.read() ^ C_BUS_WRITE_VAL)) {
      device.write(this.D_BUS_BUFFER.read(), byteOffset);
    }

    if (!(this.C_BUS_BUFFER.read() ^ C_BUS_INTERRUPT_VAL)) {
      console.log("TODO: handle interrupt signals here");
    }
    this.A_BUS_BUFFER.flush();
  }
}
