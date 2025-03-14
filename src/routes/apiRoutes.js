const express = require('express');
const router = express.Router();
const { getPingResponse, getData } = require('../controllers/apiController');

// GET /ping
router.get('/ping', getPingResponse);

// GET /data
router.get('/data', getData);

module.exports = router;
