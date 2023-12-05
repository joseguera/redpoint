import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/redpoint_logo_svg_file.svg'
import instagramLogo from '../images/instagram icon.svg'
import vertical_line from '../images/vertical_line.svg'


export default function Footer() {
  const d = new Date();
  let currentYear = d.getFullYear();
  
  return (
    <div className="p-5 bg-[#000A14] text-white flex flex-col justify-center items-center w-screen gap-8 lg:gap-0">
      <div className="pt-[12px] lg:pt-[12px] flex flex-row items-center">
        <img
          className="w-[152px] h-[45px] lg:w-[216px]"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="border-b border-[#29303C] w-full lg:mt-5"></div>

      <div className="flex flex-col justify-start gap-12">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:justify-start gap-8">
        <div className="w-fit flex flex-col justify-center items-start gap-4 lg:gap-0">
          <p className="text-lg lg:mb-5 lg:text-ml font-black">Email us at</p>
          <a
            href="mailto:redpoint@mixtrip.com"
            className="text-base lg:text-lg text-[#A7B1BE]"
          >
            redpoint@mixtrip.com
          </a>
        </div>
        <img src={vertical_line} alt="separator" />
        <div className="w-fit flex flex-col justify-center items-start">
          <div className="flex flex-col justify-center items-start gap-4 lg:gap-0">
            <p className="text-lg lg:mb-5 lg:text-ml font-black">All pages</p>
            <div className="flex flex-col lg:flex-row justify-between items-start w-64 gap-24">
              <div className="flex flex-col justify-start items-start gap-4">
                <Link className="text-base lg:text-lg text-[#A7B1BE]" to="/">
                  Home
                </Link>
                <Link
                  className="text-base lg:text-lg text-[#A7B1BE]"
                  to="/about"
                >
                  About
                </Link>
              </div>
              <div className="flex flex-col justify-start items-start gap-4">
                <Link
                  className="text-base lg:text-lg text-[#A7B1BE]"
                  to="/attractions"
                >
                  Attractions
                </Link>
                <Link
                  className="text-base lg:text-lg text-[#A7B1BE]"
                  to="/contact-us"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex flex-col justify-start items-start">
                <Link
                  className="text-base lg:text-lg text-[#A7B1BE]"
                  to="/reviews"
                >
                  Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src={vertical_line} alt="separator" />
        <div className="w-fit flex flex-col justify-center items-start gap-4 lg:gap-0">
          <p className="text-lg lg:mb-5 lg:text-ml font-black">Social media</p>
          <a
            href="https://www.instagram.com/redpoint_mixtrip"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramLogo} className="w-[24px]" alt="instagram" />
          </a>
        </div>
      </div>
      </div>

      <div className="border-b border-[#29303C] w-full"></div>
      <div className="-ml-20 md:-ml-[20rem] lg:ml-0 lg:mt-5 text-base lg:text-lg text-[#A7B1BE]">
        Copyright © {currentYear} Mixtrip.
      </div>
    </div>
  );
}
