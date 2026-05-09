const { toRoman, fromRoman } = require('../utils/roman-numerals');

describe('toRoman', () => {
  const cases = [[1,'I'],[4,'IV'],[9,'IX'],[14,'XIV'],[40,'XL'],[90,'XC'],[400,'CD'],[900,'CM'],[2024,'MMXXIV']];
  it.each(cases)('converts %d to %s', (n, expected) => { expect(toRoman(n)).toBe(expected); });
});

describe('fromRoman', () => {
  it('converts XIV to 14', () => { expect(fromRoman('XIV')).toBe(14); });
  it('converts MMXXIV to 2024', () => { expect(fromRoman('MMXXIV')).toBe(2024); });
  it('is inverse of toRoman', () => {
    [1,4,9,40,90,400,900,1000].forEach(n => expect(fromRoman(toRoman(n))).toBe(n));
  });
});
