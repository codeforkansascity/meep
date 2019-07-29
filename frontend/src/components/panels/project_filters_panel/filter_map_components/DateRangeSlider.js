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

const DateRangeSlider = () => (
	    <div>
	    	<Range min={2000} max={2018} marks={marks} dots={true} dotStyle={dotStyle} defaultValue={[2015, 2018]}/>
	    </div>
);

export default DateRangeSlider;