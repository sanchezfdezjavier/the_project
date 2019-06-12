import React, { Component } from 'react';
import tfLogo from '../media/images/tf_logo.png';

class Tensorflow extends Component {
	constructor() {
		super();
		this.state = {
			x: '',
			y: '',
			xs: [],
			ys: []
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
		//console.log(this.state); // This line is only for testing
	}

	handleSubmit() {
		const newXs = this.state.xs.slice().concat(this.state.x);
		const newYs = this.state.ys.slice().concat(this.state.y);

		this.setState({
			x: this.state.x,
			y: this.state.y,
			xs: newXs,
			ys: newYs
		});
		//console.log(this.state);
	}
	render() {
		return (
			<div className="container tensorflow-js">
				<h2 className="row">
					<img src={tfLogo} className="" alt="Responsive image" width="50" height="50" />
					Powered by Tensorflow.js
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
				<button type="button" className="btn btn-light" onClick={this.handleSubmit}>
					Submit
				</button>
				<div className="canvas">
					<canvas id="myChart" width="600" height="300" />
				</div>
			</div>
		);
	}
}

export default Tensorflow;
