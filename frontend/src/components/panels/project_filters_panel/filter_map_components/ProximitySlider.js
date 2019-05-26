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

class ProximitySliderTrack extends Component {
  constructor(props){
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.stopDragging = this.stopDragging.bind(this);
    this.sliderTrackDomElement = React.createRef();
    var {position} = props;
    this.state = {
      position: position,
      leftWidth: `${Math.floor(position*100)}%`,
      rightWidth: `${Math.floor((1 - position)*100)}%`,
      dragging: false,
    }
  }

  handleMouseDown(e) {
    console.log('mouse down')
    this.setState({
      dragging: true,
    })
  }

  handleMouseMove(e) {
    if (this.state.dragging) {
      console.log('dragging')
      var boundingRect
      boundingRect = this.sliderTrackDomElement.current.getBoundingClientRect()
      var elemLeft = boundingRect.left
      var elemRight = boundingRect.right
      var mouseX = e.clientX
      console.log(`elemLeft = ${elemLeft}`)
      console.log(`elemRight = ${elemRight}`)
      console.log(`mouseX = ${mouseX}`)
      var position = (mouseX - elemLeft)/(elemRight - elemLeft);
      position = position > 0 ? position : 0;
      position = position < 1 ? position : 1;
      console.log(`position = ${position}`)
      this.setState({
        position: position,
        leftWidth: `${Math.floor(position*100)}%`,
        rightWidth: `${Math.floor((1 - position)*100)}%`,
      })

    }
  }

  stopDragging(e) {
    console.log('mouse up')
    this.setState({
      dragging: false,
    })
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
          style={{width: this.state.leftWidth}}>
        </div>
        <div
          className="proximity-slider-track-thumb"
          onMouseDown={this.handleMouseDown}
        ></div>
        <div
          className="proximity-slider-track-right"
          style={{width: this.state.rightWidth}}>
        </div>
      </div>
    )
  }
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
