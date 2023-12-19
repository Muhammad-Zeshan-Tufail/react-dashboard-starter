import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div>Header</div>
      <div>
        <Outlet />
      </div>
      <div>Footer</div>
    </div>
  );
};

export default Main;
