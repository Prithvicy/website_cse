import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "../../App";
import Trial from "../Trial";
import Home from "../../Pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Trial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
