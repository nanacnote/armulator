import {
  C_BUS_READ_32_VAL,
  ON_FETCH_CYCLE,
  ON_DECODE_CYCLE,
  ON_EXECUTE_CYCLE,
  TEXT_SECTION,
  STACK_SECTION,
  ENV_SECTION,
  HEAP_SECTION,
  BSS_SECTION,
  INIT_DATA_SECTION,
} from "../var/def.js";

/**
 * A class representing the Central Processing Unit (CPU) of a computer.
 *
 * The Cpu class acts as a coordinator of different hardware components and
 * handles the fetch-decode-execute cycle.
 */
export class Cpu {
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

    this.CLK.addEventListener(ON_FETCH_CYCLE, this._fetch);
    this.CLK.addEventListener(ON_DECODE_CYCLE, this._decode);
    this.CLK.addEventListener(ON_EXECUTE_CYCLE, this._execute);

    this.CLK.addEventListener(ON_FETCH_CYCLE, this.BUS.onTick);
    this.CLK.addEventListener(ON_DECODE_CYCLE, this.BUS.onTick);
    this.CLK.addEventListener(ON_EXECUTE_CYCLE, this.BUS.onTick);
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
    const extELF = { ...elf, pid };

    // order is important
    extELF["envUUIDS"] = this.MMU.malloc(
      pid,
      ENV_SECTION,
      elf.envSize,
      elf.envContent
    );
    this.MMU.malloc(pid, STACK_SECTION, undefined, []);
    extELF["textUUIDS"] = this.MMU.malloc(
      pid,
      TEXT_SECTION,
      elf.textSize,
      elf.textContent
    );
    extELF["initDataUUIDS"] = this.MMU.malloc(
      pid,
      INIT_DATA_SECTION,
      elf.initDataSize,
      elf.initDataContent
    );
    extELF["bssUUIDS"] = this.MMU.malloc(
      pid,
      BSS_SECTION,
      elf.bssSize,
      elf.bssContent
    );
    this.MMU.malloc(pid, HEAP_SECTION, undefined, []);
    return extELF;
  }

  /**
   * Fetches the instruction from memory using the bus and saves the instruction address in the PC register.
   *
   * @private
   */
  _fetch() {
    if (
      this.REG.pc.read() < this.MMU.for(this.CURRENT_PID).TEXT_SEC_END_ADDRESS
    ) {
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
   *
   * @private
   */
  _decode() {
    const { instruction, aluRoutine } = this.DEC.decode(this.BUS.getData());
    this.CURRENT_INSTRUCTION = instruction;
    this.ALU_ROUTINE = aluRoutine;
  }

  /**
   * Executes the ALU routine associated with the decoded instruction.
   *
   * @private
   */
  _execute() {
    this.ALU.call({
      pid: this.CURRENT_PID,
      routine: this.ALU_ROUTINE,
      instruction: this.CURRENT_INSTRUCTION,
      virtualAddress: this.REG.pc.read() - 4,
    });
  }
}
