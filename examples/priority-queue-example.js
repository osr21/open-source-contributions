const { PriorityQueue } = require('../utils/priority-queue');

// Default: min-heap
const pq = new PriorityQueue();
[5, 1, 4, 2, 3].forEach(n => pq.enqueue(n));

while (!pq.isEmpty()) {
  process.stdout.write(pq.dequeue() + ' '); // 1 2 3 4 5
}
console.log();

// Max-heap: flip comparator
const maxPq = new PriorityQueue((a, b) => b - a);
[5, 1, 4, 2, 3].forEach(n => maxPq.enqueue(n));
console.log(maxPq.dequeue()); // 5
