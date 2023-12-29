import "./About.css"
import abtpic from "../images/abtpic.jpg"
import { useNavigate } from "react-router-dom"; 
const About = () => {
  const navigate = useNavigate()
  const handleContact=()=>{
    console.log("contact")
    navigate("/contact");
  }
  const handleabout=()=>{
    console.log("contact")
    navigate("/about");
  }
  return (
    <div className="abt">
      <div className="mid">
        <div className="part11">
        <h5>Welcome Admin Master</h5>
        <h1>Why Choose Us?</h1>
        <div className="para">
        <div>Welcome to adminMaster, where  being your trusted partner in the ever-evolving world of technology.
        
        </div>
        <br/>
        <div>Welcome to adminMaster,problem-solving trusted partner in the ever-evolving world of technology.
        
        </div>
        <br/>
        <div>Welcome to  team of for problem-solving and a ur trusted partner in the ever-evolving world of technology.
        
        </div>
        <br/>
        <div>Welcome to adminMaster,and ourselves on being your trusted partner in the ever-evolving world of technology.
        
        </div>
        </div>
        <div className="btndiv">
                <button className="btn1" onClick={handleContact}>Connect Now</button>
                <button className="btn2" onClick={handleabout}>Learn More</button>
              </div>
        </div>
        <div className="part22">
          <img src={abtpic} alt="mypic"/>
        </div>
      </div>
    </div>
  )
}

export default About
