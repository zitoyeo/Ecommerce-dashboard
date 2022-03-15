import React from "react";
import './dailymetric.scss'
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
    <div className="top__card">
      <h3>Daily Views</h3>
      <span>September 2021 - October 2021</span>
      <div>
      <DailyChart/>
      </div>
      <div>
        <MusicMetric/>
      </div>
    </div>  
  
  );
}

export default DailyMetric;







