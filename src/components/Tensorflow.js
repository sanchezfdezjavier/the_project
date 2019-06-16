import React, { Component } from 'react';
import { Scatter } from 'react-chartjs-2';
import tfLogo from '../media/images/tf_logo.png';
import { throwStatement } from '@babel/types';

class Tensorflow extends Component {
	constructor() {
		super();
		this.state = {
			x: '',
			y: '',
			xs: [],
			ys: [],
			chartData: {
				datasets: [
					{
						label: 'Scatter Dataset',
						data: []
					}
				]
			},
			options: {
				scales: {
					xAxes: [
						{
							type: 'linear',
							position: 'bottom'
						}
					]
				}
			}
		};
		// handlers link outside constructor
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// Fetch data when the 'submit' button is clicked
	handleInput(data) {
		// gather data the input which has throw the event
		const value = data.target.value; // form value itself
		const name = data.target.name; // form name 'x' or 'y'. We need to know the owner either 'x' of 'y'
		// Compoenent state modify
		this.setState({
			[name]: [ value ],
			xs: this.state.xs,
			ys: this.state.ys
		});
		// Printing the modifying data
		//console.log(data.target.name, data.target.value); // This line is only for testing
		this.printState();
	}
	printState() {
		console.log(this.state.chartData.datasets);
	}

	handleSubmit() {
		const newXs = this.state.xs.slice().concat(this.state.x);
		const newYs = this.state.ys.slice().concat(this.state.y);

		let result = [];
		const aux_xs = this.state.xs.slice();
		const aux_ys = this.state.ys.slice();

		for (let i = 0; i < aux_xs.length; ++i) {
			result.push({ x: aux_xs[i], y: aux_ys[i] });
		}

		this.setState({
			x: this.state.x,
			y: this.state.y,
			xs: newXs,
			ys: newYs,
			chartData: {
				datasets: [
					{
						label: 'Scatter Dataset',
						data: result
					}
				]
			}
		});
		this.printState();
	}
	render() {
		return (
			<div className="container tensorflow-js">
				<h2 className="row">
					<img src={tfLogo} className="" alt="Responsive image" width="50" height="50" />
					<small>Powered by Tensorflow.js</small>
				</h2>
				<form className="form" onSubmit={this.handleSubmit}>
					<div className="container form-row">
						<div className="col-md-4">
							x<input
								onChange={this.handleInput}
								name="x"
								type="text"
								className="form-control"
								placeholder="x value"
							/>
						</div>
						<div className="col-md-4">
							y<input
								onChange={this.handleInput}
								name="y"
								type="text"
								className="form-control"
								placeholder="y value"
							/>
						</div>
					</div>
				</form>
				<br />
				<button type="button" className="btn btn-secondary" onClick={this.handleSubmit}>
					Submit
				</button>
				<div className="canvas">
					<Scatter data={this.state.chartData} options={{ maintainAspectRatio: false }} />
				</div>
			</div>
		);
	}
}

export default Tensorflow;
