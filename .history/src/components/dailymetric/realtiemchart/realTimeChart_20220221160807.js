import React, {Component} from 'react'
import Chart from 'react-apexcharts'
import { data } from '../../../constants';


export default class ApexChartTutotial extends Component {
	constructor(props) {
		super(props);
		this.state ={
			options: {
				chart : {
					id: 'apexchart-example'
				},
				xaxios : {
					categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
				}
			},
			series : [{
				name: 'series-1',
				data: data.slice()
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

