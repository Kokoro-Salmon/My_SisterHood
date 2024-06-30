import * as React from "react";
import "./SafetyTipsCard.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function SafetyTipsCard(props) {
  return (
    <div className="SafetyTipsonecard2">
      <div className="SafetyTipsHeader2">
        <div className="SafetyTipsTitle2">{props.title}</div>
        (&nbsp;{props.typeOfViolence}&nbsp;)
      </div>
      <div className="SafetyTipsdesc2">{props.desc}</div>
      <div className="SafetyTipsLocation2">
        <LocationOnIcon style={{ color: "red" }} />
        &nbsp;{props.city}&nbsp;{props.state}
      </div>
      <br />
    </div>
  );
}
