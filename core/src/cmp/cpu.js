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

export class Cpu {
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

  run() {
    this.CLK.start();
    return this;
  }

  spawn(pid) {
    this.REG.pc.write(this.MMU.for(pid).PROC_START_ADDRESS);
    this.REG.sp.write(this.MMU.for(pid).STACK_SEC_START_ADDRESS);
    this.CURRENT_PID = pid;
    return this;
  }

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

  _decode() {
    const { instruction, aluRoutine } = this.DEC.decode(this.BUS.getData());
    this.CURRENT_INSTRUCTION = instruction;
    this.ALU_ROUTINE = aluRoutine;
  }

  _execute() {
    this.ALU.call({
      pid: this.CURRENT_PID,
      routine: this.ALU_ROUTINE,
      instruction: this.CURRENT_INSTRUCTION,
      virtualAddress: this.REG.pc.read() - 4,
    });
  }
}
