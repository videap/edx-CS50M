import React from 'react';
import Ratings from './components/Ratings.js';
import styles from './styles/styles.js';
import { View } from 'react-native';

export const RatingsScreen = ({route}) => {
    return (
      <View style={styles.home_container}>
        <Ratings title={route.params.title}/>
      </View>
    );
}