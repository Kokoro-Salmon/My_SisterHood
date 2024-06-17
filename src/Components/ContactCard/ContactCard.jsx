import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import "./ContactCard.css"
export const ContactCard = () => {
  return (
    <div className="card">
      <ul className="cardullist">
        <li className="cardlist">
          <p className="card-header">Get in Touch</p>
        </li>
        <li className="cardlist">
          <p className="card-text">
            Give us a missed call to share your experience. This is only for
            India callers. Our team will call you ​back within 24 hours.
          </p>
        </li>
        <li className="cardlist">
            <span class="iconstyles" style={{ color: "rgb(255, 255, 255)" }}>
              <PhoneIcon />
              &nbsp;+91 98XXXXXXXX
            </span>
        </li>
        <li className="cardlist">
          <h5 className="card-title">Write To Us</h5>
        </li>
        <li className="cardlist">
            <span class="iconstyles" style={{ color: "rgb(255, 255, 255)" }}>
              <ContactMailIcon />
              &nbsp;&nbsp;info@randomemail.org
            </span>
        </li>
      </ul>
    </div>
  );
};
