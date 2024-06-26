import * as React from "react";
import "./SafetyTipsCard.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function SafetyTipsCard(props) {
  return (
    <div className="SafetyTipsonecard">
      <div className="SafetyTipsHeader">
        <div className="SafetyTipsTitle">{props.title}</div>
        (&nbsp;{props.typeOfViolence}&nbsp;)
      </div>
      <div className="SafetyTipsdesc">{props.desc}</div>
      <div className="SafetyTipsLocation">
        <LocationOnIcon style={{ color: "red" }} />
        &nbsp;{props.city}&nbsp;{props.state}
      </div>
      <br />
    </div>
  );
}
