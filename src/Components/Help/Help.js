import Navbar from "../Navbar/Navbar";
import "./Help.css";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import WomanIcon from "@mui/icons-material/Woman";
import CloseIcon from "@mui/icons-material/Close";
import EmergencyShareIcon from "@mui/icons-material/EmergencyShare";
import FloodIcon from "@mui/icons-material/Flood";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const Help = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="help">
        <div className="helpcontain">
          <h1 className="helptitle">Emergency Numbers</h1>
          <div className="helpnumbers">
            <div className="helptext">
              <div className="helpername">
                <LocalPoliceIcon />
                &nbsp;Police:&nbsp;&nbsp;
              </div>
              <div className="helperNumber">
                <a
                  className="helpa"
                  href="tel:+98XXXXXXXX"
                  target="_blank"
                  rel="noopener"
                >
                  100
                </a>
              </div>
            </div>
            <div className="helptext">
              <div className="helpername">
                <FireTruckIcon />
                &nbsp;Fire:&nbsp;&nbsp;
              </div>
              <div className="helperNumber">
                <a
                  className="helpa"
                  href="tel:+98XXXXXXXX"
                  target="_blank"
                  rel="noopener"
                >
                  101
                </a>
              </div>
            </div>
            <div className="helptext">
              <div className="helpername">
                <LocalHospitalIcon />
                &nbsp;Ambulance:&nbsp;&nbsp;
              </div>
              <div className="helperNumber">
                <a
                  className="helpa"
                  href="tel:+98XXXXXXXX"
                  target="_blank"
                  rel="noopener"
                >
                  102
                </a>
              </div>
            </div>
            <div className="helptext">
              <div className="helpername">
                <WomanIcon />
                &nbsp;Women Helpline:&nbsp;&nbsp;
              </div>
              <div className="helperNumber">
                <a
                  className="helpa"
                  href="tel:+98XXXXXXXX"
                  target="_blank"
                  rel="noopener"
                >
                  1091
                </a>
              </div>
            </div>
            <div className="helptext">
              <div className="helpername">
                <CloseIcon />
                &nbsp;Women Helpline - ( Domestic Abuse ):&nbsp;&nbsp;
              </div>
              <div className="helperNumber">
                <a
                  className="helpa"
                  href="tel:+98XXXXXXXX"
                  target="_blank"
                  rel="noopener"
                >
                  181
                </a>
              </div>
            </div>
            <div className="helptext">
              <div className="helpername">
                <EmergencyShareIcon />
                &nbsp;Pan-India Emergency Number:&nbsp;&nbsp;
              </div>
              <div className="helperNumber">
                <a
                  className="helpa"
                  href="tel:+98XXXXXXXX"
                  target="_blank"
                  rel="noopener"
                >
                  112
                </a>
              </div>
            </div>
            <div className="helptext">
              <div className="helpername">
                <FloodIcon />
                &nbsp;Disaster Management Services:&nbsp;&nbsp;
              </div>
              <div className="helperNumber">
                <a
                  className="helpa"
                  href="tel:+98XXXXXXXX"
                  target="_blank"
                  rel="noopener"
                >
                  108
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerhelp">
        <Footer />
      </div>
    </>
  );
};

export default Help;
