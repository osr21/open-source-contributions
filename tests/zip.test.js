const { zip, unzip } = require('../utils/zip');

describe('zip', () => {
  it('pairs two arrays', () => {
    expect(zip([1,2,3], ['a','b','c'])).toEqual([[1,'a'],[2,'b'],[3,'c']]);
  });
  it('stops at the shorter array', () => {
    expect(zip([1,2,3], ['a','b'])).toEqual([[1,'a'],[2,'b']]);
  });
});

describe('unzip', () => {
  it('splits pairs into two arrays', () => {
    const [a, b] = unzip([[1,'a'],[2,'b'],[3,'c']]);
    expect(a).toEqual([1,2,3]);
    expect(b).toEqual(['a','b','c']);
  });
});
