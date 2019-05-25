import React, { Component } from "react";


class ProximitySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: props.min,
      max: props.max,
      ticks: props.ticks,//object mapping tick labels to tick positions
      position: props.position,//position of the slider
    }
  }


  render () {
    return (
      <div className="proximity-slider">
        <ProximitySliderTrack/>
        <div className="proximity-slider-ticks"></div>
      </div>
    )
  }
}

const ProximitySliderTrack = (props) => {
  return (
    <div className="proximity-slider-track">
      <div className="proximity-slider-track-left"></div>
      <div className="proximity-slider-track-thumb"></div>
      <div className="proximity-slider-track-right"></div>
    </div>
  )
}

export default ProximitySlider;
