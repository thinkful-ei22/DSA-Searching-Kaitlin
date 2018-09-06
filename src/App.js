import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br /><br />
        <form>
          <label forHtml="input">Input</label>
          <input type="text" name="name">
          </input>
          <input type="submit" value="submit"></input>
        </form>

      </div>
    );
  }
}

export default App;
