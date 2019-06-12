import React, { Component } from 'react';
import Logo_black from '../media/images/Logo_web.png';
import Logo_white from '../media/images/Logo_transparent_white.png';

/**
|--------------------------------------------------
| WEBSITE NAVBAR
|--------------------------------------------------
*/
class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-transparent navbar-expand-lg fixed-top">
				<a className="navbar-brand" href="#">
					<img src={Logo_white} width="40" height="40" alt="Logo brand" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse text-center" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Me
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								AI
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Gallery
							</a>
						</li>
						<li className="nav-item fixed-right">
							<a className="nav-link" href="/demo">
								Demo
							</a>
						</li>
						<li className="nav-item fixed-right">
							<a className="nav-link" href="#">
								Donate
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
