const { gcd, lcm, gcdArray, lcmArray } = require('../utils/gcd-lcm');

describe('gcd', () => {
  it('gcd(12, 8) = 4', () => { expect(gcd(12, 8)).toBe(4); });
  it('gcd(7, 5) = 1', () => { expect(gcd(7, 5)).toBe(1); });
  it('handles 0', () => { expect(gcd(0, 5)).toBe(5); });
});

describe('lcm', () => {
  it('lcm(4, 6) = 12', () => { expect(lcm(4, 6)).toBe(12); });
  it('lcm(7, 5) = 35', () => { expect(lcm(7, 5)).toBe(35); });
});

describe('gcdArray', () => {
  it('finds GCD of [12, 8, 4]', () => { expect(gcdArray([12, 8, 4])).toBe(4); });
});

describe('lcmArray', () => {
  it('finds LCM of [2, 3, 4]', () => { expect(lcmArray([2, 3, 4])).toBe(12); });
});
