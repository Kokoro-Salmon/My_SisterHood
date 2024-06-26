import "./TopIncidentBar.css";
import { useContext } from "react";
import { SearchContext } from "../../Context/SearchContext";
import { useState } from "react";
import IncidentDialog from "../IncidentDialog/IncidentDialog";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";

const TopIncidentSafetyBar = () => {
  const { typesofassault, locations, showIncidentsfrom } =
    useContext(SearchContext);
  const [openfilter, setOpenFilter] = useState(false);
  const handlefilter = () => {
    setOpenFilter(!openfilter);
  };
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

  return (
    <>
      <div className="topIncidentBar">
        <div className="toptypeofassault">
          <div className="headings">Type of Assault :</div>
          <div className="filterdata">
            {typesofassault.length === 0 &&
              options.map((option, index) => (
                <div key={index} className="chipcontainer">
                  {option}
                </div>
              ))}
            {typesofassault.length !== 0 &&
              typesofassault.map((option, index) => (
                <div key={index} className="chipcontainer">
                  {option}
                </div>
              ))}
          </div>
        </div>
        <div className="state">
          <div className="headings">State : </div>
          <div className="filterdata">
            <div className="filterdata">
              {locations && <div className="chipcontainer">{locations}</div>}
              {!locations && <div className="chipcontainer">All</div>}
            </div>
          </div>
        </div>
        <div className="showincidentsfrom">
          <div className="headings">Show Incidents From : </div>
          <div className="filterdata">
            <div className="filterdata">
              <div className="chipcontainer">{showIncidentsfrom}</div>
            </div>
          </div>
        </div>
        <div className="openIncidentDialog">
          <button className="filterincidents" onClick={handlefilter}>
            <FilterAltOffIcon />
            &nbsp;&nbsp;Filter Incidents
          </button>
        </div>
      </div>
      {openfilter && (
        <IncidentDialog openfilter={openfilter} setOpenFilter={setOpenFilter} />
      )}
    </>
  );
};

export default TopIncidentSafetyBar;
