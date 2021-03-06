import React, { Component } from 'react';
import background_video from '../media/videos/background_video.mp4';
import Logo_white from '../media/images/LogoV1_transparent_white_web.png';

class BackVideo extends Component {
	render() {
		return (
			<header>
				<div className="overlay">
					<video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
						<source alt="soud spectre" src={background_video} />
					</video>
					<div className="container h-100">
						<div className="d-flex h-100 text-center align-items-center">
							<div className="w-100 text-white">
								<h2 className="display-4">Welcome to the awesome world of AI!</h2>
								<img src={Logo_white} width="150" height="150" alt="Logo brand" />
								<br />
								<small>&copy; Javier Sánchez Fernández</small>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default BackVideo;
