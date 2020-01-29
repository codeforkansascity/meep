// SET MAP ZOOM
export const setMapZoom = (zoom = 0) => ({
    type: 'SET_MAP_ZOOM',
    zoom: parseInt(zoom)
});

// SET MAP CENTER
export const setMapCenter = (zipcode = '') => ({
    type: 'SET_MAP_CENTER',
    range: zipcode
});