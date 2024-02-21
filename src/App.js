import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './component/Loader.jsx';
import Layout from './component/Layoyt/Layout.jsx';
import Licensing from './component/TermAndConditions/Licencing.jsx';
import CookiesPolicy from './component/TermAndConditions/Cookies.jsx';
import PrivacyPolicy from './component/TermAndConditions/Privacypolicy.jsx';
import Terms from './component/TermAndConditions/Terms.jsx';
import Header from './component/Header/Header.jsx';
import Footer from './component/Footer/Footer.jsx';
import Landing from './component/Landing/Landing.jsx';
import AboutUs from './component/About Us/About Us.jsx';
import Diffrence from './component/Diffrence/Diffence.jsx';
import What from './component/What we do/What.jsx';
import Donate from './component/Donate/Donate.jsx';
import Sumadula from './component/Sumadula/Sumadula.jsx';
import ContactUs from './component/Contact us/Contact.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading delay (remove this in production)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader/> // Show the loader while content is loading
      ) : (
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Layout  />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/what" element={<What />} />
            <Route path="/diffrence" element={<Diffrence />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/sumadula" element={<Sumadula />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/license" element={<Licensing />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <Footer/>
        </Router>
      )}
    </>
  );
}

export default App;
