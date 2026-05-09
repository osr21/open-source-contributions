const { movingAverage, exponentialMovingAverage } = require('../utils/moving-average');

describe('movingAverage', () => {
  it('calculates simple moving average', () => {
    const result = movingAverage([1, 2, 3, 4, 5], 3);
    expect(result).toEqual([2, 3, 4]);
  });
  it('handles window equal to array length', () => {
    expect(movingAverage([1, 2, 3], 3)).toEqual([2]);
  });
});

describe('exponentialMovingAverage', () => {
  it('returns same length as input', () => {
    const result = exponentialMovingAverage([1, 2, 3, 4, 5]);
    expect(result).toHaveLength(5);
  });
  it('starts with first value', () => {
    expect(exponentialMovingAverage([10, 20, 30])[0]).toBe(10);
  });
});
