const express = require('express');
const apiRouter = express.Router();
const apiController = require('../controllers/apiController');

apiRouter.get('/card', apiController.getAllCards);








module.exports = apiRouter