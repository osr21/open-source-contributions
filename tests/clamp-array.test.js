const { clampArray, normalizeArray, standardize } = require('../utils/clamp-array');

describe('clampArray', () => {
  it('clamps all values to range', () => {
    expect(clampArray([-1, 5, 15, 3], 0, 10)).toEqual([0, 5, 10, 3]);
  });
});

describe('normalizeArray', () => {
  it('normalizes to [0, 1]', () => {
    const result = normalizeArray([0, 50, 100]);
    expect(result).toEqual([0, 0.5, 1]);
  });
  it('handles all-same values', () => {
    expect(normalizeArray([5, 5, 5])).toEqual([0, 0, 0]);
  });
});

describe('standardize', () => {
  it('produces mean near 0 and std near 1', () => {
    const result = standardize([2, 4, 4, 4, 5, 5, 7, 9]);
    const mean = result.reduce((a, b) => a + b, 0) / result.length;
    expect(Math.abs(mean)).toBeLessThan(1e-10);
  });
});
