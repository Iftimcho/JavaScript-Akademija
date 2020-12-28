const fs = require('fs');

// FOLLOWING mode streams. Toa e nacin na rabota na streams.
let data = '';

const readableStream = fs.createReadStream('./tempFile/text.txt'); // ova kreira readable stream koj cita od fajl

readableStream.setEncoding('utf-8');

// data, end, error <= Ovie se stream eventi. Tie se preddefinirani ne mozeme da si stavime nasi iminja za event

readableStream.on('data', (chunk) => {
    data += chunk;
    // rezultatot od ova ke bide na primer:
    // prvo Hello
    // posle Hello World
    // posle Hello World 2021
    // posle Hello World 2021 Happy
});


// STRIMOT MORA DA GO ZATVORIME. Toa se pravi so end eventot i duri togas gi dobivame podatocite. Znaci mora da zavrsi citanjeto pa da gi ispecatime ili dobieme podatocite.
readableStream.on('end', () => {
    console.log(data);
});

readableStream.on('error', (error) => {
    // probaj so error.stack ili error.message da vidis sto e razlikata!
    console.log(error);
});

console.log('Program has ended.');






