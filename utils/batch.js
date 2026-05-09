async function batch(items, fn, batchSize = 5) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const chunk = items.slice(i, i + batchSize);
    results.push(...await Promise.all(chunk.map(fn)));
  }
  return results;
}
module.exports = { batch };
