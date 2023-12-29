import { useState } from "react"
import "./Contact.css"
import contactimg from "../images/contactimg.png"




const Contact = () => {
  const [formdata,setFormData] =useState({username:"",email:"",message:""});
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }
  
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("hello")
    console.log(formdata)
    setFormData({username:"",email:"",message:""})
  }
  return (
    <div className="contact">
      <div className="section1con">
        <div className="conpart1">
        <h1><span>Conta</span>ct Us</h1>
        <img src={contactimg} alt="mypic"/>
        </div>
        <div className="conpart2">
            <div className="inconpart2">
            <label htmlFor="nme">Username</label>
            <input type="text" id="nme" name="username" value={formdata.username} onChange={handleOnChange} className="txt1"/>
        
            <label htmlFor="eml">Email</label>
            <input type="text" id="eml" name="email" value={formdata.email} onChange={handleOnChange} className="txt1"/>
        
            <label htmlFor="eml">Message</label>
            <input type="text" id="eml" name="message" value={formdata.message} onChange={handleOnChange} className="txt2"/>
        
        
            <button onClick={submitHandler}>Submit</button>
            </div>
        </div>
      </div>

      <div className="section2con">

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.246254263452!2d77.04143207490485!3d28.68227937563763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05c5eeb3ea69%3A0x8ce9b38e26e65d1a!2sRajdhani%20Park!5e0!3m2!1sen!2sin!4v1703686834696!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact
