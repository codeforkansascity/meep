import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const MainComponent = () => (
  <div>main component</div>
);

const TestComponent = () => (
  <div>
    <p>test component</p>
    <Button>This is a button my dude</Button>
  </div>
);

class App extends Component {
  render() {
    return (
      <div id='test'>
          <p>test</p>
          <Switch>
              <Route path="/" component={MainComponent} exact={true} />
              <Route path="/test" component={TestComponent} exact={true} />
          </Switch>
      </div>
    );
  }
}

export default App;
