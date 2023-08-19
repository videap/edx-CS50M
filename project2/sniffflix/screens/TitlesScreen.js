import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles/styles.js'

export const TitlesScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Movies</Text>
        <Button title='Go to Title screen' onPress={() => navigation.push("TitleScreen")}/>
        <StatusBar style="auto" />
      </View>
    );
}