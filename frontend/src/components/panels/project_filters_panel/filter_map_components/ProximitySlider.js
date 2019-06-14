import React, { Component } from "react";


class ProximitySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: props.min,//minimum slider value i.e. 0 miles
      max: props.max,//maximum slider value
      labels: props.labels,//array of strings to be added to tick mark labels
      position: props.position,//float between 0 and 1 describing fraction
      // of distance between min and max covered by slider thumb
    }
  }

  render () {
    return (
      <div className="proximity-slider">
        <ProximitySliderTrack position={this.state.position}/>
        {/*the interactive part of the slider*/}
        <ProximitySliderTicks labels={this.state.labels}/>
        {/*labels and tick marks underneath the interactive part*/}
      </div>
    )
  }
}

class ProximitySliderTrack extends Component {
/*
  The interactive part of the slider component. It consists of left and right
  slider tracks, and a slider thumb placed in between them. The slider tracks
  widths are dynamically adjusted as the slider thumb is moved from side to
  side.

*/
  constructor(props){
    super(props);
    this.sliderTrackDomElement = React.createRef();
    //to call getBoundingClientRect directly on the slider track DOM element
    var {position} = props;
    this.state = {
      position: position, //same as ProximitySlider position
      leftWidth: `${Math.floor(position*100)}%`, //width of left slider track,
      //expressed as a string percentage of the slider track component
      rightWidth: `${Math.floor((1 - position)*100)}%`,//similar for right track
      dragging: false, //indicates that the user is currently dragging the
      // slider thumb
    }
  }

  computeNewPosition = e => {
    /*Given a mouse event, compute a new position for the slider thumb as a
     fraction of the distance between the slider left and right borders. */

    // get x coordinates for the left and right border of the slider track
    var boundingRect;
    boundingRect = this.sliderTrackDomElement.current.getBoundingClientRect();
    var elemLeft = boundingRect.left;
    var elemRight = boundingRect.right;

    var mouseX = e.clientX;

    //compute new position as a fraction between 0 and 1
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
/*
  Tick marks and tick labels below the slider track. Ticks are evenly spaced.
*/
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
  const tickSpacing = () => { 
    return labels.slice(0, -1).map(label => renderTickSpacing()); 
  };
  const renderTickLabel = label => {
    return <div className="tick-label">{label}</div>
  };
  return (
    <React.Fragment>
    <div className="proximity-slider-ticks">
      {tickSpacing()}
    </div>
    <div className="proximity-slider-tick-labels">
      {labels.map(label => renderTickLabel(label))}
    </div>
    </React.Fragment>
  )
}

export default ProximitySlider;
