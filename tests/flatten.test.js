const { flatten, deepFlatten } = require('../utils/flatten');

describe('flatten', () => {
  it('flattens one level by default', () => {
    expect(flatten([1,[2,[3]]])).toEqual([1,2,[3]]);
  });
  it('flattens to given depth', () => {
    expect(flatten([1,[2,[3,[4]]]], 2)).toEqual([1,2,3,[4]]);
  });
});

describe('deepFlatten', () => {
  it('flattens all levels', () => {
    expect(deepFlatten([1,[2,[3,[4,[5]]]]])).toEqual([1,2,3,4,5]);
  });
});
