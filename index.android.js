/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Welcome from './src/Welcome'

export default class SongGuessingGame extends Component {
  render() {
    return (
      <Welcome />
    );
  }
}

AppRegistry.registerComponent('SongGuessingGame', () => SongGuessingGame);
