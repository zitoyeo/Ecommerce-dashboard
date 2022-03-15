import React from "react";
import "./dailymetric.scss";
import { DailyChart } from "./DailyChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import DashBoardWrapper, {
  DashBoardWrapperMain, DashBoardWrapperMain1
} from "../dashboard-wrapper/DashBoardWrapper";
import BarChart from "./barchart/BarChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DailyMetric() {
  return (
    <DashBoardWrapper>
      <DashBoardWrapperMain1>
        <div className="row">
          <div className="col-9 col-md-12">
            <div className="top__card ">
              <h3>Daily Views</h3>
              <span>September 2021 - October 2021</span>
              <DailyChart />
            </div>
          </div>

            <div className="top__card1">
            <BarChart/>
            </div>
         
        </div>
      </DashBoardWrapperMain1>
    </DashBoardWrapper>
  );
}

export default DailyMetric;
