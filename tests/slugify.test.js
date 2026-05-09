const { slugify } = require('../utils/slugify');

describe('slugify', () => {
  it('converts spaces to hyphens', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });
  it('removes special characters', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
  });
  it('lowercases the string', () => {
    expect(slugify('HELLO')).toBe('hello');
  });
  it('trims leading/trailing hyphens', () => {
    expect(slugify('  hello  ')).toBe('hello');
  });
  it('handles multiple spaces', () => {
    expect(slugify('foo   bar')).toBe('foo-bar');
  });
});
