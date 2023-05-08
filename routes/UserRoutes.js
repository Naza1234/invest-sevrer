const express = require('express');
const router = express.Router();
const controller = require('../controllers/UserControllers');

router
.post('/', controller.AddUsers)
.get('/', controller.GetAllUsers)
.get('/:id', controller.GetSingleUsers)
.put('/:id', controller.UpdateSingleUsers)
.delete('/:id', controller.DeleteSingleUsers)

module.exports = router;

