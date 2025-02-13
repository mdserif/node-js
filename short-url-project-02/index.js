const express = require ("express");
const path = require("path")
const connectToMongoDb = require('./connection')
const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRouter')
const app = express();

PORT = 8001;

connectToMongoDb('mongodb://localhost:27017/short-url-project-02')

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/url',urlRoute);
app.use('/',staticRoute);


app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)})
