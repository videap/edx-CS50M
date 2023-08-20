import React from "react";
import styles, { colors } from '../styles/styles.js'
import { AppRegistry, Text, TouchableHighlight } from "react-native";


export default class MovieCard extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={colors.azure}
            // onPress={() => this.props.navigation.navigate(this.props.navigate_to, {title: this.props.category})}
            onPress={() => alert(this.props.movie_title)}
            style={styles.cards_container.movie.card}
        >
            <Text style={styles.cards_container.movie.text}>{this.props.movie_title}</Text>
        </TouchableHighlight>
      );
    }
  }

  AppRegistry.registerComponent('MovieCard', () => MovieCard);