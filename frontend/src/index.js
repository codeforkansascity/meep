import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

const template = React.createElement('p', {}, 'testing 123');
ReactDOM.render(AppRouter, document.getElementById('app'));
