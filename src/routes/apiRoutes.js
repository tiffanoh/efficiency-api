const express = require('express');
const router = express.Router();
const { getPingResponse, getData, getDataById } = require('../controllers/apiController');

// Define the /ping route
router.get('/ping', getPingResponse);

// Define the /data route
router.get('/data', getData);

// Define the /data/:id route for getting specific data by ID
router.get('/data/:id', getDataById);

module.exports = router;
