import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
