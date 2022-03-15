import React from "react";
import DashBoardWrapper, {
  DashBoardWrapperMain, DashBoardWrapperRight,
} from "../components/dashboard-wrapper/DashBoardWrapper";

const Dashboard = () => {
  return (
    <DashBoardWrapper>
      <DashBoardWrapperMain>
        DashboardWrapperMain
      </DashBoardWrapperMain>
      <DashBoardWrapperRight>
        DashboardWrapperRight
      </DashBoardWrapperRight>
    </DashBoardWrapper>
  );
};

export default Dashboard;
