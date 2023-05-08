const express = require('express');
const router = express.Router();
const controller = require('../controllers/PaymentControllers');

router
.post('/', controller.AddGetWays)
.get('/', controller.GetAllGetWays)
.get('/:id', controller.GetSingleGetWay)
.put('/:id', controller.UpdateSingleGetWay)
.delete('/:id', controller.DeleteSingleGetWay)

module.exports = router;

