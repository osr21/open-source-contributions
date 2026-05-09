const { range } = require('../utils/range');

describe('range', () => {
  it('generates range from start to end', () => {
    expect(range(0, 5)).toEqual([0,1,2,3,4]);
  });
  it('respects step', () => {
    expect(range(0, 10, 2)).toEqual([0,2,4,6,8]);
  });
  it('returns empty array when start >= end', () => {
    expect(range(5, 5)).toEqual([]);
    expect(range(6, 5)).toEqual([]);
  });
});
