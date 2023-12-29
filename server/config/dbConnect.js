const mongoose = require("mongoose")

exports.dbConnect=async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
       })
       console.log("db connected successfully")
    }
    catch(error){
        console.log("ERROR FACED IN DATABASE CONNECTION !!");
        console.error(error);
        process.exit(1);
    }
}