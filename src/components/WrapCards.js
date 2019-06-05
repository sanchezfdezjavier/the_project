import Card from './Card';
import React from 'react';

const WrapCards = () => {
	return (
		<div className="album py-5 bg-light">
			<div className="container>">
				<div className="row">
					<div className="col-md-4">
						<Card />
					</div>
					<div className="col-md-4">
						<Card />
					</div>
					<div className="col-md-4">
						<Card />
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<Card />
					</div>
					<div className="col-md-4">
						<Card />
					</div>
					<div className="col-md-4">
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WrapCards;
