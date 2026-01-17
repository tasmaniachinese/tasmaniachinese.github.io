import * as React from 'react';
import {useEffect} from 'react';
import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom';
import {CssBaseline} from "@mui/material";
import {Home} from './pages/Home';
import Rally from "./pages/Rally";
import Navbar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./components/Contact";

const App = ()=> {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

  return (
      <>
        <CssBaseline />
          <Navbar/>
          <Banner />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/rally" element={<Rally />} />
          </Routes>
          <Footer />
      </>
  );
}

export default App;
