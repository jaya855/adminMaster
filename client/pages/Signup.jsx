import "./Signup.css"
import { useState } from "react";
import newsign from "../images/newsign.jpg"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { message } from 'antd';

const Signup = () => {
  const navigate = useNavigate()
  const [formdata,setFormData] =useState({username:"",email:"",phone:"",password:""});
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }
  
  const submitHandler=async(e)=>{
    try{
    e.preventDefault();
    console.log("hello")
    console.log(formdata)
   
     var userCreated = await axios.post("http://localhost:4000/api/v1/register",formdata);
    //  setFormData({username:"",email:"",phone:"",password:""})
     console.log("hello",userCreated)
     navigate("/login")
    }
    catch(error){
      console.log(error)
      // message.error(userCreated.data.message)
    }
  }
  return (
    <div className="registration">
       <div className="regpart1">
          
          <img src={newsign} alt="mypic"/>
       </div>
        <div className="regpart2">
          <div className="inregpart22">
            <div className="myhead">
            <p><span>Registration F</span>orm</p>
            </div>
            <div className="myform">
                <label htmlFor="nme">Username</label>
                <input type="text" id="nme" name="username" value={formdata.username} onChange={handleOnChange} className="txt1reg"/>
            
                <label htmlFor="eml">Email</label>
                <input type="text" id="eml" name="email" value={formdata.email} onChange={handleOnChange} className="txt1reg"/>
            
                <label htmlFor="phn">Phone</label>
                <input type="text" id="phn" name="phone" value={formdata.phone} onChange={handleOnChange} className="txt2reg"/>
                
                <label htmlFor="pas">Password</label>
                <input type="text" id="pas" name="password" value={formdata.password} onChange={handleOnChange} className="txt2reg"/>
                <button onClick={submitHandler}>Register Now</button>
            </div>
        
           
          </div>
        </div>
      
    </div>
  )
}

export default Signup
