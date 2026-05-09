function mapToObject(map) { return Object.fromEntries(map); }
function objectToMap(obj) { return new Map(Object.entries(obj)); }
module.exports = { mapToObject, objectToMap };
