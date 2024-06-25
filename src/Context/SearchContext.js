import React, { useState, createContext } from "react";
const SearchContext = createContext();

const SearchProvider = (props) => {
  const [typesofassault, setTypesofassault] = useState([]);
  const [locations, setLocations] = useState("");
  const [showIncidentsfrom, setShowIncidentsfrom] = useState("All time");

  return (
    <SearchContext.Provider
      value={{
        typesofassault,
        setTypesofassault,
        locations,
        setLocations,
        showIncidentsfrom,
        setShowIncidentsfrom,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
