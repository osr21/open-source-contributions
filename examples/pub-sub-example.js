const { PubSub } = require('../utils/pub-sub');

const bus = new PubSub();

const unsub = bus.subscribe('user:login', ({ username }) => {
  console.log('User logged in:', username);
});

bus.publish('user:login', { username: 'alice' }); // User logged in: alice
bus.publish('user:login', { username: 'bob' });   // User logged in: bob

unsub(); // stop listening
bus.publish('user:login', { username: 'carol' }); // (no output)
