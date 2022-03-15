import React from "react";
import DailyMetric from "../components/dailymetric/DailyMetric";
import "./orders.scss";

function Orders() {
  return (
    <div className="metrics">
      <div className="row">
        <div className="grid__one">
          <DailyMetric />
        </div>
        <div className="grid__two"></div>
      </div>
    </div>
  );
}

export default Orders;
