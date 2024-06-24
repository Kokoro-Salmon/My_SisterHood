import React from "react";
import { useState } from "react";
import ProgressBar from "../IncidentFrom/ProgressBar";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TypeOfViolence } from "../IncidentFrom/TypeOfViolence";
import { IncidentDescription } from "../IncidentFrom/IncidentDescription";
import { Places } from "../IncidentFrom/Places";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SafetyTipForm = () => {
  const navigate = useNavigate();
  const curDT = new Date().toLocaleString();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    typeOfViolence: "",
    address: {
      country: "",
      state: "",
      city: "",
      lat: "",
      lng: "",
    },
  });

  const FormTitles = [
    "Please share your Safety Tip Here",
    "Select type of violence you are registering for",
    "Please tell us for where you want to enter the safety tip",
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // console.log(JSON.stringify(formData));
    await axios
      .post(
        "http://localhost:3000/safetytip",
        JSON.stringify(formData),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((result) => {
        navigate("/");
      });
  };

  const checkPage = () => {
    if (page === FormTitles.length - 1) 
    {
        return <Button onClick={handleSubmit}>Submit&nbsp;</Button>;
    } 
    else 
    {
      return (
        <Button onClick={handleclick}>
          Next&nbsp;
          <ArrowForwardIcon style={{ fontSize: "20px" }} />
        </Button>
      );
    }
  };
  const PageDisplay = () => {
    if (page === 0) 
    {
      return <TypeOfViolence formData={formData} setFormData={setFormData} />;
    } 
    else if (page === 1) 
    {
      return <IncidentDescription formData={formData} setFormData={setFormData} />
      
    } 
    else 
    {
      return <Places formData={formData} setFormData={setFormData} />;
    }
  };

  const handleclick = () => {
    if (page === 0) {
      if (formData.typeOfViolence === "")
        alert("Please Enter Type Of Violence");
      else setPage((currPage) => currPage + 1);
    } else if (page === 1) {
      if (formData.title === "" || formData.message === "")
        alert("Please Enter the Valid Description or Title");
      else if (formData.message.length < 20)
        alert(
          `Please enter ${
            20 - formData.message.length
          } more Characters in Description!`
        );
      else if (formData.title.length < 6)
        alert(
          `Please enter ${6 - formData.title.length} more Characters in Title!`
        );
      else setPage((currPage) => currPage + 1);
    } else {
      if (formData.address === "") alert("Please Enter a Valid Location!!");
      else setPage((currPage) => currPage + 1);
    }
  };
  return (
    <>
      <div className="Form">
        <div className="form-container">
          <div>
            {" "}
            <ProgressBar done={parseInt(33.3 * page)} />
          </div>
          <h1 className="formTitles">{FormTitles[page]}</h1>
          <div className="body">{PageDisplay()}</div>
          <div className="IncidentFormBtns">
            <Button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              <ArrowBackIcon style={{ fontSize: "20px" }} />
              &nbsp;Prev
            </Button>
            {checkPage()}
          </div>
        </div>
      </div>
    </>
  );
};
