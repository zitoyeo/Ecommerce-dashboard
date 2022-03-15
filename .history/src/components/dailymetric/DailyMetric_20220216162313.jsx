import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './dailymetric.scss'

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
