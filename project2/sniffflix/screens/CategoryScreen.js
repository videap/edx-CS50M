import React from 'react';
import SectionCarousel from './components/SectionCarousel.js';

export const CategoryScreen = ({navigation, route}) => {
    const { category } = route.params

    return (
      <SectionCarousel navigation={navigation} category={category} />
    );
}