const express = require('express');
const authRouter = express.Router();
const authController = require('../../controllers/auth');
authRouter.post('/register', authController.register)
          .post('/login', authController.login)
          .get('/refresh-token', authController.refresh_token)

module.exports = authRouter;