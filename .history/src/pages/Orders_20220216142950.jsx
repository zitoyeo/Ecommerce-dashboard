import React from "react";
import DailyMetirc from "../components/dailymetric/DailyMetric";
import './orders.scss'


const Orders = () => {
  return <div className="metrics">
    <div className="grid__one">
      <DailyMetirc/>
    </div>
    <div className="grid__two"></div>
  </div>;
};

export default Orders;
