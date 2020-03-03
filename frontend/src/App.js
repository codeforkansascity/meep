import React from 'react';
import {WelcomePanel, ProjectListPanel, ProjectFiltersPanel, ProjectDetailsPanel}  from './components/panels/index';
import {Route, Switch} from 'react-router-dom';
import MapContainer from './components/panels/map_panel/MapPanelContainer';

const App = () => {
  return (
    <div id="app_container">
      <div className="container-fluid">
        <div className="row">
          <section className="col-4" id="side_panel_container">
            <Switch>
              <Route path="/" component={WelcomePanel} exact={true} />
              <Route path="/filters" component={ProjectFiltersPanel} />
              <Route path="/projects" component={ProjectListPanel} />
              <Route path="/details" component={ProjectDetailsPanel} />
            </Switch>
          </section>
          <section className="col-8" id="map_container">
            <MapContainer/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
