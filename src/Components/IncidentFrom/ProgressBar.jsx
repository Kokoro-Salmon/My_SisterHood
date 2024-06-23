import "./ProgressBar.css";
import { useState } from "react";

const ProgressBar = ({ PercentDone }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${PercentDone}%`,
    };
    setStyle(newStyle);
  }, 200);
  return (
    <>
      <div className="progresscont">
        <div className="progress-text">{PercentDone}% Completed</div>
        <div className="progress">
          <div className="progress-PercentDone" style={style}></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;