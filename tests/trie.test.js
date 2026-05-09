const { Trie } = require('../utils/trie');

describe('Trie', () => {
  let trie;
  beforeEach(() => {
    trie = new Trie();
    ['apple','app','application','apt','banana'].forEach(w => trie.insert(w));
  });

  it('finds inserted words', () => {
    expect(trie.search('apple')).toBe(true);
    expect(trie.search('app')).toBe(true);
  });

  it('returns false for missing words', () => {
    expect(trie.search('ap')).toBe(false);
    expect(trie.search('mango')).toBe(false);
  });

  it('checks prefix existence', () => {
    expect(trie.startsWith('app')).toBe(true);
    expect(trie.startsWith('xyz')).toBe(false);
  });

  it('returns words with prefix', () => {
    const words = trie.wordsWithPrefix('app');
    expect(words).toContain('app');
    expect(words).toContain('apple');
    expect(words).toContain('application');
  });
});
