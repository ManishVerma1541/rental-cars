import React from "react";
import Header from "./Header"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="vh-100">
      <Header/>
      <div >
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
