import React from "react";
import styles, { colors } from '../styles/styles.js'
import { AppRegistry, ScrollView, Text, Button } from "react-native";


export default class MovieInfo extends React.Component {
    constructor(props) {
      super(props);

      this.actor_name=`Actor for ${this.props.title}`
    }

    render() {
      return (
        <ScrollView style={styles.movie_info}>
            <Text style={styles.movie_info.text}>{this.props.title}</Text>
            <Button title={this.actor_name} onPress={() => this.props.navigation.navigate("ActorScreen", {actor_name: this.actor_name})}/>
            <Button title="See Ratings" onPress={() => this.props.navigation.navigate("RatingsScreen", {title: `Ratings for ${this.props.title}`})}/>
        </ScrollView>
      );
    }
  }

  AppRegistry.registerComponent('MovieInfo', () => MovieInfo);