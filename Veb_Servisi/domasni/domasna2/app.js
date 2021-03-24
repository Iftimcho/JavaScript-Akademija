const express = require('express');
const hat = require('hat');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const cars = [
    {
        id: hat(),
        name: 'Mazda',
        price: 5000
    },
    {
        id: hat(),
        name: 'Opel',
        price: 4000
    },
    {
        id: hat(),
        name: 'Audi',
        price: 6000
    },
    {
        id: hat(),
        name: 'Lada',
        price: 2000
    },
    {
        id: hat(),
        name: 'Fico',
        price: 1500
    }
];

app.get('/cars', (req, res) => {
    if(req.query.price && Number.isInteger(parseInt(req.query.price))) { // ovaa proverka gi opfakja site ogranicuvanja za number
        res.send(cars.filter((car) => car.price < req.query.price))
    }
    else {
        res.send(cars);
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000....')
});