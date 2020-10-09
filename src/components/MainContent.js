import React, { Component } from 'react';
import Home from './Home';
import Tensorflow from './Tensorflow';
import Navbar from './Navbar';
import BackVideo from './BackVideo';
import WrapCards from './WrapCards';

export default class MainContent extends Component {
	render() {
		return (
			<div className="main-content">
				<Home />
				<Navbar />
				<BackVideo />
				<WrapCards />
				<Tensorflow />
				<Chart />
			</div>
		);
	}
}
