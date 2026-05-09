function sortBy(arr, ...keys) {
  return [...arr].sort((a, b) => {
    for (const key of keys) {
      const desc = key.startsWith('-'), k = desc ? key.slice(1) : key;
      if (a[k] < b[k]) return desc ? 1 : -1;
      if (a[k] > b[k]) return desc ? -1 : 1;
    }
    return 0;
  });
}
module.exports = { sortBy };
