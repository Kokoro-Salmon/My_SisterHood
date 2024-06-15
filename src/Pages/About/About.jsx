import React from "react";
import { SideBar } from "../../Components/SideBar/SideBar";
import "./About.css";
export const About = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <SideBar />
      <div className="mainContainer">
        <h1 className="mb">About My SisterHood</h1>
        <div className="logoContainer mb"></div>
        <p className="mb">
          My Sisterhood is a platform that crowdsources personal stories of
          sexual harassment and abuse in public spaces. This data which maybe
          anonymous, gets aggregated as hot spots on a map indicating trends at
          a local level. The idea is to make this data useful for individuals,
          local communities and local administration to identify factors that
          causes behavior that leads to violence and work on strategies for
          solutions.
        </p>
      </div>
    </div>
  );
};
