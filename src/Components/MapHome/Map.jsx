import React, { useState } from "react";
import { useEffect } from "react";
import { GoogleMap, InfoWindow, MarkerF } from "@react-google-maps/api";
import useFetch from "../../Hooks/useFetch.js";

const PurpleMapStyle = [
  {
    featureType: "road",
    stylers: [
      {
        hue: "#5e00ff",
      },
      {
        saturation: -79,
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        saturation: -78,
      },
      {
        hue: "#6600ff",
      },
      {
        lightness: -47,
      },
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    stylers: [
      {
        lightness: 22,
      },
    ],
  },
  {
    featureType: "landscape",
    stylers: [
      {
        hue: "#6600ff",
      },
      {
        saturation: -11,
      },
    ],
  },
  {},
  {},
  {
    featureType: "water",
    stylers: [
      {
        saturation: -65,
      },
      {
        hue: "#1900ff",
      },
      {
        lightness: 8,
      },
    ],
  },
  {
    featureType: "road.local",
    stylers: [
      {
        weight: 1.3,
      },
      {
        lightness: 30,
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "simplified",
      },
      {
        hue: "#5e00ff",
      },
      {
        saturation: -16,
      },
    ],
  },
  {
    featureType: "transit.line",
    stylers: [
      {
        saturation: -72,
      },
    ],
  },
  {},
];

export default function Map() {
  const [activeMarker, setActiveMarker] = useState(null);
  const [markers, setMarkers] = useState([]);
  const { data } = useFetch("http://localhost:3000/getIncidentFormData");

  useEffect(() => {
    const newMarkers = data.map((item) => ({
      _id: item._id,
      time: item.time,
      typeOfViolence: item.typeOfViolence,
      position: {
        lat: parseFloat(item.address.lat.$numberDecimal),
        lng: parseFloat(item.address.lng.$numberDecimal),
      },
      city: item.address.city,
      title: item.title,
      message: item.message,
    }));
    setMarkers(newMarkers);
  }, [data]);

  const handleActiveMarker = async (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  const handleOnLoad = async (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(({ position }) => {
      bounds.extend(position);
    });
    map.fitBounds(bounds);
  };
  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={{ lat: 28.7166162, lng: 77.1139872 }}
      zoom={10}
      options={{ styles: PurpleMapStyle }}
    >
      {markers.map(
        ({ _id, time, position, typeOfViolence, city, title, message }) => (
          <MarkerF
            key={_id}
            position={position}
            onClick={() => handleActiveMarker(_id)}
          >
            {activeMarker === _id ? (
              <InfoWindow options={{ maxWidth: 300 }}>
                <div>
                  <h3>{title}</h3>
                  <div>
                    <b>Time:</b> {time}
                  </div>
                  <div>
                    <b>Type of Violence:</b> {typeOfViolence}
                  </div>
                  <div>
                    <b>City:</b> {city}
                  </div>
                  <div>
                    <b>Message:</b> {message}
                  </div>
                </div>
              </InfoWindow>
            ) : null}
          </MarkerF>
        )
      )}
    </GoogleMap>
  );
}
