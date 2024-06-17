import React, { useState } from "react";
import "./TopNgos.css";
import { ngosdata } from "./data.js";
import Navbar from "../../Components/Navbar/Navbar.jsx";

const TopNgos = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand the clicked card
    }
  };

  return (
    <>
      <Navbar />
      <div className="ngodetails">
        <div className="ngoheader">
          10 NGOs helping women to fight for their rights in India
        </div>
        <div className="Ngosdata">
          {ngosdata.map((option, index) => (
            <div
              className={`ngocard ${expandedIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleExpand(index)}
            >
              <div className="ngotitle">
                {index + 1}.&nbsp;{option.title}
              </div>
              <div className="ngocontent">
                <div className="ngoimg">
                  <img src={option.img} alt={option.title} className="ngoimg" />
                </div>
                {expandedIndex === index && (
                  <div className="ngodesc">
                    <p>{option.desc}</p>
                    <div className="ngobtn">
                      <a
                        href={option.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check Here...
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopNgos;
