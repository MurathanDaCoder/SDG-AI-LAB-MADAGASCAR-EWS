import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Map from "./Components/Map";
import NavBar from "./Components/NavBar";
import DataExport from "./Components/DataExport";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Indicators from "./Components/Indicators";
import About from "./Components/About";
import Partners from "./Components/Partners";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/reports" element={<DataExport />} />
          <Route path="/indicators" element={<Indicators />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
