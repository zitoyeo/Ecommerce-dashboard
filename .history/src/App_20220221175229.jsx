import React, { Component } from 'react';
import { Line, Chart } from 'react-chartjs-2';
import 'chartjs-adapter-luxon';
import StreamingPlugin from 'chartjs-plugin-streaming';
import './App.css';

Chart.register(StreamingPlugin);

class App extends Component {
  render() {
    return (
      <Line
        data={{
          datasets: [{
            data: []
          }, {
            data: []
          }]
        }}
        options={{
          scales: {
            x: {
              type: 'realtime'
            }
          }
        }}
      />
    );
  }
}

export default App;