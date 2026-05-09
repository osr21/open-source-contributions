const { groupBy } = require('../utils/group-by');

const people = [
  { name: 'Alice', dept: 'Engineering' },
  { name: 'Bob', dept: 'Design' },
  { name: 'Carol', dept: 'Engineering' },
  { name: 'Dave', dept: 'Design' },
];

const byDept = groupBy(people, 'dept');
console.log(byDept);
// {
//   Engineering: [{ name: 'Alice', ... }, { name: 'Carol', ... }],
//   Design: [{ name: 'Bob', ... }, { name: 'Dave', ... }]
// }
