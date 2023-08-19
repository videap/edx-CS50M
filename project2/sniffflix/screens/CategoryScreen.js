import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles/styles.js'

export const CategoryScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Categories</Text>
        <Button title='Go to Titles screen' onPress={() => navigation.push("TitlesScreen")}/>
        <StatusBar style="auto" />
      </View>
    );
}