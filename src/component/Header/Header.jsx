import React, { useState, useEffect, useRef } from "react";
import WOW from "wow.js";
import { Link } from "react-router-dom";
import { Tabs } from "antd";
import "./Header.scss";
import india from "../img/India.png";
// import shape from "../img/shape1.png";
import plus from "../img/tright.png";
import sumada from "../img/sumadula.png"
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconX,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandTwitter,
  IconBrandX,
} from "@tabler/icons-react";

const { TabPane } = Tabs;

function Header() {
  const textShadowStyle = {
    textShadow: "4px 2px 6px rgba(0, 0, 0, 0.3)", // Adjusted shadow values
  };
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("menu-open");
  };

  useEffect(() => {
    const closeMobileMenu = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    window.addEventListener("click", closeMobileMenu);

    return () => {
      window.removeEventListener("click", closeMobileMenu);
    };
  }, [isMobileMenuOpen]);
  

  return (
    <>
      <header
        id="Home"
        className="sticky top-0 left-0 right-0 w-full bg-white nav-bar sm:w-full z-10 "
      >
        <div className=" sm:mx-auto md:mx-10 lg:mx-20 flex items-center justify-between py-2 ">
          <div className="text-[#FFC500] font-black font-mono text-3xl  ml-4">
            {/* SUMADULA */}
            <img src={sumada} alt="wdwd" className="h-20"/>
          </div>
          <nav>
            <div className="flex items-center justify-between md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-black flex justify-end ml-10  focus:outline-none"
              >
                <svg
                  className="w-6 h-6 mx-11"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
            <ul
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } md:flex md:space-x-6 tracking-widest justify-between items-center `}
            >
              <li>
                <Link
                  className="text-black  hover:text-[#70C64F] font-semibold font-sans cursor-pointer"
                  activeClass="active"
                  to="/"
                  
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-black  hover:text-[#70C64F] font-semibold font-sans cursor-pointer"
                  to="/aboutus"
                 
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-black  hover:text-[#70C64F] font-semibold font-sans cursor-pointer"
                  to="/what"
                  
                >
                  What we do
                </Link>
              </li>
              <li>
                <Link
                  className="text-black  hover:text-[#70C64F] font-semibold font-sans cursor-pointer"
                  to="/donate"
               
                >
                  Donate Essential
                </Link>
              </li>
              <li>
                <Link
                  className="text-black  hover:text-[#70C64F] font-semibold font-sans cursor-pointer"
                  to="/diffrence"
                  
                >
                  How we Make Difference
                </Link>
                
              </li>
              <li className="">
                <Link
                  className="text-black hover:text-[#70C64F] font-semibold font-sans cursor-pointer"
                  to="/contactus"
                  
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40 "
          onClick={toggleMobileMenu}
        ></div>
      )}
      <div className={`overlay-menu ${isMobileMenuOpen ? "open" : "hidden"}`}>
        <div className="flex justify-between p-5 ">
        <img src={sumada} alt="wdwd" className="h-20"/>
          <button
            onClick={toggleMobileMenu}
            className="text-black hover:text-[#70C64F]  focus:outline-none"
          >
            <svg
              className="w-6 h-6 mx-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* <div className=" "> */}
        <ul className="p-5">
          <li className="">
            <Link
              className="text-black  hover:text-[#70C64F] text-xl font-bold font-sans cursor-pointer"
              activeClass="active"
              to="/"
              
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black  hover:text-[#70C64F] text-xl font-bold font-sans cursor-pointer"
              to="/aboutus"
             
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black  hover:text-[#70C64F] text-xl font-bold font-sans cursor-pointer"
              to="/what"
           
              onClick={() => setMobileMenuOpen(false)}
            >
              What we do
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black  hover:text-[#70C64F] text-xl font-bold font-sans cursor-pointer"
              to="/donate"
            
              onClick={() => setMobileMenuOpen(false)}
            >
             Donate Essential
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black  hover:text-[#70C64F] text-xl font-bold font-sans cursor-pointer"
              to="/diffrence"

              onClick={() => setMobileMenuOpen(false)}
            >
              How we make difference
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black  hover:text-[#70C64F] text-xl font-bold font-sans cursor-pointer"
              to="/contactus"
           
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
     
   
      {/* </div> */}
    </>
  );
}

export default Header;
