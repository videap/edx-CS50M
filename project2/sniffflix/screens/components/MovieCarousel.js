import React from "react";
import styles, { colors } from '../styles/styles.js'
import { AppRegistry, ScrollView, Text, View } from "react-native";
import MovieCard from "./MovieCard.js";
import { get_request } from "../utils/request.js";
import config from "../../config.js";




export default class MovieCarousel extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        loading: true,
        error: false,
        titles: [],
      }
    }

    async section_function(category, section, page=1) {

      const functions_by_category = {
        "Top 250": this.get_top(page),
        "By Genre": this.get_by_genre(section, page),
        "By Year": this.get_by_year(section, page),
      }

      return await functions_by_category[category];
    }

    async get_top(page) {

      const headers = {
        'X-RapidAPI-Key': config.movies_db_api_key
      };

      const params = {
        list: "top_rated_english_250",
        limit: 50,
        page: page,
      }

      return await get_request("https://moviesdatabase.p.rapidapi.com/titles", headers, params, () => this.setState({loading:false, error: true}))
    }

    async get_by_genre(genre, page) {
      const headers = {
        'X-RapidAPI-Key': config.movies_db_api_key
      };

      const params = {
        limit: 50,
        page: page,
        genre: genre
      }

      return await get_request("https://moviesdatabase.p.rapidapi.com/titles", headers, params, () => this.setState({loading:false, error: true}))

    }

    async get_by_year(year, page) {
      const headers = {
        'X-RapidAPI-Key': config.movies_db_api_key
      };

      const params = {
        limit: 50,
        page: page,
        year: year
      }

      return await get_request("https://moviesdatabase.p.rapidapi.com/titles", headers, params, () => this.setState({loading:false, error: true}))
    }

    componentDidMount() {

      this.section_function(this.props.category, this.props.section)
      .then( (titles) => this.setState({titles: titles, loading: false}) )
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
          <Text>Ops! Sorry, an error has occurred.</Text>
        );
      } else {
        return (<ScrollView contentContainerStyle={styles.movie_carousel}>
            {this.state.titles.map( (title) => <MovieCard key={title.id} movie_title={title.originalTitleText.text} navigation={this.props.navigation} title={title}/> )}
        </ScrollView>
        );
      }
    }
  }

  AppRegistry.registerComponent('MovieCarousel', () => MovieCarousel);