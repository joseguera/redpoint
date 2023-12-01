import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/final-redpoint-logo-design 1.svg'


export default function Footer() {
  return (
    <div className='p-5 w-full bg-[#000A14] text-white flex flex-col justify-center items-center'>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <div className='flex flex-col justify-center items-start'>
          <p>Email us at</p>
          <p>redpoint@mixtrip.com</p>
        </div>
        <div className='flex flex-col justify-center items-start'>
          <div className='flex flex-col justify-center items-start'>
          <p>All pages</p>
          <div className='flex flex-row justify-between items-start w-64'>
            <div className='flex flex-col justify-start items-start'>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </div>
            <div className='flex flex-col justify-start items-start'>
              <Link to="/attractions">Attractions</Link>
              <Link to="/contact-us">Contact</Link>
            </div>
            <div className='flex flex-col justify-start items-start'>
              <Link to="/reviews">Reviews</Link>
            </div>
          </div>

          </div>
        </div>
        <div className='flex flex-col justify-center items-start'>
          <p>Social media</p>
          <p>instagram icon</p>
        </div>
      </div>
    </div>
  )
}
