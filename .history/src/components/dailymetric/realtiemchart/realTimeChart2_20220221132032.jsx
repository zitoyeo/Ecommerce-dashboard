import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";


export const realTimeChart2 = () => {

var chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};
function randomScalingFactor() {
	return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
}

function onRefresh(chart) {
	var now = Date.now();
	chart.data.datasets.forEach(function(dataset) {
		dataset.data.push({
			x: now,
			y: randomScalingFactor()
		});
	});
}

const color = chartColors.blue;
const color1 = chartColors.red;


  return (
    <Line

        data={{

          datasets: [{

            label: 'Dataset 1',

            borderColor: 'rgb(255, 99, 132)',

            backgroundColor: 'rgba(255, 99, 132, 0.5)',

            lineTension: 0,

            borderDash: [8, 4]

          }, {

            label: 'Dataset 2',

            borderColor: 'rgb(54, 162, 235)',

            backgroundColor: 'rgba(54, 162, 235, 0.5)'

          }]

        }}

        options={{

          scales: {

            xAxes: [{

              realtime: {

                onRefresh: function(chart) {

                  chart.data.datasets.forEach(function(dataset) {

                    dataset.data.push({

                      x: Date.now(),

                      y: Math.random()

                    });

                  });

                },

                delay: 2000

              }

            }]

          }

        }}

      />
  );
};
