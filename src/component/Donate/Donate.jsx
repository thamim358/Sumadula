import React, { useEffect } from "react";
import "../Header/Header.scss";
import WOW from "wow.js";
import { IconArmchair, IconBallVolleyball, IconBook, IconBrandCinema4d, IconBriefcase, IconCalculator, IconDesk, IconDeviceLaptop, IconDeviceProjector, IconGeometry, IconGraph, IconGrowth, IconInbox, IconPencil, IconScissors, IconShirtSport, IconShoe, IconWifi } from "@tabler/icons-react";
import { IconPalette } from "@tabler/icons-react";

function Donate() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const cardsData = [
    {
      logo: (
        <IconBook
          className="transform transition duration-500 hover:scale-125"
          size={40}
          style={{ color: "#FFC500 " }}
        />
      ),
      title: "Book",
    },
    {
      logo: (
        <IconPencil
        className="transform transition duration-500 hover:scale-125"
        size={40}
        style={{ color: "#FFC500 " }}
      />
      ),
      title: "Pens",
    },
    {
      logo: (
        <IconGraph
        className="transform transition duration-500 hover:scale-125"
        size={40}
        style={{ color: "#FFC500 " }}
      />
      ),
      title: "Graphs",
    },
    {
      logo: (
        <IconInbox
          className="transform transition duration-500 hover:scale-125"
          size={40}
          style={{ color: "#FFC500 " }}
        />
      ),
      title: "Pencil Box",
    },
    {
        logo: (
          <IconCalculator
            className="transform transition duration-500 hover:scale-125"
            size={40}
            style={{ color: "#FFC500 " }}
          />
        ),
        title: "Calculator",
      },
      {
        logo: (
          <IconPalette
            className="transform transition duration-500 hover:scale-125"
            size={40}
            style={{ color: "#FFC500 " }}
          />
        ),
        title: "Paints",
      },
  ];
  const cardsData2 = [
    {
      logo: (
        <IconGeometry
          className="transform transition duration-500 hover:scale-125"
          size={40}
          style={{ color: "#FFC500 " }}
        />
      ),
      title: "Geomentry",
    },
    {
      logo: (
        <IconShirtSport
        className="transform transition duration-500 hover:scale-125"
        size={40}
        style={{ color: "#FFC500 " }}
      />
      ),
      title: "Uniforms",
    },
    {
      logo: (
        <IconGrowth
        className="transform transition duration-500 hover:scale-125"
        size={40}
        style={{ color: "#FFC500 " }}
      />
      ),
      title: "Food Grains",
    },
    {
      logo: (
        <IconBriefcase
        className="transform transition duration-500 hover:scale-125"
        size={40}
        style={{ color: "#FFC500 " }}
      />
      ),
      title: "School Bag",
    },
    {
        logo: (
          <IconScissors
            className="transform transition duration-500 hover:scale-125"
            size={40}
            style={{ color: "#FFC500 " }}
          />
        ),
        title: "Scissors",
      },
      {
        logo: (
          <IconShoe
            className="transform transition duration-500 hover:scale-125"
            size={40}
            style={{ color: "#FFC500 " }}
          />
        ),
        title: "Shoes",
      },
  ];
  const cardsData3 = [
    {
      logo: (
        <IconWifi
          className="transform transition duration-500 hover:scale-125"
          size={40}
          style={{ color: "#FFC500 " }}
        />
      ),
      title: "Wifi",
    },
    {
      logo: (
        <IconDeviceLaptop
        className="transform transition duration-500 hover:scale-125"
        size={40}
        style={{ color: "#FFC500 " }}
      />
      ),
      title: "Laptops",
    },
    {
      logo: (
        <IconDeviceProjector
        className="transform transition duration-500 hover:scale-125"
        size={40}
        style={{ color: "#FFC500 " }}
      />
      ),
      title: "Projectors",
    },
    {
      logo: (
        <IconDesk
        className="transform transition duration-500 hover:scale-125"
        size={40}
        style={{ color: "#FFC500 " }}
      />
      ),
      title: "Desk",
    },
    {
        logo: (
          <IconArmchair
            className="transform transition duration-500 hover:scale-125"
            size={40}
            style={{ color: "#FFC500 " }}
          />
        ),
        title: "Chair",
      },
      {
        logo: (
          <IconBallVolleyball
            className="transform transition duration-500 hover:scale-125"
            size={40}
            style={{ color: "#FFC500 " }}
          />
        ),
        title: "Sports",
      },
  ];
  return (
    <>
      <div className="section wave p-7" id="aboutsection">
        <div className="py-10 px-5 lg:mx-12 sm:mx-4 ">
          <div className="text-4xl sm:text-4xl lg:text-5xl  text-[#70C64F] font-bold text-start  wow fadeInUp pt-4 wow fadeInUp mb-5">
          Donate Essential Products
          </div>
          <div className="text-xl text-[#7D6A6A] font-bold mb-2 wow fadeInUp self-start">
            You can donate the following essential products to support girl child education
          </div>
          <div className="max-w-8xl mx-auto flex flex-col-reverse lg:flex-row items-center">
            <div className="w-full mt-10">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-4 wow fadeInUp">
                {cardsData.map((card, index) => (
                  <div className="p-3" key={index}>
                    <div className="bg-white rounded-lg shadow-lg p-2">
                      <div className="text-center">
                        <div className="flex justify-center">
                          {card.logo}
                        </div>
                      </div>
                      <div className="px-4 py-2">
                        <h3 className="text-base text-[#737070] font-semibold text-center">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-4 wow fadeInUp">
                {cardsData2.map((card, index) => (
                  <div className="p-3" key={index}>
                    <div className="bg-white bg-opacity-5 rounded-lg shadow-lg p-2">
                      <div className="text-center">
                        <div className="flex justify-center">
                          {card.logo}
                        </div>
                      </div>
                      <div className="px-4 py-2">
                        <h3 className="text-base text-[#737070] font-semibold text-center">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-3xl text-[#70C64F] font-bold mb-2 lg:mb-6 self-start mt-4">
            For Schools
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-4 wow fadeInUp">
                {cardsData3.map((card, index) => (
                  <div className="p-3" key={index}>
                    <div className="bg-white bg-opacity-5 rounded-lg shadow-lg p-2">
                      <div className="text-center">
                        <div className="flex justify-center">
                          {card.logo}
                        </div>
                      </div>
                      <div className="px-4 py-2">
                        <h3 className="text-base text-[#737070] font-semibold text-center">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
        </div>
      </div>
    </>
  );
}

export default Donate;

