import { Chart } from './src/Chart'

const pieData = [
	{
		label: 'a',
		value: 234
	},
	{
		label: 'b',
		value: 100
	},
	{
		label: 'c',
		value: 500
	},
		{
		label: 'd',
		value: 400
	},
		{
		label: 'e',
		value: -5
	}
]

let barData = {
	labels: ["12am-3am", "3am-6am", "6am-9am", "9am-12pm",
		"12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am"],

	datasets: [
		{
			title: "Some Data",
			values: [25, 40, 30, 35, 8, 52, 17, -4]
		},
		{
			title: "Another Set",
			values: [25, 50, -10, 15, 18, 32, 27, 14]
		},
		{
			title: "Yet Another",
			values: [15, 20, -3, -15, 58, 12, -17, 37]
		}
	]
};

const chart = new Chart({
	id: "my-chart",
	title: "My Chart",
	// subtitle: 'My Sub Chart',
	data: pieData,
	type: 'percentage', // or 'line', 'scatter', 'pie', 'percentage'
	height: 250,
	width: 320,
	sortDataType: 'descending', // ascending descending none
	format_tooltip_x: d => (d + '').toUpperCase(),
	format_tooltip_y: d => d + ' pts'
})
console.log(chart)

