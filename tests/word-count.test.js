const { wordCount, charCount, readingTime } = require('../utils/word-count');

describe('wordCount', () => {
  it('counts words correctly', () => { expect(wordCount('Hello world')).toBe(2); });
  it('handles extra whitespace', () => { expect(wordCount('  foo   bar  ')).toBe(2); });
  it('returns 0 for empty string', () => { expect(wordCount('')).toBe(0); });
});

describe('charCount', () => {
  it('counts all characters including spaces', () => { expect(charCount('hello world')).toBe(11); });
  it('counts without spaces', () => { expect(charCount('hello world', false)).toBe(10); });
});

describe('readingTime', () => {
  it('estimates reading time', () => {
    const text = Array(200).fill('word').join(' ');
    expect(readingTime(text)).toBe(1);
  });
});
