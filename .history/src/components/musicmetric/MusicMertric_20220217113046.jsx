import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { BsThreeDots } from "react-icons/bs";

const data = [
  {
    name: "18-24",
    uv: 21.47,
    pv: 2400,
    fill: "#fdc5f5",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#f7aef8",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#b388eb",
  },
  {
    name: "35-39",
    uv: 28.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "50+",
    uv: 24.63,

    fill: "#72ddf7",
  },
];

const MusicMetric = () => {
  return (
    <div className="music__metric">
      <div className="music__metric__info">
        <div>
          <h3>Monthly Followers</h3>
          <span>March 2022- Aprill 2022</span>
        </div>
        <div className="icon">
          <BsThreeDots />
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="70%"
          data={data}
        >
          <RadialBar minAngle={15} clockWise datakey="uv" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MusicMetric;
