import React, { useState, createContext } from "react";
const TogglerContext = createContext();

const TogglerProvider = (props) => {
  const [takeincident, setTakeincident] = useState(true);
  return (
    <TogglerContext.Provider
      value={{
        takeincident,
        setTakeincident,
      }}
    >
      {props.children}
    </TogglerContext.Provider>
  );
};

export { TogglerContext, TogglerProvider };
