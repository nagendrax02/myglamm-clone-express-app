const express = require("express")
const path = require("path");
const app = express();
app.use(express.json());
const connect = require("./configs/db");

app.set("views", path.join(__dirname), "views");

app.set("view engine", "ejs");



const user_controller = require("./controllers/user.controller");

app.use("/user", user_controller);


app.listen(2312, async()=>{
    await connect();
    console.log("listening to port 2312");
});