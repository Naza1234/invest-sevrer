const express = require('express');
const router = express.Router();
const controller = require('../controllers/PlaninController');

router
.post('/', controller.AddPlanin)
.get('/', controller.GetAllPlanin)
.get('/:id', controller.GetSingleplanin)
.put('/:id', controller.UpdateSinglePlanin)
.delete('/:id', controller.DeleteSingleplanin)

module.exports = router;

