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
            <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor="#8884d8" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#ff9bff81" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.2} />
            </linearGradient>
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
