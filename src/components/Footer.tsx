import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/final-redpoint-logo-design 1.svg'
import instagramLogo from '../images/instagram icon.svg'


export default function Footer() {
  const d = new Date();
  let currentYear = d.getFullYear();
  
  return (
    <div className='p-5 bg-[#000A14] text-white flex flex-col justify-center items-center w-screen'>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className='flex flex-row justify-between items-start w-10/12'>
        <div className='flex flex-col justify-center items-start'>
          <p className='text-xl font-black'>Email us at</p>
          <a href='mailto:redpoint@mixtrip.com' className='text-[#A7B1BE]'>redpoint@mixtrip.com</a>
        </div>
        <div className='flex flex-col justify-center items-start'>
          <div className='flex flex-col justify-center items-start'>
          <p className='text-xl font-black'>All pages</p>
          <div className='flex flex-row justify-between items-start w-64'>
            <div className='flex flex-col justify-start items-start'>
              <Link className='text-[#A7B1BE]' to="/">Home</Link>
              <Link className='text-[#A7B1BE]' to="/about">About</Link>
            </div>
            <div className='flex flex-col justify-start items-start'>
              <Link className='text-[#A7B1BE]' to="/attractions">Attractions</Link>
              <Link className='text-[#A7B1BE]' to="/contact-us">Contact Us</Link>
            </div>
            <div className='flex flex-col justify-start items-start'>
              <Link className='text-[#A7B1BE]' to="/reviews">Reviews</Link>
            </div>
          </div>

          </div>
        </div>
        <div className='flex flex-col justify-center items-start'>
          <p className='text-xl font-black'>Social media</p>
          <a href="https://www.instagram.com/redpoint_mixtrip" target="_blank"  rel="noreferrer">
            <img src={instagramLogo} className='w-[24px]' alt="instagram" />
          </a>
        </div>
      </div>
      <div className='text-[#A7B1BE]'>Copyright © {currentYear} Mixtrip.</div>
    </div>
  )
}
