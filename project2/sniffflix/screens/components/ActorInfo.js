import React from "react";
import styles, { colors } from '../styles/styles.js'
import { AppRegistry, ScrollView, Text, Button } from "react-native";


export default class ActorInfo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <ScrollView style={styles.actor_info}>
            <Text style={styles.actor_info.text}>{this.props.actor_name}</Text>
        </ScrollView>
      );
    }
  }

  AppRegistry.registerComponent('ActorInfo', () => ActorInfo);