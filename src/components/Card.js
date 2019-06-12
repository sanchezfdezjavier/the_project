import React, { Component } from 'react';
import image_placeholder from '../media/images/yolo.png';

class Card extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="col-xl-6 col-md-6 mb-6" id="card">
				<div className="card border-0 shadow">
					<img src={this.props.image_placeholder} className="card-img-top" alt="Algo1" />
					<div className="card-body text-center">
						<h5 className="card-title mb-0">{this.props.title}</h5>
						<div className="card-text text-black-50">{this.props.description}</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Card;
