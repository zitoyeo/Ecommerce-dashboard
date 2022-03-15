import React from "react";
import './dailymetric.scss'
import { data, colors } from "../../constants";
import UserChart from "./Userchart";
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
import { Bar, Line } from "react-chartjs-2";
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
      <DailyChart/>
    </div>  
  );
}

export default DailyMetric;



const DailyChart = () => {
  const chartOptions = {
    reponsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      yAxes: {
        display: false,
        drawBorder: false,
      },
    },
    Plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        borderSkipped: "bottom",
      },
    },
  };

  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
      {
        label: "Use Eletric",
        data: data.revenueByMonths.data,
      },
    ],
  };

  return (
    
    <>
      <div className="title">electricity usage per month</div>
      <div>
        <Tooltip options={chartOptions} data={chartData} height={`300px`} />
      </div>
    </>
  );
};



