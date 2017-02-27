import React, {Component} from 'react'
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet
} from 'react-native'
import CustomButton from './CustomButton'

export default class Answer extends Component {
  static navigationOptions = {
    title: "Guess That Song"
  }

  render() {
    const {
      guessIncorrect,
      artist,
      trackName,
      album
    } = this.props.navigation.state.params;
    const {navigate} = this.props.navigation;
    const result = guessIncorrect === false ?
      <Text style={styles.correctText}>Correct 👍</Text> :
      <Text style={styles.incorrectText}>Incorrect 👎</Text>;

    return (
      <View style={styles.container}>
        <View style={{marginBottom: 15}}>
          <Text style={{fontSize: 25}}>{result}</Text>
        </View>
        <View style={styles.artistView}>
          <Text style={styles.artistText}>{artist}</Text>
          <Text style={styles.artistText}>{trackName}</Text>
          <Text style={{fontSize:21}}>{album}</Text>
        </View>
        <Image
          style={styles.img}
          source={{uri: 'https://www.publicdomainpictures.net/pictures/130000/velka/musical-notes.jpg'}}
        />
        <CustomButton
          title={"CONTINUE"}
          onPress={() => navigate('Guess')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  artistText: {
    fontSize: 25
  },
  artistView: {
    marginBottom: 25,
    alignItems: 'center',
  },
  img: {
    height: 100,
    width: 250,
    marginBottom: 25,
  },
  correctText: {
    fontSize: 25,
    color: 'green',
    marginBottom: 10
  },
  incorrectText: {
    fontSize: 25,
    color: 'red',
    marginBottom: 10
  },
  nextButton: {
    borderRadius: 4,
    backgroundColor: "blue",
    padding:10
  },
  buttonText: {
    color: 'white',
    fontSize: 25
  }
});
