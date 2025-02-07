const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()} : ${req.url} : New Request Received\n`;
    // console.log(req.headers)
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case "/" : res.end("Home page");
            break;
            case "/about" : res.end("About page")
            break;
            default : res.end("404 Not found");
        }       
    })
})

myServer.listen(8000, ()=>{console.log(`server running`)})