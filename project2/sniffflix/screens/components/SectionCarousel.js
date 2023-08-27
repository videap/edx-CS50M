import React from "react";
import styles, { colors } from '../styles/styles.js'
import { AppRegistry, ScrollView, Text, View} from "react-native";
import SectionCard from "./SectionCard.js";
import axios from "axios";
import config from "../../config.js";



export default class Sections extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        loading: true,
        error: false,
        sections: [],
        years: [],
      }
    }

    async get_genres() {

      const headers = {
        'X-RapidAPI-Key': config.movies_db_api_key
      };

      response = await axios.get("https://moviesdatabase.p.rapidapi.com/titles/utils/genres", {headers})
      .then(function (response) {
        return response.data.results.filter( (genre) => genre != null )
      })
      .catch(function (error) {
        this.setState({error: true, loading: false})
        console.error(error);
      })

      return response
    }

    get_years() {

      let years = [];
      for (let i = 1896; i <= 2023; i++) {
          years.push(i);
      }
      return years
    }

    componentDidMount() {

      if (this.props.category == "By Genre") {
        this.get_genres()
        .then( sections => this.setState({loading: false, sections: sections}))
      } else if (this.props.category == "By Year")
        this.setState({loading: false, sections: this.get_years()})
    }

    render() {
      if (this.state.loading) {
        return (
          <View style={styles.loading_container}>
            <Text style={styles.loading_container.text}>Loading...</Text>
          </View>
        );
      } else if (this.state.error) {
        return (
          <Text>Ops! Sorry, and error has occurred.</Text>
        );
      } else {
        return (
          <ScrollView contentContainerStyle={styles.section_carousel}>
              {this.state.sections.map( (section) => <SectionCard category={this.props.category} key={section} section={section} navigation={this.props.navigation}/> )}
          </ScrollView>
        );
      }
    }
  }

  AppRegistry.registerComponent('Sections', () => Sections);