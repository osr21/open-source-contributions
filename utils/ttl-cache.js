/**
 * A cache where entries expire after a given TTL (ms).
 */
class TTLCache {
  constructor(defaultTtl = 5000) { this._store = new Map(); this._defaultTtl = defaultTtl; }

  set(key, value, ttl = this._defaultTtl) {
    if (this._store.has(key)) clearTimeout(this._store.get(key).timer);
    const timer = setTimeout(() => this._store.delete(key), ttl);
    if (timer.unref) timer.unref();
    this._store.set(key, { value, timer });
  }

  get(key) {
    const entry = this._store.get(key);
    return entry ? entry.value : undefined;
  }

  has(key) { return this._store.has(key); }
  delete(key) {
    const entry = this._store.get(key);
    if (entry) { clearTimeout(entry.timer); this._store.delete(key); }
  }
  clear() { this._store.forEach(e => clearTimeout(e.timer)); this._store.clear(); }
  get size() { return this._store.size; }
}

module.exports = { TTLCache };
