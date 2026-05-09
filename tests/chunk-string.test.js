const { chunkString, splitLines, wordWrap } = require('../utils/chunk-string');

describe('chunkString', () => {
  it('splits into equal chunks', () => {
    expect(chunkString('abcdef', 2)).toEqual(['ab','cd','ef']);
  });
  it('handles remainder', () => {
    expect(chunkString('abcde', 2)).toEqual(['ab','cd','e']);
  });
  it('returns whole string if size >= length', () => {
    expect(chunkString('hi', 10)).toEqual(['hi']);
  });
});

describe('splitLines', () => {
  it('splits on newline', () => { expect(splitLines('a
b
c')).toEqual(['a','b','c']); });
  it('handles CRLF', () => { expect(splitLines('a
b')).toEqual(['a','b']); });
});

describe('wordWrap', () => {
  it('wraps at the specified width', () => {
    const result = wordWrap('one two three four five', 10);
    result.split('
').forEach(line => expect(line.length).toBeLessThanOrEqual(10));
  });
});
