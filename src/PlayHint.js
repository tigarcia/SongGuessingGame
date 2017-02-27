import React, {Component} from 'react';
import { View } from 'react-native';
import Sound from 'react-native-sound';

export default class PlayHint extends Component {
  constructor(props) {
    super(props);
    this.sound = null;

    this.playCallback = this.playCallback.bind(this);
  }

  // We never want this component to be
  // rerendered
  shouldComponentUpdate() {
    return false;
  }

  // Method for keeping track of when the song is done.
  // Call onSongDone from the passed in props
  playCallback(success) {
    if (success) {
      this.props.onSongDone();
    } else {
      console.warn("Song did not play properly");
    }
  }

  // Start playing the song as soon as the component is
  // mounted.  This only happens 1 time.
  componentDidMount() {
    if (this.sound) {
      this.sound.stop();
      this.sound.release();
    }
    this.sound = new Sound(this.props.audioFile,
      this.props.audioPath,
      (e) => {
        if (e) {
          console.warn('error', e);
        } else {
          this.sound.play(this.playCallback);
        }
    });
  }

  // Make sure to clean up the native audio before
  // the component goes away
  componentWillUnmount() {
    if (this.sound) {
      this.sound.stop();
      this.sound.release();
    }
  }

  // We don't actually need to show anything for this
  render() {
    return (
      <View />
    );
  }
}
