const loggingModule = require('./localModule');

// object destructoring (destrukcija)
const { add, div, sub, mul } = require('./calculator');
loggingModule.info('Node js started'); // se povikuva info od localModule modulot

const addition = add(5,6);
console.log(addition);