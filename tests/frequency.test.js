const { frequency, mostFrequent } = require('../utils/frequency');

describe('frequency', () => {
  it('counts item occurrences', () => {
    expect(frequency(['a','b','a','c','a','b'])).toEqual({ a: 3, b: 2, c: 1 });
  });
  it('handles empty array', () => { expect(frequency([])).toEqual({}); });
});

describe('mostFrequent', () => {
  it('returns the most frequent item', () => {
    expect(mostFrequent(['a','b','a','c','a'])).toBe('a');
  });
});
