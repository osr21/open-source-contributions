const { swap, rotate, reverseSlice } = require('../utils/swap');

describe('swap', () => {
  it('swaps two elements', () => { expect(swap([1,2,3], 0, 2)).toEqual([3,2,1]); });
  it('does not mutate original', () => { const a=[1,2,3]; swap(a,0,1); expect(a).toEqual([1,2,3]); });
});

describe('rotate', () => {
  it('rotates left by n positions', () => { expect(rotate([1,2,3,4,5], 2)).toEqual([3,4,5,1,2]); });
  it('handles rotation by full length', () => { expect(rotate([1,2,3], 3)).toEqual([1,2,3]); });
});

describe('reverseSlice', () => {
  it('reverses portion of array', () => { expect(reverseSlice([1,2,3,4,5], 1, 3)).toEqual([1,4,3,2,5]); });
});
