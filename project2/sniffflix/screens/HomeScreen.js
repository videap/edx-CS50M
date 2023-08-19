import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles/styles.js'

export const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>sniFFFlix!</Text>
        <Button title='Go to Movies screen' onPress={() => navigation.push("TitlesScreen")}/>
        <Button title='Go to Category1 screen' onPress={() => navigation.push("CategoryScreen")}/>
        <Button title='Go to Category2 screen' onPress={() => navigation.push("CategoryScreen")}/>
        <StatusBar style="auto" />
      </View>
    );
}