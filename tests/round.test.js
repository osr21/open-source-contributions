const { round, floor, ceil } = require('../utils/round');

describe('round', () => {
  it('rounds to nearest integer', () => { expect(round(2.5)).toBe(3); });
  it('rounds to decimal places', () => { expect(round(2.555, 2)).toBeCloseTo(2.56); });
});

describe('floor', () => {
  it('floors to integer', () => { expect(floor(2.9)).toBe(2); });
  it('floors to decimal', () => { expect(floor(2.99, 1)).toBeCloseTo(2.9); });
});

describe('ceil', () => {
  it('ceils to integer', () => { expect(ceil(2.1)).toBe(3); });
  it('ceils to decimal', () => { expect(ceil(2.11, 1)).toBeCloseTo(2.2); });
});
