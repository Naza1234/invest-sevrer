const express = require('express');
const router = express.Router();
const controller = require('../controllers/emailControllers')

router
.post('/',controller.SendMail)


module.exports = router;

