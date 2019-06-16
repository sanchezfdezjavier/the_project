import React, { Component } from 'react';
import Navbar from './Navbar';
import BackVideo from './BackVideo';
import WrapCards from './WrapCards';

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<BackVideo />
				<WrapCards />
			</div>
		);
	}
}