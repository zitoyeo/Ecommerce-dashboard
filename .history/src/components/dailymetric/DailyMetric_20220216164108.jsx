import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import './dailymetric.scss'
import { data } from "../../constants";



function DailyMetric() {
  return (
    <div className="top__card">
      <h3>Daily Views</h3>
      <span>September 2021 - October 2021</span>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data}>
          <defs>
      
          </defs>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="view"
            stroke="#8884d8"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorview)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailyMetric;
