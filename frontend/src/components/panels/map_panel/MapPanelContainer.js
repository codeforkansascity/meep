import { GoogleApiWrapper, Map } from 'google-maps-react';
import React, { Component } from 'react';
 
export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                initialCenter={{
                    lat: 40.854885,
                    lng: -88.081807
                }}
                zoom={15}></Map>
        )
    }
}
 
export default GoogleApiWrapper({
    //   apiKey: <copy and paste API key here>
})(MapContainer);