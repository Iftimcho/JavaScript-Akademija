const express = require('express');
const router = express.Router();
const controller = require('../../controllers/storage');

router.get('/:filename', controller.fetch)
      .post('/', controller.upload)
      .delete('/:filename', controller.delete);

module.exports = router;