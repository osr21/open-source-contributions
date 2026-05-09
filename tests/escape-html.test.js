const { escapeHtml, unescapeHtml } = require('../utils/escape-html');

describe('escapeHtml', () => {
  it('escapes < and >', () => {
    expect(escapeHtml('<div>')).toBe('&lt;div&gt;');
  });
  it('escapes &', () => {
    expect(escapeHtml('a & b')).toBe('a &amp; b');
  });
  it('escapes quotes', () => {
    expect(escapeHtml('"hello"')).toBe('&quot;hello&quot;');
  });
});

describe('unescapeHtml', () => {
  it('is the inverse of escapeHtml', () => {
    const original = '<script>alert("xss")</script>';
    expect(unescapeHtml(escapeHtml(original))).toBe(original);
  });
});
