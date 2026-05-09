const { deepEqual } = require('../utils/deep-equal');
console.log(deepEqual({ a: 1, b: [2, 3] }, { a: 1, b: [2, 3] })); // true
console.log(deepEqual({ a: 1 }, { a: 2 }));                        // false
