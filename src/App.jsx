import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Home.jsx'
import LogIn from './components/LogIn.jsx'
import React from 'react'
import { Link } from "react-router-dom"



const App = () => {
  return (
    <Router>
   <Navbar />
   <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route path="/Host" element={<Host/>} />
     <Route exact path="/Vans" element={<Vans/>} />
     <Route path="/LogIn" element={<LogIn/>} />
   </Routes>
   <Footer/>
 </Router>
  )
}

export default App
