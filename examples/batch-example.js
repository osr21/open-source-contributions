const { batch } = require('../utils/batch');
const ids = [1,2,3,4,5,6,7,8,9,10];
async function fetchUser(id) {
  await new Promise(r => setTimeout(r, 10));
  return { id, name: 'User ' + id };
}
batch(ids, fetchUser, 3).then(users => console.log('Fetched:', users.length, 'users'));
