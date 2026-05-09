class Node { constructor(v) { this.value = v; this.next = null; } }
class LinkedList {
  constructor() { this.head = null; this.size = 0; }
  append(v) {
    const n = new Node(v);
    if (!this.head) this.head = n;
    else { let c = this.head; while (c.next) c = c.next; c.next = n; }
    this.size++;
  }
  prepend(v) { const n = new Node(v); n.next = this.head; this.head = n; this.size++; }
  toArray() { const a=[]; let c=this.head; while(c){a.push(c.value);c=c.next;} return a; }
}
module.exports = { LinkedList };
