import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/styles.js'

export const ActorScreen = () => {
    return (
      <View style={styles.home_container}>
        <Text style={styles.title}>Actor</Text>
        <StatusBar style="auto" />
      </View>
    );
}