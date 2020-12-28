const path = require('path');

const fileName = __filename;

console.log(`Delimeter is ${path.delimiter}`);

console.log('dirname', path.dirname(fileName));

console.log(`basename : ${path.basename(fileName)}`);

console.log(`extension : ${path.extname(fileName)}`);


// parsiranje na celata pateka

console.log('parse', path.parse(fileName));

// moze i na ovoj nacin da se zemaat
const parsePath = path.parse(fileName);
console.log(parsePath.ext);