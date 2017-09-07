import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlashApp from './components/FlashApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Flash Cards</h2>
        </div>
        <div>
          <p>
           <FlashApp />
          </p>
        </div>
      </div>
    );
  }
}

export default App;
