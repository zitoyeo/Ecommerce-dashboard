import React from "react";
import "./summary-box.scss";
import Box from "../box/Box";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { colors } from "../../constants";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LinearScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SummaryBox = ({ item }) => {
  return (
    <Box>
      <div className="summary-box">
        <div className="summary-box__info">
          <div className="summary-box__info__title">
            <div>{item.title}</div>
            <span>{item.subtitle}</span>
          </div>
          <div className="summary-box__info__value">{item.value}</div>
          <div className="summary-box__chart">
            <CircularProgressbarWithChildren
              value={item.percent}
              strokeWidth={10}
              styles={buildStyles({
                pathColor: item.percent < 50 ? colors.red : colors.purple,
                trailColor: "tranparent",
                strokeLinecap: "round",
              })}
            >
              <div className="summary-box__chart__value">{item.percent}%</div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        {item.title}
      </div>
    </Box>
  );
};

export default SummaryBox;

export const SummaryBoxSpecial = ({ item }) => {
  const chartOptions = {
    responsive: true,
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
    Plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const chartData = {
    labels: item.chartData.labels,
    datasets: [
      {
        lable: "Revenue",
        data: item.chartData.data,
        borderColor: "#fff",
        tension: 0.5,
      },
    ],
  };

  return (
    <Box purple fullheight>
      <div className="summary-box-special">
        <div className="summary-box-special__title">{item.title}</div>
        <div className="summary-box-special__value">{item.value}</div>
      </div>
    </Box>
  );
};
