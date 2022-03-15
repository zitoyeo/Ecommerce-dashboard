import React, {Component} from 'react'
import Chart from 'react-apexcharts'


export default class ApexChartTutotial extends Component {
	constructor(props) {
		super(props);
		this.state ={
			options: {
				chart : {
					id: ''
				},
				xaxios : {
					categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
				}
			},
			series : [{
				name: 'series-1',
				data: [30,40,50,60,70,80,91,125,111]
			}]
		}




	}

	render() {
		return (
			<div>
				<Chart options={this.state.options} series={this.state.series} type="area"/>

			</div>
		)
	}
}

