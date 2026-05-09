class Stack {
  constructor() { this._items = []; }
  push(item) { this._items.push(item); return this; }
  pop() { return this._items.pop(); }
  peek() { return this._items[this._items.length - 1]; }
  get size() { return this._items.length; }
  isEmpty() { return this._items.length === 0; }
  clear() { this._items = []; return this; }
  toArray() { return [...this._items].reverse(); }
}
module.exports = { Stack };
