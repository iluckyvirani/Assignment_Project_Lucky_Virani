import React from "react";
import "./Navbar.css";
import { MdArrowForwardIos } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { LuBellRing } from "react-icons/lu";

const Navbar = ({ handleSearch }) => {
  return (
    <>
      <div className="navbarr">
        <div className="navbar1">
          <span>Home</span>
          <MdArrowForwardIos color="#A6B0B2" size={15} />
          <h6>Dashboard V2</h6>
        </div>
        <div className="navbar2">
          <div className="navbar3">
            <IoSearchSharp color="#adc0cf"/>
            <input 
              type="search" 
              placeholder="Search widgets..."
              onChange={(e) => handleSearch(e.target.value)} // Pass search query back to parent
            />
          </div>
          <LuBellRing color="#adc0cf"/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
