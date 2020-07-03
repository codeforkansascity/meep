const mapReducerDefaultState = {
    center: {
        "lat": 39.0997,
        "lng": -94.5786
    },
    zoom: 11
};
  
export default (state = mapReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_CENTER':
            return {
              ...state,
              center: action.center
            };
        case 'SET_ZOOM':
            return {
              ...state,
              zoom: action.zoom
            };
        default:
            return state;
    }
};