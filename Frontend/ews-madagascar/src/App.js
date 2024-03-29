import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Map from "./Components/Map";
import NavBar from "./Components/NavBar";
import DataExport from "./Components/DataExport";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/export" element={<DataExport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
