
import "./Login.css"
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import login1 from "../images/login1.jpg"


const Login = () => {
  const Navigate=useNavigate()
  const [formdata,setFormData] =useState({email:"",password:""});
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }
  
  const submitHandler=async(e)=>{
    try{
      console.log("hii from frontend")
    e.preventDefault();
    console.log("formdata->",formdata)
      await axios.post("http://localhost:4000/api/v1/login",formdata)
      setFormData({email:"",password:""})
      Navigate("/")
    }
    catch(error){
       console.log(error)
    }
  }
  return (
    <div className="registration">
       <div className="regpart1">
          
          <img src={login1} alt="mypic"/>
       </div>
        <div className="regpart2">
          <div className="inregpart2">
            <div className="myhead">
            <p><span>Login F</span>orm</p>
            </div>
            <div className="myform">
               
                <label htmlFor="eml">Email</label>
                <input type="text" id="eml" name="email" value={formdata.email} onChange={handleOnChange} className="txt1reg"/>
            
                
                <label htmlFor="pas">Password</label>
                <input type="text" id="pas" name="password" value={formdata.password} onChange={handleOnChange} className="txt2reg"/>
                <button onClick={submitHandler}>Login</button>
            </div>
        
           
          </div>
        </div>
      
    </div>
  )
}

export default Login

