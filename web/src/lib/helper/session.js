class Session {
  constructor() {
    this.DEFAULT_KEY = 'upload';
    this.LISTENER = new Set();

    this.setBuffer = this.setBuffer.bind(this);
    this.getBuffer = this.getBuffer.bind(this);
    this.onBufferChange = this.onBufferChange.bind(this);

    sessionStorage.clear();
  }

  setBuffer(value, key = this.DEFAULT_KEY) {
    sessionStorage.setItem(key, value);
    this.triggerChange(key);
  }

  getBuffer() {
    return sessionStorage.getItem(this.DEFAULT_KEY);
  }

  onBufferChange(func) {
    this.LISTENER.add(func);
  }

  triggerChange(type) {
    this.LISTENER.forEach((func) => func(type));
  }
}

export const session = new Session();
