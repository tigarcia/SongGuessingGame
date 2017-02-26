import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import RNFS from 'react-native-fs';
import SongData from './SongData';

const audioFile = 'audio.m4a';
const audioPath = RNFS.DocumentDirectoryPath;
export default class SongGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: {},
      playAudio: false
    }
    this.downloadSong = this.downloadSong.bind(this);

  }

  componentDidMount() {
    this.downloadSong()
  }

  downloadSong() {
    const songId = SongData.randomSongId();
    fetch(`https://itunes.apple.com/us/lookup?id=${songId}`)
      .then(d => d.json())
      .then(function(d) {
        let song = {};
        song.artist = d.results[0].artistName;
        song.id = d.results[0].artistId;
        song.album = d.results[0].collectionName;
        song.trackName = d.results[0].trackName;
        song.audioUrl = d.results[0].previewUrl;
        this.setState({song});
        return song;
      }.bind(this))
      .then((s) => {
        return RNFS.downloadFile({
          fromUrl: s.audioUrl,
          toFile: `${audioPath}/${audioFile}`
        }).promise;
      })
      .then((d) => this.setState({playAudio: true}))
      .catch((err) => {
        console.warn("Download error: ", err);
        this.downloadSong();
      })
  }

  render() {
    const {artist, trackName, album, audioUrl} = this.state.song;
    const artistInfo = this.state.playAudio ?
                  <View>
                    <Text>Downloaded file for:</Text>
                    <Text>{artist}</Text>
                    <Text>{trackName}</Text>
                    <Text>{album}</Text>
                    <Text>{audioUrl}</Text>
                  </View> :
                  <View/>;
    return (
      <View style={styles.container}>
        <Text>Start playing music!</Text>
        {artistInfo}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
