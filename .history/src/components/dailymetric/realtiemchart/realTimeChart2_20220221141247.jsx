import React from "react";
import { Line } from "react-chartjs-2";
import {Chart} from 'chart.js';
import 'chartjs-adapter-luxon';
import ChartStreaming from 'chartjs-plugin-streaming';

Chart.register(ChartStreaming);

const realTimeChart2 = () => {
  return (
    <Line
      data={{
        datasets: [
          {
            data: [],
          },
          {
            data: [],
          },
        ],
      }}
      options={{
        scales: {
          xAxes: [
            {
              type: "realtime",
            },
          ],
        },
      }}
    />
  );
};

export default realTimeChart2;
