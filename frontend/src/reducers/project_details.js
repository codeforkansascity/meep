const detailsReducerDefaultState = {
    date: null,
    img: null,
    details: null,
    name: null
};
  
export default (state = detailsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SELECT_PROJECT':
            return {...action.project};
        default:
            return state;
    }
};