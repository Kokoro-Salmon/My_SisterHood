import "./TopSafetyTipsBar.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import useFetch from "../../Hooks/useFetch";
import { useContext } from "react";
import { SafetyTipsContext } from "../../Context/SafetyTipsContext";
import { useState } from "react";
import SafetyTipDialog from "../SafetyTipDialog/SafetyTipDialog.js";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";

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
  "Online Harrasment",
  "Human Trafficking",
];

const TopSafetyTipsBar = () => {
  const { typesofassaultst, setTypesofassaultst, locationsst, setLocationsst } =
    useContext(SafetyTipsContext);
  const [openfilter, setOpenFilter] = useState(false);
  const handlefilter = () => {
    setOpenFilter(!openfilter);
  };
  console.log(typesofassaultst);
  return (
    <>
      <div className="topSafetyTipsBar">
        <div className="toptypeofassaultst">
          <div className="headingsst">Type of Assault :</div>
          <div className="filterdatast">
            {typesofassaultst.length === 0 &&
              options.map((option, index) => (
                <div key={index} className="chipcontainerst">
                  {option}
                </div>
              ))}
            {typesofassaultst.length !== 0 &&
              typesofassaultst.map((option, index) => (
                <div key={index} className="chipcontainerst">
                  {option}
                </div>
              ))}
          </div>
        </div>
        <div className="SafetyTipsstate">
          <div className="headingsst">State : </div>
          <div className="filterdatast">
            <div className="filterdatast">
              {locationsst && (
                <div className="chipcontainerst">{locationsst}</div>
              )}
              {!locationsst && <div className="chipcontainerst">All</div>}
            </div>
          </div>
        </div>

        <div className="openSafetyTipsDialog">
          <button className="filterSafetyTips" onClick={handlefilter}>
            <FilterAltOffIcon />
            &nbsp;&nbsp;Filter Safety Tips
          </button>
        </div>
      </div>
      {openfilter && (
        <SafetyTipDialog
          openfilter={openfilter}
          setOpenFilter={setOpenFilter}
        />
      )}
    </>
  );
};

export default TopSafetyTipsBar;
