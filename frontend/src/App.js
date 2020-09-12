import React from 'react';
import {WelcomePanel, ProjectListPanel, ProjectFiltersPanel, ProjectDetailsPanel}  from './components/panels/index';
import {Route, Switch} from 'react-router-dom';
import MapContainer from './components/panels/map_panel/MapPanelContainer';

const App = () => {
  return (
    <div id="app_container">
      <section id="menu">
        <nav>
          <img className="metro-logo-img" src="images/metro_energy.jpeg"/>
          <ul>
            <li><a href="https://metroenergy.org/about-demo/about/" target="_blank">About</a></li>
            <li><a href="https://metroenergy.org/programs/" target="_blank">Programs</a></li>
            <li><a href="https://metroenergy.org/resources/" target="_blank">Resources</a></li>
            <li><a href="https://metroenergy.org/get-involved/" target="_blank">Get Invovled</a></li>
            <li><a href="https://twitter.com/metroenergykc" target="_blank"><img className="twitter" src="images/icons/Twitter_Social_Icon_Circle_Color.png"/></a></li>
            <li><a href="https://www.facebook.com/MetropolitanEnergyCenter/" target="_blank"><img className="facebook" src="images/icons/f_logo_RGB-Blue_58.png"/></a></li>
          </ul>
        </nav>
      </section>
      <section id="page_location">
      </section>
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
