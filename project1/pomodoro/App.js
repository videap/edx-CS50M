import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Platform } from 'react-native';
import React, {Component} from 'react';
import settings from './settings';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      periodSecs: 0,
      countdownSecs: 0,
      countPomodoros: 0
    };
  }

  startPomodoro() {
    console.log("Your pomodoro has started!")
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the pomodoro app for {Platform.OS}!!</Text>
        <View style={styles.button}>
          <Button title={`START POMODORO`} onPress={startPomodoro()}></Button>
        </View>
        <View>
          <Text on>
            Countdown: {this.state.countdownSecs}
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 120,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    padding: 10,
  }
});
