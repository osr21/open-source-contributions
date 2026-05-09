class LRUCache {
  constructor(cap) { this.cap = cap; this.cache = new Map(); }
  get(key) {
    if (!this.cache.has(key)) return -1;
    const v = this.cache.get(key);
    this.cache.delete(key); this.cache.set(key, v); return v;
  }
  put(key, val) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size >= this.cap) this.cache.delete(this.cache.keys().next().value);
    this.cache.set(key, val);
  }
  get size() { return this.cache.size; }
}
module.exports = { LRUCache };
