import Card from './Card';
import React from 'react';
import yolo from '../media/images/yolo.png';
import speech from '../media/images/speech_recognition.png';
import chartjs from '../media/images/chartjs.png';

export default class WrapCards extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<Card
						image_placeholder={yolo}
						title="YOLO (You only look once!"
						description="The self driving cars algorithm"
					/>
					<Card
						image_placeholder={speech}
						title="Speech recognition"
						description="A naive aproach to smart assistantss"
					/>
				</div>
				<div className="row">
					<Card
						image_placeholder={chartjs}
						title="The beggining!"
						description="The first algorithm to learn, the linear regression"
					/>
					<Card title="YOLO (You only look once!" description="The self driving cars algorithm" />
				</div>
			</div>
		);
	}
}
