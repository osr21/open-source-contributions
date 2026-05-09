function toBoolean(value) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value !== 0;
  if (typeof value === 'string')
    return ['true', '1', 'yes', 'on'].includes(value.toLowerCase().trim());
  return Boolean(value);
}
module.exports = { toBoolean };
