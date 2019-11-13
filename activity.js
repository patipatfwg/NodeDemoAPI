const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const conn = require('./db');
const schemas = require('./schemas'); 

router.get('',function (req,res){

    var msgConsole = "Activity : ";
    const sql = "SELECT * FROM activity";
    conn.query(sql, function (err,rows) {
        res.json({ "HEAD": rows.length ,"BODY": rows ,"MESSAGE": "List " });
        console.log(msgConsole+err);
    });

});

module.exports = router;