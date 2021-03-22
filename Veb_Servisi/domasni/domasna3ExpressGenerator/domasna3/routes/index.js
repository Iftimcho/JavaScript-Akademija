var express = require('express');
var router = express.Router();
const carsController = require('../controllers/cars')

router
      .get('/', carsController.fetch)
      .post('/cars', carsController.create)
      .delete('/cars/:_id', carsController.del)
      .put('/cars/:_id', carsController.update)
      .patch('/cars/:_id', carsController.updatePatch)
module.exports = router;