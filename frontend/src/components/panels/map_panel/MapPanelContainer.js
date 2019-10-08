import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Circle, Marker } from "react-google-maps"
const GoogleMapsAPIKey = 'AIzaSyC1o7P7OG08az4tlbCjLwN-u16HKAR2t3Q';

console.log(Circle);

const circle = {
    center: {lat: 39.0997, lng: -94.5786}
  }

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={circle.center}>
        <Circle
            strokeColor='#FF0000'
            strokeWeight={2}
            options={{fillColor:'hsl(125, 100%, 14%)',fillOpacity: "1"}}
            center={circle.center}
            radius={1000}>
        </Circle>
        <Marker
            position={circle.center}
            icon={{url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}}
            title={"Hello World!"}/>
  </GoogleMap>
));

export default class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minFill: "#00E70A",
            maxFill: "hsl(123, 100%, 45%)"
        }
    }
    render() {
        return (
            <MyMapComponent
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GoogleMapsAPIKey}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    } 
}