const http = require("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req,res)=>{
    if(req.url === "/favicon.ico"){return res.end()}
    const myUrl=url.parse(req.url,true)
    console.log(myUrl)
    const log = `${Date.now()} : ${req.method} : ${req.url} : New Request Received\n`;
    // console.log(req.headers)
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myUrl.pathname){
            case "/" : res.end("Home page");
            break;
            case "/about" :
                const name = myUrl.query.myname;
                res.end(`hi my name is ${name}`)
                break;
            case "/signup":
                if(req.method === "GET"){
                    res.end("this is a signup form")
                }else if(req.method === "POST"){
                    // DB Query
                    res.end("success")
                }
            default : res.end("404 Not found");
        }       
    })
})

myServer.listen(8000, ()=>{console.log(`server running`)})