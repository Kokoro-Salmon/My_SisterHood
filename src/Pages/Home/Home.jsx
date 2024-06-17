import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import MapArea from "../../Components/MapArea/MapArea";
import Footer from "../../Components/Footer/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <MapArea />
      <Footer /> 
    </div>
  );
}
