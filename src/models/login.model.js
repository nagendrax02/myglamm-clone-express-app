const mongoose = require("mongoose");

const login_schema = new mongoose.Schema({
    first_name:{type: String, required: true},
    password:{type: Number, required: true},
},{
    versionKey: false,
    timestamps: true
});

const Login = mongoose.model('login', login_schema);

module.exports = Login;