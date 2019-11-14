const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const momentz = require('moment-timezone');
const router = express.Router();
const conn = require('../../db');
const time_at = moment().tz('Asia/Bangkok').format("YYYY-MM-DD HH:mm:ss");

// const LoginModel = require('../Model/Employee'); 
const LoginFunc = require('../Function/LoginFunc'); 

var LoginCheck = router.post('',function (req,res){
    var data = req.body;
    if(Object.keys(data).length > 0){
        var email = data.email;
        var password = data.password;
    }else{
        var messagelog = 'Data Not Found';
        var message = 'data ไปไหน';
        var status = 400;
        return res.json({ head : {status: status,message: message},body : [] });
    }
    const sql = "SELECT * FROM employee Where email = '"+email+"' AND password = '"+password+"'";
    conn.query(sql, function (err,rows) {
        var empProfile = rows[0];
        var empProfile_status = empProfile['status'];

        if(Object.keys(empProfile).length > 0 ){
            if(empProfile_status ==='none'){
                var status = 200; 
                var message = 'กรุณาตอบรับ เพื่อเข้าร่วมกิจกรรม';
                var messagelog = 'Login to Confirm Event';
            }else if(empProfile_status ==='no'){
                var status = 200; 
                var message = 'ขอต้อนรับเข้าสู่ระบบ';
                var messagelog = 'Login to Ranking';
            }else if(empProfile_status ==='yes'){
                var status = 200; 
                var message = 'ขอต้อนรับเข้าสู่ระบบ';
                var messagelog = 'Login Dashboard';
            }
        }else if(Object.keys(empProfile).length === 0){
            var status = 404;
            var message = 'รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง'; 
            var messagelog = 'Login Wrong';
        }

        res.json({ head : {
            status: status,
            message: message
            },
            body : {"empProfile":empProfile}
        });

        var msgConsole = time_at+" | "+messagelog+" : ";
        if(err){
            console.log(msgConsole+err);
        }else{
            console.log(msgConsole+email);
        }

    });

});

var LoginGET = router.get('',function (req,res){
    res.json({ HEAD : '' , BODY : 'What!!' , MESSAGE : "" });
});


module.exports = LoginCheck,LoginGET;