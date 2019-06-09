import React from 'react';
import backgroud_video from '../media/videos/background_lines.mp4';

const BackVideo = () => {
	return (
		<header>
			<div className="overlay">
				<video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
					<source alt="soud spectre" src={backgroud_video} />
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
