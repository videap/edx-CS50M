import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/styles.js'

export const RatingsScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ratings</Text>
        <StatusBar style="auto" />
      </View>
    );
}