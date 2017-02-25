import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Hello React-Native</Text>
        <Button title="SIMPLE BUTTON" onPress={() => null} color="blue"/>
        <View style={styles.inputContainer}>
          <TouchableOpacity
              style={styles.customButton}
              color="blue">
            <Text style={styles.buttonText}>PRESS ME</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.customButton}
              color="blue">
            <Text style={styles.buttonText}>NO! PRESS ME</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    width: 350,
    height: 100,
  },
  welcomeText: {
    fontSize: 30
  },

  customButton: {
    borderRadius: 4,
  },
  buttonText: {
  } 
});