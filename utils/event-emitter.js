/**
 * Lightweight EventEmitter.
 */
class EventEmitter {
  constructor() { this._events = {}; }

  on(event, listener) {
    (this._events[event] = this._events[event] || []).push(listener);
    return this;
  }

  off(event, listener) {
    this._events[event] = (this._events[event] || []).filter(l => l !== listener);
    return this;
  }

  emit(event, ...args) {
    (this._events[event] || []).forEach(l => l(...args));
    return this;
  }

  once(event, listener) {
    const wrap = (...args) => { listener(...args); this.off(event, wrap); };
    return this.on(event, wrap);
  }
}

module.exports = { EventEmitter };
