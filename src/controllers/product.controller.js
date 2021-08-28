const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.post("", async(req,res)=>{
    try{
        const product = await Product.create(req.body);
        return res.status(200).send(product);
    }catch(err){
        return res.status(400).send(err.message);
    }
});

router.get("/products", async(req,res)=>{
    try{
        const product = await Product.find({category: 'Skin'}).lean().exec();
        return res.render('views/products-categ',{
            product : product
        })
    }catch(err){
        return res.status(400).send(err.message);
    }
})
router.get("/products-categ", async(req,res)=>{
    try{
        const product = await Product.find().lean().exec();
        return res.send(product);
    }catch(err){
        return res.status(400).send(err.message);
    }
})

module.exports = router;
