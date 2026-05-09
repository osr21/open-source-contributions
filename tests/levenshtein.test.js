const { levenshtein } = require('../utils/levenshtein');

describe('levenshtein', () => {
  it('returns 0 for identical strings', () => { expect(levenshtein('hello', 'hello')).toBe(0); });
  it('returns length for empty string comparison', () => {
    expect(levenshtein('', 'abc')).toBe(3);
    expect(levenshtein('abc', '')).toBe(3);
  });
  it('calculates edit distance', () => {
    expect(levenshtein('kitten', 'sitting')).toBe(3);
    expect(levenshtein('sunday', 'saturday')).toBe(3);
  });
});
