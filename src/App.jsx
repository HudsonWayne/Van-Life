<<<<<<< HEAD
import './App.css'

function App() {

  return (
    <>
      
    </>
  )
}
=======
import {  Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Vans from "./components/Host/Vans.jsx";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./components/Host/Dashboard.jsx";
import Login from "./components/Login.jsx";
import About from "./components/About.jsx";
import VansDetails from "./components/Host/Vans/VansDetails.jsx";
import VansPhotos from "./components/Host/Vans/VansPhotos.jsx";
import VansPricing from "./components/Host/Vans/VansPricing.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <VansDetails/>
      <VansPhotos/>
      <VansPricing/>
        <Route path="/" element={<Home />} />
        <Route path="/Host" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/Vans" element={<Vans />} />
        <Route path="/Login" element={<Login />} />
      <Footer />
    </>
  );
};
>>>>>>> b81fcad328f1cd16bed564331042aa6965b0c3ac

export default App;