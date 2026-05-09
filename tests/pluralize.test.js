const { pluralize } = require('../utils/pluralize');

describe('pluralize', () => {
  it('returns singular for count of 1', () => { expect(pluralize('cat', 1)).toBe('cat'); });
  it('returns plural for count > 1', () => { expect(pluralize('cat', 2)).toBe('cats'); });
  it('uses custom plural when provided', () => { expect(pluralize('person', 2, 'people')).toBe('people'); });
  it('handles -y ending', () => { expect(pluralize('baby', 2)).toBe('babies'); });
  it('handles -ch ending', () => { expect(pluralize('watch', 2)).toBe('watches'); });
});
