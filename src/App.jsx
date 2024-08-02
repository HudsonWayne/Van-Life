import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home'
import Footer from './components/Footer';
import Vans from './components/Vans'
import Navbar from './components/Navbar'
import Host from './components/Host/Dashboard'
import Login from './components/Login'
import About from './components/About.jsx'
import Error from './components/Error.jsx';

const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Host" element={<Host />} />
          <Route path="/About" element={<About />} />
          <Route exact path="/Vans" element={<Vans />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />

    </>
  )
}

export default App;
