const { zip, unzip } = require('../utils/zip');
const zipped = zip(['Alice','Bob','Carol'], [95, 82, 88]);
console.log(zipped); // [['Alice',95],['Bob',82],['Carol',88]]
const [names, scores] = unzip(zipped);
console.log(names, scores);
