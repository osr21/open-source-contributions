const { Trie } = require('../utils/trie');

const trie = new Trie();
['apple', 'app', 'application', 'apt', 'banana'].forEach(w => trie.insert(w));

console.log(trie.search('apple'));       // true
console.log(trie.search('ap'));          // false (not inserted as whole word)
console.log(trie.startsWith('app'));     // true
console.log(trie.wordsWithPrefix('app')); // ['app', 'apple', 'application']
