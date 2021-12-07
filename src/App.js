import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "asr1"
        },
        {
          name: "Dracula",
          id: "asr2"
        },
        {
          name: "Zombie",
          id: "asr3"
        },
      ]
    };
  }
  render() {
    return (
      // className to distinguish between class in js and class in html
      // {} is javascript expression
      // this.state.string is a variable
      // You cannot modified state without using this keyword
      // component will be rerendered when state is changing
      <div className="App">
        { this.state.monsters.map(monster => (
          <h1 key={monster.id}>{ monster.name }</h1>
        )) }
      </div>
    )
  }
}

export default App;