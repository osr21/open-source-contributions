const { sum, average, median } = require('../utils/sum');

describe('sum', () => {
  it('sums numbers', () => { expect(sum([1,2,3,4,5])).toBe(15); });
  it('returns 0 for empty array', () => { expect(sum([])).toBe(0); });
});

describe('average', () => {
  it('returns average', () => { expect(average([1,2,3])).toBeCloseTo(2); });
  it('returns 0 for empty array', () => { expect(average([])).toBe(0); });
});

describe('median', () => {
  it('returns median of odd-length array', () => { expect(median([1,3,5])).toBe(3); });
  it('returns average of two middle for even-length', () => { expect(median([1,2,3,4])).toBe(2.5); });
});
