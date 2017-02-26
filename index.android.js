import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import GameContainer from './src/GameContainer'

export default class SongGuessingGame extends Component {
  render() {
    return (
      <GameContainer />
    );
  }
}

AppRegistry.registerComponent('SongGuessingGame', () => GameContainer);
