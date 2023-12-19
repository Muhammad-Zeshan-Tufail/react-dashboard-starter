import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Auth from "../layouts/Auth";
import Login from "../pages/Login";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<Auth />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
