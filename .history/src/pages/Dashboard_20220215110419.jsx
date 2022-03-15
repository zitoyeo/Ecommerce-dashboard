import React from "react";
import DashBoardWrapper, {
  DashBoardWrapperMain,
  DashBoardWrapperRight,
} from "../components/dashboard-wrapper/DashBoardWrapper";

import { data } from "../constants";
import Box from "../components/box/Box";
import SummaryBox from "../components/summary-box/SummaryBox";

const Dashboard = () => {
  return (
    <DashBoardWrapper>
      <DashBoardWrapperMain>
        <div className="row">
          <div className="col-8 col-md-12">
            <div className="row">
              {data.summary.map((item, index) => (
                <div
                  key={`summary-${index}`}
                  className="col-6 col-md-6 col-sm-12 mb">
                  <SummaryBox item={item}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DashBoardWrapperMain>
      <DashBoardWrapperRight>DashboardWrapperRight</DashBoardWrapperRight>
    </DashBoardWrapper>
  );
};

export default Dashboard;
