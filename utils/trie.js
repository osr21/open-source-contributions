/**
 * Trie (prefix tree) for fast string prefix lookup.
 */
class Trie {
  constructor() { this.root = {}; }

  insert(word) {
    let node = this.root;
    for (const ch of word) { node = node[ch] = node[ch] || {}; }
    node.$end = true;
  }

  search(word) {
    let node = this.root;
    for (const ch of word) { if (!node[ch]) return false; node = node[ch]; }
    return !!node.$end;
  }

  startsWith(prefix) {
    let node = this.root;
    for (const ch of prefix) { if (!node[ch]) return false; node = node[ch]; }
    return true;
  }

  wordsWithPrefix(prefix) {
    let node = this.root;
    for (const ch of prefix) { if (!node[ch]) return []; node = node[ch]; }
    const results = [];
    const dfs = (n, str) => {
      if (n.$end) results.push(str);
      for (const ch of Object.keys(n).filter(k => k !== '$end')) dfs(n[ch], str + ch);
    };
    dfs(node, prefix);
    return results;
  }
}

module.exports = { Trie };
