import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Vans from "./components/Vans";
import Navbar from "./components/Navbar";
import Host from "./components/Host/Dashboard";
import Login from "./components/Login";
import About from "./components/About.jsx";

const App = () => {
  return (
    <>
<<<<<<< HEAD
      
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Host" element={<Host />} />
          <Route path="/About" element={<About />} />
          <Route exact path="/Vans" element={<Vans />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
  
=======
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Host" element={<Host />} />
        <Route path="/About" element={<About />} />
        <Route exact path="/Vans" element={<Vans />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
>>>>>>> 7e426f9579226014e2b37e08daacf1eb4ab78f25
    </>
  );
};

export default App;
