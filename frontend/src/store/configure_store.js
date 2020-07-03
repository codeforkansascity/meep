import { createStore, combineReducers } from 'redux';
import locationsReducer from '../reducers/locations';
import filtersReducer from '../reducers/filters';
import projectsReducer from '../reducers/projects';
import projectDetailsReducer from '../reducers/project_details';
import mapSettingsReducer from '../reducers/map';
 
export default () => {
  const store = createStore(
    combineReducers({
      locations: locationsReducer,
      projects: projectsReducer,
      selected_project: projectDetailsReducer,
      filters: filtersReducer,
      map_state: mapSettingsReducer
    })
  );
  return store;
};