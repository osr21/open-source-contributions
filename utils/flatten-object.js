function flattenObject(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, key) => {
    const full = prefix ? prefix + '.' + key : key;
    if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key]))
      Object.assign(acc, flattenObject(obj[key], full));
    else acc[full] = obj[key];
    return acc;
  }, {});
}
module.exports = { flattenObject };
