import React from "react";
import "./App.css";
// import { Stack, Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import TopNGOs from "../src/Pages/TopNgos/TopNgos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TopNGOs" element={<TopNGOs />} />
      </Routes>
    </Router>
  );
}

export default App;
