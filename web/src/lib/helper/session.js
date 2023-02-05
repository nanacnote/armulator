import {
  DARK_THEME_NAME,
  DEFAULT_SELECTED_TAB,
  LIGHT_THEME_NAME,
  NUMERAL_TYPE_HEX
} from './def';

class Session extends EventTarget {
  constructor() {
    super();
    this.STORE = sessionStorage;

    this.TYPE = {
      ELF_LOAD: 'elf',
      INSTRUCTION_CHANGE: 'instruction',
      THEME_CHANGE: 'theme',
      NUMERAL_CHANGE: 'numeral',
      TAB_CHANGE: 'tab'
    };

    this.getTheme = this.getTheme.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.getSelectedTab = this.getSelectedTab.bind(this);
    this.setSelectedTab = this.setSelectedTab.bind(this);
    this.getNumeralType = this.getNumeralType.bind(this);
    this.setNumeralType = this.setNumeralType.bind(this);
    this.getInstructionBuffer = this.getInstructionBuffer.bind(this);
    this.setInstructionBuffer = this.setInstructionBuffer.bind(this);
    this.getLoadedELF = this.getLoadedELF.bind(this);
    this.setLoadedELF = this.setLoadedELF.bind(this);

    this.addEventListener = this.addEventListener.bind(this);

    this._init();
  }

  _init() {
    const fallback = {
      theme: LIGHT_THEME_NAME,
      numeral: NUMERAL_TYPE_HEX,
      tab: DEFAULT_SELECTED_TAB
    };
    for (const key in fallback) {
      if (
        Object.hasOwnProperty.call(fallback, key) &&
        !this.STORE.getItem(key)
      ) {
        this.STORE.setItem(key, fallback[key]);
      }
    }
  }

  addEventListener(type, callback, options, withInitialCall = true) {
    if (withInitialCall) {
      for (const key in this.STORE) {
        if (Object.hasOwnProperty.call(this.STORE, key)) {
          if (key === type)
            callback(new CustomEvent(key, { detail: this.STORE[key] }));
        }
      }
    }
    return super.addEventListener(type, callback, options);
  }

  getTheme() {
    return this.STORE.getItem(this.TYPE.THEME_CHANGE);
  }
  toggleTheme() {
    switch (this.getTheme()) {
      case LIGHT_THEME_NAME:
        this.STORE.setItem(this.TYPE.THEME_CHANGE, DARK_THEME_NAME);
        this.dispatchEvent(
          new CustomEvent(this.TYPE.THEME_CHANGE, {
            detail: DARK_THEME_NAME
          })
        );
        break;
      case DARK_THEME_NAME:
        this.STORE.setItem(this.TYPE.THEME_CHANGE, LIGHT_THEME_NAME);
        this.dispatchEvent(
          new CustomEvent(this.TYPE.THEME_CHANGE, {
            detail: LIGHT_THEME_NAME
          })
        );
        break;
      default:
        this.STORE.setItem(this.TYPE.THEME_CHANGE, LIGHT_THEME_NAME);
        this.dispatchEvent(
          new CustomEvent(this.TYPE.THEME_CHANGE, {
            detail: LIGHT_THEME_NAME
          })
        );
        break;
    }
  }

  getSelectedTab() {
    return this.STORE.getItem(this.TYPE.TAB_CHANGE);
  }
  setSelectedTab(value) {
    this.STORE.setItem(this.TYPE.TAB_CHANGE, value);
    this.dispatchEvent(
      new CustomEvent(this.TYPE.TAB_CHANGE, { detail: value })
    );
  }

  getNumeralType() {
    return this.STORE.getItem(this.TYPE.NUMERAL_CHANGE);
  }
  setNumeralType(value) {
    this.STORE.setItem(this.TYPE.NUMERAL_CHANGE, value);
    this.dispatchEvent(
      new CustomEvent(this.TYPE.NUMERAL_CHANGE, { detail: value })
    );
  }

  getInstructionBuffer() {
    return this.STORE.getItem(this.TYPE.INSTRUCTION_CHANGE);
  }
  setInstructionBuffer(value) {
    this.STORE.setItem(this.TYPE.INSTRUCTION_CHANGE, value);
    this.dispatchEvent(
      new CustomEvent(this.TYPE.INSTRUCTION_CHANGE, { detail: value })
    );
  }

  getLoadedELF() {
    return this.STORE.getItem(this.TYPE.ELF_LOAD);
  }
  setLoadedELF(value) {
    this.STORE.setItem(this.TYPE.ELF_LOAD, value);
    this.dispatchEvent(new CustomEvent(this.TYPE.ELF_LOAD, { detail: value }));
  }
}

export const session = new Session();
