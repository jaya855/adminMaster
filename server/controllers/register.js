const User=require("../models/user-model")
const bcrypt = require('bcryptjs');
exports.register=async(req,res)=>{
    try{
        console.log("hii jaya from backend")
        
       const {username,email,phone,password}=req.body;
       if(!username || !email || !phone || !password){
        return res.status(400).json({
            success:false,
            message:"all field are required"
        })
       }

       const found=await User.findOne({email});
       if(found){
        return res.status(401).json({
            sucess:false,
            message:"user already created"
        })
       }

       const hashedPassword=await bcrypt.hash(password,10);
       const user=await User.create({username,email,phone,password:hashedPassword});
      
      
        return res.status(200).json({
            sucess:true,
            message:"user created succesfully"
        })
    }
    catch(error){
        return res.status(500).json({
            sucess:false,
            message:"user failed to create"
        })
    }
}