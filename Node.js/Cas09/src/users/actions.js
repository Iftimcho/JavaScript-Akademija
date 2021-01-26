const usersDb = require('../db/users.json');
const fs = require('fs');
const hat = require('hat');
const pathToUsers = 'C:\\Users\\Timce\\Desktop\\Akademija\\Node.js\\Cas09\\src\\db\\users.json';

async function list(req, res, next) {
    const users = fs.readFileSync(pathToUsers, 'utf-8');
    res.send({ body: JSON.parse(users) });
    await next;
}

async function get(req, res, next) {
    const { id } = req.params;
    // da gi procitame i da se zapoznaeme so propertijata od req.
    
    const isFound = usersDb.findIndex(user => user.id === id);  // const isFound = usersDb.find(user => user.id === id) > -1; vrakja objekt dokolku go pronajde. Pa so proverkata if(isFound)
    if(isFound) {                                               // sekogas vrakja false, bidejki isFound ima vrednost na objekt a ne true ili false.    
        const foundUser = usersDb.find(user => user.id === id);
        res.send({ body: foundUser });
    } else {
        res.send({ error: `User ${id} is not found.` });
    }
    await next;
}

async function create(req, res, next) {
    const {
        firstName,
        lastName,
        username
    } = req.body;
    const requestPayload = {
        id: hat(), // isto so usersDb.length++
        // firstName: 'Timce',
        // lastName: 'Pop-Icovski',
        // username: 'timcepopicovski'
        firstName,
        lastName,
        username
    }

    usersDb.push(requestPayload);
    fs.writeFileSync(pathToUsers, JSON.stringify(usersDb), (err) => {
        console.log('User added');
    });
    res.send({ body: usersDb });
    await next;
}

async function update(req, res, next) {
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
            // let niza = JSON.parse(usersDb); 
            usersDb[userIndex] = toUpdateData;
            fs.writeFile(pathToUsers, JSON.stringify(usersDb), (err) => {
                if (err) {
                    throw err;
                }
                console.log('File updated');
            });
            res.send({ body: usersDb }); // vo body moze da go dodelime i req.body
        }
    } else {
        res.send({ error: `User with id: ${id} is not found!` })
    }
     
    // const isFound = usersDb.find(user => user.id === id) > -1; // so ova go naogjame userot
    await next;
}

async function del(req, res, next) {
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
    await next;
}

module.exports = {
    list,
    get,
    create,
    update,
    del
};