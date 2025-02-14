const User = require("../models/user")

const handleUserSignUp = async (req,res)=> {
    const { name,email,password} = req.body;
    await User.create({
        name:name,
        email:email,
        password:password
    })
    return res.redirect("/")
}

const handleUserLogin = async (req,res) =>{
    const {email,password} = req.body;
    const user = await User.find({email,password})
    if(!user) return res.render('login',{error:"Email or Password is Invalid"})
    return res.redirect("/")
}

module.exports = {
    handleUserSignUp,
    handleUserLogin,
}