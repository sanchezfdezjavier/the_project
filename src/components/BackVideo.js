import React from 'react';
import backgroud_blue from '../media/videos/background_lines.mp4';
import backgroud_net_fast from '../media/videos/background_net.mp4';
import background_net_slow from '../media/videos/background_net_slow.mp4';

const BackVideo = () => {
	return (
		<header>
			<div className="overlay">
				<video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
					<source alt="soud spectre" src={background_net_slow} />
				</video>
				<div className="container h-100">
					<div className="d-flex h-100 text-center align-items-center">
						<div className="w-100 text-white">
							<h1 className="display-3">Welcome to the awesome world of AI!</h1>
							<p>Discover some of the most popular algorithms running out there!</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default BackVideo;
