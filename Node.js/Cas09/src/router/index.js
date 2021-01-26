const { Router } = require('express');
const usersRoutes = require('../users/routes');

const indexRouter = new Router();

indexRouter.use(usersRoutes);

module.exports = indexRouter;
