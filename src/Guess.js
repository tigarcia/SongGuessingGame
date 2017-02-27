import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import RNFS from 'react-native-fs';
import SongData from './SongData';
import GuessInput from './GuessInput';
import PlayHint from './PlayHint';

const audioFile = 'audio.m4a';
const audioPath = RNFS.DocumentDirectoryPath;
export default class Guess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playAudio: false,
      guess: '',
      guessIncorrect: undefined,
      song: {}
    }
    this.downloadAndPlaySong = this.downloadAndPlaySong.bind(this);
    this.onChangeGuess = this.onChangeGuess.bind(this);
    this.onGuess = this.onGuess.bind(this);
    this.onSongDone = this.onSongDone.bind(this);
  }

  resetState(cb) {
    this.setState({
      playAudio: false,
      guess: '',
      guessIncorrect: undefined,
      song: {}
    }, cb);
  }

  downloadAndPlaySong() {
    const songId = SongData.randomSongId();
    fetch(`https://itunes.apple.com/us/lookup?id=${songId}`)
      .then(d => d.json())
      .then((d) => {
        let song = {};
        song.artist = d.results[0].artistName;
        song.id = d.results[0].artistId;
        song.album = d.results[0].collectionName;
        song.trackName = d.results[0].trackName;
        song.audioUrl = d.results[0].previewUrl;
        this.setState({song});
        return song;
      })
      .then((s) => {
        return RNFS.downloadFile({
          fromUrl: s.audioUrl,
          toFile: `${audioPath}/${audioFile}`
        }).promise;
      })
      .then((d) => this.setState({playAudio: true}))
      .catch((err) => {
        console.warn("Download error: ", err);
        this.resetState(this.downloadAndPlaySong);
      })
  }

  onChangeGuess(guess) {
    this.setState({guess});
  }

  onGuess() {
    let result;
    if (this.state.playAudio) {
      if (this.verifyGuess(this.state.guess)) {
        result = "CORRECT";
      } else {
        result = "INCORRECT :(";
      }
    }
    console.warn(result, this.state.guess);
  }

  verifyGuess(guess) {

    const guesses = guess.trim().toLowerCase().split(/\s+/);
    const answers = `${this.state.song.artist} ${this.state.song.trackName}`
                        .trim().toLowerCase();
    return guesses.reduce(function(acc, g) {
      if (answers.indexOf(g) >= 0) {
        return true;
      }
      return acc;
    }, false);
  }

  onSongDone() {
    console.warn("Song Done");
  }

  componentDidMount() {
    this.downloadAndPlaySong()
  }

  render() {
    const {artist, trackName, album, audioUrl} = this.state.song;
    const message = this.state.guessIncorrect ?
        "Sorry, Try Again" : "";
    const audioView = this.state.playAudio ?
        <PlayHint
          audioPath={audioPath}
          audioFile={audioFile}
          onSongDone={this.onSongDone}
        /> :
        <View/>;

    return (
      <View style={styles.container}>
        <View style={styles.flashMessage}>
          <Text style={styles.flashMessageText}>{message}</Text>
        </View>
        <GuessInput
          style={styles.guessInput}
          onChangeGuess={this.onChangeGuess}
          onGuess={this.onGuess}
          guess={this.state.guess}
          />
        {audioView}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  flashMessage: {
    flex: 0.4,
    justifyContent: 'center'
  },
  flashMessageText: {
    color: "red",
    fontSize: 30,
  },
  guessInput: {
    flex: 0.6,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
