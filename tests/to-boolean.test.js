const { toBoolean } = require('../utils/to-boolean');

describe('toBoolean', () => {
  it('passes through booleans', () => {
    expect(toBoolean(true)).toBe(true);
    expect(toBoolean(false)).toBe(false);
  });
  it('converts truthy strings', () => {
    ['true','1','yes','on'].forEach(s => expect(toBoolean(s)).toBe(true));
  });
  it('converts falsy strings', () => {
    ['false','0','no','off'].forEach(s => expect(toBoolean(s)).toBe(false));
  });
  it('converts numbers', () => {
    expect(toBoolean(1)).toBe(true);
    expect(toBoolean(0)).toBe(false);
  });
});
