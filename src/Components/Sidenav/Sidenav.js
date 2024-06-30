import React from "react";
import "./Sidenav.css";
import { useState } from "react";
import Incidentshared from "../IncidentShared/IncidentShared.js";
import IncidentScrollbar from "../IncidentScrollbar/IncidentScrollbar.js";
import IncidentDialog from "../IncidentDialog/IncidentDialog.js";
import TopIncidentBar from "../TopIncidentBar/TopIncidentBar.jsx";
import TopSafetyTipsBar from "../TopSafetyTipsBar/TopSafetyTipsBar.jsx";
import { useContext } from "react";
import useFetch from "../../Hooks/useFetch";
import { TogglerContext } from "../../Context/TogglerContext";

const Sidenav = () => {
  const { takeincident, setTakeincident } = useContext(TogglerContext);
  const [Incident, setIncident] = useState(true);
  const handleIncidents = (currstatus) => {
    setIncident(currstatus);
  };
  if (Incident === false) {
    setTakeincident(false);
  } else {
    setTakeincident(true);
  }
  return (
    <div className="viewdatapage2">
      <div className="sidebarshared2">
        <div className="sidenav2">
          <div className="incidenttips2">
            <div
              className={
                Incident ? "togactive2 incidentsnearme2" : "incidentsnearme2"
              }
              onClick={() => handleIncidents(true)}
            >
              Incidents
            </div>
            <div
              className={!Incident ? "togactive2 safetytips2" : "safetytips2"}
              onClick={() => handleIncidents(false)}
            >
              Safety Tips
            </div>
          </div>
        </div>
        {Incident && (
          <div className="showincidentsshared2">
            <TopIncidentBar />
          </div>
        )}
        {!Incident && (
          <div className="showsafetytipsshared2">
            <TopSafetyTipsBar />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidenav;
