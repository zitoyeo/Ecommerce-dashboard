import React from "react";
import './dailymetric.scss'
import { data, colors } from "../../constants";
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
import { Line } from 'react-chartjs-2'


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
      <UserChart/>
    </div>
  );
}

export default DailyMetric;

const UserChart = () => {
  return (
    <Line
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      }}
    />
  )
  return (
    
    <>
      <div className="title">electricity usage per month</div>
      <div>
        <Line data={data} height={`300px`} />
      </div>
    </>
  );
};


