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
  DashBoardWrapperMain, DashBoardWrapperMain1
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
      <DashBoardWrapperMain1>
        <div className="row">
          <div className="col-9 col-md-12 hidden">
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
      </DashBoardWrapperMain1>
    </DashBoardWrapper>
  );
}

export default DailyMetric;
