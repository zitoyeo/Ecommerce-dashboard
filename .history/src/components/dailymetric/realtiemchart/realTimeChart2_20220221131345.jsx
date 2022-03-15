import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";

export const realTimeChart2 = () => {
  return (
    <div>
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
    </div>
  );
};
