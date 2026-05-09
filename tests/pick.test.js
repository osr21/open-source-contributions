const { pick, omit } = require('../utils/pick');

describe('pick', () => {
  it('returns only specified keys', () => {
    expect(pick({ a:1, b:2, c:3 }, ['a','c'])).toEqual({ a:1, c:3 });
  });
  it('ignores missing keys', () => {
    expect(pick({ a:1 }, ['a','z'])).toEqual({ a:1 });
  });
});

describe('omit', () => {
  it('removes specified keys', () => {
    expect(omit({ a:1, b:2, c:3 }, ['b'])).toEqual({ a:1, c:3 });
  });
  it('returns full object if no keys match', () => {
    expect(omit({ a:1 }, ['z'])).toEqual({ a:1 });
  });
});
