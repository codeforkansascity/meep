import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
export default class MapContainer extends Component {

  //create props for map component  
  static defaultProps = {
    center: {
      lat: 39.1,
      lng: -94.6
    },
    zoom: 11
  };
 
  render() {
    return (
        //container for map. height is required to render
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                //store API key here
                bootstrapURLKeys={{ key: 'api key here' }}
                //reference map component props here
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                //create new polygons, circles, etc on top of map once loaded
                //utilize Google Maps api to create shapes rather than rely on library components
                onGoogleApiLoaded={({map}) => {
                    //new circle
                    new google.maps.Circle({
                        //styling
                        strokeColor: '#FF0000',
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: '#FF0000',
                        fillOpacity: 0.3,
                        //render circle onto map
                        map,
                        //receive props from map
                        center: this.props.center,
                        //set circle radius
                        radius: 5000,
                    })
                    //new polygon
                    new google.maps.Polygon({
                        //polygon edges
                        paths: [{lat: 39, lng: -94.5},
                            {lat: 39.1, lng: -94.6},
                            {lat: 39, lng: -94.6}],
                        //styling
                        strokeColor: '#FF0000',
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: '#FF0000',
                        fillOpacity: 0.35,
                        //render polygon onto map
                        map
                    })
                }}
            >
            </GoogleMapReact>
        </div>
    );
  }
}