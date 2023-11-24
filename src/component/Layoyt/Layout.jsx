import React,{useEffect} from "react";
import Header from "../Header/Header";
import AboutUs from "../About Us/About Us";
import What from "../What we do/What";
import Diffrence from "../Diffrence/Diffence";
import Donate from "../Donate/Donate";
import Sumadula from "../Sumadula/Sumadula";
import ContactUs from "../Contact us/Contact";
import Footer from "../Footer/Footer";

function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <>
    <div className="">
      <Header/>
      <AboutUs/>
      <What/>
      <Diffrence/>
      <Donate/>
      <Sumadula/>
      <ContactUs/>
      <Footer/>
      </div>
    </>
  );
}

export default Layout;
