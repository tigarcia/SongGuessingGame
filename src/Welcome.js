import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import CustomButton from './CustomButton';

export default class Welcome extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Guess That Song
        </Text>
        <CustomButton
          onPress={() => navigate('Guess')}
          title="Start" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
