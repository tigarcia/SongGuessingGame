import React, { Component } from 'react';
import Welcome from './Welcome';
import Guess from './Guess';


export default class GameContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startGame: false
    };

    this.onStartPlaying = this.onStartPlaying.bind(this);
  }

  onStartPlaying() {
    this.setState({startGame: true});
  }

  render() {
   return this.state.startGame ?
              <Guess/> :
              <Welcome onStartPlaying={this.onStartPlaying} />;
  } 
}
