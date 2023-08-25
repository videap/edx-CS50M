import React from "react";
import styles, { colors } from '../styles/styles.js'
import { AppRegistry, Text, TouchableHighlight } from "react-native";


export default class MovieCard extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        ...this.props
      }
    }

    get_title_info(id) {
      info = {
        title: id,
        id: id
      }
      return info
    }

    render() {
      return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={colors.azure}
            onPress={() => this.props.navigation.navigate("TitleScreen", {...this.get_title_info(id=this.props.movie_title)})}
            style={styles.cards_container.movie.card}
        >
            <Text style={styles.cards_container.movie.text}>{this.get_title_info(id=this.props.movie_title).title}</Text>
        </TouchableHighlight>
      );
    }
  }

  AppRegistry.registerComponent('MovieCard', () => MovieCard);