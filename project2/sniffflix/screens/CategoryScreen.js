import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles/styles.js'

export const CategoryScreen = ({navigation}) => {
    return (
      <View style={styles.home_container}>
        <Text style={styles.title}>Categories</Text>
        <Button title='Go to Titles screen' onPress={() => navigation.navigate("TitlesScreen")}/>
        <StatusBar style="auto" />
      </View>
    );
}