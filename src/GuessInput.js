import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';
import CustomButton from './CustomButton';

export default class GuessInput extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <TextInput
          onChangeText={this.props.onChangeGuess}
          value={this.props.guess}
          style={styles.guess}/>
        <CustomButton
          onPress={this.props.onGuess}
          title="GUESS"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  guess: {
    backgroundColor: '#ededed',
    height: 50,
    width: 250,
    marginBottom: 15
  }
});