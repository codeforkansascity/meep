import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import App from '../../src/App';

//import custom sass
import '../styles/main.scss';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

const AppRouter = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default AppRouter;