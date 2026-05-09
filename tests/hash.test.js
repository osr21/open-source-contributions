const { hash } = require('../utils/hash');

describe('hash', () => {
  it('returns a number', () => { expect(typeof hash('hello')).toBe('number'); });
  it('returns consistent results', () => { expect(hash('hello')).toBe(hash('hello')); });
  it('returns different results for different strings', () => {
    expect(hash('hello')).not.toBe(hash('world'));
  });
  it('handles empty string', () => { expect(typeof hash('')).toBe('number'); });
});
