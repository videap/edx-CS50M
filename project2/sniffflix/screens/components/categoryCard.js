import React from "react";
import styles, { colors } from '../styles/styles.js'
import { AppRegistry, Text, TouchableHighlight } from "react-native";


export default class Card extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={colors.azure}
            onPress={() => this.props.navigation.navigate(this.props.navigate_to, {title: this.props.category})}
            style={styles.cards_container.category.card}
        >
            <Text style={styles.cards_container.category.text}>🐽 {this.props.category}</Text>
        </TouchableHighlight>
      );
    }
  }

  AppRegistry.registerComponent('Card', () => Card);