import React from "react";
import "./FilingFIR.css";
import { SideBar } from "../SideBar/SideBar";
import { Data } from "./Data";
import { FIRCard } from "../FIRCard/FIRCard";
import Navbar from "../Navbar/Navbar";

export const FilingFIR = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="fircontainer">
        <h1 className="firtitle">
          Filing of a FIR ( First Information Report )
        </h1>
        <div className="fircontain">
          {Data.map((fir) => {
            return (
              <FIRCard
                heading={fir.heading}
                answer={fir.answer}
                points={fir.points}
                isTrue={fir.isTrue}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
