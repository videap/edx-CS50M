import React from 'react';
import MovieCarousel from './components/MovieCarousel.js';

export const TitlesScreen = ({navigation, route}) => {
  const {category, section} = route.params

  return (
    <MovieCarousel navigation={navigation} category={category} section={section}/>
  );
}

