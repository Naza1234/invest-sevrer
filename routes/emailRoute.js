const express = require('express');
const router = express.Router();
const controller = require('../controllers/emailControllers')

router
.post('/',controller.SendMail)
.post('/not_confirmed',controller.SendMailNotCOM)

module.exports = router;

