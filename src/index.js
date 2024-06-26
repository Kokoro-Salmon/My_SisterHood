import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TogglerProvider } from "./Context/TogglerContext";
import { SearchProvider } from "./Context/SearchContext";
import { SafetyTipsProvider } from "./Context/SafetyTipsContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TogglerProvider>
      <SafetyTipsProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </SafetyTipsProvider>
    </TogglerProvider>
  </React.StrictMode>
);
