const express = require("express");
const router = express.Router();
const Signup = require("../models/signup.model");

router.post("", async(req,res)=>{
    try{
        const signup = await Signup.create(req.body);
        return res.status(200).send(signup);
    }catch(err){
        return res.status(400).send(err.message);
    }
});

router.get("", async(req,res)=>{
    try{
        const signup  = await Signup.find().lean().exec();
        return res.send(signup)
    }catch(err){
        return res.status(400).send(err.message);
    }
})

module.exports = router;
