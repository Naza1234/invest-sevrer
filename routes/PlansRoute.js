const express = require('express');
const router = express.Router();
const controller = require('../controllers/PlansControllers');

router
.post('/', controller.AddPlans)
.get('/', controller.GetAllPlans)
.get('/:id', controller.GetSinglePlan)
.put('/:id', controller.UpdateSinglePlan)
.delete('/:id', controller.DeleteSinglePlan)

module.exports = router;

