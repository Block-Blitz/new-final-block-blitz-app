import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main.js';
import Header from './Header.js';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){

  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;

