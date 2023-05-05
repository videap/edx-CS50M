import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import vibrate from './utils/vibrate';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Hello from Web
      </Text>
      <View style={styles.button}>
        <Button title="Vibrate" onPress={vibrate}></Button>
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
