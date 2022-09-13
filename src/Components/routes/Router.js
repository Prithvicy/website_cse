import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "../../App";
import Trial from "../Trial";
import Home from "../../Pages/Home";
import HeaderMoba from "../HeaderMoba";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<><HeaderMoba/><Trial /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
