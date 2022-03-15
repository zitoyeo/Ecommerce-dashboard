import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { BsThreeDots } from "react-icons/bs";



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
