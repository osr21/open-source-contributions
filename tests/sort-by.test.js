const { sortBy } = require('../utils/sort-by');

const data = [{ name: 'Charlie', age: 28 }, { name: 'Alice', age: 32 }, { name: 'Bob', age: 25 }];

describe('sortBy', () => {
  it('sorts ascending by key', () => {
    expect(sortBy(data, 'age').map(p => p.age)).toEqual([25, 28, 32]);
  });
  it('sorts descending with - prefix', () => {
    expect(sortBy(data, '-age').map(p => p.age)).toEqual([32, 28, 25]);
  });
  it('does not mutate original array', () => {
    const copy = [...data];
    sortBy(data, 'name');
    expect(data).toEqual(copy);
  });
});
