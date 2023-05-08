const express = require('express');
const router = express.Router();
const controller = require('../controllers/TicketControllers');

router
.post('/', controller.AddTickets)
.get('/', controller.GetAllTickets)
.get('/:id', controller.GetSingleTicket)
.put('/:id', controller.UpdateSingleTicket)
.delete('/:id', controller.DeleteSingleTicket)

module.exports = router;

