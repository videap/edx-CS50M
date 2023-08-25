import React from "react";
import styles, { colors } from '../styles/styles.js'
import { AppRegistry, ScrollView } from "react-native";
import SectionCard from "./SectionCard.js";


export default class Sections extends React.Component {
    constructor(props) {
      super(props);
    }

    get_sections() {
      return ["Section1", "Section2", "Section3", "Section4", "Section5", "Section6", "Section7", "Section8"]
    }

    render() {
      return (
        <ScrollView contentContainerStyle={styles.section_carousel}>
            {this.get_sections().map( (i) => <SectionCard category={this.props.category} key={i} section={i} navigation={this.props.navigation}/> )}
        </ScrollView>
      );
    }
  }

  AppRegistry.registerComponent('Sections', () => Sections);