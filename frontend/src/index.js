import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducers from './store/Reducers';

// config redux store
const store = createStore(Reducers);

//import custom sass
import './styles/main.scss';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

const app = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
