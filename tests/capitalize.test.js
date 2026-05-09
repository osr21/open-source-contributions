const { capitalize, titleCase, truncate } = require('../utils/capitalize');

describe('capitalize', () => {
  it('capitalizes first letter', () => { expect(capitalize('hello')).toBe('Hello'); });
  it('handles empty string', () => { expect(capitalize('')).toBe(''); });
});

describe('titleCase', () => {
  it('capitalizes first letter of each word', () => {
    expect(titleCase('hello world')).toBe('Hello World');
  });
});

describe('truncate', () => {
  it('truncates strings exceeding max length', () => {
    expect(truncate('Hello World', 8)).toBe('Hello...');
  });
  it('does not truncate shorter strings', () => {
    expect(truncate('Hi', 10)).toBe('Hi');
  });
});
