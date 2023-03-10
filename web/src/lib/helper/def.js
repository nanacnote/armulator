export const LOG_HEADER_MSG = `  _   _
   /_/ /_/ /|,/    / _ _/_ _  _
  / / / \\ /  / /_// /_|/  /_// 
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`;

export const LIGHT_THEME_NAME = 'corporate';
export const DARK_THEME_NAME = 'business';

export const NUMERAL_TYPE_HEX = 'hex';
export const NUMERAL_TYPE_BIN = 'bin';

export const MEMORY_TABLE_VIEW_TYPE = 'table-view';
export const MEMORY_HEX_DUMP_TYPE = 'hex-dump';

// order is import
export const TAB_NAMES = ['Editor', 'Debugger', 'Memory', 'Schematic'];

export const DEBUGGER_EMPTY_MSG =
  '{"instruction":"No process has been loaded!","textUUIDS":["9893"],"textContent":["0"]}';

export const NUMBER_OF_MEMORY_TABLE_ENTRIES = 10;

export const HEX_DUMP_SIZE_BYTE = 512;

export const BREAKPOINT_SYMBOL = 'â';

export const EDITOR_LOGGER_PAYLOADS = {
  1: { msg: 'Establishing connection\t\tğ\n\n', style: 'text-info' },
  2: { msg: 'Connected to "Kompiler"\t\tğ¤ğ¿\n\n', style: 'text-info' },
  3: { msg: 'Compiling to machine code\t\tâ\n\n', style: 'text-info' },
  4: { msg: 'Successfully compiled\t\t\tğ\n\n', style: 'text-success' },
  5: { msg: 'ELF loaded with PID [] \t\tğï¸\n\n', style: 'text-info' },
  6: { msg: 'PID [] is running \t\t\t\tğââï¸\n\n', style: 'text-info' },
  7: { msg: '"Kompiler" raised an error\tğ¥\n\n', style: 'text-error' }
};
