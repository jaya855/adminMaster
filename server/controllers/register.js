const User=require("../models/user-model")

exports.register=async(req,res)=>{
    try{
        console.log("hii jaya from backend")
        console.log({username,email,phone,password})
       const {username,email,phone,password}=req.body;
       if(!username || !email || !phone || !password){
        return res.status(200).json({
            sucess:false,
            message:"all field are required"
        })
       }

       const found=await User.findOne({email});
       if(found){
        return res.status(400).json({
            sucess:false,
            message:"user already created"
        })
       }
       const user=await User.create({username,email,phone,password});
        return res.status(200).json({
            sucess:true,
            message:"user created succesfully"
        })
    }
    catch(error){
        return res.status(400).json({
            sucess:false,
            message:"user failed to create"
        })
    }
}