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
      KSTOOL_OUTPUT: 'kstool-output',
      INSTRUCTION: 'instruction',
      THEME: 'theme',
      NUMERAL: 'numeral',
      TAB: 'tab'
    };

    this.getTheme = this.getTheme.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.getSelectedTab = this.getSelectedTab.bind(this);
    this.setSelectedTab = this.setSelectedTab.bind(this);
    this.getNumeralType = this.getNumeralType.bind(this);
    this.setNumeralType = this.setNumeralType.bind(this);
    this.getInstructionBuffer = this.getInstructionBuffer.bind(this);
    this.setInstructionBuffer = this.setInstructionBuffer.bind(this);
    this.getKstoolOutput = this.getKstoolOutput.bind(this);
    this.setKstoolOutput = this.setKstoolOutput.bind(this);

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
    return this.STORE.getItem(this.TYPE.THEME);
  }
  toggleTheme() {
    switch (this.getTheme()) {
      case LIGHT_THEME_NAME:
        this.STORE.setItem(this.TYPE.THEME, DARK_THEME_NAME);
        this.dispatchEvent(
          new CustomEvent(this.TYPE.THEME, { detail: DARK_THEME_NAME })
        );
        break;
      case DARK_THEME_NAME:
        this.STORE.setItem(this.TYPE.THEME, LIGHT_THEME_NAME);
        this.dispatchEvent(
          new CustomEvent(this.TYPE.THEME, { detail: LIGHT_THEME_NAME })
        );
        break;
      default:
        this.STORE.setItem(this.TYPE.THEME, LIGHT_THEME_NAME);
        this.dispatchEvent(
          new CustomEvent(this.TYPE.THEME, { detail: LIGHT_THEME_NAME })
        );
        break;
    }
  }

  getSelectedTab() {
    return this.STORE.getItem(this.TYPE.TAB);
  }
  setSelectedTab(value) {
    this.STORE.setItem(this.TYPE.TAB, value);
    this.dispatchEvent(new CustomEvent(this.TYPE.TAB, { detail: value }));
  }

  getNumeralType() {
    return this.STORE.getItem(this.TYPE.NUMERAL);
  }
  setNumeralType(value) {
    this.STORE.setItem(this.TYPE.NUMERAL, value);
    this.dispatchEvent(new CustomEvent(this.TYPE.NUMERAL, { detail: value }));
  }

  getInstructionBuffer() {
    return this.STORE.getItem(this.TYPE.INSTRUCTION);
  }
  setInstructionBuffer(value) {
    this.STORE.setItem(this.TYPE.INSTRUCTION, value);
    this.dispatchEvent(
      new CustomEvent(this.TYPE.INSTRUCTION, { detail: value })
    );
  }

  getKstoolOutput() {
    return this.STORE.getItem(this.TYPE.KSTOOL_OUTPUT);
  }
  setKstoolOutput(value) {
    this.STORE.setItem(this.TYPE.KSTOOL_OUTPUT, value);
    this.dispatchEvent(
      new CustomEvent(this.TYPE.KSTOOL_OUTPUT, { detail: value })
    );
  }
}

export const session = new Session();
