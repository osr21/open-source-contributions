const { countBy } = require('../utils/count-by');

describe('countBy', () => {
  it('counts by string key', () => {
    const result = countBy([{t:'a'},{t:'b'},{t:'a'}], 'type');
    expect(result).toEqual({ undefined: 3 });
  });
  it('counts by string key correctly', () => {
    const items = [{ type: 'x' }, { type: 'y' }, { type: 'x' }];
    expect(countBy(items, 'type')).toEqual({ x: 2, y: 1 });
  });
  it('counts by function', () => {
    expect(countBy([1,2,3,4], n => n % 2 === 0 ? 'even' : 'odd')).toEqual({ odd: 2, even: 2 });
  });
});
