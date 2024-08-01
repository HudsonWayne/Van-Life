import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { FaRegCircleUser } from "react-icons/fa6";
import Logo from '../assets/logog.png'



const Navbar = () => {
  return (
    <div className='Navbar'>
        <Link to='/'><img src={Logo} alt='Logo' className='logo' /></Link>
       <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Host'>Host</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li className='login-page'><Link to='/Login'><FaRegCircleUser /></Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
