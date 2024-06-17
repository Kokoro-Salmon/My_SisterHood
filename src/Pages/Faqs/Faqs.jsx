import React from "react";
import "./Faqs.css";
import { SideBar } from "../../Components/SideBar/SideBar";
import { Data } from "./Data";
import { FaqsCard } from "../../Components/FaqsCard/FaqsCard";
import Navbar from "../../Components/Navbar/Navbar";

export const Faqs = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="faqcontainer">
        <h1 className="faqstitle">Frequently Asked Questions</h1>
        <div className="faqscontain">
          {Data.map((faq) => {
            return <FaqsCard question={faq.question} answer={faq.answer} />;
          })}
        </div>
      </div>
    </>
  );
};
