const express = require('express');
const usersRouter = express.Router();
const usersController = require('../../controllers/users');
usersRouter.get('/', usersController.fetch)
           .get('/:email', usersController.fetchOne)

module.exports = usersRouter;