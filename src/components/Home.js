import React, { Component } from 'react';
import Navbar from './Navbar';
import BackVideo from './BackVideo';
import WrapCards from './WrapCards';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<BackVideo />
				<WrapCards />
			</div>
		);
	}
}

export default Home;
