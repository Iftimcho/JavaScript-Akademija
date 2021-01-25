const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

// ejs view engine setup
app.set('views', path.join(__dirname, 'views')); // go zema direktoriumot vo koj se naogja ovoj fajl i vleguva vo views
app.set('view engine', 'ejs');

// setup na public folder
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ovoj kod ke treba da go razdelime vo soodvetni moduli da ne bide cel kod vo ovoj fajl.
app.get('/', (req,res) => {
    res.render('pages/home'); // ja renderira celata stranica
});

app.get('/links', (req, res) => {
    const items = [
        {
            name: 'node.js',
            url: 'https://nodejs.org/en' 
        },
        {
            name: 'facebook',
            url: 'https://facebook.com'
        },
        {
            name: 'google',
            url: 'https://google.com'
        },
        {
            name: 'expressjs',
            url: 'https://expressjs.com'
        },
        {
            name: 'youtube',
            url: 'https://youtube.com'
        }
    ];
    res.render('pages/links', { links: items });
});

app.get('/list', (req, res) => {
    const items = [
        'html',
        'css',
        'javascript',
        'node',
        'mongoDb',
        'react'
    ];
    res.render('pages/list', { list: items });
});

app.get('/table', (req, res) => {
    const items = [
        {
            name: 'node.js',
            url: 'https://nodejs.org/en' 
        },
        {
            name: 'facebook',
            url: 'https://facebook.com'
        },
        {
            name: 'google',
            url: 'https://google.com'
        },
        {
            name: 'expressjs',
            url: 'https://expressjs.com'
        },
        {
            name: 'youtube',
            url: 'https://youtube.com'
        }
    ];
    res.render('pages/table', { table: items });
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT} port`);
});

