const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('joi'); 
const blank = require('./blank');
const activity = require('./activity');

const app = express();

app.use(bodyParser.json());
app.use('', blank);
app.use('/test', activity);

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

