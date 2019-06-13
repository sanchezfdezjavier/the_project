import React, { Component } from 'react';
import Home from './Home';
import Tensor from './Tensorflow';
import Tensorflow from './Tensorflow';
import Chart from './Chart';

class MainContent extends Component {
	render() {
		return (
			<div className="main-content">
				<Tensorflow />
			</div>
		);
	}
}

export default MainContent;
