import React, { useState } from "react";
import "./MapSide.css";

export default function MapSide() {
  const [Incident, setIncident] = useState(true);
  const handleIncidents = (status) => {
    // console.log(status);
    setIncident(status);
    if (status === true) console.log("Incidents Active");
    else console.log("Safety Tips Active");
  };
  return (
    <>
      <div className="mapside">
        <div className="incidenttips">
          <div
            className={
              Incident ? "togactive incidentsnearme" : "incidentsnearme"
            }
            onClick={() => handleIncidents(true)}
          >
            Incidents
          </div>
          <div
            className={!Incident ? "togactive safetytips" : "safetytips"}
            onClick={() => handleIncidents(false)}
          >
            Safety Tips
          </div>
        </div>
        {Incident && (
          <>
            <div className="incidenttitle">
              Have you been 
              <span className="span-underlined"> sexually harassed? </span>
            </div>
            <div className="incidentdesc">
              Join the 40000+ people who have shared their experiences to make
              public spaces safer. Sharing your experience helps us identify
              patterns and create safer spaces. Information is analysed to
              engage our communities to find solutions and hold our civic and
              police officials accountable to have better policies and
              infrastructure. Your information remains anonymous.
            </div>
            <div className="incidentbtn">
              <button
                className="incidentsharebtn"
                // Navigation to be put Here
              >
                Share Your Incident Anonymously
              </button>
            </div>
          </>
        )}
        {!Incident && (
          <>
            <div className="Safetytipstitle">
              How do you 
              <span className="span-underlined"> navigate </span>
               public places
              <span className="span-underlined"> safely? </span>
            </div>
            <div className="Safetytipsdesc">
              Have you found a way out of a potentially traumatic experience?
              Have you identified ways to commute through your city safely? Tell
              us what you do for your safety so that others can do the same.
            </div>
            <div className="Safetytipsbtn">
              <button
                className="Safetytipssharebtn"
                // Navigation to be put here
              >
                Share Some Safety Tip Anonymously
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}