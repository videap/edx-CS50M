import React from "react";
import styles, { colors } from '../styles/styles.js'
import { AppRegistry, Text, TouchableHighlight, Image, View } from "react-native";


export default class MovieCard extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      }
    }

    get_title_info(id) {
      info = {
        title: id,
        id: id,
        ...this.props.data
      }
      return info
    }

    render() {
      return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={colors.azure}
            onPress={() => this.props.navigation.navigate("TitleScreen", {title: this.props.movie_title, data: this.get_title_info(id=this.props.movie_title)})}
            style={styles.cards_container.movie.card}
        >
          <View>
            <View style={{flexDirection: "row" }}>
              <View>
                <Image
                  style={styles.cards_container.movie.card.image}
                  source={{uri: this.props.data.primaryImage.url}}
                  />
              </View>
              <View style={{ paddingLeft:5 }}>
                <Text style={styles.cards_container.movie.text}>{this.props.data.originalTitleText.text}</Text>
                <Text style={styles.cards_container.movie.detail}>{this.props.data.releaseYear.year}</Text>
              </View>
            </View>
          </View>

        </TouchableHighlight>
      );
    }
  }

  AppRegistry.registerComponent('MovieCard', () => MovieCard);