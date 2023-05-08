const express = require('express');
const router = express.Router();
const controller = require('../controllers/FundControllers');

router
.post('/', controller.AddFunds)
.get('/', controller.GetAllFunds)
.get('/:id', controller.GetSingleFund)
.put('/:id', controller.UpdateSingleFund)
.delete('/:id', controller.DeleteSingleFund)

module.exports = router;

