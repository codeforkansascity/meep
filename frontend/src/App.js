import React, { useEffect} from 'react';
import {WelcomePanel, ProjectListPanel, ProjectFiltersPanel, ProjectDetailsPanel}  from './components/panels/index';
import {Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

const App = (props) => {
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
            <img src="images/static_map.png" id="placeholder_map_img" className="img-fluid" alt="Responsive image"/>
          </section>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      locations: state.locations
  };
};

export default connect(mapStateToProps)(App);
