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
        <ProximitySliderTicks labels={this.state.labels}/>
      </div>
    )
  }
}

class ProximitySliderTrack extends Component {
  constructor(props){
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.stopDragging = this.stopDragging.bind(this);
    this.computeNewPosition = this.computeNewPosition.bind(this);
    this.sliderTrackDomElement = React.createRef();
    var {position} = props;
    this.state = {
      position: position,
      leftWidth: `${Math.floor(position*100)}%`,
      rightWidth: `${Math.floor((1 - position)*100)}%`,
      dragging: false,
    }
  }

  computeNewPosition = e => {
    var boundingRect;
    boundingRect = this.sliderTrackDomElement.current.getBoundingClientRect();
    var elemLeft = boundingRect.left;
    var elemRight = boundingRect.right;
    var mouseX = e.clientX;
    var position = (mouseX - elemLeft)/(elemRight - elemLeft);
    position = position > 0 ? position : 0;
    position = position < 1 ? position : 1;
    return position
  }

  handleMouseDown = e => {
    this.setState({
      dragging: true,
    })
  }

  handleMouseMove = e => {
    if (this.state.dragging) {
      var position = this.computeNewPosition(e);
      this.setState({
        position: position,
        leftWidth: `${Math.floor(position*100)}%`,
        rightWidth: `${Math.floor((1 - position)*100)}%`,
      })
    }
  }

  handleClick = e => {
    var position = this.computeNewPosition(e);
    this.setState({
      position: position,
      leftWidth: `${Math.floor(position*100)}%`,
      rightWidth: `${Math.floor((1 - position)*100)}%`,
    })
  }

  stopDragging = e => {
    if(this.state.dragging){
      this.setState({
        dragging: false,
      })
    }
  }

  render() {
    return (
      <div
        className="proximity-slider-track"
        ref={this.sliderTrackDomElement}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.stopDragging}
        onMouseLeave={this.stopDragging}>
        <div
          className="proximity-slider-track-left"
          style={{width: this.state.leftWidth}}
          onClick={this.handleClick}>
        </div>
        <div
          className="proximity-slider-track-thumb"
          onMouseDown={this.handleMouseDown}
        ></div>
        <div
          className="proximity-slider-track-right"
          style={{width: this.state.rightWidth}}
          onClick={this.handleClick}
        >
        </div>
      </div>
    )
  }
}


const ProximitySliderTicks = props => {
  const {labels} = props;
  const tickSpacingWidth = `${Math.floor(100/(labels.length - 1))}%`;
  const renderTickSpacing = () => {
    return (
        <div
          className="tick-spacing"
          style={{
            width: tickSpacingWidth,
          }}
        ></div>
    )
  };
  const renderTickLabel = label => {
    return <div className="tick-label">{label}</div>
  };
  return (
    <React.Fragment>
    <div className="proximity-slider-ticks">
      {labels.slice(0, -1).map(label => renderTickSpacing())}
    </div>
    <div className="proximity-slider-tick-labels">
      {labels.map(label => renderTickLabel(label))}
    </div>
    </React.Fragment>
  )
}

export default ProximitySlider;
