import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Handle = Slider.Handle;

const dotStyle = {
	'bottom': '-10px',
    'width': '1px',
    'border': '1px solid #e9e9e9',
    'border-radius': '0%',
    'margin-left': '-1px',
};

const handle = (props) => {
  const { value, dragging, index, key, className, disabled, offset, prefixCls} = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} dragging={dragging} index={index} key={key} className={className} disabled={disabled} offset={offset} prefixCls={prefixCls} />
    </Tooltip>
  );
};

class ProximitySlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			minValue: 1,
			maxValue: 20,
		}
		this.marks = this.marks.bind(this);
	}
	marks(minValue, maxValue) {
	  let miLabels = [];
	  for (let i = minValue; i <= maxValue; i++ ) {
	    if (i == minValue || i == maxValue || i % 5 == 0) {
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
					step={1}
					marks={this.marks(this.state.minValue, this.state.maxValue)}
					dotStyle={dotStyle}
					defaultValue={10}
					handle={handle}
				/>
			</div>
		);
	}
}

export default ProximitySlider;