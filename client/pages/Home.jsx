import "./Home.css"
import newImg from '../images/newImg.jpg';
import img2home from "../images/img2home.webp"
import { useNavigate } from "react-router-dom"; 
const Home = () => {
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
    <div className="homediv">
      <div className="outersec1">
        <div className="section1">
          <div className="div1">
            <div className="innerDiv">
              <h5>We are World Best IT Company</h5>
              <h2>Welcome to AdminMaster</h2>
              <p className="textDiv">
                Experience a transformative partnership with our IT services. We deliver bespoke solutions, ensuring your business thrives in the digital landscape. With expert guidance, advanced technologies, and unwavering support, we propel your success. Join us to redefine possibilities and achieve unparalleled growth in the ever-evolving world of IT
              </p>
              <div className="btndiv">
                <button className="btn1" onClick={handleContact}>Connect Now</button>
                <button className="btn2" onClick={handleabout}>Learn More</button>
              </div>
              </div>
        </div>
          <div className="div2">
            <img src={newImg} alt="my image" className="myimg"/>
          </div>
        </div>
      </div>

      <div className="outersec2">
        <div className="section2">
          
          <div className="analytics1">
          <p className="num">50+</p>
          <p className="tag">Registered Companies</p>
          </div>
          
          <div className="analytics2">
          <p className="num">100,00+</p>
          <p  className="tag">Happy Clients</p>
          </div>
          <div className="analytics3">
          <p className="num">500+</p>
          <p  className="tag">Well Known Developers</p>
          </div>
          <div className="analytics4">
          <p className="num">24/7+</p>
          <p  className="tag">Service</p>
          </div>
          
        </div>
     </div>

     <div className="outersec3">
       <div className="section3">
          <div className="sec3div1">
            <img src={img2home} alt="my image" />
          </div>
           
              <div className="sec3div2">
                <h5>We are here to help you</h5>
                <h2>Get Started Today</h2>
                <p className="textDiv">
                Navigate through our user-friendly platform to explore a array of IT solutions. Whether you're looking for cutting-edge development,cybersecurity, or transformative cloud solutions, our team of professionals is ready to guide you. Begin your journey with a simple click – explore our services, connect with our experts, and elevate your business in the world of technology.
                </p>
                <div className="btndiv2">
                  <button className="btn1" onClick={handleContact}>Contact Now</button>
                  <button className="btn2" onClick={handleabout}>Learn More</button>
                </div>
              </div>
          
        </div>
      </div>





    </div>
  )
}

export default Home
