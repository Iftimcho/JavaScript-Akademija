var express = require('express');
var router = express.Router();

const doctorsController = require('../controllers/doctors');
router.get('/', doctorsController.getDoctors)
      .get('/:id', doctorsController.getById)
      .post('/', doctorsController.create)

module.exports = router;
