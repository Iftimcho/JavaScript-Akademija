// Dobra praktika ea prvo da se vklucat vgradenite paketi, pa potoa da gi vklucime nasite paketi

const { Router } = require('express'); // go zemame Router paketot koj e vgraden vo express, a ne celiot express.
const actions = require('./actions');

const userRouter = new Router();
const { list, get, create, update, del } = actions;

// LIST
userRouter.get('/users', list);
// Get by id
userRouter.get('/users/:id', get);
// create
userRouter.post('/users', create);
// update
userRouter.put('/users/:id', update);
userRouter.delete('/users/:id', del);

module.exports = userRouter;