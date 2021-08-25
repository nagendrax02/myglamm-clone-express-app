const mongoose = require("mongoose");

const product_schema = new mongoose.Schema({
    name:{type: String, required: true},
    discription:{type: String, required: true},
    category:{type: String, required: true},
    rating:{type: String, required: true},
    price:{type:Number,required:true},
    image:{type: String, required: true},
    email:{type: String, required: true}
},{
    versionKey: false,
    timestamps: true
});

const Product = mongoose.model('product', product_schema);

module.exports = Product;
