import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Producto from "../pages/Producto";
import Conocenos from "../pages/Conocenos";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conocenos" element={<Conocenos />} />
      <Route path="/producto/:id" element={<Producto />} />
    </Routes>
  );
};

export default Main;
