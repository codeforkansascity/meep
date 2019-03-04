import React, { Component } from 'react';
import WelcomePanel from './components/panels/home_panel/WelcomePanel';
import ProjectFiltersPanel from './components/panels/project_filters_panel/ProjectFiltersPanel';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div id="app_container">
        <div className="container-fluid">
          <div className="row">
            <section className="col-4" id="side_panel_container">
              <Switch>
                <Route path="/" component={WelcomePanel} exact={true} />
                <Route path="/filters" component={ProjectFiltersPanel} />
              </Switch>
            </section>
            <section className="col-8" id="map_container">
              <img src="images/static_map.png" id="placeholder_map_img" className="img-fluid" alt="Responsive image"/>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
