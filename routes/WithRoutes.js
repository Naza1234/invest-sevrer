const express = require('express');
const router = express.Router();
const controller = require('../controllers/WithControllers');

router
.post('/', controller.AddWith)
.get('/', controller.GetAllWith)
.get('/:id', controller.GetSingleWith)
.put('/:id', controller.UpdateSingleWith)
.delete('/:id', controller.DeleteSingleWith)

module.exports = router;

