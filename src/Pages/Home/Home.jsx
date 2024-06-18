import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import MapArea from "../../Components/MapArea/MapArea";
import Footer from "../../Components/Footer/Footer";
import { MainLander } from "../../Components/MainLander/MainLander";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <Navbar />
      <MainLander />
      <div className="canvas">
        <Slider />
        <MapArea />
        <Footer />
      </div>
    </div>
  );
}
