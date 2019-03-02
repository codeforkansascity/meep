import React, { Component } from 'react';

const MainComponent = () => (
  <div>main component</div>
);


class App extends Component {
  render() {
    return (
      <div id='app_container'>
        <div className="container-fluid">
          <div className="row">
            <section className="col-5">
              <h5>Expolore Metropolian Energy Center Projects That Impact Your Area</h5>
            </section>
            <section className="col-7">
              <p>map view</p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
