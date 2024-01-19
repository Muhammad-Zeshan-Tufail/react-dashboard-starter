import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { user } = useSelector((store) => store.user);
  return !user ? <Outlet /> : <Navigate to="/" />;
};

export default AuthLayout;
