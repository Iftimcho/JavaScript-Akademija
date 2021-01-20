// console.log('Hello there!');
// console.log('Hi');

// console.log(5 + 5);

// console.log('Printing after a change with nodemon external package. The server will restart after saving the program.');

const http = require('http');
const { StringDecoder } = require('string_decoder');
const util = require('util');
const url = require('url');
// const path = require('path');

const PORT = process.env.PORT || 3000; // ke ja iskoristi porta 3000 dokolku nemame konfiguraciski fajl(env)

const server = http.createServer((req, res) => {
    // primer za endpoint localhost:3000/api/courses
    // if(req.url === '/') {
    //     res.write('Hello World to Home Page');
    //     res.end();
    // } else if (req.url === '/api/courses/nodejs') {
    //     res.write('The response \n\n ')
    //     res.write('Node js Course @Gen10\n\n'); // ova \n ni stava new line od koga ke se ispecati porakata. Narednoto pecatenje ke bide vo nov red.
    //     res.write(JSON.stringify([1,2,3]) + '\n\n');
    //     res.end('End of Message to Response');
    // } else {
    //     res.write('Please visit /api/courses/nodejs');
    //     res.end();
    // }

    let decoder = new StringDecoder('utf-8'); // ce;ot tekst od buffer go pretvora vo string
    let buffer = '';

    req.on('data', (chunk) => {
        buffer += decoder.write(chunk);
    });

    let path = url.parse(req.url, true);
    req.on('end', () => {
        buffer += decoder.end();
        res.writeHead(200, "OK", { "Content-type" : "text/plain" });
        res.write('The response \n\n');
        res.write(util.inspect(path.query) + '\n\n');
        res.write(buffer + '\n\n');
        res.end('End of the Message to Response');
    });
});

// ports
// 443 - https
// 80, 8080 - http

server.listen(PORT, () => {
    console.log(`The HTTP Server is running/listening for request at port ${PORT}...`);
});