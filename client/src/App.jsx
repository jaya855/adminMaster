
import { Route , Routes } from 'react-router-dom'

import './App.css'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Footer from "../components/Footer"
import Error from "../components/Error"

function App() {

  return (
    <div className='app'>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/services' element={<Services/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='*' element={<Error/>}/>
</Routes>
    <Footer/>  
    </div>
  )
}

export default App
