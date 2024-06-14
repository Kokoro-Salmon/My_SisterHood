import React from "react";
import "./LegalResources.css";
import { useNavigate } from "react-router-dom";
import RateReviewIcon from '@mui/icons-material/RateReview';
import GavelIcon from '@mui/icons-material/Gavel';
import { SideBar } from "../../Components/SideBar/SideBar";

export default function LegalResources() {
    const navigate = useNavigate();
  return (
    <div className="totaldiv">
      {/* <Navbar /> */}
      <SideBar />
      <div className="legalresource">
        <div
          onClick={() => navigate("/SexualViolenceLaws")}
          className="sexualviolence"
        >
          <GavelIcon />
          SEXUAL VIOLENCE LAWS
        </div>
        <div onClick={() => navigate("/FilingOfFir")} className="FIRfiling">
          <RateReviewIcon />
           FIR FILING
        </div>
      </div>
    </div>
  );
}
