const express = require("express")
const path = require("path");

const dotenv = require('dotenv');


const app = express();
app.use(express.json());
const connect = require("./configs/db");
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));


dotenv.config({path: 'config.env'});

const PORT = process.env.PORT || 8080;


app.set("views", path.join(__dirname), "views");

app.set("view engine", "ejs");





const user_controller = require("./controllers/user.controller");
const index_controller = require("./controllers/index.controller");
const cart_controller = require("../src/controllers/cart.controller");
const product_controller = require("../src/controllers/product.controller");

app.use("/", user_controller);
app.use("/", index_controller);
app.use("/", cart_controller);
app.use("/", product_controller);



app.listen(PORT, async()=>{
    await connect();
    console.log(`Server is Running  on http://localhost:${PORT}`);
});