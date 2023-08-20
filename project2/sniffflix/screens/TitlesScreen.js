import React from 'react';
import styles from './styles/styles.js'
import MovieCarousel from './components/MovieCarousel.js';

export const TitlesScreen = ({navigation}) => {
  return (
    <MovieCarousel style={styles.movie_carousel} navigation={navigation}/>
  );
}

