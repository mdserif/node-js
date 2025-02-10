const express = require("express");
const app = express();
PORT = 8000;
const users = require("./MOCK_DATA.json")
const fs = require("fs");

//Middleware
app.use(express.urlencoded({extended:false}))

//REST API
app.get("/api/users",(req,res)=>{
    res.setHeader("X-MyName","Md Serif") // custom header
    //always use X to custom headers
    return res.json(users)
})

app.route("/api/users/:id")
.get((req,res)=>{
    const id= Number(req.params.id)
    const user = users.find((user)=> user.id === id)
    if(!user) return res.status(404).json({error:"user not defined"})
    return res.json(user);
})
.patch((req,res)=>{
    
})
.delete((req,res)=>{
    const id = Number(req.params.id)
    const user = users.find((user)=> user.id === id)
    const data = delete users[id]
    return res.json(data)
    // fs.unlink("./MOCK_DATA.json",(err,data)=>{        
    //     return res.json({status:"deleted successfully", user, data})
    // })
})

app.post("/api/users/",(req,res)=>{
    //DB connection
    const body = req.body;
    users.push({...body, id:users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.status(201).json({status:"User created successfully", id :users.length})
    })

})


app.listen(PORT,()=>{console.log(`server is running on port no ${PORT}`)})