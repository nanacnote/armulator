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
      ACE_INPUT: 'aceInput',
      UPLOAD: 'upload',
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
    this.getASMTextChunk = this.getASMTextChunk.bind(this);
    this.setASMTextChunkByUpload = this.setASMTextChunkByUpload.bind(this);
    this.setASMTextChunkByAceInput = this.setASMTextChunkByAceInput.bind(this);

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

  setASMTextChunkByAceInput(value) {
    this.STORE.removeItem(this.TYPE.UPLOAD);
    this.STORE.setItem(this.TYPE.ACE_INPUT, value);
    this.dispatchEvent(new CustomEvent(this.TYPE.ACE_INPUT, { detail: value }));
  }
  setASMTextChunkByUpload(value) {
    this.STORE.removeItem(this.TYPE.ACE_INPUT);
    this.STORE.setItem(this.TYPE.UPLOAD, value);
    this.dispatchEvent(new CustomEvent(this.TYPE.UPLOAD, { detail: value }));
  }
  getASMTextChunk() {
    return (
      this.STORE.getItem(this.TYPE.UPLOAD) ||
      this.STORE.getItem(this.TYPE.ACE_INPUT)
    );
  }
}

export const session = new Session();
