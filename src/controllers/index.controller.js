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



router.get('/views/cart', (req,res)=>{
    res.render('views/cart');
})


router.get('/refer_earn', (req,res)=>{
    res.render('views/refer_earn')
})

router.get('/category_product', (req,res)=>{
    res.render('views/products-categ');
})


module.exports = router;