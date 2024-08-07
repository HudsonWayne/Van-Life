import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Footer from "./components/Footer.jsx";
import Vans from "./components/Vans";
import Navbar from "./components/Navbar";
import Host from "./components/Host/Dashboard";
import Login from "./components/Login";
import About from "./components/About.jsx";
import VansDetails from "./components/Host/Vans/VansDetails.jsx";
import VansPhotos from "./components/Host/Vans/VansPhotos.jsx";
import VansPricing from "./components/Host/Vans/VansPricing.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <VansDetails/>
      <VansPhotos/>
      <VansPricing/>
        <Route path="/" element={<Home />} />
        <Route path="/Host" element={<Host />} />
        <Route path="/About" element={<About />} />
        <Route path="/Vans" element={<Vans />} />
        <Route path="/Login" element={<Login />} />
      <Footer />
    </Router>
  );
};

export default App;
