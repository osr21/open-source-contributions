class Queue {
  constructor() { this._items = []; }
  enqueue(item) { this._items.push(item); }
  dequeue() { return this._items.shift(); }
  peek() { return this._items[0]; }
  get size() { return this._items.length; }
  isEmpty() { return this._items.length === 0; }
  clear() { this._items = []; }
  toArray() { return [...this._items]; }
}
module.exports = { Queue };
