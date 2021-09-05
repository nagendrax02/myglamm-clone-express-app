const express = require("express");
const router = express.Router();
const Login = require("../models/login.model");

router.post("/get-user", async(req,res)=>{
    try{
      //  const login = await Login.create(req.body);
      let user_phone_number = req.body.phone_number;
      router.get("", async(req,res)=>{
        try{
            const login  = await Login.find().lean().exec();
           console.log(login)
        }catch(err){
            return res.status(400).send(err.message);
        }
    })
    }catch(err){
        return res.status(400).send(err.message);
    }
});

router.get("", async(req,res)=>{
    try{
        const login  = await Login.find().lean().exec();
        return res.send(req.phone_number)
    }catch(err){
        return res.status(400).send(err.message);
    }
})

module.exports = router;

