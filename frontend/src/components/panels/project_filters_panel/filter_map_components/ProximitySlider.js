import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import { connect } from "react-redux";
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import { setRangeFilter } from '../../../../actions/filters';
const Handle = Slider.Handle;

const dotStyle = {
	'bottom': '-10px',
    'width': '1px',
    'border': '1px solid #e9e9e9',
    'borderRadius': '0%',
    'marginLeft': '-1px',
};

const displayProximityValueToolTip = (sliderProps) => {
	const { value, dragging, index, key, className, disabled, offset, prefixCls } = sliderProps;
	return (
		<Tooltip
			prefixCls="rc-slider-tooltip"
			overlay={value}
			visible={dragging}
			placement="top"
			key={index}>
			<Handle value={value} index={index} key={key} className={className} disabled={disabled} offset={offset} prefixCls={prefixCls}/>
		</Tooltip>
	);
};

class ProximitySlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			minValue: 10,
			maxValue: 100,
            steps: 10
		}
	}
	marks(minValue, maxValue) {
	  let miLabels = [];
	  for (let i = minValue; i <= maxValue; i++ ) {
	    if (i == minValue || i == maxValue || i % this.state.steps == 0) {
	      miLabels.push(i);
	    }
	  }
	  return miLabels.reduce(function(result, year) {
	    result[year] = year.toString();
	    return result;
	  }, {});
	}
	render() {
		return (
			<div>
				<Slider 
					min={this.state.minValue}
					max={this.state.maxValue}
					step={this.state.steps}
					marks={this.marks(this.state.minValue, this.state.maxValue)}
					dotStyle={dotStyle}
					defaultValue={this.props.filters.range}
					handle={displayProximityValueToolTip}
					onChange={(value) => { this.props.dispatch(setRangeFilter(value))}}
				/>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ProximitySlider);