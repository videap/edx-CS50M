import React from "react";
import styles, { colors } from '../styles/styles.js'
import { AppRegistry, Text, TouchableHighlight } from "react-native";


export default class RatingCard extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={colors.azure}
            onPress={() => alert("This movie sucks!!")}
            style={styles.ratings.card}
        >
            <Text style={styles.ratings.card.text}>{this.props.title}</Text>
        </TouchableHighlight>
      );
    }
  }

  AppRegistry.registerComponent('RatingCard', () => RatingCard);