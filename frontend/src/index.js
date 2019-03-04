import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

//import custom sass
import './styles/main.scss';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<AppRouter/>, document.getElementById('app'));
