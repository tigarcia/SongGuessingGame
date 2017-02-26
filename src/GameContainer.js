import React, { Component } from 'react';
import Welcome from './Welcome';
import SongGame from './SongGame';


export default class GameContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startGame: false
    };
  }

  render() {
   return this.state.startGame ?
              <SongGame/> :
              <Welcome/>;
  } 
}