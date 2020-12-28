// ova bese kreirano vo src folder
const os = require('os');

console.log('Operating system information');
console.log(`os.arch() ${os.arch()}`);
console.log(`os.platform() ${os.platform()}`)
console.log(`os.type() ${os.type()}`);

console.log(`os.uptime() ${os.uptime()}`);
console.log(`os.hostname() ${os.hostname()}`);
console.log(`os.release() ${os.release()}`);

console.log('Path');
console.log(`homedir() is ${os.homedir()}`);
console.log(`os.tmpdir() ${os.tmpdir()}`);

console.log('Memory');
console.log(`free memory ${os.freemem}`)
console.log(`vkupno memorija ${os.totalmem}`);