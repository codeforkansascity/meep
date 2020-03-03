import { createStore, combineReducers } from 'redux';
import locationsReducer from '../reducers/locations';
import filtersReducer from '../reducers/filters';
import projectsReducer from '../reducers/projects';
import projectDetailsReducer from '../reducers/project_details';

export default () => {
  const store = createStore(
    combineReducers({
      locations: locationsReducer,
      projects: projectsReducer,
      selected_project: projectDetailsReducer,
      filters: filtersReducer
    })
  );
  return store;
};