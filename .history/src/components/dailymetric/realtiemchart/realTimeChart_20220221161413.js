import React, {Component} from 'react'
import Chart from 'react-apexcharts'


export default class ApexChartTutotial extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
		  options: {
			chart: {
			  id: 'apexchart-example'
			},
			xaxis: {
			  categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
			}
		  },
		  series: [{
			name: 'series-1',
			data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
		  }]
		}
		this.setState({
			options: {
			  ...this.state.options,
			  xaxis: {
				...this.state.options.xaxis,
				categories: ['X1', 'X2', 'X3']
			  }
			}
		  })
	  }
	  render() {
		return (
		  <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
		)
	  }
}
