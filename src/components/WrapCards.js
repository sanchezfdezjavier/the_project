import Card from './Card';
import React from 'react';
import yolo from '../media/images/yolo.png';

class WrapCards extends React.Component {
	renderCard(image_path){
		
	}
	render() {
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
	}
}

export default WrapCards;
