import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";

export default function Sample() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Add your API key
  });
  console.log("Bhay Api of Map Is Working");

  return isLoaded ? <Map /> : <div>Loading...</div>;
}