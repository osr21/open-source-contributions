const { memoize } = require('../utils/memoize');

function expensiveCalc(n) {
  console.log('Computing for', n);
  return n * n;
}

const memoCalc = memoize(expensiveCalc);

console.log(memoCalc(5));  // Computing for 5 → 25
console.log(memoCalc(5));  // From cache → 25 (no log)
console.log(memoCalc(10)); // Computing for 10 → 100
