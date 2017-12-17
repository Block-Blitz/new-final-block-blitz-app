import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import './App.css';
import Main from './Main.js';
import Header from './Header.js';
import Game from './Game.js';
import Packery from 'packery';
import Draggabilly from 'draggabilly';
// import "./puzzle-logic.js";

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

  // const script = document.createElement("script");

  // script.type = "text/javascript"
  // script.src = "./puzzle-logic.js";
  // script.async = true;

  // document.body.appendChild(script);

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

