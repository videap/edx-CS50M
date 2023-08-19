import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles/styles.js'

export const TitleScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Movie</Text>
        <Button title='Go to Actor screen' onPress={() => navigation.push("ActorScreen")}/>
        <Button title='Go to Ratings screen' onPress={() => navigation.push("RatingsScreen")}/>
        <StatusBar style="auto" />
      </View>
    );
}