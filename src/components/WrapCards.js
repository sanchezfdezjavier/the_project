import Card from './Card';
import React from 'react';

const WrapCards = () => {
	return (
		<div className="container">
			<div className="row">
				<Card />
				<Card />
			</div>
			<div className="row">
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default WrapCards;
