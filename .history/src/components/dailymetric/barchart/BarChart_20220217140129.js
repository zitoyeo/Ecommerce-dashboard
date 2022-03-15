import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "favorite color",
              data: [12, 19, 3, 5, 2, 3],
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
            {
                label : 'Quantity'
            }
          ],
        }}
        options={{
           maintainAspectRatio: false,
           scales : {
               yAxes: [
                   {
                       ticks : {
                           beginAtZero : true,
                       }
                   }
               ]
           }
        }}
      />
    </div>
  );
};

export default BarChart;
