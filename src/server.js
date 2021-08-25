const express = require("express")
const path = require("path");

const dotenv = require('dotenv');


const app = express();
app.use(express.json());
const connect = require("./configs/db");
app.use(express.static(path.join(__dirname, 'public')));

// const morgan = require('morgan');


dotenv.config({path: 'config.env'});

const PORT = process.env.PORT || 8080;


app.set("views", path.join(__dirname), "views");

app.set("view engine", "ejs");



const user_controller = require("./controllers/user.controller");

app.use("/user", user_controller);

app.get('/', (req,res)=>{
    res.render("views/index")
})

app.listen(PORT, async()=>{
    await connect();
    console.log(`Server is Running  on http://localhost:${PORT}`);
});