const mysql = require('mysql');

const router      =    mysql.createPool({
    connectionLimit : 10,
    host     : 'freewillmdc.loginto.me',
    port     : 56860,
    user     : 'fwdadmin',
    password : '2399102191',
    database : 'fwdactivitydb',
    debug    :  false
});   


module.exports = router;