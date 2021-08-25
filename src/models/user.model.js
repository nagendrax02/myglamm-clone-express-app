const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
    phone_number:{type: Number, required: true},
    name:{type: String, required: true},
    email:{type: String, required: true}
},{
    versionKey: false,
    timestamps: true
});

const User = mongoose.model('user', user_schema);

module.exports = User;