import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
// import axios from 'axios';

// axios.get('http://www.meepmetroenergy.xyz:18773/projects/18/summary')
// .then(res => {
//   console.log(res);
// })
// .then(err => {
//   console.log(err);
// })

//import custom sass
import './styles/main.scss';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<AppRouter/>, document.getElementById('app'));
