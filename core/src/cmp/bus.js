import {
  C_BUS_INTERRUPT_VAL,
  C_BUS_READ_16_VAL,
  C_BUS_READ_32_VAL,
  C_BUS_READ_8_VAL,
  C_BUS_WRITE_16_VAL,
  C_BUS_WRITE_32_VAL,
  C_BUS_WRITE_8_VAL,
  RAM_DEV_KEY,
} from "../var/def.js";
import { Buffer32Bit } from "./buf.js";

export class Bus {
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
    return this.D_BUS_BUFFER.read();
  }

  setControl(val) {
    this.C_BUS_BUFFER.write(val);
  }

  view() {
    return {
      address: this.A_BUS_BUFFER.view(),
      data: this.D_BUS_BUFFER.view(),
      control: this.C_BUS_BUFFER.view(),
    };
  }

  onTick() {
    if (this.A_BUS_BUFFER.IS_EMPTY) return;
    const device =
      this.DEVICES[this.A_BUS_BUFFER.read() & ((((1 << 8) - 1) << 24) >>> 0)];
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
