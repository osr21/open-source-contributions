const { fibonacci, fibonacciSequence, isFibonacci } = require('../utils/fibonacci');

describe('fibonacci', () => {
  it('returns correct Fibonacci numbers', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(10)).toBe(55);
  });
});

describe('fibonacciSequence', () => {
  it('returns first 7 Fibonacci numbers', () => {
    expect(fibonacciSequence(7)).toEqual([0,1,1,2,3,5,8]);
  });
});

describe('isFibonacci', () => {
  it('identifies Fibonacci numbers', () => {
    [0,1,2,3,5,8,13,21].forEach(n => expect(isFibonacci(n)).toBe(true));
  });
  it('rejects non-Fibonacci numbers', () => {
    [4,6,7,9,10,11].forEach(n => expect(isFibonacci(n)).toBe(false));
  });
});
