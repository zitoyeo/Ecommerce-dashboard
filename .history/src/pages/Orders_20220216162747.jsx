import React from "react";
import PureComponent from "../components/dailymetric/DailyMetric";
import './orders.scss'


function Orders ()  {
  return <div className="metrics">
    <div className="grid__one">
      <PureComponent/>
    </div>
    <div className="grid__two"></div>
  </div>;
};

export default Orders;
