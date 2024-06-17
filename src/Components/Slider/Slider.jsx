import React, { useState } from "react";
import "./slider.css";
import BtnSlider from "./BtnSlider";
import DataSlider from "./DataSlider";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { NavLink } from "react-router-dom";

const delay = 2500;
export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => nextSlide(slideIndex), delay);

    return () => {
      resetTimeout();
    };
  }, [slideIndex]);

  const nextSlide = () => {
    if (slideIndex !== DataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === DataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(DataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {DataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={obj.img} />
            <div className="objinfo">
              <h1 className="objtitle">{obj.title}</h1>
            </div>
            <div className="readmore">
              <a exact href={obj.links} target="_blank" className="infobtn">
                <ReadMoreIcon style={{ fontSize: "2vw" }} />
                &nbsp; Read Here
              </a>
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
