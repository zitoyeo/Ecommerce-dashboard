import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";

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
