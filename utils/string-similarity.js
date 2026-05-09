/**
 * Calculate string similarity using bigrams (Dice coefficient).
 * Returns a value between 0 (no similarity) and 1 (identical).
 */
function stringSimilarity(a, b) {
  if (a === b) return 1;
  if (a.length < 2 || b.length < 2) return 0;
  const getBigrams = s => {
    const bigrams = new Map();
    for (let i = 0; i < s.length - 1; i++) {
      const bg = s.slice(i, i + 2);
      bigrams.set(bg, (bigrams.get(bg) || 0) + 1);
    }
    return bigrams;
  };
  const bigramsA = getBigrams(a), bigramsB = getBigrams(b);
  let intersection = 0;
  for (const [bg, count] of bigramsA) {
    intersection += Math.min(count, bigramsB.get(bg) || 0);
  }
  return (2 * intersection) / (a.length + b.length - 2);
}

module.exports = { stringSimilarity };
