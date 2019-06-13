import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

// Silly testing with chart.js
class Chart extends Component {
	constructor() {
		super();
		this.state = {
			chartData: {
				labels: [ 'Madrid', 'Paris', 'Rome', 'Atlanta' ],
				datasets: [
					{
						label: 'Population',
						data: [ 12, 343, 545, 65 ]
					}
				],
				backgroundColor: [ '#ff6384', '#ff6384', '#ff6384', '#ff6384' ]
			}
		};
	}

	render() {
		return (
			<div className="chart">
				<Bar data={this.state.chartData} options={{ maintainAspectRatio: false }} />
			</div>
		);
	}
}

export default Chart;
