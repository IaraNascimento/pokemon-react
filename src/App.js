
import React, { Component } from 'react';
import HuntSection from "./components/hunt-section/HuntSection";
import CapturedList from "./components/captured-list/CapturedList";

class App extends Component {

  constructor() {
    super();
    this.state = {
      captured: []
    };
  }

  capturePokemon(pokemon) {
    const newCapturedList = [...this.state.captured, pokemon];
    const newState = {...this.state, captured: newCapturedList};
    this.setState(newState)
  }

  render() {
    return (
      <main>
        <HuntSection capturePokemon={ this.capturePokemon.bind(this) } />
        <CapturedList captured={ this.state.captured } />
      </main>
    );
  }
}

export default App;
