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
    <>
    <div className="row">
      <div className="top__card">
        <h3>Daily Views</h3>
        <span>September 2021 - October 2021</span>
        <DailyChart />
      </div>
      <div className="top__card">
        <MusicMetric />
      </div>
      </div>
    </>
  );
}

export default DailyMetric;
