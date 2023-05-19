const express = require('express');
const router = express.Router();
const controller = require('../controllers/userIDControllers');

const multer =require('multer')
const idf=multer({dest:'files/'})
router
.post('/',controller.uplaod,controller.AddUsersID)
.get('/', controller.GetAllUsersID)
.get('/:id', controller.GetSingleUsersID)
.put('/:id', controller.UpdateSingleUsersID)
.delete('/:id', controller.DeleteSingleUsersID)

module.exports = router;

