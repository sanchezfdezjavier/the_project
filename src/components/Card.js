import React from 'react';
import image_placeholder from '../media/images/yolo.png';

const Card = () => {
	return (
		<div className="col-xl-6 col-md-6 mb-6" id="card">
			<div className="card border-0 shadow">
				<img src={image_placeholder} className="card-img-top" alt="Algo1" />
				<div className="card-body text-center">
					<h5 className="card-title mb-0">YOLO (You only look once) </h5>
					<div className="card-text text-black-50">The most popular object detection algorithm</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
