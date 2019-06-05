import React from 'react';

const Card = () => {
	return (
		<div className="card mb-4 shadow-sm">
			<img
				className="card-img-top"
				data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
				alt="Thumbnail"
			/>
			<div className="card-body">
				<p className="card-text">A brief explanation about the algorithm</p>
			</div>
		</div>
	);
};

export default Card;
