
import { Legend } from "chart.js";
import React from "react";
import { Pie, } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      <Pie
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          backgroundColor : 'gray',
          datasets: [
            {
              label: "favorite color",
              data: [120, 191, 31, 51, 21, 333],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162,235,0.2)",
                "reba(255,206,86,0.2)",
                "rgba(75,192,192,0.2)",
                "rgba(153,102,255,0.2)",
                "rgba(255,159,64,0.2)",
              ],
              borderColor: [
                "rega(22,99,132,1)",
                "rgba(54,162,235,1)",
                "rgba(255,206,86,1)",
                "rgba(75,192,192,1)",
                "rgba(153,102,255,1)",
                "reba(255,159,64,1)",
              ],
              
              borderWidth: 1,
            },
                   ],
        }}
        height={350}
        options={{
           maintainAspectRatio: false,
           scales : {
               yAxes: [
                   {
                       ticks : {
                           beginAtZero : true,
                       },
                   },
               ],
           },
           legend : {
            labels : {
                fontSize: 2,
            }
           }
        }}
      />
    </div>
  );
};

export default BarChart;
