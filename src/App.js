import React, { Component } from 'react';
import logo from './logo.svg';
import openSocket from 'socket.io-client';
import './App.css';
import Main from './Main.js';
import Header from './Header.js';
import Game from './Game.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ready: false,
      game: "",
      socket: openSocket('http://localhost:3001')
    };
  }

  componentDidMount(){

    this.state.socket.addEventListener('joinSuccess', (msg) => {
      console.log("game joined listener fired");
      this.setState({
        ready: true,
        game: "gameId"
      });

    });
  }

  render() {
    if (this.state.ready) {
      return <Game />
    }
    return (
      <div>
        <Header />
        <Main />
      </div>
    );

  }
}

export default App;

