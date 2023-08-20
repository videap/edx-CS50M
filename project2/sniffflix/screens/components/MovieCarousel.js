import React from "react";
import styles, { colors } from '../styles/styles.js'
import { AppRegistry, ScrollView, Text } from "react-native";
import MovieCard from "./MovieCard.js";


var array = [ ...Array(100).keys() ].map( i => `Movie ${i+1}`);


export default class MovieCarousel extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <ScrollView contentContainerStyle={styles.movie_carousel}>
            {array.map( (i) => <MovieCard key={i} movie_title={i} navigation={this.props.navigation}/> )}
        </ScrollView>
      );
    }
  }

  AppRegistry.registerComponent('MovieCarousel', () => MovieCarousel);