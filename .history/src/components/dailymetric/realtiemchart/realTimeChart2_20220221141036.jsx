import React from "react";
import { Line } from "react-chartjs-2";
<script>
https://cdn.jsdelivr.net/npm/chartjs-plugin-streaming@2.0.0
</script>

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
