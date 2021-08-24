const mongoose  = require('mongoose');

const connect = ()=>{
    return mongoose.connect("mongo",{
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })
}
module.exports = connect;