const fs = require('fs');

const readableStream = fs.createReadStream('./tempFile/text.txt');
const writeableStream = fs.createWriteStream('./tempFile/textWrite.txt');

readableStream.setEncoding('utf-8'); // za od buffer podatoci da se pretvori vo string

readableStream.on('data', (chunk) => {
    writeableStream.write(chunk);
});

// writeableStream.write('Hey');
// writeableStream.write('Hohoo');
// writeableStream.end('HeyHoHeyHo');
// writeableStream.write('Huhu');