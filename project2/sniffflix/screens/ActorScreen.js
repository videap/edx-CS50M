import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/styles.js'
import ActorInfo from './components/ActorInfo.js';

export const ActorScreen = ({route}) => {
    return (
      <View style={styles.home_container}>
        <ActorInfo actor_name={route.params.actor_name} />
      </View>
    );
}