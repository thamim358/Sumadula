import React, { useState, useEffect, useRef } from "react";
import WOW from "wow.js";
import { Link } from "react-scroll";
import { Tabs } from "antd";
import "../Header/Header.scss";
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

function Landing() {
  const textShadowStyle = {
    textShadow: "4px 2px 6px rgba(0, 0, 0, 0.3)", // Adjusted shadow values
  };
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);


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
    
      <section id="home">
        <div className="w-full md:bg-fixed md:w-full">
          <div className="photos hidden md:block">
            {/* <img src={shape} alt="Side Image" className="photo one" /> */}
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
                {/* <img
                  src={shape}
                  alt="Side Image"
                  className="photo one md:hidden"
                /> */}
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

export default Landing;
