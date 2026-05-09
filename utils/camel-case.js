function toCamelCase(str) {
  return str.replace(/[-_s]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, c => c.toLowerCase());
}
function toSnakeCase(str) {
  return str.replace(/([A-Z])/g, '_$1').replace(/[-s]+/g, '_').toLowerCase().replace(/^_/, '');
}
function toKebabCase(str) { return toSnakeCase(str).replace(/_/g, '-'); }
module.exports = { toCamelCase, toSnakeCase, toKebabCase };
