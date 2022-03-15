import React from "react";
import "./dailymetric.scss";
import { DailyChart } from "./DailyChart";
import BarChart from "./barchart/BarChart";
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
  DashBoardWrapperMain1,
} from "../dashboard-wrapper/DashBoardWrapper";
import TrendingTracks from "../trendingtracks/TrendingTracks";
import TrendingUser from "../trendinguser/TrendingUser";
import UserActivityChart from '../../components/dailymetric/useractivitychart/UserActivityChart'




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
     
        <div className="row">
          <div className="col-8 col-md-12 hidden">
            <div className="top__card ">
              <h3>Daily Views</h3>
              <span>September 2021 - October 2021</span>
              <DailyChart />
            </div>
          </div>

          <div className="top__card1">
            <BarChart />
          </div>
          <div>
            <TrendingTracks />

          </div>
          <TrendingUser/>
          <div className="top__card2">
            <h3>User Activity</h3>
            <span>New Tracks</span>
            <UserActivityChart/>
          </div>
        </div>
   
    </DashBoardWrapper>
  );
}

export default DailyMetric;
