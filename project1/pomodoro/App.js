import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Platform } from 'react-native';
import React, {useState} from 'react';

export default function App() {

const [ counter, setCounter ] = useState(0)

const increment = () => setCounter(counter+1)

  return (
    <View style={styles.container}>
      <Text>Este é o meu primeiro app para {Platform.OS}!!</Text>
       <Text>Aproveite...</Text>
      <View style={styles.button}>
        <Button title={`Count is ${counter}`} onPress={() => {increment()}}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

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
