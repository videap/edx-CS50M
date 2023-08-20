import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles/styles.js'
import MovieCarousel from './components/MovieCarousel.js';

export class TitlesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <MovieCarousel style={styles.movie_carousel}/>
    );
  }
}

