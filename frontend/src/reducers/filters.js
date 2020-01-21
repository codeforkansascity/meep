const filtersReducerDefaultState = {
  range: null,
  types: [],
  startDate: null,
  endDate: null
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'FILTER_BY_RANGE':
      console.log(action.range);
      return {
        ...state,
        range: action.range
      };
    case 'FILTER_BY_TYPE':
      return {
        ...state,
        type: action.type
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
    default:
      return state;
  }
};