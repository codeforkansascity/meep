const initialState = {
    counter: 100,
    markers: [],
    marker_selecting: ""
  };
  
  // Reducer
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      //-----------
      case "SET_MARKERS":
        return {
          ...state,
          markers: action.value
        };
  
      case "ADD_MARKER":
        let max = 35.4;
        let min = 33.9;
        let lat = Math.random() * (max - min) + min;
  
        max = 152.5;
        min = 148.5;
        let lng = Math.random() * (max - min) + min;
  
        const new_marker = {
          isGroup: action.value,
          position: { lat: -lat, lng: lng },
          description: state.markers.length
        };
        return {
          ...state,
          markers: [...state.markers, new_marker]
        };
  
      case "DEL_MARKER":
        const index = action.value;
        let newArray = state.markers.slice();
        newArray.splice(index, 1);
        return {
          ...state,
          markers: newArray,
          marker_selecting: -1
        };
  
      case "MARKER_SELECTING":
        return {
          ...state,
          marker_selecting: action.value
        };
  
      case "CHANGE_TYPE":
        const id = action.value;
  
        let editMarker = [];
        editMarker[id] = state.markers[id];
        editMarker[id] = {
          ...state.markers[id],
          isGroup: !editMarker[id].isGroup
        };
  
        let new_stateMarker = Object.assign([...state.markers], editMarker);
  
        return {
          ...state,
          markers: new_stateMarker,
          marker_selecting: id
        };
  
      case "MARKER_MOVE":
        const moving_marker = action.value;
  
        let obj = [];
        obj[moving_marker.id] = moving_marker;
  
        let copy = Object.assign([...state.markers], obj);
        console.log(copy);
  
        return {
          ...state,
          markers: copy
          // marker_selecting: moving_marker.id,
        };
    }
  
    return state;
  };
  
  export default rootReducer;