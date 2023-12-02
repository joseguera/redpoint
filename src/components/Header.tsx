import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/final-redpoint-logo-design 1.svg'

export default function Header() {

  return (
    <div className='fixed bg-[#F7F4F2] h-16 w-full flex flex-row justify-between items-center gap-16'>
      <div>
        <Link to="/">
          <img src={logo} alt="redpoint logo" className='w-[216px] h-[64px]' />
        </Link>
      </div>
      <div className='flex flex-row justify-center items-center h-16'>
      <Link to="/" className='w-[180px] h-full flex flex-row justify-center items-center hover:bg-[#FFFFFF] hover:cursor-pointer'>
        Home
      </Link>
        <div className='w-[180px] h-full flex flex-row justify-center items-center hover:bg-[#FFFFFF] hover:cursor-pointer'>
          <Link to="/attractions">Attractions</Link>
        </div>
        <div className='w-[180px] h-full flex flex-row justify-center items-center hover:bg-[#FFFFFF] hover:cursor-pointer'>
          <Link to="/reviews">Reviews</Link>
        </div>
        <div className='w-[180px] h-full flex flex-row justify-center items-center hover:bg-[#FFFFFF] hover:cursor-pointer'>
          <Link to="/about">About</Link>
        </div>
        <div className='w-[180px] h-full flex flex-row justify-center items-center hover:bg-[#FFFFFF] hover:cursor-pointer'>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
      <div className="w-[180px] h-full bg-[#D33F3F] text-white flex flex-row justify-center items-center">
        <Link to="/">Book Now</Link>
      </div>
      
    </div>
  )
}
