import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            My Token = {window.token}
          </p>
          <a
            className="App-link"
            href="http://codeforkc.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeForKC
          </a>
        </header>
      </div>
    );
  }
}

export default App;
