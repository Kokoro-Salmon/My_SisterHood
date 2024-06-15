import React from "react";
import { SideBar } from "../../Components/SideBar/SideBar";
import { ContactCard } from "../../Components/ContactCard/ContactCard";
export const ContactUs = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="contactContainer">
        <SideBar />
        <ContactCard/>
      </div>
    </div>
  );
};
