import React from "react";
import { SideBar } from "../SideBar/SideBar";
import { Data } from "./Data";
import { NestedCard } from "../NestedCard/NestedCard";
import "./SexualViolenceLaws.css";
export const SexualViolenceLaws = () => {
  return (
    <div className="totaldiv">
      {/* <Navbar /> */}
      <SideBar />
      <div className="lrcontainer">
        <h1 className="lrtitle">Sexual Violence Laws under IPC</h1>
        <div className="lrcontain">
          {Data.map((lr) => {
            return (
              <NestedCard
                heading={lr.heading}
                sections={lr.sections}
                punishment={lr.punishment}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
