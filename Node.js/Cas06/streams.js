const {Readable} = require('stream');
const fs = require('fs');
const { assert } = require('assert');
async function logChunks(readable){
    for await (const chunk of readable)
    {
        console.log('Chunk', chunk);
    }
}

const readableFile = fs.createReadStream('./tempFile/text.txt', { encoding: 'utf8' });

logChunks(readableFile);

async function readableToString(readable) {
    let result = ''; // datatype e string 
    for await(const chunk of readable)
    {
        result += chunk;
    }
    return result;
}

const readableWithStream = Readable.from('Hello, we are semos education and we are learning Node.js', { encoding: 'utf-8' });



// vo javascript i node se koristi assert za da se proveri dali nekoi vrednosti se ednakvi
// assert.equal(await readableToString(readableWithStream), 'Hello, we are semos education and we are learning Node.js ');
// const readableStream = new Stream.Readable();

// readableStream.push('ping!');
// readableStream.push('pong!');
// readableStream.push(null);

readableToString(readableWithStream).then((res) => {
    console.log(res);
})