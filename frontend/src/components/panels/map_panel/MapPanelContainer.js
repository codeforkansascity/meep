import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Circle } from "react-google-maps"

// const GoogleMapsAPIKey = paste API key here

const circle = {
    center: {lat: 49.25, lng: -123.1},
    population: 603502
  }

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={4}
    defaultCenter={circle.center}>
        <Circle
            strokeColor={'#FF0000'}
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor={'#FF0000'}
            fillOpacity={0.35}
            center={circle.center}
            radius={Math.sqrt(circle.population) * 100}>
        </Circle>
  </GoogleMap>
));

export default class MapContainer extends Component {
    render() {
        return (
            <MyMapComponent
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GoogleMapsAPIKey}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    } 
}