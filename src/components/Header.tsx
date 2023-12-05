import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/redpoint_logo_svg_file.svg";
import burger from "../images/mobile/burger_menu.svg";
import x_closer from "../images/mobile/x_closer_menu.svg";
import home_icon from "../images/mobile/home-1_svgrepo.com.svg";
import attractions_icon from "../images/mobile/mountain_svgrepo.com.svg";
import reviews_icon from "../images/mobile/review_svgrepo.com.svg";
import about_icon from "../images/mobile/about_svgrepo.com.svg";
import contact_icon from "../images/mobile/contact-mail_svgrepo.com.svg";
import arrow from "../images/mobile/arrow_menu.svg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuOptions = [
    { icon: home_icon, name: "Home", link: "/" },
    { icon: attractions_icon, name: "Attractions", link: "/attractions" },
    { icon: reviews_icon, name: "Reviews", link: "/reviews" },
    { icon: about_icon, name: "About", link: "/about" },
    { icon: contact_icon, name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <>
      <div className="fixed bg-[#F7F4F2] h-14 lg:h-16 w-full flex flex-row justify-between items-center gap-10 lg:gap-10 z-20 drop-shadow-lg">
        <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="w-[45px] pl-4 lg:pl-0 lg:hidden transition duration-500 ease-in-out">
          <img
            src={mobileMenuOpen ? x_closer : burger}
            className={`${mobileMenuOpen ? "w-[16px] h-[16px]" : "w-[24px] h-[15px]"}`}
            alt="open menu"
          />
        </div>
        <div>
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="redpoint logo"
              className="w-[182.25px] h-[54px] absolute left-10 lg:left-0 lg:w-[350px] lg:h-[104px]"
            />
          </Link>
        </div>
        <div className="hidden lg:flex flex-row justify-center items-center h-16">
          <Link
            to="/"
            className="w-[180px] h-full flex flex-row justify-center items-center hover:bg-[#FFFFFF] hover:cursor-pointer"
          >
            Home
          </Link>
          <Link
            className="w-[180px] h-full flex flex-row justify-center items-center hover:bg-[#FFFFFF] hover:cursor-pointer"
            to="/attractions"
          >
            Attractions
          </Link>
          <Link
            className="w-[180px] h-full flex flex-row justify-center items-center hover:bg-[#FFFFFF] hover:cursor-pointer"
            to="/reviews"
          >
            Reviews
          </Link>
          <Link
            className="w-[180px] h-full flex flex-row justify-center items-center hover:bg-[#FFFFFF] hover:cursor-pointer"
            to="/about"
          >
            About
          </Link>
          <Link
            className="w-[180px] h-full flex flex-row justify-center items-center hover:bg-[#FFFFFF] hover:cursor-pointer"
            to="/contact-us"
          >
            Contact Us
          </Link>
        </div>
        <a
          className="text-base lg:text-lg font-black w-[140px] md:w-[209px] h-full bg-[#D33F3F] text-white flex flex-row justify-center items-center font-black"
          href="https://www.airbnb.com/rooms/786240811671591724?source_impression_id=p3_1699644961_8xGAbJ7xCskTo16v&locale=en&_set_bev_on_new_domain=1699646256_ZjY5ZjQ4NTUzOGE2"
          target="_blank"
          rel="noreferrer"
        >
          Book Now
        </a>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="fixed inset-0 z-10" />
          
          {/* MODAL BODY */}
          <div
            className={`fixed h-screen overflow-auto font-inter inset-y-0 w-3/4 left-0 z-10 overflow-y-clip bg-[#F7F4F2] py-6 pt-16 max-w-md sm:max-w-md sm:ring-1 sm:ring-gray-900/10`}
          >
           <div>
            {menuOptions.map(options => {
              return (
                <div className="flex flex-col">
                <Link key={options.name} to={options.link} className="flex flex-col p-5">
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-between align-center gap-2">
                      <img src={options.icon} alt={options.name} />
                      <div>{options.name}</div>
                    </div>
                    <img src={arrow} alt="arrow" />
                  </div>
                </Link>
                <div className="w-[242px] h-[1px] bg-[#DDDDDD] self-center"></div>
                </div>
              )
            })} 
           </div>
          </div>
        </div>
      )}
    </>
  );
}
