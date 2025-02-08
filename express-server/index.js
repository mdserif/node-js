const express = require("express")
const app = express();
const port = 8000;

app.get("/",(req,res)=>{
    return res.send("hello from home page")
})

app.get("/about",(req,res)=>{
    return res.send(`hello from ${req.query.name}`)
})

app.listen(port,()=>{console.log(`server is running at ${port}`)})