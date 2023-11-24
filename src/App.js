import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './component/Loader.jsx';
import Layout from './component/Layoyt/Layout.jsx';

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
          <Routes>
            <Route path="/" element={<Layout  />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
