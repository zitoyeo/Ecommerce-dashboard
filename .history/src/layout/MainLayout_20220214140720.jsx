import React from "react";
import "./main-layou.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidbar/Sidebar";
import TopNav from "../components/topnav/TopNav";

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="main__content">
          <TopNav />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
