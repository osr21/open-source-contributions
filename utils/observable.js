class Observable {
  constructor(initial) { this._value = initial; this._subs = new Set(); }
  get value() { return this._value; }
  set(v) { if (v !== this._value) { this._value = v; this._subs.forEach(fn => fn(v)); } }
  subscribe(fn) { this._subs.add(fn); return () => this._subs.delete(fn); }
}
module.exports = { Observable };
