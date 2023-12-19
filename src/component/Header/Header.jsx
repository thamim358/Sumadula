import React, { useState, useEffect, useRef } from "react";
import WOW from "wow.js";
import { Link } from "react-scroll";
import { Tabs } from "antd";
import "./Header.scss";
import india from "../img/India.png";
import shape from "../img/shape1.png";
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
  const [members, setMembers] = useState(0);
  const [volunteers, setVolunteers] = useState(0);
  const [cities, setCities] = useState(0);
  const [childrenHelped, setChildrenHelped] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Incrementing the counters until they reach 100
      if (members < 100) {
        setMembers(prevMembers => (prevMembers < 100 ? prevMembers + 1 : 100));
      }
      if (volunteers < 100) {
        setVolunteers(prevVolunteers => (prevVolunteers < 100 ? prevVolunteers + 1 : 100));
      }
      if (cities < 100) {
        setCities(prevCities => (prevCities < 100 ? prevCities + 1 : 100));
      }
      if (childrenHelped < 100) {
        setChildrenHelped(prevChildren => (prevChildren < 100 ? prevChildren + 1 : 100));
      }
    }, 100); // Interval duration to increment by 1

    return () => clearInterval(interval); // Clean up on component unmount
  }, [members, volunteers, cities, childrenHelped]);

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
                  to="home"
                  spy={true}
                  smooth={true}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-black  hover:text-[#70C64F] font-semibold font-sans cursor-pointer"
                  to="aboutsection"
                  spy={true}
                  smooth={true}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-black  hover:text-[#70C64F] font-semibold font-sans cursor-pointer"
                  to="do"
                  spy={true}
                  smooth={true}
                >
                  What we do
                </Link>
              </li>
              <li>
                <Link
                  className="text-black  hover:text-[#70C64F] font-semibold font-sans cursor-pointer"
                  to="work"
                  spy={true}
                  smooth={true}
                >
                  How we work
                </Link>
              </li>
              <li>
                <Link
                  className="text-black  hover:text-[#70C64F] font-semibold font-sans cursor-pointer"
                  to="diffrence"
                  spy={true}
                  smooth={true}
                >
                  How we Make Difference
                </Link>
              </li>
              <li className="">
                <Link
                  className="text-black hover:text-[#70C64F] font-semibold font-sans cursor-pointer"
                  to="contactme"
                  spy={true}
                  smooth={true}
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
        <ul className="p-10">
          <li className="">
            <Link
              className="text-black  hover:text-[#70C64F] text-xl font-bold font-sans cursor-pointer"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black  hover:text-[#70C64F] text-xl font-bold font-sans cursor-pointer"
              to="aboutsection"
              spy={true}
              smooth={true}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black  hover:text-[#70C64F] text-xl font-bold font-sans cursor-pointer"
              to="do"
              spy={true}
              smooth={true}
              onClick={() => setMobileMenuOpen(false)}
            >
              What we do
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black  hover:text-[#70C64F] text-xl font-bold font-sans cursor-pointer"
              to="work"
              spy={true}
              smooth={true}
              onClick={() => setMobileMenuOpen(false)}
            >
              How we work
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black  hover:text-[#70C64F] text-xl font-bold font-sans cursor-pointer"
              to="diffrence"
              spy={true}
              smooth={true}
              onClick={() => setMobileMenuOpen(false)}
            >
              How we make difference
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black  hover:text-[#70C64F] text-xl font-bold font-sans cursor-pointer"
              to="contactme"
              spy={true}
              smooth={true}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      <section id="home">
        <div className="w-full md:bg-fixed md:w-full">
          <div className="photos hidden md:block">
            <img src={shape} alt="Side Image" className="photo one" />
            <img src={plus} alt="Side Image" className="photo two" />
          </div>
          <div className="mx-2 md:mx-5 flex flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-1/2 p-5 mt-4 md:mt-10 leading-10">
              <div className="leading-8" style={textShadowStyle}>
                <div className="text-black text-4xl md:text-7xl font-black font-sans wow fadeInUp">
                  Education is a
                </div>
                <div className="text-black text-4xl md:text-7xl font-bold font-sans wow fadeInUp mt-2">
                  path to <span className="text-[#FFC500]">success</span>
                </div>
                <div className="text-black text-4xl md:text-7xl font-bold font-sans wow fadeInUp mt-2">
                  in life
                </div>
                <div className="text-gray-400 text-lg md:text-xl font-semibold font-sans wow fadeInUp mt-1">
                  To empower girl children across the world
                </div>
                <img
                  src={shape}
                  alt="Side Image"
                  className="photo one md:hidden"
                />
                <div className="">
                  <div
                    className="flex gap-3 mt-4 md:mt-6 wow fadeInUp"
                    style={textShadowStyle}
                  >
                    <a
                      href="https://instagram.com/vagusimmigrations?igshid=MTI1ZDU5ODQ3Yw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform transition duration-500 hover:scale-125 text-black hover:text-[#70C64F]"
                    >
                      <IconBrandInstagram size={40} className="" />
                    </a>
                    <a
                      href="https://www.facebook.com/vagusimmigrations?mibextid=ZbWKwL
                      "
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform transition duration-500 hover:scale-125 text-black  hover:text-[#70C64F]"
                    >
                      <IconBrandFacebook size={40} variant="Bold" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/vagus-immigrations/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform transition duration-500 hover:scale-125 text-black  hover:text-[#70C64F]"
                    >
                      <IconBrandLinkedin size={40} />
                    </a>
                    <a
                      href="https://twitter.com/VAGUSIMMIG46592?t=PkW5gNapZCSd0zVVoZzBHw&s=09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform transition duration-500 hover:scale-125 hover:text-[#70C64F] text-black :text-[#FFC500]"
                    >
                      <IconBrandX size={40} />
                    </a>
                    <a
                      href="https://youtube.com/@VagusImmigrations"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform transition duration-500 hover:scale-125 text-black  hover:text-[#70C64F]"
                    >
                      <IconBrandYoutube size={40} />
                    </a>
                  </div>
                </div>
                <div className="text-black text-lg md:text-2xl font-semibold font-sans wow fadeInUp mt-3">
                  We neither request nor accept cash payments.
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img src={india} alt="Side Image" className="max-w-full h-auto" />
            </div>
          </div>
          <div className="mx-24 flex justify-center mt-4 md:mt-0 sm-mx:24">
            <div className="shadow-2xl p-5  rounded-lg w-full bg-[#F9F9F9] md:w-4/5 wow fadeInUp" style={{borderRadius:"20px"}}>
              <div className="flex flex-col md:flex-row justify-evenly md:justify-between ">
                <div className="text-center mb-4 md:mb-0">
                  <div className="text-[#FFC500] font-bold text-lg md:text-xl">
                    {members}+
                  </div>
                  <div className="text-black font-bold text-lg md:text-xl">
                    Member
                  </div>
                </div>
                <div className="text-center mb-4 md:mb-0">
                  <div className="text-[#FFC500] font-bold text-lg md:text-xl">
                   {volunteers}+
                  </div>
                  <div className="text-black font-bold text-lg md:text-xl">
                    Volunteer
                  </div>
                </div>
                <div className="text-center mb-4 md:mb-0">
                  <div className="text-[#FFC500] font-bold text-lg md:text-xl">
                    {cities}+
                  </div>
                  <div className="text-black font-bold text-lg md:text-xl">
                    Cities
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[#FFC500] font-bold text-lg md:text-xl">
                    {childrenHelped}+
                  </div>
                  <div className="text-black font-bold text-lg md:text-xl">
                    Children Helped
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      {/* </div> */}
    </>
  );
}

export default Header;
