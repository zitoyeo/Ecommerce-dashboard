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
import { Bar, Doughnut, Line } from "react-chartjs-2";
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
        display: true,
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
      Line: {
        backgroundColor: colors.orange,

      },
    },
  };

  const chartData = {
    labels: data.DailyView.labels,
    datasets: [
      {
        label: "Use Eletric",
        data: data.DailyView.data,
      },
    ],
  };

  return (
    
    <>
      <div>
        <Line options={chartOptions} data={chartData} height={`300px`} />
      </div>
    </>
  );
};



