import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import axios from 'axios';

//import custom sass
import './styles/main.scss';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

axios.get(`http://localhost:8000/projects`)
    .then(res => {
        console.log(res.data);
    })

console.log();

ReactDOM.render(<AppRouter/>, document.getElementById('app'));
