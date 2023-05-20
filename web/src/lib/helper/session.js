import {
  DARK_THEME_NAME,
  DEBUGGER_EMPTY_MSG,
  LIGHT_THEME_NAME,
  MEMORY_TABLE_VIEW_TYPE,
  NUMERAL_TYPE_HEX,
  TAB_NAMES
} from './def';

class Session extends EventTarget {
  constructor() {
    super();
    this.SESSION = sessionStorage;

    this.TYPE = {
      ELF_LOAD: 'elf',
      INSTRUCTION_CHANGE: 'instruction',
      THEME_CHANGE: 'theme',
      NUMERAL_CHANGE: 'numeral',
      MEMORY_VIEW_CHANGE: 'memory',
      TAB_CHANGE: 'tab'
    };

    this.getTheme = this.getTheme.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.getSelectedTab = this.getSelectedTab.bind(this);
    this.setSelectedTab = this.setSelectedTab.bind(this);
    this.getNumeralType = this.getNumeralType.bind(this);
    this.setNumeralType = this.setNumeralType.bind(this);
    this.getMemViewType = this.getMemViewType.bind(this);
    this.setMemViewType = this.setMemViewType.bind(this);
    this.getInstructionBuffer = this.getInstructionBuffer.bind(this);
    this.setInstructionBuffer = this.setInstructionBuffer.bind(this);
    this.getLoadedELF = this.getLoadedELF.bind(this);
    this.setLoadedELF = this.setLoadedELF.bind(this);

    this.addEventListener = this.addEventListener.bind(this);

    this._init();
  }

  _init() {
    const fallback = {
      elf: DEBUGGER_EMPTY_MSG,
      theme: LIGHT_THEME_NAME,
      numeral: NUMERAL_TYPE_HEX,
      memory: MEMORY_TABLE_VIEW_TYPE,
      tab: TAB_NAMES[0]
    };
    for (const key in fallback) {
      if (
        Object.hasOwnProperty.call(fallback, key) &&
        !this.SESSION.getItem(key)
      ) {
        this.SESSION.setItem(key, fallback[key]);
      }
    }
  }

  addEventListener(type, callback, options, withInitialCall = true) {
    if (withInitialCall) {
      for (const key in this.SESSION) {
        if (Object.hasOwnProperty.call(this.SESSION, key)) {
          if (key === type)
            callback(new CustomEvent(key, { detail: this.SESSION[key] }));
        }
      }
    }
    return super.addEventListener(type, callback, options);
  }

  getTheme() {
    return this.SESSION.getItem(this.TYPE.THEME_CHANGE);
  }
  toggleTheme() {
    switch (this.getTheme()) {
      case LIGHT_THEME_NAME:
        this.SESSION.setItem(this.TYPE.THEME_CHANGE, DARK_THEME_NAME);
        this.dispatchEvent(
          new CustomEvent(this.TYPE.THEME_CHANGE, {
            detail: DARK_THEME_NAME
          })
        );
        break;
      case DARK_THEME_NAME:
        this.SESSION.setItem(this.TYPE.THEME_CHANGE, LIGHT_THEME_NAME);
        this.dispatchEvent(
          new CustomEvent(this.TYPE.THEME_CHANGE, {
            detail: LIGHT_THEME_NAME
          })
        );
        break;
      default:
        this.SESSION.setItem(this.TYPE.THEME_CHANGE, LIGHT_THEME_NAME);
        this.dispatchEvent(
          new CustomEvent(this.TYPE.THEME_CHANGE, {
            detail: LIGHT_THEME_NAME
          })
        );
        break;
    }
  }

  getSelectedTab() {
    return this.SESSION.getItem(this.TYPE.TAB_CHANGE);
  }
  setSelectedTab(value) {
    this.SESSION.setItem(this.TYPE.TAB_CHANGE, value);
    this.dispatchEvent(
      new CustomEvent(this.TYPE.TAB_CHANGE, { detail: value })
    );
  }

  getNumeralType() {
    return this.SESSION.getItem(this.TYPE.NUMERAL_CHANGE);
  }
  setNumeralType(value) {
    this.SESSION.setItem(this.TYPE.NUMERAL_CHANGE, value);
    this.dispatchEvent(
      new CustomEvent(this.TYPE.NUMERAL_CHANGE, { detail: value })
    );
  }

  getMemViewType() {
    return this.SESSION.getItem(this.TYPE.MEMORY_VIEW_CHANGE);
  }
  setMemViewType(value) {
    this.SESSION.setItem(this.TYPE.MEMORY_VIEW_CHANGE, value);
    this.dispatchEvent(
      new CustomEvent(this.TYPE.MEMORY_VIEW_CHANGE, { detail: value })
    );
  }

  getInstructionBuffer() {
    return this.SESSION.getItem(this.TYPE.INSTRUCTION_CHANGE);
  }
  setInstructionBuffer(value) {
    // reset loaded elf to empty on changes to instruction changes (i.e. when a user types new instruction or upload a file)
    if (this.getLoadedELF()) {
      this.setLoadedELF(DEBUGGER_EMPTY_MSG);
    }
    this.SESSION.setItem(this.TYPE.INSTRUCTION_CHANGE, value);
    this.dispatchEvent(
      new CustomEvent(this.TYPE.INSTRUCTION_CHANGE, { detail: value })
    );
  }

  getLoadedELF() {
    return this.SESSION.getItem(this.TYPE.ELF_LOAD);
  }
  setLoadedELF(value) {
    this.SESSION.setItem(this.TYPE.ELF_LOAD, value);
    this.dispatchEvent(new CustomEvent(this.TYPE.ELF_LOAD, { detail: value }));
  }
}

export const session = new Session();
