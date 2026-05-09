const { asyncMap, asyncFilter } = require('../utils/async-map');

describe('asyncMap', () => {
  it('maps with async function', async () => {
    const result = await asyncMap([1,2,3], async x => x * 2);
    expect(result).toEqual([2,4,6]);
  });
});

describe('asyncFilter', () => {
  it('filters with async predicate', async () => {
    const result = await asyncFilter([1,2,3,4,5], async x => x % 2 === 0);
    expect(result).toEqual([2,4]);
  });
});
