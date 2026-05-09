function countBy(arr, key) {
  return arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    acc[g] = (acc[g] || 0) + 1;
    return acc;
  }, {});
}
module.exports = { countBy };
