import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles/styles.js'
import CategoryCard from './components/categoryCard'

export const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.home_container}>
        <View style={styles.title_container}>
          <Text style={styles.title_container.text}>SniffFlix</Text>
        </View>
        <View style={styles.cards_container.category}>
          <CategoryCard category="Top 250" navigation={navigation} navigate_to="TitlesScreen"/>
          <CategoryCard category="By Genre" navigation={navigation} navigate_to="TitlesScreen"/>
          <CategoryCard category="By Year" navigation={navigation} navigate_to="TitlesScreen"/>
        </View>
        <StatusBar style="auto"/>
      </View>
    );
}