function pluralize(word, count, plural) {
  if (count === 1) return word;
  if (plural) return plural;
  if (/( s|x|z|ch|sh)$/i.test(word)) return word + 'es';
  if (/[^aeiou]y$/i.test(word)) return word.slice(0, -1) + 'ies';
  return word + 's';
}
module.exports = { pluralize };
