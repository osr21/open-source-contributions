const { encodeBase64, decodeBase64 } = require('../utils/base64');

describe('encodeBase64 / decodeBase64', () => {
  const cases = ['hello', 'Hello, World!', '{"key":"value"}', ''];
  it.each(cases)('round-trips "%s"', (str) => {
    expect(decodeBase64(encodeBase64(str))).toBe(str);
  });
  it('produces known base64 for "hello"', () => {
    expect(encodeBase64('hello')).toBe('aGVsbG8=');
  });
});
