const express = require("express")
const app = express();
const cors=require("cors")
const dotenv = require("dotenv")
const dbFile=require("./config/dbConnect")
const authRoutes=require("./routes/authRoutes")
dotenv.config()

app.use(cors({
  origin: 'http://localhost:5173',
  
}));
app.use(express.json())

app.use("/api/v1",authRoutes)

const PORT=process.env.PORT

dbFile.dbConnect()
app.listen(PORT,(req,res)=>{
  console.log("server connected successfuly")
})