import React, { useEffect } from "react";
import footerImage from "../img/sumadula.png";
import sym from "../img/shape 2.png"
import WOW from "wow.js";
import "./Footer.scss"
import { Link } from "react-scroll";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandX,
} from "@tabler/icons-react";

function Footer() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
  <div className="mx-8">
  <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  </div>
     
    <footer className=" py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center wow fadeInUp">
                <img src={footerImage} alt="Footer Logo" className="h-70" />
              </a>
            </div>
            <div className="footers p-3">
    <img src={sym} alt="Side Image" className="footer two4" />
  </div>  
            <div className="grid grid-cols-2 gap-24 gap-y-8 sm:gap-24 sm:grid-cols-2">
              <div>
                <h2 className="mb-6 text-lg font-semibold text-[#FFC500] wow fadeInUp">
                  Links
                </h2>
                <ul className="wow fadeInUp">
                  <li className="mb-3">
                    <Link
                      className="text-black  hover:text-orange-600 font-medium font-sans cursor-pointer "
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      className="text-black  hover:text-orange-600 font-medium font-sans cursor-pointer"
                      to="aboutsection"
                      spy={true}
                      smooth={true}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      className="text-black  hover:text-orange-600 font-medium font-sans cursor-pointer"
                      to="do"
                      spy={true}
                      smooth={true}
                    >
                      What we do
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      className="text-black  hover:text-orange-600 font-medium font-sans cursor-pointer"
                      to="work"
                      spy={true}
                      smooth={true}
                    >
                      How we work
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      className="text-black  hover:text-orange-600 font-medium font-sans cursor-pointer"
                      to="diffrence"
                      spy={true}
                      smooth={true}
                    >
                      How we Make Difference
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      className="text-black  hover:text-orange-600 font-medium font-sans cursor-pointer"
                      to="contactme"
                      spy={true}
                      smooth={true}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                
                <h2 className="mb-6 text-lg font-semibold text-[#FFC500] wow fadeInUp">
                  Follow us
                </h2>
                <ul className="wow fadeInUp">
                  <li className="mb-4">
                    <SocialLink
                      href="https://instagram.com/vagusimmigrations?igshid=MTI1ZDU5ODQ3Yw=="
                      icon={<IconBrandInstagram size={32} />}
                      label="Instagram"
                    />
                    <SocialLink
                      href="https://www.facebook.com/vagusimmigrations?mibextid=ZbWKwL"
                      icon={<IconBrandFacebook size={32} />}
                      label="Facebook"
                    />
                    <SocialLink
                      href=" https://www.linkedin.com/company/vagus-immigrations/"
                      icon={<IconBrandLinkedin size={32} />}
                      label="LinkedIn"
                    />
                    <SocialLink
                      href=" https://twitter.com/VAGUSIMMIG46592?t=PkW5gNapZCSd0zVVoZzBHw&s=09"
                      icon={<IconBrandX size={32} />}
                      label="X"
                    />
                    <SocialLink
                      href="https://youtube.com/@VagusImmigrations"
                      icon={<IconBrandYoutube size={32} />}
                      label="YouTube"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-base text-black font-medium wow fadeInUp">
              © 2023{" "}
              <a
                href="https://flowbite.com/"
                className="hover:underline text-[#70C64F]"
              >
                Sumudula™
              </a>
              . All Rights Reserved.
            </span>
          </div>
         
        </div>
      </div>
    </footer>
    </>
  );
}

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transform transition flex mb-3 items-center duration-500 hover:scale-125 text-black hover:text-[#70C64F]"
  >
    {icon}
    <span className="text-sm mt-1 pl-2">{label}</span>
  </a>
);

export default Footer;
