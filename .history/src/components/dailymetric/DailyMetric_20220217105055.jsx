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
import MusicMetric from "../musicmetric/MusicMertric";
import DashBoardWrapper, {
  DashBoardWrapperMain,
} from "../dashboard-wrapper/DashBoardWrapper";

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
      <DashBoardWrapperMain>
        <div className="row">
        <div className="col-10">
          <div className="top__card ">
            <h3>Daily Views</h3>
            <span>September 2021 - October 2021</span>
            <DailyChart />
          </div>
          </div>


          <div className="row">
          <div className="top__card1">
            <MusicMetric />
          </div>
          </div>
        </div>
      </DashBoardWrapperMain>
    </DashBoardWrapper>
  );
}

export default DailyMetric;
