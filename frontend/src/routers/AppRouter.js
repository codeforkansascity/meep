import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import App from '../../src/App';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

const AppRouter = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default AppRouter;