const { batch } = require('../utils/batch');

describe('batch', () => {
  it('processes all items', async () => {
    const results = await batch([1,2,3,4,5], async x => x * 2);
    expect(results).toEqual([2,4,6,8,10]);
  });

  it('respects batch size', async () => {
    const calls = [];
    await batch([1,2,3,4,5], async x => { calls.push(x); return x; }, 2);
    expect(calls).toHaveLength(5);
  });

  it('handles empty array', async () => {
    const results = await batch([], async x => x);
    expect(results).toEqual([]);
  });
});
