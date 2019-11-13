const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const momentz = require('moment-timezone');
const router = express.Router();
const conn = require('../../db');
const time_at = moment().tz('Asia/Bangkok').format("YYYY-MM-DD HH:mm:ss");

const ActivityModel = require('../Model/Activity'); 
const ActivityFunc = require('../ActivityFunc');

var get = router.get('',function (req,res){

    var msgConsole = time_at+" Activity : ";
    var msgRes = 'Success';
    const sql = "SELECT * FROM activity";
    conn.query(sql, function (err,rows) {
        res.json({ "HEAD": rows.length ,"BODY": rows ,"MESSAGE": "List " });
        if(err){
            console.log(msgConsole+err);
        }else{
            console.log(msgConsole+msgRes);
        }
    });

});

module.exports = get;