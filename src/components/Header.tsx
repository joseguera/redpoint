import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/final-redpoint-logo-design 1.svg'

export default function Header() {

  return (
    <div className='fixed bg-[#F7F4F2] text-[black] h-16 w-full flex flex-row justify-center items-center gap-16'>
      <div><img src={logo} alt="redpoint logo" className='w-[216px] h-[64px]' /></div>
      <div className='w-[180px] h-[60px] flex flex-row justify-center items-center'>
        <Link to="/">Home</Link>
      </div>
      <div className='w-[180px] h-[60px] flex flex-row justify-center items-center'>
        <Link to="/attractions">Attractions</Link>
      </div>
      <div className='w-[180px] h-[60px] flex flex-row justify-center items-center'>
        <Link to="/reviews">Reviews</Link>
      </div>
      <div className='w-[180px] h-[60px] flex flex-row justify-center items-center'>
        <Link to="/about">About</Link>
      </div>
      <div className='w-[180px] h-[60px] flex flex-row justify-center items-center'>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <div className="w-[180px] h-full bg-[#D33F3F] text-white flex flex-row justify-center items-center">
        <Link to="/">Book Now</Link>
      </div>
      
    </div>
  )
}
