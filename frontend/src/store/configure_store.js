import { createStore, combineReducers } from 'redux';
import locationsReducer from '../reducers/locations';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      locations: locationsReducer,
      filters: filtersReducer
    })
  );
  return store;
};