import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      linearTries: 0,
      binaryTries: 0
    }
  }

  linearSearch(e){
    console.log(e.target.input.value);
    let value = parseInt(e.target.input.value, 10);
    let array= this.state.data;
    let tries = 0;
    for (let i = 0; i < array.length; i++) {
      tries ++;
      console.log(tries);
      if (array[i] === value) {
        this.setState({linearTries: tries});
        return;
      }
    }
    return 'Not Found';
  }

  binarySearch() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br /><br />
        <form onSubmit={e => {
          e.preventDefault();
          this.linearSearch(e);
        }}>
          <label htmlFor="input">Linear Search: </label>
          <input name="input" ref={value => this.value = value} >
          </input>
          <button>Submit</button>
        </form>

        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <label htmlFor="input">Binary Search: </label>
          <input type="text" name="input" ref={value => this.value = value}>
          </input>
          <input type="submit" value="submit"></input>
        </form>

        <p>Attempts:</p>
        <p>Linear Tries: {this.state.linearTries}</p>
        <p>Binary Tries: {this.state.binaryTries}</p>

      </div>
    );
  }
}

export default App;
