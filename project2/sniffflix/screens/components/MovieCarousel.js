import React from "react";
import styles, { colors } from '../styles/styles.js'
import { AppRegistry, Button, ScrollView, Text, View } from "react-native";
import MovieCard from "./MovieCard.js";
import { get_request } from "../utils/request.js";
import config from "../../config.js";




export default class MovieCarousel extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        page: 1,
        loading: true,
        titles: [],
      }

      this.error = false
      this.loading = true

    }

    async section_function(category, section, page=1) {

      const functions_by_category = {
        "Top 250": (page) => this.get_top(page),
        "By Genre": (section, page) => this.get_by_genre(section, page),
        "By Year": (section, page) => this.get_by_year(section, page),
      }

      return await functions_by_category[category](section, page);
    }

    async get_top(page) {
      console.log("Running get_top")

      const headers = {
        'X-RapidAPI-Key': config.movies_db_api_key
      };

      const params = {
        list: "top_rated_english_250",
        limit: 50,
        page: page,
      }

      return await get_request("https://moviesdatabase.p.rapidapi.com/titles", headers, params, () => this.error=true)
    }

    async get_by_genre(genre, page) {
      console.log(`Running get_by_genre: ${genre}`)
      const headers = {
        'X-RapidAPI-Key': config.movies_db_api_key
      };

      const params = {
        limit: 50,
        page: page,
        genre: genre
      }

      return await get_request("https://moviesdatabase.p.rapidapi.com/titles", headers, params, () => this.error=true)

    }

    async get_by_year(year, page) {
      console.log("Running get_by_year")
      const headers = {
        'X-RapidAPI-Key': config.movies_db_api_key
      };

      const params = {
        limit: 50,
        page: page,
        year: year
      }

      return await get_request("https://moviesdatabase.p.rapidapi.com/titles", headers, params, () => this.error=true)
    }

    nextPage() {
      this.setState({loading: true})

      this.section_function(this.props.category, this.props.section, page=this.state.page+1)
      .then( (titles) => {
        this.setState({titles: titles, loading: false, page: this.state.page+1})} )
    }

    componentDidMount() {

      this.section_function(this.props.category, this.props.section, this.state.page)
      .then( (titles) => {
        console.log("updating state")
        this.setState({titles: titles, loading: false, page: this.state.page+1})} )
    }


    render() {

      if (this.error) {
        return (
          <Text>Ops! Sorry, an error has occurred.</Text>
        );
      } else if (this.state.loading) {
        return (
          <View style={styles.loading_container}>
            <Text style={styles.loading_container.text}>Loading...</Text>
          </View>
        );
      } else {
        return (<ScrollView contentContainerStyle={styles.movie_carousel}>
            {this.state.titles.map( (title) => <MovieCard key={title.id} movie_title={title.originalTitleText.text} navigation={this.props.navigation} data={title}/> )}
            <Button onPress={() => this.nextPage()} title="Next Page"/>
        </ScrollView>
        );
      }
    }
  }

  AppRegistry.registerComponent('MovieCarousel', () => MovieCarousel);