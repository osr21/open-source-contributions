const { factorial, permutations, combinations } = require('../utils/factorial');

describe('factorial', () => {
  it('returns 1 for 0 and 1', () => { expect(factorial(0)).toBe(1); expect(factorial(1)).toBe(1); });
  it('computes factorial(5) = 120', () => { expect(factorial(5)).toBe(120); });
  it('throws for negative input', () => { expect(() => factorial(-1)).toThrow(); });
});

describe('permutations', () => {
  it('P(5,2) = 20', () => { expect(permutations(5, 2)).toBe(20); });
});

describe('combinations', () => {
  it('C(5,2) = 10', () => { expect(combinations(5, 2)).toBe(10); });
  it('C(n,0) = 1', () => { expect(combinations(5, 0)).toBe(1); });
});
