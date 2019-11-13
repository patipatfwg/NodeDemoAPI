const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('joi'); 
const moment = require('moment');
const momentz = require('moment-timezone');
const app = express();
const time_at = moment().tz('Asia/Bangkok').format("YYYY-MM-DD HH:mm:ss");

const blank = require('./blank');
const fwdactivity = require('./fwdactivity/MainActivity');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('', blank);
app.use('/fwdactivity/api', fwdactivity);

////////////////////////////////////////////////////////

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/////////////////////////// Port Listen //////////////

const PORT = process.env.PORT || 5623
app.listen(PORT)

/////////////////////////////////////////////////////

