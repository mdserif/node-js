const express = require ("express");
require('dotenv').config()
const path = require("path")
const cookieParser = require("cookie-parser");
const connectToMongoDb = require('./connection')
const {restrictToLoggedinUserOnly,checkAuth} = require ("./middlewares/auth")

const app = express();
PORT = 8001;

const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user')


connectToMongoDb('mongodb://localhost:27017/short-url-project-02')

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.use('/url',restrictToLoggedinUserOnly,urlRoute);
app.use('/user',userRoute)
app.use('/', checkAuth, staticRoute);


app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)})
