import React from "react";
import "./LegalResources.css";
import { useNavigate } from "react-router-dom";
import RateReviewIcon from '@mui/icons-material/RateReview';
import GavelIcon from '@mui/icons-material/Gavel';
import { SideBar } from "../../Components/SideBar/SideBar";
import { Typography } from "@mui/material";
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
          <Typography className="LegalHeading" fontSize="2rem" fontWeight="bold">SEXUAL VIOLENCE LAWS</Typography>
          <Typography fontSize="1rem" mt={1}>Understand the laws that protect against sexual violence in India.</Typography>
          <Typography fontSize="1rem" mt={1}>Get informed about your rights and legal recourse.</Typography>
        </div>
        <div onClick={() => navigate("/FilingOfFir")} className="FIRfiling">
          <RateReviewIcon />
          <Typography className="LegalHeading" fontSize="2rem" fontWeight="bold">FIR FILING</Typography>
          <Typography fontSize="1rem" mt={1}>Learn how to file a First Information Report (FIR) in India.</Typography>
          <Typography fontSize="1rem" mt={1}>All About the FIR filing process.</Typography>
        </div>
      </div>
    </div>
  );
}
