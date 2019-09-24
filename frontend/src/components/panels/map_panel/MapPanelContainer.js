import { GoogleApiWrapper, Map, Polygon, Circle } from 'google-maps-react';
import React, { Component } from 'react';
 
export class MapContainer extends Component {
    render() {
        const PolyCoords = [
            {lat: 39.3002992, lng: -95.0017571},
            {lat: 39.4616436, lng: -94.6008616},
            {lat: 39.0383863, lng: -93.9446012},
            {lat: 38.6640670, lng: -94.4059056},
            {lat: 38.7690750, lng: -95.0347074}];
        const ReduxPercent = .5
        return (
            <Map
                google={this.props.google}
                initialCenter={{
                    lat: 39.2,
                    lng: -94.5}}
                className={'map'}
                zoom={8}>
                    <Polygon
                    path={PolyCoords}
                    strokeColor="#0000FF"
                    strokeOpacity={ReduxPercent}
                    strokeWeight={2} />
                </Map>
        )
    }
}
 
export default GoogleApiWrapper({
    apiKey: //api key here
})(MapContainer);