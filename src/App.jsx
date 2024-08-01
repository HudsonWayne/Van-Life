import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Home.jsx'
import Host from './components/Host/Dashboard.jsx'
import About from './components/About.jsx'
import Login from './components/Login.jsx'
import React from 'react'
import { Link } from "react-router-dom"



const App = () => {
  return (
    <Router>
   <Navbar />
   <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route path="/Host" element={<Host/>} />
     <Route path="/About" element={<About/>} />
     <Route exact path="/Vans" element={<Vans/>} />
     <Route path="/Login" element={<Login/>} />
   </Routes>
   <Footer/>
 </Router>
  )
}

export default App
