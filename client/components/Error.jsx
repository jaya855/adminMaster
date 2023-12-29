
import "./Error.css"
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate()
    const handleContact=()=>{
      console.log("contact")
      navigate("/contact");
    }
    const handlehome=()=>{
      console.log("home")
      navigate("/");
    }
  return (
    <div className="err">
       <div className="one">404</div>
       <div className="two">Sorry! Page Not Found</div>
       <div>Oops! Something went wrong.We're working to fix it.
        <br/> Please try again later. Thank you for your patience.</div>
       <div>
        <button onClick={handlehome}>Return Home</button>
        <button onClick={handleContact}>Report Problem</button>
       </div>
    </div>
  )
}

export default Error
