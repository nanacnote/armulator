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

/**
 * Represents a bus system that connects devices and allows them to communicate with each other.
 * It has three buffers for the address, data, and control signals, and can read and write data from and to devices.
 */
export class Bus {
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
      control: this.C_BUS_BUFFER.view(),
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
