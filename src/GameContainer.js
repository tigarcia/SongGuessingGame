import React, { Component } from 'react';
import Welcome from './Welcome';
import Guess from './Guess';
import {StackNavigator} from 'react-navigation';

const GameContainer = StackNavigator({
  Welcome: { screen: Welcome },
  Guess: { screen: Guess }
}, {
  initialRouteName: "Welcome",
  headerMode: "none"
});

export default GameContainer;
