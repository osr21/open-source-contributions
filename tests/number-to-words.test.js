const { numberToWords } = require('../utils/number-to-words');

describe('numberToWords', () => {
  it('converts zero', () => { expect(numberToWords(0)).toBe('zero'); });
  it('converts single digits', () => { expect(numberToWords(5)).toBe('five'); });
  it('converts teens', () => { expect(numberToWords(13)).toBe('thirteen'); });
  it('converts tens', () => { expect(numberToWords(42)).toBe('forty-two'); });
  it('converts hundreds', () => { expect(numberToWords(100)).toBe('one hundred'); });
  it('converts thousands', () => { expect(numberToWords(1000)).toBe('one thousand'); });
  it('handles negative', () => { expect(numberToWords(-5)).toBe('negative five'); });
});
