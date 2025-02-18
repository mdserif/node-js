import Router from "express";
import {user} from "../models/user.model.js"
const router = Router();

router.get("/signin",(req,res)=>{
    res.render("signin")
})

router.get("/signup",(req,res)=>{
    res.render("signup")
})


router.post("/signup",async (req,res)=>{
    const {fullName,email,password} = req.body;
    if(!fullName||!email||!password) return res.redirect("/user/signup");
    
    await user.create({
        fullName,
        email,
        password,
    });

    return res.redirect("/")
});

router.post("/signin", (req,res)=>{
    const {email,password} = req.body;
    const User = user.matchPassword(email,password);

    console.log(User)

    return res.redirect("/")
});


export default router;



