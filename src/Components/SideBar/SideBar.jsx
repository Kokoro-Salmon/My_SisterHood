import React from "react";
import "./SideBar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import PolicyIcon from "@mui/icons-material/Policy";
import PhoneIcon from "@mui/icons-material/Phone";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import GavelIcon from "@mui/icons-material/Gavel";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";

export const SideBar = () => {

  return (
    <div className="navList">
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? "nav-link sideactive" : "nav-link"
            }
            to="/LegalResources"
          >
            <PolicyIcon />
            &nbsp;&nbsp;Legal Resources
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? "nav-link sideactive" : "nav-link"
            }
            to="/Contacts"
          >
            <PhoneIcon />
            &nbsp;&nbsp;Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? "nav-link sideactive" : "nav-link"
            }
            to="/About"
          >
            <InfoIcon />
            &nbsp;&nbsp;About My SisterHood
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? "nav-link sideactive" : "nav-link"
            }
            to="/Faqs"
          >
            <HelpIcon />
            &nbsp;&nbsp;FAQs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? "nav-link sideactive" : "nav-link"
            }
            to="/SexualViolenceLaws"
          >
            <GavelIcon />
            &nbsp;&nbsp;Sexual Violence Laws
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? "nav-link sideactive" : "nav-link"
            }
            to="/FilingOfFir"
          >
            <LocalPoliceIcon />
            &nbsp;&nbsp;Filing of a FIR
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
