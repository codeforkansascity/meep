import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

const MainComponent = () => (
    <div>Main component</div>
);

const TestComponent = () => (
    <div>Testing</div>
);

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={MainComponent} exact={true} />
                <Route path="/test" component={TestComponent} />
            </Switch>
        </div>
    </BrowserRouter>
);
  

export default AppRouter;