import "./dropdown.css";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Dropdown = () => {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={!click ? "dropdown-menu clicked" : "dropdown-menu active"}
    >
      <li>
        <NavLink to="/LegalResources" onClick={() => setClick(false)}>
          Legal Resources
        </NavLink>
      </li>
      <li>
        <NavLink to="/Contacts" onClick={() => setClick(false)}>
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/About" onClick={() => setClick(false)}>
          About HerCare
        </NavLink>
      </li>
      <li>
        <NavLink to="/Faqs" onClick={() => setClick(false)}>
          Faqs
        </NavLink>
      </li>
    </ul>
  );
};

export default Dropdown;
