import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, {Component} from 'react';
import settings from './settings';
import pomodoroAlert from './utils/alert'
import playSound from './utils/play_sound';

class App extends Component {
  constructor(props) {
    super(props);

    this.stop = false

    this.state = {
      periodSecs: 10,
      countdownSecs: 10,
      countPomodoros: 0,
    };
  }

  start() {
    this.stop = false
    this.countDown()
  }

  reset() {
    this.stop = true
    this.setState({countdownSecs: this.state.periodSecs})
  }

  countDown() {
    if (this.state.countdownSecs > 0 && this.stop === false){
      setTimeout( () => {
          console.log("Minus 1 sec")
          this.setState({countdownSecs: this.state.countdownSecs-1});
          this.countDown()
        }, 1000);
    } else {
      this.reset();
      console.log("The pomodoro has finished.");
      pomodoroAlert();
      playSound();
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formbox}>
          <Text>Pomodoro Secs:</Text>
          <TextInput style={styles.text_input} focusable onChangeText={(secs) => this.setState({periodSecs: secs, countdownSecs: secs})}>10</TextInput>
        </View>
        <View style={styles.button}>
          <Button title={`START TIMER`} onPress={() => this.start()}></Button>
          <Button title={`RESET`} onPress={() => this.reset() }></Button>
        </View>
        <View>
          <Text>
            Countdown: {this.state.countdownSecs}
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  };
};

//#region Styling

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
  },

  formbox: {
    marginVertical: 10,
    borderColor: "#000000",
    borderWidth: 3,
  },

  text_input: {
    alignSelf: "center",
    marginVertical: 5,
    borderColor: "#000000",
    borderWidth: 1,
    height: 30,
    width: 50,
    textAlign: "center",
  }
});

export default App;

//#endregion