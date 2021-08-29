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

// router.get("/products", async(req,res)=>{
//     try{
//         const product = await Product.find({category: 'Skin'}).lean().exec();
//         return res.send(product)
//     }catch(err){
//         return res.status(400).send(err.message);
//     }
// })
router.get("/products-categ-skin", async(req,res)=>{
    try{
        const product = await Product.find({category: "Skin"}).lean().exec();
    
        return res.render('views/products-categ',{
            products : product
        })
    }catch(err){
        return res.status(400).send(err.message);
    }
})

router.get("/products-categ-lips", async(req,res)=>{
    try{
        const product = await Product.find({category: "Lips"}).lean().exec();
    
        return res.render('views/products-categ',{
            products : product
        })
    }catch(err){
        return res.status(400).send(err.message);
    }
})
router.get("/products-categ-eyes", async(req,res)=>{
    try{
        const product = await Product.find({category: "Eyes"}).lean().exec();
    
        return res.render('views/products-categ',{
            products : product
        })
    }catch(err){
        return res.status(400).send(err.message);
    }
})


router.get("/products-categ-face", async(req,res)=>{
    try{
        const product = await Product.find({category: "Face"}).lean().exec();
    
        return res.render('views/products-categ',{
            products : product
        })
    }catch(err){
        return res.status(400).send(err.message);
    }
})

router.get("/products-categ-nails", async(req,res)=>{
    try{
        const product = await Product.find({category: "Nails"}).lean().exec();
    
        return res.render('views/products-categ',{
            products : product
        })
    }catch(err){
        return res.status(400).send(err.message);
    }
})

router.get("/products-categ-sanitizing-care", async(req,res)=>{
    try{
        const product = await Product.find({category: "Sanitizing Care"}).lean().exec();
    
        return res.render('views/products-categ',{
            products : product
        })
    }catch(err){
        return res.status(400).send(err.message);
    }
})


router.get("/products-categ-bath&body", async(req,res)=>{
    try{
        const product = await Product.find({category: "Bath & Body"}).lean().exec();
    
        return res.render('views/products-categ',{
            products : product
        })
    }catch(err){
        return res.status(400).send(err.message);
    }
})

router.get("/products-categ-makeup-kits", async(req,res)=>{
    try{
        const product = await Product.find({category: "Makeup kits"}).lean().exec();
    
        return res.render('views/products-categ',{
            products : product
        })
    }catch(err){
        return res.status(400).send(err.message);
    }
})


module.exports = router;
