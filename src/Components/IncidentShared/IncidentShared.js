import React, { useState } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ListItemText from "@mui/material/ListItemText";
import { SearchContext } from "../../Context/SearchContext";
import { useContext } from "react";
import useFetch from "../../Hooks/useFetch";
import "./IncidentShared.css";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const options = [
  "Rape/Sexual Assault",
  "Chain Snatching/Robbery",
  "Domestic Violence",
  "Physical Assault",
  "Stalking",
  "Ogling/Facial Expressions/Staring",
  "Taking photos without permission",
  "Indecent Exposure/Masturbation in public",
  "Touching /Groping",
  "Showing Pornography without consent",
  "Commenting/Sexual Invites",
  "Online Harassment",
  "Human Trafficking",
];
const timeshow = ["All time", "Today", "This Week", "This Month", "This Year"];
const Indiastates = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Jammu and Kashmir",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function IncidentShared() {
  const {
    typesofassault,
    setTypesofassault,
    locations,
    setLocations,
    showIncidentsfrom,
    setShowIncidentsfrom,
  } = useContext(SearchContext);

  const { data, loading, reFetch } = useFetch(
    `https://hercare-0nh9.onrender.com/getAllIncidents?typesofassault=${typesofassault}&locations=${locations}&showIncidentsfrom=${showIncidentsfrom}`
  );

  const [typeofassault, setTypeofassault] = useState([]);
  const [location, setLocation] = useState("");
  const [showIncidentfrom, setShowIncidentfrom] = useState("All time");

  const handleIncidentSearch = () => {
    console.log(data);
    setTypesofassault(typeofassault);
    setLocations(location);
    setShowIncidentsfrom(showIncidentfrom);
  };
  const handleIncidentClear = () => {
    console.log();
    setTypesofassault([]);
    setTypeofassault([]);
    setLocation("");
    setLocations("");
    setShowIncidentfrom("All time");
    setShowIncidentsfrom("All time");
  };
  const handleTypeofassault = (event) => {
    const {
      target: { value },
    } = event;
    setTypeofassault(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleshowincidentwithin = (event) => {
    setShowIncidentfrom(event.target.value);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  return (
    <div className="incidentfiltering">
      <div className="typeofassaultdrop">
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel id="demo-multiple-checkbox-label">
            Types of Assault
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={typeofassault}
            onChange={handleTypeofassault}
            input={<OutlinedInput label="Type of Assault" />}
            renderValue={(typeofassault) => "Types of Assault"}
            MenuProps={MenuProps}
          >
            {options.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={{ whiteSpace: "unset", wordBreak: "break-all" }}
              >
                <Checkbox checked={typeofassault.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="IndianStatesdrop">
        <Box>
          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-simple-select-label">
              Select Indian State
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              label="Select Indian State"
              onChange={handleLocation}
            >
              {Indiastates.map((state) => {
                return <MenuItem value={state}>{state}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="showIncidentswithin">
        <Box>
          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-simple-select-label">
              Show Incident Within
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={showIncidentfrom}
              label="Show Incidents Within"
              onChange={handleshowincidentwithin}
            >
              {timeshow.map((time) => {
                return <MenuItem value={time}>{time}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="incidentbtns">
        <button className="searchincidents" onClick={handleIncidentSearch}>
          Search&nbsp;
          <SearchIcon />
        </button>
        <button className="deleteincidents" onClick={handleIncidentClear}>
          Clear&nbsp;
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
