// nadvoresni paketi
const express = require('express'); // so ovoj framework ke kreirame aplikacija
const bodyParser = require('body-parser'); // ovozmozuva parsiranje na celoto body koe ke go isprakjame kako request i ke go dobivame kako response

// da gi procitame site podatoci od users.json vo index.js
const usersDb = require('./db/users.json');
const e = require('express');

// so ovoj kod od 5-ta do 11 linija imame setirano ednostavna express js aplikacija
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false })); // query-string
app.use(bodyParser.json());

// CRUD Operations (Create, Read, Update, Delete)

// HTTP Methods (POST, GET, PUT, DELETE)

// List of users
app.get('/users', (req,res) => {
    res.send({ body: usersDb });
})

// Single user
app.get('/users/:id', (req, res) => {
    // let id = req.params.id;
    const { id } = req.params;
    // da gi procitame i da se zapoznaeme so propertijata od req.
    
    const isFound = usersDb.findIndex(user => user.id === id);  // const isFound = usersDb.find(user => user.id === id) > -1; vrakja objekt dokolku go pronajde. Pa so proverkata if(isFound)
    if(isFound) {                                               // sekogas vrakja false, bidejki isFound ima vrednost na objekt a ne true ili false.    
        const foundUser = usersDb.find(user => user.id === id);
        res.send({ body: foundUser });
    } else {
        res.send({ error: `User ${id} is not found.` });
    }
});

// Create user

app.post('/users', (req, res) => {
    const {
        firstName,
        lastName,
        username
    } = req.body;
    const requestPayload = {
        id: String(usersDb.length + 1), // isto so usersDb.length++
        // firstName: 'Timce',
        // lastName: 'Pop-Icovski',
        // username: 'timcepopicovski'
        firstName,
        lastName,
        username
    }

    usersDb.push(requestPayload);
    res.send({ body: usersDb });
});

// UPDATE USER

app.put('/users/:id', (req, res) => {
    const { 
        firstName,
        lastName,
        username 
    } = Object.assign({}, req.body);
    const { id } = req.params; // const id = req.params.id;
    const userIndex = usersDb.findIndex(user => user.id === id); // user.id i id se i dvete string i zatoa proverkata === e okej. So ova go naogjame indeksot na objektot vo nizata
    if (userIndex > -1) {
        if(req.body.id){
            res.send({ error: 'Id parameter can not be overrwritten.' });
        } else{
            const toUpdateData = {
                id,
                firstName,
                lastName,
                username
            } // se updejtuva celiot objekt a ne samo eden atribut na objektot. 
            usersDb[userIndex] = toUpdateData;
            res.send({ body: usersDb }); // vo body moze da go dodelime i req.body
        }
    } else {
        res.send({ error: `User with id: ${id} is not found!` })
    }
     
    // const isFound = usersDb.find(user => user.id === id) > -1; // so ova go naogjame userot
});

// DELETE USER
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = usersDb.findIndex(user => user.id === id);
    if(userIndex > -1) {
        // Ova e mojot kod 
        // usersDb.filter((el) => {
        //     return el.id !== id;
        // });
        // res.send({ body: usersDb });
        usersDb.splice(userIndex, 1); // splice prima index i od toj index mu kazuvame kolku elementi da izbrisi. Vo ovoj slucaj od index na user-ot zima eden i so toa go brisi samiot korisnik
        res.send({ body: `User with id ${id} has been deleted` });
    } else {
        res.send({ error: `User ${id} is not found.` });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
