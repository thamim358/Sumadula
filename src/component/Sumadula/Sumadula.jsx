import React, { useEffect } from "react";
import "../Header/Header.scss";

import WOW from "wow.js"
import right from "../img/tright.png";
import { useNavigate } from "react-router-dom";
import {
  IconPhoneCall,
} from "@tabler/icons-react";

export const Sumadula = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <div className="photos1 p-3">
        <img src={right} alt="Side Image" className="photo1 two1 " />
      </div>
      <div className="section bg-[#F7F7F7] " id=""  style={{ textAlign: "justify", textJustify: "auto" }}>
        <div className="py-10 sm:px-2 ">
          <div className="p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="w-full lg:w-1/2">
              <div className="text-base text-[#FF5C00] font-bold mb-2 lg:mb-6 self-start wow fadeInUp">
                DONATE TO SUMADULA
              </div>
              <div className="text-2xl text-[#737070] font-bold leading-relaxed mb-2 lg:mb-6 wow fadeInUp">
                Sumadula, established in 2023, is an educational trust with a
                dedicated mission: to empower and support girl child education.
                We focus on making a tangible difference by donating essential
                products that directly enhance the educational journey of young
                students. Donate and empower girl child. See the happy childhood
                they deserve. Your small contribution will make a big difference
                in their lives!
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-8">
              <div className="text-lg text-black font-bold mb-2 lg:mb-6 self-start wow fadeInUp">
                There are two convinient options for potential donors
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="lg:mr-8 mb-6 lg:mb-0">
                  <div className="text-lg text-[#FF5C00] font-bold wow fadeInUp">
                    Sending Donations
                  </div>
                  <div className="text-black font-semibold mt-2 text-base wow fadeInUp">
                    You can send the donations for the child to our address.
                  </div>
                </div>
                <div className="lg:ml-8">
                  <div className="text-lg text-[#FF5C00] font-bold">
                    Pick Up Services
                  </div>
                  <div className="text-black font-semibold mt-2 text-base wow fadeInUp">
                    We will pickup the donations from your hands after
                    contacting us
                  </div>
                </div>
              </div>

              <button
                className="mt-24  flex gap-2 bg-[#FF5C00] self-start text-white font-bold py-1 px-4 rounded-full wow fadeInUp cursor-pointer text-lg  transform transition duration-500 hover:scale-125"
                type="submit"
              >
                Contact us <IconPhoneCall />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sumadula;
