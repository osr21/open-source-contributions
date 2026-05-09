/**
 * Min Priority Queue (smallest value dequeued first).
 */
class PriorityQueue {
  constructor(comparator = (a, b) => a - b) {
    this._heap = [];
    this._cmp = comparator;
  }

  enqueue(val) {
    this._heap.push(val);
    this._bubbleUp(this._heap.length - 1);
  }

  dequeue() {
    if (!this._heap.length) return undefined;
    const top = this._heap[0];
    const last = this._heap.pop();
    if (this._heap.length) { this._heap[0] = last; this._siftDown(0); }
    return top;
  }

  peek() { return this._heap[0]; }
  get size() { return this._heap.length; }
  isEmpty() { return this._heap.length === 0; }

  _bubbleUp(i) {
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this._cmp(this._heap[i], this._heap[parent]) < 0) {
        [this._heap[i], this._heap[parent]] = [this._heap[parent], this._heap[i]];
        i = parent;
      } else break;
    }
  }

  _siftDown(i) {
    const n = this._heap.length;
    while (true) {
      let min = i, l = 2*i+1, r = 2*i+2;
      if (l < n && this._cmp(this._heap[l], this._heap[min]) < 0) min = l;
      if (r < n && this._cmp(this._heap[r], this._heap[min]) < 0) min = r;
      if (min === i) break;
      [this._heap[i], this._heap[min]] = [this._heap[min], this._heap[i]];
      i = min;
    }
  }
}

module.exports = { PriorityQueue };
