import React from "react";
import styles, { colors } from '../styles/styles.js'
import { AppRegistry, ScrollView, Text, Button } from "react-native";


export default class MovieInfo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <ScrollView style={styles.movie_info}>
            <Text style={styles.movie_info.text}>{this.props.title}</Text>
            <Button title='Go to Actor screen' onPress={() => this.props.navigation.navigation("ActorScreen")}/>
            <Button title='Go to Ratings screen' onPress={() => this.props.navigation.navigation("RatingsScreen")}/>
        </ScrollView>
      );
    }
  }

  AppRegistry.registerComponent('MovieInfo', () => MovieInfo);