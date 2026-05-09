const { FSM } = require('../utils/fsm');
const light = new FSM({
  initial: 'red',
  transitions: { red:{go:'green'}, green:{slow:'yellow'}, yellow:{stop:'red'} }
});
console.log(light.state); // red
light.send('go');
console.log(light.state); // green
