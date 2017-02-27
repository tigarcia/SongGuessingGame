import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import Welcome from './Welcome';
import Guess from './Guess';
import Answer from './Answer';


const AnswerNavigator = StackNavigator({
  Answer: { screen: Answer}
}, {
  initialRouteName: 'Answer'
});

const GameContainer = StackNavigator({
  Welcome: {
    screen: Welcome,
  },
  Guess: {
    screen: Guess
  },
  AnswerNavigator: {
    screen: AnswerNavigator
  }

}, {
  headerMode: 'none',
  initialRouteName: "Welcome"
});

export default GameContainer;