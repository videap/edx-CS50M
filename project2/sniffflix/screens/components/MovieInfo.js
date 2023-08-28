import React from "react";
import styles, { colors } from '../styles/styles.js'
import { AppRegistry, ScrollView, Text, Button, Image, View } from "react-native";


export default class MovieInfo extends React.Component {
    constructor(props) {
      super(props);

      this.actor_name=`Actor for ${this.props.title}`

      this.state = {
        ...this.props
      }
    }

    get_title_details(id){
      details = {
        id: id,
        title: id
      }
      return details
    }

    render() {
      return (
        <ScrollView style={styles.movie_info}>
          <Image
            style={styles.movie_info.image}
            source={{uri: this.props.data.primaryImage.url}}
          />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>

            <Text style={styles.movie_info.text}>{this.state.title}</Text>
            <Button title={this.actor_name} onPress={() => this.props.navigation.navigate("ActorScreen", {actor_name: this.actor_name})}/>
            <Button title="See Ratings" onPress={() => this.props.navigation.navigate("RatingsScreen", {title: `Ratings for ${this.state.title}`})}/>
          </View>
        </ScrollView>
      );
    }
  }

  AppRegistry.registerComponent('MovieInfo', () => MovieInfo);