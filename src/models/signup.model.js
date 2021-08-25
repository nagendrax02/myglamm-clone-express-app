const mongoose = require("mongoose");

const signup_schema = new mongoose.Schema({
    first_name:{type: String, required: true},
    last_name:{type: String, required: true},
    password:{type: Number, required: true},
    phone_number:{type: Number, required: true},
    email:{type: String, required: true}
},{
    versionKey: false,
    timestamps: true
});

const Signup = mongoose.model('signup', signup_schema);

module.exports = Signup;