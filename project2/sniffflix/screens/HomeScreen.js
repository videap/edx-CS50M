import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles/styles.js'
import CategoryCard from './components/CategoryCard.js'

export const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.home_container}>
      <View style={styles.title_container}>
        <Text style={styles.title_container.text}>SniffFlix</Text>
      </View>
      <View style={styles.cards_container.category}>
        { ["Top 250", "By Genre", "By Year"].map((category) => <CategoryCard category={category} navigation={navigation} key={category}/>)}
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}