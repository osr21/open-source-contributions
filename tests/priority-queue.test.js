const { PriorityQueue } = require('../utils/priority-queue');

describe('PriorityQueue (min-heap)', () => {
  it('dequeues in ascending order', () => {
    const pq = new PriorityQueue();
    [5, 1, 3, 2, 4].forEach(n => pq.enqueue(n));
    expect([pq.dequeue(), pq.dequeue(), pq.dequeue()]).toEqual([1, 2, 3]);
  });

  it('peek returns min without removing', () => {
    const pq = new PriorityQueue();
    pq.enqueue(3); pq.enqueue(1); pq.enqueue(2);
    expect(pq.peek()).toBe(1);
    expect(pq.size).toBe(3);
  });

  it('isEmpty returns true when empty', () => {
    const pq = new PriorityQueue();
    expect(pq.isEmpty()).toBe(true);
    pq.enqueue(1);
    expect(pq.isEmpty()).toBe(false);
  });
});
