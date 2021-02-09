// Dobra praktika ea prvo da se vklucat vgradenite paketi, pa potoa da gi vklucime nasite paketi

const { Router } = require('express'); // go zemame Router paketot koj e vgraden vo express, a ne celiot express.
const actions = require('./actions');

const clientsRouter = new Router();
const { list, get, create, update, del } = actions;

// LIST
clientsRouter.get('/clients', list);
// Get by id
clientsRouter.get('/clients/:id', get);
// create
clientsRouter.post('/clients', create);
// update
clientsRouter.put('/clients/:id', update);
clientsRouter.delete('/clients/:id', del);

module.exports = clientsRouter;