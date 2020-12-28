
//              PAUZIRACKI MODE na Streams

const fs = require('fs');

const readableStream = fs.createReadStream('./tempFile/text.txt');

let data = '';

let chunk;

readableStream.on('readable', () => {
    while((chunk = readableStream.read()) !== null)
    {
        data += chunk;
        console.log(chunk);
    }
});

readableStream.on('end', () => {
    console.log(data);
})