import ApexCharts from "apexcharts";
import { Chart } from "react-chartjs-2";

const options = {
	chart: {
	  type: 'bar'
	},
	series: [{
	  name: 'sales',
	  data: [30,40,45,50,49,60,70,91,125]
	}],
	xaxis: {
	  categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
	}
  }
  
  const chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render(Chart);
