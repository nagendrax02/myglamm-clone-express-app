const mongoose  = require('mongoose');

const connect = ()=>{
    return mongoose.connect("mongodb+srv://Nagendrax:LIZARDSQUAD1@cluster0.75bkz.mongodb.net/myglamm-clone?retryWrites=true&w=majority",{
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })
}
module.exports = connect; 