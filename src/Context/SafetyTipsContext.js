import React, { useState, createContext } from "react";
const SafetyTipsContext = createContext();

const SafetyTipsProvider = (props) => {
  const [typesofassaultst, setTypesofassaultst] = useState([]);
  const [locationsst, setLocationsst] = useState("");

  return (
    <SafetyTipsContext.Provider
      value={{
        typesofassaultst,
        setTypesofassaultst,
        locationsst,
        setLocationsst,
      }}
    >
      {props.children}
    </SafetyTipsContext.Provider>
  );
};

export { SafetyTipsContext, SafetyTipsProvider };
