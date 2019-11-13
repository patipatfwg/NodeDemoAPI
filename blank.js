const express = require('express');
var router = express.Router();

const app = express();

router.get('',(req,res)=> { 
    res.json('Blank');
})
router.get('/',(req,res)=> { 
    res.json('Blank');
})
router.get('/api',(req,res)=> { 
    res.json('Blank');
})
router.get('/api/',(req,res)=> { 
    res.json('Blank');
})


module.exports = router;