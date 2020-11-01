const filtersReducerDefaultState = {
  range: 20,
  zipcode: 64106,
  types: [],
  startDate: 2015,
  endDate: 2018
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'FILTER_BY_RANGE':
      return {
        ...state,
        range: action.range
      };
    case 'ADD_TYPE_FILTER':
      return {
        ...state,
        project_types: [...state.project_types, action.project_type]
      };
    case 'REMOVE_TYPE_FILTER':
      return {
        ...state,
        project_types: state.project_types.filter(type => type !== action.project_type)
      };
    case 'FILTER_BY_START_DATE':
      return {
        ...state,
        startDate: action.start_date
      };
    case 'FILTER_BY_END_DATE':
      return {
        ...state,
        endDate: action.end_date
      };
    case 'SET_ZIPCODE': 
      return {
        ...state,
        zipcode: action.zipcode
      };
    default:
      return state;
  }
};