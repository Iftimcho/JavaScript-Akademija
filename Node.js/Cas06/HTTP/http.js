// HTTP Methods 
// GET
// POST
// PUT - Se koristi za update
// DELETE

const https = require('https');

const baseUrl = 'https://jsonplaceholder.typicode.com/users';

const request = https.get(baseUrl, (response) => {
    if (response.statusCode !== 200)
    {
        console.error(`Nothing found! ${response.statusCode}`);
        response.resume(); // dokolku sakame da go markirame nekoj http request. so resume mu kazuvame na Node da ja ignorira string data-ta 
        return;
    }

    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('close', () => {
        console.log('Data retrieved');
        console.log(JSON.parse(data));
    });
});


request.on('error', (error) => {
    console.log(`An error has occured ${error.message}`);
})


