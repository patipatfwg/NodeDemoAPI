const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const momentz = require('moment-timezone');
const router = express.Router();
const conn = require('../../db');
const time_at = moment().tz('Asia/Bangkok').format("YYYY-MM-DD HH:mm:ss");

const LoginModel = require('../Model/Employee'); 

var LoginCheck = router.post('',function (req,res){
    if(!req.body){
        var email = req.body.email;
        var password = req.body.password;
    }else{
        res.json({ "HEAD": {"code": 400,"message": "Params What!!"},"BODY": [] });
        Exit();
    }
    var msgConsole = time_at+" Login : ";
    var msgRes = 'Send';
    const sql = "SELECT * FROM employee Where email = '"+email+"' AND password = '"+password+"'";
    conn.query(sql, function (err,rows) {
        
        if(err){

            console.log(msgConsole+err);
        }else{
            res.json({ "HEAD": '' ,"BODY": rows ,"MESSAGE": "Employee Details" });
            console.log(msgConsole+msgRes);
        }
    });

});

var LoginGET = router.get('',function (req,res){
    res.json({ "HEAD": '' ,"BODY": 'What!!' ,"MESSAGE": "" });
});


module.exports = LoginCheck,LoginGET;