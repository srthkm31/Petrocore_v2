import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Servicepage from "./Pages/Servicepage";
import Aboutpage from "./Pages/Aboutpage";
import Contactpage from "./Pages/ContactPage";
import Careerpage from "./Pages/Careerpage";
import ScrollToTop from "./components/ScrollToTop";
import Mediapage from "./Pages/Mediapage";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/career" element={<Careerpage />} />
        <Route path="/media" element={<Mediapage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
