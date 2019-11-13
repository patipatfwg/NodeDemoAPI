const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const moment = require('moment');
var momentz = require('moment-timezone');

const app = express();
var router = express.Router();

app.use(bodyParser.json())

////////////////////////// DB Setting ////////////////////////////////

var connection = mysql.createConnection({   
    host     : 'freewillmdc.loginto.me', 
    port     : '56860',
    user     : 'kcmhAdmin',
    password : 'kcmh@dminCU',
    database : 'fwg_kcmh'
});

connection.connect(function(err){
    if  (err){
        console.log("ERR CONNECTION : "+err.stack);
        return;
    }else{
        console.log("CONNECTION Locker ON :"+connection.threadId)
    }

});


const time_at = moment().tz('Asia/Bangkok').format("YYYY-MM-DD HH:mm:ss");



router.get('abc',function (req,res){

    var msgConsole = "Roles : ";
    const sql = "SELECT * FROM role";
    connection.query(sql, function (err,rows) {
        res.json({ "HEAD": rows.length ,"BODY": rows ,"MESSAGE": "List Role" });
        console.log(msgConsole+err);
    });

});
////////////////////////////////////////////
    
module.exports = router;