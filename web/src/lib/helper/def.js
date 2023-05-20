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
// web/src/components/footer/Footer.tsx is dependent on these names
export const TAB_NAMES = ['Editor', 'Debugger', 'Memory', 'Schematic'];

export const DEBUGGER_EMPTY_MSG =
  '{"instruction":"No process has been loaded!","textUUIDS":["9893"],"textContent":["0"]}';

export const NUMBER_OF_MEMORY_TABLE_ENTRIES = 10;

export const HEX_DUMP_SIZE_BYTE = 512;

export const BREAKPOINT_SYMBOL = '●';

export const EDITOR_LOGGER_PAYLOADS = {
  1: { msg: 'Establishing connection\t\t🚀\n\n', style: 'text-info' },
  2: { msg: 'Connected to "Kompiler"\t\t🤝🏿\n\n', style: 'text-info' },
  3: { msg: 'Compiling to machine code\t\t⌛\n\n', style: 'text-info' },
  4: { msg: 'Successfully compiled\t\t\t🎉\n\n', style: 'text-success' },
  5: { msg: 'ELF loaded with PID [] \t\t🏋️\n\n', style: 'text-info' },
  6: { msg: 'PID [] is running \t\t\t\t🏃‍♂️\n\n', style: 'text-info' },
  7: { msg: '"Kompiler" raised an error\t😥\n\n', style: 'text-error' }
};
