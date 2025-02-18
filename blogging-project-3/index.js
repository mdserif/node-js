import express from "express";
import path from "path";
import mongoose from "mongoose";
import userRoute from "./routes/user.router.js"


const app = express();
const PORT = 8001;

mongoose.connect("mongodb://localhost:27017/blogify").then(()=>{console.log("database is connected")}).catch((err)=>{console.log(err)})

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.get("/",(req,res)=>{
    res.render("home");
})


app.use(express.urlencoded({extended:false}))
app.use("/user",userRoute)


app.listen(PORT,()=>{
    console.log(`server is connected to port ${PORT}`)
})