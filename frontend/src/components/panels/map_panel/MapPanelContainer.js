import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Circle } from "react-google-maps";
import { connect } from 'react-redux';
import { MeepService } from '../../../services/meep_service';
import { selectProject } from '../../../actions/project_details';
import { withRouter} from 'react-router-dom';
import { selectProjectLocations } from '../../../selectors/locations';
import { GoogleMapsAPIKey } from '../../../../private/google_maps';

const meep_service = new MeepService();

const mapState = {
    marker : {
        strokeColor: "hsl(125, 100%, 14%)",
        fillColor:'hsl(125, 100%, 14%)',
        fillOpacity: "0.7",
        radius: 500,
        strokeWeight: 1
    },
    center: {
        "lat": 39.0997,
        "lng": -94.5786
    },
    zoom: 10
}

const mapStateToProps = (state, ownProps) => {
    return { 
        ...ownProps,
        locations: state.locations[0] ? selectProjectLocations(state.locations[0], state.filters) : []
    }
};

const MyMapComponent = connect(mapStateToProps)(withScriptjs(withGoogleMap((props) => {

    const dispatchProjectSummary = (location) => {
        meep_service.getProjectDetailsById(location.project_id).then(data => {
            props.dispatch(selectProject(data));
            props.history.push("/details");
        });
    }

    return (
        <GoogleMap
            defaultZoom={mapState.zoom}
            defaultCenter={mapState.center} autoUpdate>
            {props.locations.map(location => {
                return <Circle
                            key={location.key}
                            onClick={()=>dispatchProjectSummary(location)}
                            strokeWeight={mapState.marker.strokeWeight}
                            options={{
                                fillColor: mapState.marker.fillColor, 
                                fillOpacity: mapState.marker.fillOpacity, 
                                strokeColor: mapState.marker.strokeColor
                            }}
                            center={location.center}
                            radius={mapState.marker.radius}></Circle>
            })}
        </GoogleMap>
    )
})));

const MapContainer = (props) => {
        return (
            <MyMapComponent
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GoogleMapsAPIKey}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100vh` }} />}
                history={props.history}
            />
        );

}

export default withRouter(MapContainer);