const { buildUrl, getParam } = require('../utils/parse-url');

describe('buildUrl', () => {
  it('appends query params to base URL', () => {
    const result = buildUrl('https://example.com/search', { q: 'hello', page: '1' });
    expect(result).toContain('q=hello');
    expect(result).toContain('page=1');
  });
  it('works without params', () => {
    expect(buildUrl('https://example.com')).toBe('https://example.com/');
  });
});

describe('getParam', () => {
  it('returns a specific query param', () => {
    expect(getParam('https://example.com?foo=bar', 'foo')).toBe('bar');
  });
  it('returns null for missing param', () => {
    expect(getParam('https://example.com', 'missing')).toBeNull();
  });
});
