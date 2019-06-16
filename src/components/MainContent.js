import React, { Component } from 'react';
import Home from './Home';
import Tensorflow from './Tensorflow';
import Chart from './Chart';

export default class MainContent extends Component {
	render() {
		return (
			<div className="main-content">
				<Home />
				<Tensorflow />
				<Chart />
			</div>
		);
	}
}
