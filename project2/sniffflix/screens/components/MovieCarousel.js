import React from "react";
import styles, { colors } from '../styles/styles.js'
import { AppRegistry, ScrollView, Text } from "react-native";
import MovieCard from "./MovieCard.js";




export default class MovieCarousel extends React.Component {
    constructor(props) {
      super(props);
    }

    titles_list() {

      const functions_by_category = {
        "Top 250": this.get_top,
        "By Genre": this.get_by_genre,
        "By Year": this.get_by_year,
      }

      return functions_by_category[this.props.category]();
    }

    get_top() {
      console.log("Generating Top List")
      return [ ...Array(100).keys() ].map( i => `Movie TOP 250 ${i+1}`);
    }

    get_by_genre() {
      console.log("Generating List By Genre")
      return [ ...Array(100).keys() ].map( i => `Movie GENRE ${i+1}`);

    }

    get_by_year() {
      console.log("Generating List By Year")
      return [ ...Array(100).keys() ].map( i => `Movie YEAR ${i+1}`);
    }


    render() {
      return (
        <ScrollView contentContainerStyle={styles.movie_carousel}>
            {this.titles_list().map( (i) => <MovieCard key={i} movie_title={i} navigation={this.props.navigation}/> )}
        </ScrollView>
      );
    }
  }

  AppRegistry.registerComponent('MovieCarousel', () => MovieCarousel);