import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LegalResources from "./Pages/LegalResources/LegalResources";
import { SexualViolenceLaws } from "./Components/SexualViolenceLaws/SexualViolenceLaws";
import { ContactUs } from "./Pages/ContactUs/ContactUs";
import { About } from "./Pages/About/About";
import { Faqs } from "./Pages/Faqs/Faqs";
import { FilingFIR } from "./Components/FilingFIR/FilingFIR";
import TopNGOs from "../src/Pages/TopNgos/TopNgos";
import { IncidentForm } from "./Components/IncidentFrom/IncidentForm";
import { SafetyTipForm } from "./Components/SafetyTipForm/SafetyTipForm";
import SharedData from "./Pages/SharedData/SharedData";
import { Analytics } from "./Pages/Analytics/Analytics";

function App() {
  return (
    <div className="mainapp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/TopNGOs" element={<TopNGOs />} />
          <Route path="/LegalResources" element={<LegalResources />} />
          <Route
            path="/SexualViolenceLaws"
            element={<SexualViolenceLaws />}
          ></Route>
          <Route path="/Contacts" element={<ContactUs />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Faqs" element={<Faqs />}></Route>
          <Route path="/FilingOfFir" element={<FilingFIR />}></Route>
          <Route path="/IncidentForm" element={<IncidentForm />}></Route>
          <Route path="/SafetyTipForm" element={<SafetyTipForm />}></Route>
          <Route path="/SharedData" element={<SharedData />}></Route>
          <Route path="/Analytics" element={<Analytics />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
