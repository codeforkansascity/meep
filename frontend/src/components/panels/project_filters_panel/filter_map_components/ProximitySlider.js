import React, { Component } from "react";


class ProximitySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: props.min,
      max: props.max,
      labels: props.labels,
      position: props.position,//position of the slider
    }
  }


  render () {
    return (
      <div className="proximity-slider">
        <ProximitySliderTrack position={this.state.position}/>
        <ProximitySliderTicks/>
      </div>
    )
  }
}

const ProximitySliderTrack = props => {
  var {position} = props;
  var leftWidth = `${Math.floor(position*100)}%`;
  var rightWidth = `${Math.floor((1 - position)*100)}%`
  return (
    <div className="proximity-slider-track">
      <div
        className="proximity-slider-track-left"
        style={{width: leftWidth}}>
      </div>
      <div className="proximity-slider-track-thumb"></div>
      <div
        className="proximity-slider-track-right"
        style={{width: rightWidth}}>
      </div>
    </div>
  )
}

const ProximitySliderTicks = props => {
  return (
    <React.Fragment>
    <div className="proximity-slider-ticks">
      <div className="tick-spacing"></div>
      <div className="tick-spacing"></div>
      <div className="tick-spacing"></div>
      <div className="tick-spacing"></div>
    </div>
    <div className="proximity-slider-tick-labels">
      <div className="tick-label">0 mi</div>
      <div className="tick-label">5 mi</div>
      <div className="tick-label">10 mi</div>
      <div className="tick-label">15 mi</div>
      <div className="tick-label">20 mi</div>
    </div>
    </React.Fragment>
  )
}

export default ProximitySlider;
