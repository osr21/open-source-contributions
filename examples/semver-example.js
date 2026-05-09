const { compareSemver, satisfies } = require('../utils/semver');
console.log(compareSemver('1.2.3', '1.2.4')); // -1
console.log(compareSemver('2.0.0', '1.9.9')); // 1
console.log(satisfies('1.5.0', '1.2.0'));      // true
