import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import LegalResources from './Pages/LegalResources/LegalResources';
import { SexualViolenceLaws } from './Components/SexualViolenceLaws/SexualViolenceLaws';
import { ContactUs } from './Pages/ContactUs/ContactUs';
import { About } from './Pages/About/About';
function App() {
  return (
    <div className="mainapp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/LegalResources" element={<LegalResources />} />
          <Route
            exact
            path="/SexualViolenceLaws"
            element={<SexualViolenceLaws />}
          ></Route>
           <Route exact path="/Contacts" element={<ContactUs />}></Route>
           <Route exact path="/About" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
