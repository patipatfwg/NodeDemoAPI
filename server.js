const express = require('express');
// const mariadb = require('mariadb');
const mysql = require('mysql');

// const Sequelize = require('sequelize');
// const env = require('./env');
// const sequelize = new Sequelize('mariadb://user:password@example.com:9821/database')
// const sequelize = new Sequelize(env.dialect+'://'+env.user+':'+env.password+'@'+env.host+'/'+env.database)
const bodyParser = require('body-parser');
const moment = require('moment');
var momentz = require('moment-timezone');

// const base64ToImage = require('base64-to-image');
// const multer  = require('multer');
// const ejs = require('ejs');
// const path = require('path');
// var imgurl = 'img/upload/receipt/';
// var upload = multer({ dest: imgurl })

const app = express();

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'application/json')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

////////////////////////// DB Function ////////////////////////////////
function getConn(aa){
    if(aa === 'hr'){
        return mysql.createConnection({   
            host     : 'freewillmdc.loginto.me', 
            port     : '56861',
            user     : 'fwghr',
            password : 'fwg@mdc04111',
            database : 'fwg_hr'
        })       
    }
}
///////////////////////////////////////////////////////////////////////

//////////////////////// Save The Earth //////////////////////////////////
app.get('/api/receiptUpload',(req,res)=> { 
    let sql = "SELECT COUNT(employee_id) as totalall FROM save_the_earth WHERE employee_id = "+req.body.employee_id;
    getConn('hr').query(sql,(err,rows,results) => { 
        if(!err){
            var totalall = rows[0].totalall;
            let sql = "SELECT DATE_FORMAT(receipt_date,'%d %b %Y') as receipt_date,COUNT(receipt_date) as total FROM save_the_earth WHERE employee_id = "+req.body.employee_id+" GROUP BY receipt_date DESC";
            getConn('hr').query(sql,(err,rows,results) => { 
                res.json({ "HEAD": totalall , "BODY" : rows, "MESSAGE": "Summary"})                 
            })
        }else{
            res.json(err)
            console.log(err);
        }
    })
})

app.get('/api/receiptUpload/ranking/:type',(req,res)=> {
    var type =  req.params.type;
    if(type === "2"){
        var sql = "SELECT employee.color FROM save_the_earth INNER JOIN employee ON save_the_earth.employee_id = employee.employee_id GROUP BY employee.color order by  save_the_earth.employee_id DESC Limit 4";
        var msg = 'Color Ranking';
    }else if(type === "1"){
        var sql = "SELECT employee.team FROM save_the_earth INNER JOIN employee ON save_the_earth.employee_id = employee.employee_id GROUP BY employee.team order by  save_the_earth.employee_id DESC Limit 10";
        var msg = 'Team Ranking';
    }
    
    getConn('hr').query(sql,(err,rows,results) => { 
        if(!err){
            res.json({ "HEAD": rows.length , "BODY" : rows, "MESSAGE": msg})   
        }else{
            res.json(err)
            console.log(err);
        }
    })
})

app.post('/api/receiptUpload',function (req,res){  
    // const user_id =  req.body.user_id;
    // const section_id =  req.body.section_id;
    // const app_title = req.body.app_title;
    // const download_at = moment().tz('Asia/Bangkok').format("YYYY-MM-DD HH:mm:ss");

    const receipt_date = req.body.receipt_date;
    const receipt_no = req.body.receipt_no;  
    const images =  req.body.images;  
    const employee_id =  req.body.employee_id;

    const sql = "INSERT INTO save_the_earth (receipt_date,receipt_no,images,employee_id) VALUES (?,?,?,?)";
    getConn('hr').query(sql, [receipt_date,receipt_no,images,employee_id], function (err, rows, fields) {
        if(!err){

            // res.json({ "HEAD": fields ,"BODY": rows ,"MESSAGE": "Add Success" })  

            getConn('hr').query('SELECT * FROM save_the_earth',(err,rows,results) => { 
                if(!err){
                    res.json({ "HEAD": rows.length ,"BODY": rows ,"MESSAGE": "Add Success" })   
                }else{
                    res.json(err)
                    console.log(err);
                }   
            })

        }else{
            res.json(err)
        }       
    });  
})
/////////////////////////////////////////////////////////////////////

///////////////////////////// Hi Freewill //////////////////////////
app.get('',(req,res)=> { 
    res.json('Hi Freewill');
})
app.get('/',(req,res)=> { 
    res.json('Hi Freewill');
})
app.get('/api',(req,res)=> { 
    res.json('Hi Freewill');
})
app.get('/api/',(req,res)=> { 
    res.json('Hi Freewill');
})
/////////////////////////////////////////////////////////////

/////////////////////////// Port Listen /////////////////////
app.listen('5000',() => {    
    console.log('start port 5000')  
    console.log( moment().tz('Asia/Bangkok').format("YYYY-MM-DD HH:mm:ss") ); // DateNowTimezone
})
/////////////////////////////////////////////////////

