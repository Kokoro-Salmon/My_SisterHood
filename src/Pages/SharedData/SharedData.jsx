import React from "react";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import IncidentScrollbar from "../../Components/IncidentScrollbar/IncidentScrollbar.js";
import "./SharedData.css";
import Sidenav from "../../Components/Sidenav/Sidenav.js";
import SafetyTipsScrollbar from "../../Components/SafetyTipsScrollbar/SafetyTipsScrollbar.js";
import { useContext } from "react";
import { TogglerContext } from "../../Context/TogglerContext.js";
import IncidentDialog from "../../Components/IncidentDialog/IncidentDialog.js";
import Footer from "../../Components/Footer/Footer.jsx";

const SharedData = () => {
  const { takeincident, setTakeincident } = useContext(TogglerContext);
  return (
    <>
      <Navbar />
      <div className="viewdatacont">
        <div className="topfilterbar">
          <Sidenav />
        </div>
        <div className="cardsofincident">
          {takeincident && <IncidentScrollbar />}
          {!takeincident && <SafetyTipsScrollbar />}
        </div>
      </div>
      <div className="viewdatafooter">
        <Footer />
      </div>
    </>
  );
};

export default SharedData;
