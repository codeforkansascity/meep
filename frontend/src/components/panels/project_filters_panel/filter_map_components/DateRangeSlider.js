import React from "react";
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const marks = {
	2000: '2000',
	2005: '2005',
	2010: '2010',
	2015: '2015',
	2018: '2018',
};

const dotStyle = {
	'bottom': '-10px',
    'width': '1px',
    'border': '1px solid #e9e9e9',
    'border-radius': '0%',
    'margin-left': '-1px',
};

class DateRangeSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			minValue: 2000,
			maxValue: 2018,

		}
	}
	render() {
		return (
		    <div>
		    	<Range min={this.state.minValue} max={this.state.maxValue} marks={marks} dots={true} dotStyle={dotStyle} defaultValue={[2015, 2018]}/>
		    </div>
			)
	}
}

export default DateRangeSlider;