const { groupBy } = require('../utils/group-by');

describe('groupBy', () => {
  const people = [
    { name: 'Alice', dept: 'Eng' },
    { name: 'Bob', dept: 'Design' },
    { name: 'Carol', dept: 'Eng' },
  ];

  it('groups by string key', () => {
    const result = groupBy(people, 'dept');
    expect(result.Eng).toHaveLength(2);
    expect(result.Design).toHaveLength(1);
  });

  it('groups by function', () => {
    const result = groupBy([1,2,3,4], n => n % 2 === 0 ? 'even' : 'odd');
    expect(result.even).toEqual([2, 4]);
    expect(result.odd).toEqual([1, 3]);
  });
});
