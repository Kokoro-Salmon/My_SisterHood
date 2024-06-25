import * as React from "react";
import "./IncidentCard.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function IncidentCard(props) {
  return (
    <div className="Incidentonecard">
      <div className="IncidentHeader">
        <div className="incidentTitle">{props.title}</div>
        (&nbsp;{props.typeOfViolence}&nbsp;)
      </div>
      <div>
        {props.gender}&nbsp;|&nbsp;{props.age}
      </div>
      <div className="incidentdesc">{props.desc}</div>
      <div className="incidentlocandatetimespace"></div>
      <div className="incidentlocandatetime">
        <div className="incidentDate">
          <DateRangeIcon style={{ color: "#5D3FD3" }} />
          &nbsp;{props.time.slice(0, 10)}
        </div>
        <div className="incidentTime">
          <AccessTimeIcon style={{ color: "green" }} />
          &nbsp;{props.time.slice(11, 16)}
        </div>
        <div className="incidentlocation">
          <LocationOnIcon style={{ color: "red" }} />
          &nbsp;{props.city}&nbsp;{props.state}
        </div>
      </div>
      <br />
    </div>
  );
}
