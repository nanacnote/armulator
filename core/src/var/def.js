// Generic value definition
export const OK_CODE = 1; // indicates everything went right
export const ERROR_CODE = 0; // indicates everything went right

// Execution and Interrupt key
export const EXECUTION_KEY = 0b0000000000000000;
export const INTERRUPT_KEY = 0b0000000100000000;

// Interrupt handler codes
export const EMPTY_INSTRUCTION_INTERRUPT = INTERRUPT_KEY + 0b00000001;
export const UNDEFINED_INSTRUCTION_INTERRUPT = INTERRUPT_KEY + 0b00000010;

// Clock class:: CYCLE value definitions
export const FETCH_CYCLE_KEY = 0; // the state of the machine is set to fetch
export const DECODE_CYCLE_KEY = 1; // the state of the machine is set to decode
export const EXECUTE_CYCLE_KEY = 2; // the state of the machine is set to execute
export const CYCLE_SIZE = 3; // the number of states the machine can exist in

// Clock class:: STATE value definitions
export const STOP_CLOCK_KEY = 0; // indicates the system is in stop/idle state
export const START_CLOCK_KEY = 1; // indicates the system is in start/active state
export const PAUSE_CLOCK_KEY = 2; // indicates the system is in pause/suspended state

// Clock class:: SPEED value definitions
export const FAST_CLOCK_SPEED = 200; // indicates the clock is running at fast speed
export const NORMAL_CLOCK_SPEED = 500; // indicates the clock is running at normal speed
export const SLOW_CLOCK_SPEED = 1000; // indicates the clock is running at slow speed

// Bus class:: CONTROL BUS value definitions
export const C_BUS_READ_8_VAL = 0b00000000000000010000000000000000; // sets the control bus to read mode
export const C_BUS_READ_16_VAL = 0b00000000000000100000000000000000; // sets the control bus to read mode
export const C_BUS_READ_32_VAL = 0b00000000000000110000000000000000; // sets the control bus to read mode
export const C_BUS_WRITE_8_VAL = 0b00000000000000000000000100000000; // sets the control bus to write mode
export const C_BUS_WRITE_16_VAL = 0b00000000000000000000001000000000; // sets the control bus to write mode
export const C_BUS_WRITE_32_VAL = 0b00000000000000000000001100000000; // sets the control bus to write mode
export const C_BUS_INTERRUPT_VAL = 0b00000000000000000000000000000001; // sets the control bus to interrupt mode

// Bus class:: DEVICES key
export const RAM_DEV_KEY = 0b00000001000000000000000000000000;

// Ram class::
export const RAM_SIZE_IN_BYTE = 2e6;
