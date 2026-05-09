const { pipe, compose } = require('../utils/pipe');

describe('pipe', () => {
  it('applies functions left to right', () => {
    const result = pipe(x => x + 1, x => x * 2)(3);
    expect(result).toBe(8);
  });
  it('works with a single function', () => {
    expect(pipe(x => x + 1)(4)).toBe(5);
  });
});

describe('compose', () => {
  it('applies functions right to left', () => {
    const result = compose(x => x * 2, x => x + 1)(3);
    expect(result).toBe(8);
  });
});
