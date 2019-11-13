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

// router.post('',function (req,res){
//     const user =  req.body.user;
//     const locker_id =  req.body.locker_id;
//     const created_at = moment().tz('Asia/Bangkok').format("YYYY-MM-DD HH:mm:ss");
//     const updated_at = moment().tz('Asia/Bangkok').format("YYYY-MM-DD HH:mm:ss");

//     let msgConsole = updated_at+" POST Locker Xform : ";
//     const sql = "INSERT INTO locker_log (user,locker_id,created_at,updated_at) VALUES (?,?,?,?)";
//     connection.query(sql, [user,locker_id,created_at,updated_at], function (err) {
//         let sql = 'SELECT * FROM locker_log Limit 5';  
//         connection.query(sql,(err,rows) => { 
//             if(!err){
//                 mqtt();
//                 res.json({ "HEAD": rows.length ,"BODY": rows ,"MESSAGE": "Add Success" });   
//                 console.log(msgConsole+err);
//             }else{
//                 res.json(msgConsole+err);
//                 console.log(msgConsole+err);
//             }
//         });
//         console.log(msgConsole+err);
//     });

// });

router.get('',function (req,res){

    var msgConsole = "Roles : ";
    const sql = "SELECT * FROM role";
    connection.query(sql, function (err,rows) {
        res.json({ "HEAD": rows.length ,"BODY": rows ,"MESSAGE": "List Role" });
        console.log(msgConsole+err);
    });

});
////////////////////////////////////////////
    
module.exports = router;