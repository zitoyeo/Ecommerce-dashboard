import React from "react";
import DashBoardWrapper, {
  DashBoardWrapperMain,
  DashBoardWrapperRight,
} from "../components/dashboard-wrapper/DashBoardWrapper";

import { colors, data } from "../constants";
import SummaryBox, {
  SummaryBoxSpecial,
} from "../components/summary-box/SummaryBox";
import Box from "../components/box/Box";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Dashboard = () => {
  return (
    <DashBoardWrapper>
      <DashBoardWrapperMain>
        <div className="row">
          <div className="col-8 col-md-12">
            <div className="row">
              {data.summary.map((item, index) => (
                <div
                  key={`summary-${index}`}
                  className="col-6 col-md-6 col-sm-12 mb"
                >
                  <SummaryBox item={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-4 hide-md">
            <SummaryBoxSpecial item={data.revenueSummary} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Box>
              <RevenueByMonthsChart />
            </Box>
          </div>
        </div>
      </DashBoardWrapperMain>
      <DashBoardWrapperRight>DashboardWrapperRight</DashBoardWrapperRight>
    </DashBoardWrapper>
  );
};

export default Dashboard;

const RevenueByMonthsChart = () => {

  const chartOptions ={
    reponsive : true,
    maintainAspectRatio: false,
    scales : {
      xAxes: {
        grid : {
          display: false,
          drawBorder : false
        }
      }, yAxes : {
        display: false,
        drawBorder: false
      }
    },
    Plugins :{
      legend : {
          display : false,
      },
      title : {
        display:false
      }
    },
    elements : {
      bar : {
        backgroundColor : colors.orange,
        borderRadius : 20,
        borderSkipped : 'bottom'
      }
    }
  }

  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
      {
        label: 'Revenue',
        data: data.revenueByMonths.data
      }
    ]
  }

  return (
    <>
      <div className="title">electricity usage per month</div>
      <div>
        <Bar options={chartOptions} data={chartData} height={`300px`}/>
      </div>
    </>
  );
};
