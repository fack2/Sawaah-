const express = require('express');
const router = express.Router();

const { getDestinationInfo } = require('./getDestinationInfo');

router.get('/destination', getDestinationInfo);


module.exports = router;
