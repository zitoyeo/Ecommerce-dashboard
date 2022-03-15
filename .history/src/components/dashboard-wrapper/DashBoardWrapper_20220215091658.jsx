import React from "react";
import "./dashboard-wrapper.scss";

const DashBoardWrapper = (props) => {
  return <div className="dashboard-wrapper">{props.children}</div>;
};

export default DashBoardWrapper;

export const DashBoardWrapperMain = (props) => {
  return ( 
    <div className="dashboard-wrapper__main">{props.children}</div>
  )
};


export const DashBoardWrapperMain = (props) => {
  return <div className="dashboard-wrapper__right">{props.children}</div>;
};
