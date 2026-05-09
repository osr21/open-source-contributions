const { stringSimilarity } = require('../utils/string-similarity');

describe('stringSimilarity', () => {
  it('returns 1 for identical strings', () => {
    expect(stringSimilarity('hello', 'hello')).toBe(1);
  });
  it('returns 0 for completely different strings', () => {
    expect(stringSimilarity('abc', 'xyz')).toBe(0);
  });
  it('returns a value between 0 and 1 for similar strings', () => {
    const score = stringSimilarity('hello', 'helo');
    expect(score).toBeGreaterThan(0);
    expect(score).toBeLessThan(1);
  });
});
