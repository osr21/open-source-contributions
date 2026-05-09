const { toCamelCase, toSnakeCase, toKebabCase } = require('../utils/camel-case');

describe('toCamelCase', () => {
  it('converts kebab to camel', () => { expect(toCamelCase('foo-bar-baz')).toBe('fooBarBaz'); });
  it('converts snake to camel', () => { expect(toCamelCase('foo_bar')).toBe('fooBar'); });
});

describe('toSnakeCase', () => {
  it('converts camel to snake', () => { expect(toSnakeCase('fooBarBaz')).toBe('foo_bar_baz'); });
});

describe('toKebabCase', () => {
  it('converts camel to kebab', () => { expect(toKebabCase('fooBarBaz')).toBe('foo-bar-baz'); });
});
