import React, { useEffect, useState } from "react";
import left from "../img/plus tleft.png";
import right from "../img/tright.png";
import "./What.scss";
import WOW from "wow.js";
import { useNavigate } from "react-router-dom";
import {
  IconArrowBack,
  IconArrowLeft,
  IconChevronLeft,
  IconPlayerPlay,
} from "@tabler/icons-react";
import { Table, Input, Modal } from "antd";
import best from "../img/Educating girls - BBC News.mp4";

export const What = () => {
  const navigate = useNavigate();
  const [openModal, setopenModal] = useState(false);
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const handleChange = (value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/about");
  };
  return (
    <>
    <section id="do">
    <div className="photos1 p-3">
        <img src={left} alt="Side Image" className="photo1 one1" />
        <img src={right} alt="Side Image" className="photo1 two1" />
        {/* <img src={bleft} alt="Side Image" className="photo1 one2" />
    <img src={bright} alt="Side Image" className="photo1 two2" /> */}
      </div>
      <div className=" bg-[#F7F7F7] section pb-10" id="whyme"          style={{ textAlign: "justify", textJustify: "auto" }}>
        <div className="">
          <p className="text-4xl sm:text-4xl lg:text-5xl  text-[#FF5C00] font-bold text-center wow fadeInUp pt-4">
            What we do
          </p>
          <div className="text-base text-[#7B7B7B] text-center mt-3 font-normal leading-relaxed mb-2 lg:mb-6 wow fadeInUp">
            EMPOWERING LIVES THROUGH EDUCATION
          </div>

          <div class="flex justify-center  h-96 sm:h-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:mt-10 lg:mt-12">
              <div class="ring-1 ring-orange-600 shadow-xl rounded-xl p-3 sm:p-5 w-full sm:w-3/5 mx-auto wow fadeInUp">
                <div class="flex items-center justify-center -mt-6 sm:-mt-9">
                  <div class="rounded-full bg-orange-600 w-8 h-8 flex items-center justify-center">
                    <span class="text-white text-lg font-bold">1</span>
                  </div>
                </div>
                <div class="text-black font-semibold text-center mt-2 wow fadeInUp">
                  Promotes girls' and women's rights
                </div>
              </div>

              <div class="ring-1 ring-orange-600 shadow-xl rounded-xl p-3 sm:p-5 w-full sm:w-3/5 mx-auto wow fadeInUp">
                <div class="flex items-center justify-center -mt-6 sm:-mt-9">
                  <div class="rounded-full bg-orange-600 w-8 h-8 flex items-center justify-center">
                    <span class="text-white text-lg font-bold">2</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div class="text-black font-semibold text-center mt-2 wow fadeInUp" >
                    Empowered
                    <br />
                    and aware citizen
                  </div>
                </div>
              </div>
              <div class="ring-1 ring-orange-600 shadow-xl rounded-xl p-3 sm:p-5 w-full sm:w-3/5  mx-auto wow fadeInUp">
                <div class="flex items-center justify-center -mt-6 sm:-mt-9">
                  <div class="rounded-full bg-orange-600 w-8 h-8 flex items-center justify-center">
                    <span class="text-white text-lg font-bold">3</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div class="text-black font-semibold text-center mt-2 wow fadeInUp">
                    Provides education resources
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center  h-96 sm:h-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:mt-10 lg:mt-12">
              <div class="ring-1 ring-orange-600 shadow-xl rounded-xl p-3 sm:p-5 w-full sm:w-3/5 mx-auto wow fadeInUp">
                <div class="flex items-center justify-center -mt-6 sm:-mt-9">
                  <div class="rounded-full bg-orange-600 w-8 h-8 flex items-center justify-center">
                    <span class="text-white text-lg font-bold">4</span>
                  </div>
                </div>
                <div class="text-black font-semibold text-center mt-2 wow fadeInUp">
                  Boosts the economic growth
                </div>
              </div>

              <div class="ring-1 ring-orange-600 shadow-xl rounded-xl p-3 sm:p-5 w-full sm:w-3/5 mx-auto wow fadeInUp">
                <div class="flex items-center justify-center -mt-6 sm:-mt-9">
                  <div class="rounded-full bg-orange-600 w-8 h-8 flex items-center justify-center">
                    <span class="text-white text-lg font-bold">5</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div class="text-black font-semibold text-center mt-2 wow fadeInUp">
                    reduces the incidence of poverty
                  </div>
                </div>
              </div>
              <div class="ring-1 ring-orange-600 shadow-xl rounded-xl p-3 sm:p-5 w-full sm:w-3/5 mx-auto wow fadeInUp">
                <div class="flex items-center justify-center -mt-6 sm:-mt-9">
                  <div class="rounded-full bg-orange-600 w-8 h-8 flex items-center justify-center">
                    <span class="text-white text-lg font-bold">6</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div class="text-black font-semibold text-center mt-2 wow fadeInUp">
                    A better livelihood for everyone
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8" id="work">
            <div className="bg-white shadow-xl rounded-lg mt-4 p-8" style={{borderRadius:"20px"}}>
              <div className="text-[#FF5C00] font-bold text-3xl wow fadeInUp">
                How we work
              </div>
              <div className="text-lg text-[#7B7B7B] wow fadeInUp font-normal leading-relaxed mb-2 lg:mb-6 mt-2">
                Sumadula is an education trust with a mission to donate
                essential products for the education of young girls. Sumadula
                accepts tangible products for donating to Young girls and
                schools.
              </div>
              <button
                className="mt-3 flex gap-2 bg-[#FF5C00] self-start text-white font-bold py-2 px-4 rounded-full  wow fadeInUp cursor-pointer text-lg "
                type="submit"
                onClick={() => setopenModal(true)}
              >
                PLAY <IconPlayerPlay className="" />
              </button>
            </div>
          </div>
        </div>
      </div> <Modal
        title="How we work"
        visible={openModal}
        onCancel={() => setopenModal(false)}
        footer={[
          <button
            key="generateReport"
            onClick={() => setopenModal(false)}
            className=" flex justify-center items-center rounded-full bg-[#FF5C00] p-2 text-lg text-white font-sans font-bold transform transition duration-500 hover:scale-125"
          >
            Back{" "}
            <span className="pl-1    ">
              <IconChevronLeft />
            </span>
          </button>,
        ]}
      >
        <div className="bg-white p-4 rounded-lg drop-shadow-lg mt-5">
          <div className="aspect-w-9 aspect-h-5">
            <video
              className="w-full h-full object-cover rounded-lg"
              preload="auto"
              controls={false}
              autoPlay
              loop
              muted
              loading="lazy"
            >
              <source src={best} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Modal>
    </section>
      
     
     
    </>
  );
};

export default What;
