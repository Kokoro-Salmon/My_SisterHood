import React, { useState } from "react";
import { GoogleMap, InfoWindow, MarkerF } from "@react-google-maps/api";

export default function Map() {
  return (
    <GoogleMap
      // onLoad={handleOnLoad}
      // onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={{ lat: 28.7166162, lng: 77.1139872 }}
      zoom={10}
    ></GoogleMap>
  );
}
