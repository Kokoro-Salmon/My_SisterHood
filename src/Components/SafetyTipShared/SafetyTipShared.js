import React, { useState } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import _without from "lodash/without";
import { useContext } from "react";
import useFetch from "../../Hooks/useFetch";
import "./SafetyTipShared.css";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import { SafetyTipsContext } from "../../Context/SafetyTipsContext";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ListItemText from "@mui/material/ListItemText";

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

export default function Showincidentsshared() {
  const { typesofassaultst, setTypesofassaultst, locationsst, setLocationsst } =
    useContext(SafetyTipsContext);

  const { data, loading, reFetch } = useFetch(
    `https://my-sisterhood.onrender.com/getAllSafetyTips?typesofassaultst=${typesofassaultst}&locationsst=${locationsst}`
  );
  const [typeofassaultst, setTypeofassaultst] = useState([]);
  const [locationst, setLocationst] = useState("");

  const handleTypeofassault = (event) => {
    const {
      target: { value },
    } = event;
    setTypeofassaultst(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleSafetyTipsSearch = () => {
    console.log(data);
    setLocationsst(locationst);
    setTypesofassaultst(typeofassaultst);
  };
  const handleSafetyTipsClear = () => {
    setTypeofassaultst([]);
    setTypesofassaultst([]);
    setLocationst("");
    setLocationsst("");
  };
  const handleLocation = (event) => {
    setLocationst(event.target.value);
  };
  return (
    <div className="SafetyTipsfiltering">
      <div className="typeofassaultdrop">
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel id="demo-multiple-checkbox-label">
            Types of Assault
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={typeofassaultst}
            onChange={handleTypeofassault}
            input={<OutlinedInput label="Type of Assault" />}
            renderValue={(selected) => "Types of Assault"}
            MenuProps={MenuProps}
          >
            {options.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={{ whiteSpace: "unset", wordBreak: "break-all" }}
              >
                <Checkbox checked={typeofassaultst.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="IndianStatesdropst">
        <Box>
          <FormControl fullWidth sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-simple-select-label">
              Select Indian State
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={locationst}
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
      <div className="SafetyTipsbtns">
        <button className="searchSafetyTips" onClick={handleSafetyTipsSearch}>
          Search&nbsp;
          <SearchIcon />
        </button>
        <button className="deleteSafetyTips" onClick={handleSafetyTipsClear}>
          Clear&nbsp;
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
