import React from 'react';
import { View, Button, Alert } from 'react-native';

const AlertPomodoroEnd = () => {
    return Alert.alert(
      'A Tuti diz',
      'Ooooooooughhoughhhggghh',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
};

export default AlertPomodoroEnd;