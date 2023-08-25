import React from 'react';
import MovieInfo from './components/MovieInfo';
import { View } from 'react-native';
import styles from './styles/styles';

export const TitleScreen = ({navigation, route}) => {

  const {id, title} = route.params

  return (
    <View style={styles.home_container}>
      <MovieInfo navigation={navigation} id={id} title={title}/>
    </View>
  );
}