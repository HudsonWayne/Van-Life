
import { Link } from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6";
import Logo from '../assets/logog.png'
import '../App.css'


const Navbar = () => {
  return (
    <div className='Navbar sm:block md:hidden'>
      <div className="container">
          <Link to='/'><img src={Logo} alt='Logo' className='logo' /></Link>
       <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Host'>Host</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Vans'>Vans</Link></li>
            <li className='login-page'><Link to='/Login'><FaRegCircleUser /></Link></li>
        </ul>
      </nav>
      </div>
    </div>
  )
}

export default Navbar
