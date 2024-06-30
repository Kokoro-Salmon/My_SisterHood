import * as React from "react";
import "./IncidentCard.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function IncidentCard(props) {
  return (
    <div className="Incidentonecard2">
      <div className="IncidentHeader2">
        <div className="incidentTitle2">{props.title}</div>
        (&nbsp;{props.typeOfViolence}&nbsp;)
      </div>
      <div>
        {props.gender}&nbsp;|&nbsp;{props.age}
      </div>
      <div className="incidentdesc2">{props.desc}</div>
      <div className="incidentlocandatetimespace2"></div>
      <div className="incidentlocandatetime2">
        <div className="incidentDate2">
          <DateRangeIcon style={{ color: "#5D3FD3" }} />
          &nbsp;{props.time.slice(0, 10)}
        </div>
        <div className="incidentTime2">
          <AccessTimeIcon style={{ color: "green" }} />
          &nbsp;{props.time.slice(11, 16)}
        </div>
        <div className="incidentlocation2">
          <LocationOnIcon style={{ color: "red" }} />
          &nbsp;{props.city}&nbsp;{props.state}
        </div>
      </div>
      <br />
    </div>
  );
}
