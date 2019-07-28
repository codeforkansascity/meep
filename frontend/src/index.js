import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import axios from 'axios';

axios.get('http://localhost:8000/locations')
    .then((res) => {
        console.log(res.data);
    });

//import custom sass
import './styles/main.scss';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<AppRouter/>, document.getElementById('app'));
