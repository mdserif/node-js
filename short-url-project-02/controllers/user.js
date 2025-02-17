const { v4: uuidv4 } = require('uuid');
const User = require("../models/user")
const {setUser} = require("../service/auth")

const handleUserSignUp = async (req,res)=> {
    const { name,email,password} = req.body;
    if(!name||!email||!password) return res.json({msg:"all field are required"})
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
    if(!email||!password) return res.json({msg:"Please provide valid email and password"})
    const user = await User.findOne({email,password})
    if(!user) return res.render("login",{error:"Email or Password is Invalid"})
    
    // session based auth using cookie
    // const sessionId = uuidv4();
    // setUser(sessionId,user);
    // res.cookie("uid",sessionId);

    //jwt auth using cookie
    // const token = setUser(user);
    // res.cookie("uid",token);
    // return res.redirect("/");

    // jwt using authorization header
    const token = setUser(user);
    res.cookie("token", token);
    return res.redirect("/");
}

module.exports = {
    handleUserSignUp,
    handleUserLogin,
}