import React, { Component } from "react";
import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./IncidentForm.css";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

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
const PlacesAutocomplete = ({ formData, setFormData, setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    console.log(results);
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });

    var addresss = results[0].address_components;
    var country, city, state;
    addresss.forEach(function (component) {
      var types = component.types;
      if (types.indexOf("locality") > -1) {
        city = component.long_name;
      }

      if (types.indexOf("administrative_area_level_1") > -1) {
        state = component.long_name;
      }

      if (types.indexOf("country") > -1) {
        country = component.long_name;
      }
    });
    formData.address.country = country;
    formData.address.city = city;
    formData.address.state = state;
    formData.address.lat = lat;
    formData.address.lng = lng;
  };
  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

const Map = ({ formData, setFormData }) => {
  const center = useMemo(() => ({ lat: 28.7166162, lng: 77.1139872 }), []);
  const [selected, setSelected] = useState({
    lat: 28.7166162,
    lng: 77.1139872,
  });

  return (
    <div className="location">
      <GoogleMap
        zoom={10}
        center={selected}
        mapContainerClassName="map-container"
        options={{ styles: PurpleMapStyle }}
      >
        <div className="places-container">
          <PlacesAutocomplete
            formData={formData}
            setFormData={setFormData}
            setSelected={setSelected}
          />
        </div>
        <MarkerF position={selected} />
      </GoogleMap>
    </div>
  );
};

export const Places = ({ formData, setFormData }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map formData={formData} setFormData={setFormData} />;
};
