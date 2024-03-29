// Constants used as keys to dispatch events
export const ON_START = "start";
export const ON_STOP = "stop";
export const ON_PAUSE = "pause";
export const ON_RESUME = "resume";
export const ON_STEP = "step";
export const ON_SPEED_CHANGE = "speed-change";
export const ON_RAM_WRITE = "ram-write";
export const ON_RAM_READ = "ram-read";
export const ON_BUFFER_32_WRITE = "buffer-32-write";
export const ON_BUFFER_32_READ = "buffer-32-read";
export const ON_FETCH_CYCLE_START = "fetch-cycle_start";
export const ON_DECODE_CYCLE_START = "decode-cycle_start";
export const ON_EXECUTE_CYCLE_START = "execute-cycle_start";
export const ON_FETCH_CYCLE_END = "fetch-cycle_end";
export const ON_DECODE_CYCLE_END = "decode-cycle_end";
export const ON_EXECUTE_CYCLE_END = "execute-cycle_end";
export const ON_REG_WRITE = "reg-write";
export const ON_REG_READ = "reg-read";
export const ON_ALU_EXECUTE = "alu-execute";

// Const values that represent the name of the memory section of a process
export const ENV_SECTION = "env-section";
export const STACK_SECTION = "stack-section";
export const HEAP_SECTION = "heap-section";
export const BSS_SECTION = "bss-section";
export const INIT_DATA_SECTION = "init-data-section";
export const TEXT_SECTION = "text-section";

// Constant values that represent the status of an operation
export const OK_CODE = 1; // indicates everything went right
export const ERROR_CODE = 0; // indicates an error occurred

// Constants used to identify different clock states
export const STOP_CLOCK_KEY = 0; // indicates the system is in stop/idle state
export const START_CLOCK_KEY = 1; // indicates the system is in start/active state
export const PAUSE_CLOCK_KEY = 2; // indicates the system is in pause/suspended state

// Constants used to identify different clock speeds in ms
export const FAST_CLOCK_SPEED = 200; // indicates the clock is running at fast speed
export const NORMAL_CLOCK_SPEED = 500; // indicates the clock is running at normal speed
export const SLOW_CLOCK_SPEED = 1000; // indicates the clock is running at slow speed

// Constants used to set the control bus to different modes
export const C_BUS_READ_8_VAL = 0b00000000000000010000000000000000; // sets the control bus to read 8-bit mode
export const C_BUS_READ_16_VAL = 0b00000000000000100000000000000000; // sets the control bus to read 16-bit mode
export const C_BUS_READ_32_VAL = 0b00000000000000110000000000000000; // sets the control bus to read 32-bit mode
export const C_BUS_WRITE_8_VAL = 0b00000000000000000000000100000000; // sets the control bus to write 8-bit mode
export const C_BUS_WRITE_16_VAL = 0b00000000000000000000001000000000; // sets the control bus to write 16-bit mode
export const C_BUS_WRITE_32_VAL = 0b00000000000000000000001100000000; // sets the control bus to write 32-bit mode
export const C_BUS_INTERRUPT_VAL = 0b00000000000000000000000000000001; // sets the control bus to interrupt mode

// Constant used to identify the RAM device
export const RAM_DEV_KEY = 0b00000001000000000000000000000000;

// Constant used to specify the size of the RAM in bytes
export const RAM_SIZE_IN_BYTE = 0.5 * 1024 * 1024;

// Support ARM mnemonics
export const MNEM = {
  MUL_MULS: Symbol.for("MUL_MULS"),

  BX: Symbol.for("BX_BXJ"),
  BXJ: Symbol.for("BX_BXJ"),
  BLX_REG: Symbol.for("BLX_REG"),
  CLZ: Symbol.for("CLZ"),

  AND_ANDS_IMD: Symbol.for("AND_ANDS_IMD"),
  EOR_EORS_IMD: Symbol.for("EOR_EORS_IMD"),
  SUB_IMD: Symbol.for("SUB_IMD"),
  SUB_IMD_SP: Symbol.for("SUB_IMD_SP"),
  SUBS_IMD: Symbol.for("SUBS_IMD"),
  SUBS_IMD_SP: Symbol.for("SUBS_IMD_SP"),
  RSB_RSBS_IMD: Symbol.for("RSB_RSBS_IMD"),
  ADD_IMD: Symbol.for("ADD_IMD"),
  ADD_IMD_SP: Symbol.for("ADD_IMD_SP"),
  ADDS_IMD: Symbol.for("ADDS_IMD"),
  ADDS_IMD_SP: Symbol.for("ADDS_IMD_SP"),
  ADC_ADCS_IMD: Symbol.for("ADC_ADCS_IMD"),
  SBC_SBCS_IMD: Symbol.for("SBC_SBCS_IMD"),
  RSC_RSCS_IMD: Symbol.for("RSC_RSCS_IMD"),

  MOV_MOVS_IMD: Symbol.for("MOV_MOVS_IMD"),
  MOVT: Symbol.for("MOVT"),

  TST_IMD: Symbol.for("TST_IMD"),
  TEQ_IMD: Symbol.for("TEQ_IMD"),
  CMP_IMD: Symbol.for("CMP_IMD"),
  CMN_IMD: Symbol.for("CMN_IMD"),

  ORR_ORRS_IMD: Symbol.for("ORR_ORRS_IMD"),
  BIC_BICS_IMD: Symbol.for("BIC_BICS_IMD"),
  MVN_MVNS_IMD: Symbol.for("MVN_MVNS_IMD"),

  B: Symbol.for("B"),
};
