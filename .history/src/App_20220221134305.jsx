import React, { Component } from "react";

import { Line } from "react-chartjs-2";

import "chartjs-plugin-streaming";

class App extends Component {
  render() {
    return (
      <Line
        data={{
          datasets: [
            {
              data: [],
            },
            {
              data: [],
            },
          ],
        }}
        options={{
          scales: {
            xAxes: [
              {
                type: "realtime",
              },
            ],
          },
        }}
      />
    );
  }
}

export default App;
