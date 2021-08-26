const express = require('express');
const router = express.Router();

router.get('', (req,res)=>{
    res.render('views/index')
})
router.get('/index', (req,res)=>{
    res.render('views/index')
})

router.get('/myglamm-youth', (req,res)=>{
    res.render('views/myglamm-youth')
})

router.get('/offline-stores', (req,res)=>{
    res.render('views/offline-store')
})

module.exports = router;