const express = require('express');
// const bodyParser = require('body-parser');

const app = express();
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded());
// database simulation pravime


// query parametrite se zemaa so req.query
// /users - vaka izgleda vo express
// /users?id=5&name=Boban - vaka izgleda vo browser
// req.query = {
//   id: 5,
//   name: Boban
// }
// route parametrite se zemaa so req.params
// /users/:id/profiles/:name vaka se pisuva vo express
// /users/5/profiles/boban vaka izgleda vo browser
// req.params = {
//   id: 5,
//   name: Boban
// }

const players = [
    {
        name: 'Timce',
        lastName: 'Popicovski'
    },
    {
        name: 'Kosta',
        lastName: 'Petrov'
    },
    {
        name: 'Lionel',
        lastName: 'Messi'
    }
]

app.get('/people', (req, res) => {
    // console.log(req.body)
    console.log(req.query)
    res.send({
        message: 'GET request to /people',
        players: players,
        name: req.query.name,
        surname: req.query.surname,
        age: req.query.age
    });
    })
    .get('/football', (req, res) => {
        res.send({
            message: 'GET request to /football',
            firstName: req.query.firstName,
            lastName: req.query.lastName,
            team: req.query.team
        });
    })
    .get('/people/:id/:name', (req, res)=> {
        // kod koj sto go naopgja korisnikot po id
        const user = {
            id: req.params.id,
            name: req.params.name
        }
        res.send(user);
    })
    .get('/football/:team/player/:name', (req, res) => {
        const player = {
            team: req.params.team,
            name: req.params.name
        }
        res.send(player);
    })
    // .post('/people', (req, res) => {

    // }) 

app.listen(3000, () => {
    console.log('App is running on port 3000...');
});