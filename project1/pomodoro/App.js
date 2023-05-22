import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import vibrate from './utils/vibrate';
import { Platform } from 'react-native';
import { Audio } from 'expo-av';
import React from 'react';

export default function App() {

  const [sound, setSound] = React.useState();

  async function playSound() {
    // console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('./assets/audiotuti.mp4')
    );
    setSound(sound);

    // console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          // console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);



  return (
    <View style={styles.container}>
      <Text>Este é o meu primeiro app para {Platform.OS}!!</Text>
       <Text>Aproveite...</Text>
      <View style={styles.button}>
        <Button title="Vibrar" onPress={() => {vibrate(); playSound()}}></Button>
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
