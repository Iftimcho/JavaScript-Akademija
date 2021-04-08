const express = require('express');
const authRouter = express.Router();
const authController = require('../../controllers/auth');
authRouter.get('/', authController.fetch)
      .post('/register', authController.register)
      .post('/login', authController.login)

module.exports = authRouter;