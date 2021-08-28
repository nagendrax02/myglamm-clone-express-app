const express = require("express");
const router = express.Router();
const Cart = require("../models/cart.model");

router.post("", async(req,res)=>{
    try{
        const cart = await Cart.create(req.body);
        return res.status(200).send(cart);
    }catch(err){
        return res.status(400).send(err.message);
    }
});

router.get("/cart", async(req,res)=>{
    try{
        const cart  = await Cart.find().lean().exec();
        return res.send(cart)
    }catch(err){
        return res.status(400).send(err.message);
    }
})

module.exports = router;
