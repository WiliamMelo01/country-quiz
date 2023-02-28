import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Scores from "../pages/Scores";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scores" element={<Scores />} />
    </Routes>
  );
}
