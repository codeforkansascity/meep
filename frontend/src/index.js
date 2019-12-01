//import custom sass
import './styles/main.scss';
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// Import React & Redux
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from "react-redux";
import configureStore from './store/configure_store';
import selectProjectLocations from './selectors/locations';
import { MeepService } from './services/meep_service';

// config redux store
const store = configureStore();
const meep_service = new MeepService();

meep_service.getLocations().then(data => {
    store.dispatch({ type: 'ADD_LOCATIONS', locations: data });
});


const state = store.getState();
const visibleProjects = selectProjectLocations(state.locations, state.filters);

console.log('visibleProjects', visibleProjects);

const app = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));