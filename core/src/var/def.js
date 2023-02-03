// Constants used as keys to dispatch events
export const ON_START_EVENT = "start";
export const ON_STOP_EVENT = "stop";
export const ON_PAUSE_EVENT = "pause";
export const ON_RESUME_EVENT = "resume";
export const ON_SPEED_CHANGE_EVENT = "speed-change";
export const ON_RAM_WRITE_EVENT = "ram-write";
export const ON_RAM_READ_EVENT = "ram-read";
export const ON_BUFFER_32_WRITE_EVENT = "buffer-32-write";
export const ON_BUFFER_32_READ_EVENT = "buffer-32-read";
export const ON_PROC_LOAD = "on-proc-load";
export const ON_FETCH_CYCLE = "fetch-cycle";
export const ON_DECODE_CYCLE = "decode-cycle";
export const ON_EXECUTE_CYCLE = "execute-cycle";
export const ON_ALU_EXECUTE = "alu-execute";

// Constant values that represent the status of an operation
export const OK_CODE = 1; // indicates everything went right
export const ERROR_CODE = 0; // indicates an error occurred

// Constants used to distinguish between different types of execution
export const EXECUTION_KEY = 0b0000000000000000; // indicates normal execution
export const INTERRUPT_KEY = 0b0000000100000000; // indicates interrupt execution

// Constants used to identify specific interrupt types
export const UNDEFINED_INSTRUCTION_INTERRUPT = INTERRUPT_KEY + 0b00000001; // indicates an undefined instruction interrupt

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
