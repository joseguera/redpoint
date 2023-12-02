import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/final-redpoint-logo-design 1.svg'


export default function Footer() {
  return (
    <div className='p-5 w-full bg-[#000A14] text-white flex flex-col justify-center items-center'>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className='flex flex-row justify-between items-start w-full'>
        <div className='flex flex-col justify-center items-start'>
          <p className='text-xl'>Email us at</p>
          <a href='mailto:redpoint@mixtrip.com' className='text-[#A7B1BE] text-xl'>redpoint@mixtrip.com</a>
        </div>
        <div className='flex flex-col justify-center items-start'>
          <div className='flex flex-col justify-center items-start'>
          <p className='text-xl'>All pages</p>
          <div className='flex flex-row justify-between items-start w-64'>
            <div className='flex flex-col justify-start items-start'>
              <Link className='text-[#A7B1BE] text-xl' to="/">Home</Link>
              <Link className='text-[#A7B1BE] text-xl' to="/about">About</Link>
            </div>
            <div className='flex flex-col justify-start items-start'>
              <Link className='text-[#A7B1BE] text-xl' to="/attractions">Attractions</Link>
              <Link className='text-[#A7B1BE] text-xl' to="/contact-us">Contact</Link>
            </div>
            <div className='flex flex-col justify-start items-start'>
              <Link className='text-[#A7B1BE] text-xl' to="/reviews">Reviews</Link>
            </div>
          </div>

          </div>
        </div>
        <div className='flex flex-col justify-center items-start'>
          <p className='text-xl'>Social media</p>
          <p>instagram icon</p>
        </div>
      </div>
      <div className='text-[#A7B1BE] text-xl'>Copyright © 2023 Mixtrip.</div>
    </div>
  )
}
