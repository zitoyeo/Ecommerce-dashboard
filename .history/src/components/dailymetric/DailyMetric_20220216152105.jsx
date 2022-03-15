import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import "./dailymetric.scss";

const data = [
  {
    view: 1000,
  },
  {
    view: 1200,
  },
  {
    view: 1500,
  },
  {
    view: 1780,
  },
  {
    view: 1990,
  },
  {
    view: 2190,
  },
  {
    view: 2490,
  },
  {
    view: 2200,
  },
  {
    view: 2300,
  },
  {
    view: 2500,
  },
  {
    view: 2380,
  },
  {
    view: 2290,
  },
  {
    view: 2190,
  },
  {
    view: 1990,
  },
  {
    view: 2200,
  },
  {
    view: 2400,
  },
  {
    view: 2200,
  },
  {
    view: 2580,
  },
  {
    view: 2790,
  },
  {
    view: 3090,
  },
  {
    view: 3290,
  },
  {
    view: 3300,
  },
  {
    view: 3400,
  },
  {
    view: 3500,
  },
  {
    view: 3780,
  },
  {
    view: 3390,
  },
  {
    view: 3190,
  },
  {
    view: 2490,
  },
];

const DailyMetirc = () => {
  return (
    <div className="top__card">
      <h3>Daily Views</h3>
      <span>January 2022 - March - 2022</span>
      <ResponsiveContainer width="100%" hegith="80%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor="#8884d8" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#ff9bff81" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.2} />
            </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="view"
              stroke="88848"
              strokeWidth={1}
              strokeOpacity={1}
            />
    
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyMetirc;
