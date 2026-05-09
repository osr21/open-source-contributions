const { isPrime, sieve } = require('../utils/is-prime');

describe('isPrime', () => {
  it('returns true for known primes', () => {
    [2,3,5,7,11,13,17,19,23].forEach(n => expect(isPrime(n)).toBe(true));
  });
  it('returns false for non-primes', () => {
    [0,1,4,6,8,9,10,15].forEach(n => expect(isPrime(n)).toBe(false));
  });
});

describe('sieve', () => {
  it('returns all primes up to 20', () => {
    expect(sieve(20)).toEqual([2,3,5,7,11,13,17,19]);
  });
  it('returns empty for n < 2', () => { expect(sieve(1)).toEqual([]); });
});
