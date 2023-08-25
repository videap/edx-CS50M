import React from 'react';
import MovieCarousel from './components/MovieCarousel.js';

export const CategoryScreen = ({navigation, route}) => {
    const { category } = route.params

    return (
      <MovieCarousel navigation={navigation} category={category} />
    );
}