// SET MAP CENTER
export const setMapCenter = (latlong) => ({
    type: 'SET_CENTER',
    center: latlong
});

// SET MAP ZOOM
export const setMapZoom = (proximity = 0) => ({
    type: 'SET_ZOOM',
    zoom: calculateMapZoomWithProximity(proximity)
});


const calculateMapZoomWithProximity = (proximity) => {
    proximity = parseInt(proximity);
    let zoom =  9;

    if (proximity <= 5) {
        zoom = 13;
    } 
    else if (proximity <= 10 ) {
        zoom = 12;
    }
    else if (proximity <= 20) {
        zoom = 11
    }
    else if (proximity <= 40) {
        zoom = 10;
    }
    return zoom;
}