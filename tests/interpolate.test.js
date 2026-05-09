const { interpolate } = require('../utils/interpolate');

describe('interpolate', () => {
  it('replaces placeholders with values', () => {
    expect(interpolate('Hello, {name}!', { name: 'Alice' })).toBe('Hello, Alice!');
  });
  it('leaves missing keys unchanged', () => {
    expect(interpolate('Hi {name}, see {place}', { name: 'Bob' })).toBe('Hi Bob, see {place}');
  });
  it('handles multiple different placeholders', () => {
    expect(interpolate('{a} + {b} = {c}', { a: '1', b: '2', c: '3' })).toBe('1 + 2 = 3');
  });
});
