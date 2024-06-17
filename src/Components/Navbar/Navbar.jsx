import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import logo from "../../Images/logo.png";
import warningImg from "../../Images/warningImg.png";
import Dropdown from "../Dropdown/Dropdown";
import CancelIcon from "@mui/icons-material/Cancel";
import DehazeIcon from "@mui/icons-material/Dehaze";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const resetActiveSection = () => {
    setActiveSection("home"); // Reset to default section
  };

  const navbarStyle = {
    position: "sticky",
    top: "0",
    background: "rgba(180, 189, 237, 0.7)", // Semi-transparent background
    backdropFilter: "blur(7px)",
    zIndex: "20",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "Black",
    transition: "transform 0.3s", // Add transition for zoom effect
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: "#FF3400",
  };

  const [dropdown, setDropdown] = useState(false);

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "200px", xs: "40px" },
        mt: { sm: "0px", xs: "0px", ...navbarStyle, padding: "7px 0px" },
      }}
    >
      <Link to="/" onClick={resetActiveSection} className="logo-img">
        {/* Reset active section when logo is clicked */}
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "55px",
            height: "55px",
            marginLeft: "35px",
            display: "block",
            alignItems: "center",
          }}
        />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {!clicked && (
          <DehazeIcon className="bars" style={{ fontSize: "35px" }} />
        )}
        {clicked && (
          <CancelIcon className="bars" style={{ fontSize: "35px" }} />
        )}
      </div>
      <div className={!clicked ? "nav-menu" : "nav-menu active"}>
        {/* <Stack
          direction="row"
          gap="30px"
          fontSize="20px"
          fontWeight="480"
          alignItems="center"
          marginLeft="10px"
          style={{ fontWeight: "30px", fontFamily: "Inter" }}
        > */}
        <Link
          to="/"
          style={activeSection === "home" ? activeLinkStyle : linkStyle}
          onMouseEnter={() => setActiveSection("home")}
          onMouseLeave={resetActiveSection}
          className="hover-zoom"
        >
          Home
        </Link>
        <a
          href="#SharedIncidentsandSafetyTips"
          style={
            activeSection === "sharedincidentsandsafetytips"
              ? activeLinkStyle
              : linkStyle
          }
          onMouseEnter={() => setActiveSection("sharedincidentsandsafetytips")}
          onMouseLeave={resetActiveSection}
          className="hover-zoom"
        >
          Shared Incidents and Safety Tips
        </a>
        <a>
          <Link
            to="/TopNGOs"
            style={activeSection === "topngos" ? activeLinkStyle : linkStyle}
            onMouseEnter={() => setActiveSection("topngos")}
            onMouseLeave={resetActiveSection}
            className="hover-zoom"
          >
            Top NGOs
          </Link>
        </a>
        <a
          href="#Analytics"
          style={activeSection === "analytics" ? activeLinkStyle : linkStyle}
          onMouseEnter={() => setActiveSection("analytics")}
          onMouseLeave={resetActiveSection}
          className="hover-zoom"
        >
          Analytics
        </a>
        <div
          onMouseEnter={() => {
            setActiveSection("more");
            setDropdown(true);
          }}
          onMouseLeave={() => {
            setActiveSection("home");
            setDropdown(false);
          }}
          className="hover-zoom"
          style={activeSection === "more" ? activeLinkStyle : linkStyle}
        >
          <span>More</span>
          <span style={{ position: "relative", top: "2px" }}>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v2.png"
              alt="expand-arrow--v2"
              style={{ height: "18px", width: "18px", marginLeft: "7px" }}
            />
          </span>
          {dropdown && <Dropdown />}
        </div>
        {/* </Stack> */}
      </div>
      <Stack
        direction="row"
        gap="40px"
        fontSize="20px"
        alignItems="center"
        justifyContent="flex-end"
        marginRight="35px"
      >
        <Link to="/Help" style={linkStyle} className="hover-zoom">
          <button
            style={{
              backgroundColor: "#17FF8A",
              color: "#b21800",
              fontFamily: "Inter",
              fontSize: "20px",
              fontWeight: "bolder",
              padding: "12px 20px",
              cursor: "pointer",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "row",
              gap: "4px",
              border: "none",
            }}
          >
            Help
            <img
              src={warningImg}
              alt=""
              style={{
                width: "25px",
                height: "25px",
                marginTop: "0px",
                display: "block",
                alignItems: "center",
              }}
            />
          </button>
        </Link>
      </Stack>
      <style jsx>{`
        .hover-zoom:hover {
          transform: scale(1.1);
        }
          @media (max-width: 1100px) {
          .logo-img {
            margin-left: 110px;
          }
      `}</style>
    </Stack>
  );
};

export default Navbar;
