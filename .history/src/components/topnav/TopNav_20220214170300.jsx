import React from "react";
import './topnav.scss';
import UserInfo from "../user-info/UserInfo";

const TopNav = () => {
  return (
  <div className="topnav">
      <UserInfo/>
      <div className="sidebar-toggle">
          <i className="bx bx-menu-alt-right">

          </i>
      </div>
  </div>
  )
};

export default TopNav;