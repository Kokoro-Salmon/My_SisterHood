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
        <h1 className="lrtitle">Sexual Violence Laws under Indian Penal Code (IPC)</h1>
        <div className="lrcontain">
          {Data.map((it) => {
            return (
              <NestedCard
                heading={it.heading}
                sections={it.sections}
                punishment={it.punishment}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
