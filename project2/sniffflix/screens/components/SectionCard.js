import React from "react";
import styles, { colors } from '../styles/styles.js'
import { AppRegistry, Text, TouchableHighlight } from "react-native";


export default class SectionCard extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={colors.azure}
            onPress={() => this.props.navigation.navigate("TitlesScreen", {category: this.props.category})}
            style={styles.ratings.card}
        >
            <Text style={styles.ratings.card.text}>{this.props.section}</Text>
        </TouchableHighlight>
      );
    }
  }

  AppRegistry.registerComponent('SectionCard', () => SectionCard);