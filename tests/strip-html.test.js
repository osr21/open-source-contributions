const { stripHtml, extractText } = require('../utils/strip-html');

describe('stripHtml', () => {
  it('removes all HTML tags', () => {
    expect(stripHtml('<p>Hello <b>world</b></p>')).toBe('Hello world');
  });
  it('handles self-closing tags', () => {
    expect(stripHtml('Line 1<br/>Line 2')).toBe('Line 1Line 2');
  });
  it('returns plain text unchanged', () => {
    expect(stripHtml('no tags here')).toBe('no tags here');
  });
});

describe('extractText', () => {
  it('strips tags and trims whitespace', () => {
    expect(extractText('  <div>  hello   world  </div>  ')).toBe('hello world');
  });
});
