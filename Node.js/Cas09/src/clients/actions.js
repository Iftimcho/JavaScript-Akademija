const clientsDb = require('../db/clients.json');
const fs = require('fs');
const hat = require('hat');
const pathToClients = 'C:\\Users\\Timce\\Desktop\\Akademija\\Node.js\\Cas09\\src\\db\\clients.json';

async function list(req, res, next) {
    const clients = fs.readFileSync(pathToClients, 'utf-8');
    res.send({ body: JSON.parse(clients) });
    await next;
}

async function get(req, res, next) {
    const { id } = req.params;
    // da gi procitame i da se zapoznaeme so propertijata od req.
    
    const isFound = clientsDb.findIndex(client => client.id === id);  // const isFound = clientsDb.find(Client => Client.id === id) > -1; vrakja objekt dokolku go pronajde. Pa so proverkata if(isFound)
    if(isFound) {                                               // sekogas vrakja false, bidejki isFound ima vrednost na objekt a ne true ili false.    
        const foundClient = clientsDb.find(client => client.id === id);
        res.send({ body: foundClient });
    } else {
        res.send({ error: `Client ${id} is not found.` });
    }
    await next;
}

async function create(req, res, next) {
    const {
        name,
        surname,
        dateOfBirth,
        age
    } = req.body;
    const requestPayload = {
        id: hat(), // isto so clientsDb.length++
        // firstName: 'Timce',
        // lastName: 'Pop-Icovski',
        // Clientname: 'timcepopicovski'
        name,
        surname,
        dateOfBirth,
        age
    }

    clientsDb.push(requestPayload);
    fs.writeFileSync(pathToClients, JSON.stringify(clientsDb), (err) => {
        console.log('Client added');
    });
    res.send({ body: clientsDb });
    await next;
}

async function update(req, res, next) {
    const { 
        name,
        surname,
        dateOfBirth,
        age 
    } = Object.assign({}, req.body);
    const { id } = req.params; // const id = req.params.id;
    const clientIndex = clientsDb.findIndex(client => client.id === id); // Client.id i id se i dvete string i zatoa proverkata === e okej. So ova go naogjame indeksot na objektot vo nizata
    if (clientIndex > -1) {
        if(req.body.id){
            res.send({ error: 'Id parameter can not be overrwritten.' });
        } else{
            const toUpdateData = {
                id,
                name,
                surname,
                dateOfBirth,
                age
            } // se updejtuva celiot objekt a ne samo eden atribut na objektot.
            // let niza = JSON.parse(clientsDb); 
            clientsDb[clientIndex] = toUpdateData;
            fs.writeFile(pathToClients, JSON.stringify(clientsDb), (err) => {
                if (err) {
                    throw err;
                }
                console.log('File updated');
            });
            res.send({ body: clientsDb }); // vo body moze da go dodelime i req.body
        }
    } else {
        res.send({ error: `Client with id: ${id} is not found!` })
    }
     
    // const isFound = clientsDb.find(Client => Client.id === id) > -1; // so ova go naogjame Clientot
    await next;
}

async function del(req, res, next) {
    const { id } = req.params;
    const clientIndex = clientsDb.findIndex(client => client.id === id);
    if(clientIndex > -1) {
        // Ova e mojot kod 
        // clientsDb.filter((el) => {
        //     return el.id !== id;
        // });
        // res.send({ body: clientsDb });
        clientsDb.splice(clientIndex, 1); // splice prima index i od toj index mu kazuvame kolku elementi da izbrisi. Vo ovoj slucaj od index na Client-ot zima eden i so toa go brisi samiot korisnik
        res.send({ body: `Client with id ${id} has been deleted` });
    } else {
        res.send({ error: `Client ${id} is not found.` });
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