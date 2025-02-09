const express = require("express");
const app = express();
PORT = 8000;
const users = require("./MOCK_DATA.json")
const fs = require("fs");


//Middleware
app.use(express.urlencoded({extended:false}))

app.get("/api/users",(req,res)=>{
    return res.json(users)
})

app.route("/api/users/:id")
.get((req,res)=>{
    const id= Number(req.params.id)
    const user = users.find((user)=> user.id === id)
    return res.json(user)
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
        return res.json({status:"Success", id :users.length})
    })

})


app.listen(PORT,()=>{console.log(`server is running on port no ${PORT}`)})