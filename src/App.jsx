
import './App.css'

function App() {

  return (
    <>
      
    </>
  )
}

import {  Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Vans from "./components/Host/Vans.jsx";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./components/Host/Dashboard.jsx";
import Login from "./components/Login.jsx";
import About from "./components/About.jsx";
import Income from "./components/Host/Income.jsx";
import VansHome from "./components/Host/Vans/VansHome.jsx";
import Reviews from "./components/Host/Reviews.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Host" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/Vans" element={<Vans />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Host/Income" element={<Income />} />
        <Route path="/Host/Vans" element={<VansHome />} />
        <Route path="/Host/Reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </>
  );
};


export default App;