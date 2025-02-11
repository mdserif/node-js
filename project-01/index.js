const express = require("express");
const app = express();
PORT = 8000;

const {connectMongoDb} = require("./connection.js")
const {logReqRes} = require("./middlewares/index.js")
const userRouter = require("./routes/user.js")

//DB Connection
connectMongoDb("mongodb://localhost:27017/nodejs-project-1")

//Middleware
app.use(express.urlencoded({extended:false}))
app.use(logReqRes("log.txt"))

//Routes
app.use("/api/users",userRouter);


app.listen(PORT,()=>{console.log(`server is running on port no ${PORT}`)})