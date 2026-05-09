function zip(a, b) {
  return Array.from({ length: Math.min(a.length, b.length) }, (_, i) => [a[i], b[i]]);
}
function unzip(pairs) {
  return pairs.reduce(([as, bs], [a, b]) => [[...as, a], [...bs, b]], [[], []]);
}
module.exports = { zip, unzip };
