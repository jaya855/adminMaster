const User=require("../models/user-model")
const bcrypt = require('bcryptjs');
exports.login=async(req,res)=>{
  console.log("hii from login backend")
  try{
    console.log("hii from backend")
     const {email,password}=req.body
     if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"all fields are required"
        })
     }
      const userfound=await User.findOne({email});
      if(!userfound){
        return res.status(401).json({
            success:false,
            message:"user not registered"
        })
      }


      const passwordMatch = await bcrypt.compare(password, userfound.password);

      if (passwordMatch) {
        console.log('Passwords match! User is authenticated.');
        return res.status(200).json({
          success: true,
          message: "User successfully logged in",
        });
      } else {
        console.log('Passwords do not match. Authentication failed.');
        return res.status(403).json({
          success: false,
          message: "Passwords do not match",
        });
      }
    

      
      }
  catch(error){
    return res.status(500).json({
        success:false,
        message:"internal server error"
    })
  }
}