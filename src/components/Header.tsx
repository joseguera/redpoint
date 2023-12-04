import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/final-redpoint-logo-design 1.svg";

export default function Header() {
  return (
    <div className="fixed bg-[#F7F4F2] h-16 w-full flex flex-row justify-between items-center gap-16 z-10 drop-shadow-lg">
      <div>
        <Link to="/">
          <img src={logo} alt="redpoint logo" className="w-[216px] h-[64px]" />
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
        <a className="w-[180px] h-full bg-[#D33F3F] text-white flex flex-row justify-center items-center" href="https://www.airbnb.com/rooms/786240811671591724?source_impression_id=p3_1699644961_8xGAbJ7xCskTo16v&locale=en&_set_bev_on_new_domain=1699646256_ZjY5ZjQ4NTUzOGE2" target="_blank" rel="noreferrer">Book Now</a>
    </div>
  );
}
