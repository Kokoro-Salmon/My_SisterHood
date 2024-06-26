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
            exact
            path="/SexualViolenceLaws"
            element={<SexualViolenceLaws />}
          ></Route>
          <Route exact path="/Contacts" element={<ContactUs />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Faqs" element={<Faqs />}></Route>
          <Route exact path="/FilingOfFir" element={<FilingFIR />}></Route>
          <Route exact path="/IncidentForm" element={<IncidentForm />}></Route>
          <Route
            exact
            path="/SafetyTipForm"
            element={<SafetyTipForm />}
          ></Route>
          <Route exact path="/SharedData" element={<SharedData />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
