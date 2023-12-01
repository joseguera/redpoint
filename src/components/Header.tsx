import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/final-redpoint-logo-design 1.svg'

export default function Header() {

  return (
    <div className='fixed bg-[##F7F4F2] text-white h-16 w-full flex flex-row justify-center items-center'>
      <div><img src={logo} alt="redpoint logo" /></div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/attractions">Attractions</Link>
      </div>
      <div>
        <Link to="/reviews">Reviews</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <div>
        <Link to="/">Book Now</Link>
      </div>
      
    </div>
  )
}
