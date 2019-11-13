const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const momentz = require('moment-timezone');
const router = express.Router();
// const conn = require('../db');
const time_at = moment().tz('Asia/Bangkok').format("YYYY-MM-DD HH:mm:ss");

const ActivityController = require('./Controller/ActivityController'); 
const LoginController = require('./Controller/LoginController'); 

router.use('/login',LoginController);


// app.use('/fwdactivity/api', fwdactivity);

module.exports = router;