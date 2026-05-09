const { pipe, compose } = require('../utils/pipe');

const double = x => x * 2;
const addTen = x => x + 10;
const square = x => x * x;

const transform = pipe(double, addTen, square);
console.log(transform(3)); // ((3*2)+10)^2 = 256

const transform2 = compose(square, addTen, double);
console.log(transform2(3)); // same result: 256
