import React from "react";
import "./Footer.css";
export default function Footer() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return (
    <>
      <div className="footer">
        <div className="fText">Copyright &copy; {currentYear} HerCare</div>
      </div>
    </>
  );
}
