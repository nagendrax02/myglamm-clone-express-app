const express = require("express");
const router = express.Router();
const Login = require("../models/login.model");

router.post("", async(req,res)=>{
    try{
        const login = await Login.create(req.body);
        return res.status(200).send(login);
    }catch(err){
        return res.status(400).send(err.message);
    }
});

router.get("", async(req,res)=>{
    try{
        const login  = await Login.find().lean().exec();
        return res.send(login)
    }catch(err){
        return res.status(400).send(err.message);
    }
})

module.exports = router;

