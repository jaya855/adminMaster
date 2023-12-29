import "./Navbar.css"
import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="mynav">
     <div className="part1">
       AdminMaster
     </div>
     <div className="part2">
       
       
         <ul className="myul">
            <li>
            <NavLink to="/" className="mynavlink" activeClassName="active">Home</NavLink>
            </li>
            <li>
            <NavLink to="/about" className="mynavlink" activeClassName="active">About</NavLink>
            </li>
            <li>
            <NavLink to="/contact" className="mynavlink" activeClassName="active">Contact</NavLink>
            </li>
            <li>
            <NavLink to="/services" className="mynavlink" activeClassName="active">Services</NavLink>
            </li>
            <li>
            <NavLink to="/login" className="mynavlink" activeClassName="active">Login</NavLink>
            </li>
            <li>
            <NavLink to="/signup" className="mynavlink" activeClassName="active">Signup</NavLink>
            </li>
         </ul>
       
      
     </div>
    </div>
  )
}

export default Navbar
