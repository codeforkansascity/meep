import { GoogleApiWrapper, Map } from 'google-maps-react';
import React, { Component } from 'react';

const mapStyles = {
    width: '100%',
    height: '100%',
  };

export class MapContainer extends Component {
    render() {
        if(!this.props.google) {
            return <div ref='map'>Loading map from API...</div>
        } else {
            return (
                <Map
                    style={mapStyles}
                    google={this.props.google}
                    initialCenter={{
                        lat: 40.854885,
                        lng: -88.081807
                    }}
                    zoom={15}></Map>
            )
        }
    } 
}
 
export default GoogleApiWrapper({
    // apiKey: paste API Key here
})(MapContainer);