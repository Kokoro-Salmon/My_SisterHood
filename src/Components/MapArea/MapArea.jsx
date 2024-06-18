import "./MapArea.css";
import React from "react";
import Sample from "../MapHome/Sample";
import MapSide from "../MapSide/MapSide";

export default function MapArea() {
  return (
    <div className="Master-map-area">
      <div className="mappArea">
        <div className="mapbox">
          <div className="maparea">
            <Sample />
          </div>
          <div className="mapdesc">
            Visualised above is the mapping of incidents of sexual violence
            submitted by thousands of people from around the world. We use this
            data to understand patterns of sexual violence and bring about
            policy reform&nbsp;&nbsp;
            {/* <NavLink to="/viewdata" className="linktoviewdata">
            View more data
            </NavLink> */}
          </div>
        </div>
        <div className="mapsidecont">
          <MapSide />
        </div>
      </div>
    </div>
  );
}
