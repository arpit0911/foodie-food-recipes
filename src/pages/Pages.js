import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Discovered from "./Discovered";
import Recipe from "./Recipe";
const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/discovered/:searched" element={<Discovered />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  );
};
export default Pages;
