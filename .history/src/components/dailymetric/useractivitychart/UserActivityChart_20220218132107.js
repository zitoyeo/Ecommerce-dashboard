import React from "react";
import { Bar } from "react-chartjs-2";

const UserActivityChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", " Sun"],
          datasets :[
                        {
                            label : "New Tracks",
                            data : [10,20,30,40,50,60,70]
                        }
          ]
        }}
      />
    </div>
  );
};

export default UserActivityChart;
