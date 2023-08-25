import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/styles.js'
import CategoryCard from './components/CategoryCard.js'

export const HomeScreen = ({navigation}) => {

  const categories_next_screen = {
    "Top 250": "TitlesScreen",
    "By Genre": "CategoryScreen",
    "By Year": "CategoryScreen"
  }


  return (
    <View style={styles.home_container}>
      <View style={styles.title_container}>
        <Text style={styles.title_container.text}>SniffFlix</Text>
      </View>
      <View style={styles.cards_container.category}>
        {Object.keys(categories_next_screen).map( category  => <CategoryCard category={category} navigation={navigation} key={category} next_screen={categories_next_screen[category]}/>)}
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}