const { v4: uuidv4 } = require('uuid');
const User = require("../models/user")
const {setUser} = require("../service/auth")

const handleUserSignUp = async (req,res)=> {
    const { name,email,password} = req.body;
    const user = await User.findOne({email})
    if(user) return res.json({msg:"User already registered, please go to login page"})
    await User.create({
        name:name,
        email:email,
        password:password
    })
    return res.redirect("/")
}


const handleUserLogin = async (req,res) =>{
    const {email,password} = req.body;
    const user = await User.findOne({email,password})
    // console.log("user",user)
    if(!user) return res.render("login",{error:"Email or Password is Invalid"})
    const sessionId = uuidv4();
    setUser(sessionId,user);
    res.cookie("uid",sessionId);
    return res.redirect("/");
}

module.exports = {
    handleUserSignUp,
    handleUserLogin,
}