import React from "react";
import styles from '../styles/styles.js'
import { AppRegistry, ScrollView } from "react-native";
import RatingCard from "./RatingCard.js";

const array = [ ...Array(100).keys() ].map( i => `Rating ${i+1}`);


export default class Ratings extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <ScrollView style={styles.ratings}>
          {array.map((rating) => <RatingCard key={rating} title={rating}/>)}
        </ScrollView>
      );
    }
  }

  AppRegistry.registerComponent('Ratings', () => Ratings);