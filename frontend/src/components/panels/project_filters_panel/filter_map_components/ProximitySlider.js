import React from "react";
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const marks = {
	1: '1 mi',
	5: '5 mi',
	10: '10 mi',
	20: '20 mi',
};

const dotStyle = {
	'bottom': '-10px',
    'width': '1px',
    'border': '1px solid #e9e9e9',
    'border-radius': '0%',
    'margin-left': '-1px',
};

class ProximitySlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			minValue: 1,
			maxValue: 20,
		}
	}
	render() {
		return (
			<div>
				<Slider min={this.state.minValue} max={this.state.maxValue} step={1} marks={marks} dotStyle={dotStyle} defaultValue={10} />
			</div>
		);
	}
}

export default ProximitySlider;