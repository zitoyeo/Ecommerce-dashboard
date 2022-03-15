import { data, colors } from "../../constants";
import { Bar, Doughnut, Line } from "react-chartjs-2";

export const DailyChart = () => {
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
    };
  
    const chartData = {
      labels: data.DailyView.labels,
      datasets: [
        {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
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