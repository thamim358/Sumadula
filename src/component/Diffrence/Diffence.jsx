import React, { useEffect, useState } from "react";
import left from "../img/plus tleft.png";
import right from "../img/tright.png";
import "../What we do/What.scss";
import WOW from "wow.js";

export const Diffrence = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const cardsData = [
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faComputer}
      //       className="text-blue-400"
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: "Improved Educational Outcomes",
      description:
        " Access to essential products can enhance a girl's learning experience, leading to better academic performance and increased educational attainment",
    },
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faDesktop}
      //       className="text-blue-400"
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: "Health and Hygiene",
      description:
        "Hygiene products like sanitary napkins can improve girls' health and well-being. Proper hygiene management can reduce the number of school days missed due to menstrual issues.",
    },
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faMobileScreen}
      //       className="text-blue-400 "
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: "Empowerment",
      description:
        "Education empowers girls by providing them with knowledge and skills. By donating essential products, the foundation contributes to this empowerment, enabling girls to break free from the cycle of poverty and inequality.",
    },
  ];
  const cardsData2 = [

    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faDesktop}
      //       className="text-blue-400"
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: "Economic Opportunities",
      description:
        "Education equips girls with the skills needed for future employment, reducing their financial dependence and contributing to their economic independence.",
    },
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faMobileScreen}
      //       className="text-blue-400 "
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: "Social Awareness",
      description:
        "Education fosters awareness of various social issues and rights. Girls who receive support from the foundation may become advocates for gender equality and social change.",
    },
  ];
  return (
    <>
      <div className="photos1 p-3">
        <img src={left} alt="Side Image" className="photo1 one1" />
        <img src={right} alt="Side Image" className="photo1 two1" />
        {/* <img src={bleft} alt="Side Image" className="photo1 one2" />
    <img src={bright} alt="Side Image" className="photo1 two2" /> */}
      </div>
      <div className=" section pb-10 mt-4" id="diffrence"   style={{ textAlign: "justify", textJustify: "auto" }}>
        <div className="">
          <p className="text-4xl sm:text-4xl lg:text-5xl  text-[#FF5C00] font-bold text-center wow fadeInUp pt-4">
           How we make difference
          </p>

          <div className="flex flex-wrap justify-center mt-24 wow fadeInUp mx-10 lg:mx-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3 gap-5">
              {cardsData.map((card, index) => (
                <div className="flex" key={index}>
                  <div
                    className="group  bg-white bg-opacity-5 rounded-lg ring-1 ring-[#FF5C00] shadow-lg transform hover:scale-110 transition-transform duration-500 "
                    style={{ borderRadius: "20px" }}
                  >
                    <div className="text-center p-6 wow fadeInUp">
                      {card.logo}
                    </div>
                    <div className="px-4 py-2">
                      <h3 className="text-base text-center text-[#FF5C00] uppercase font-bold mb-2 wow fadeInUp">
                        {card.title}
                      </h3>
                      <p className="text-[#737070] text-center font-semibold text-base p-3 wow fadeInUp">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-4 wow fadeInUp mx-10 lg:mx-24">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-2 gap-5 ">
              {cardsData2.map((card, index) => (
                <div className="flex" key={index}>
                  <div
                    className="bg-white bg-opacity-5 rounded-lg ring-1 ring-[#FF5C00] shadow-lg transform hover:scale-110 transition-transform duration-500"
                    style={{ borderRadius: "20px" }}
                  >
                    <div className="text-center p-6 wow fadeInUp">
                      {card.logo}
                    </div>
                    <div className="px-4 py-2">
                      <h3 className="text-base text-center text-[#FF5C00] uppercase font-bold mb-2 wow fadeInUp">
                        {card.title}
                      </h3>
                      <p className="text-[#737070] text-center font-semibold text-base p-3 wow fadeInUp">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diffrence;
