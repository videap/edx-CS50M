import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen'
import { TitlesScreen } from './screens/TitlesScreen'
import { TitleScreen } from './screens/TitleScreen'
import { CategoryScreen } from './screens/CategoryScreen'
import { ActorScreen } from './screens/ActorScreen'
import { RatingsScreen } from './screens/RatingsScreen'
import styles, { colors, fonts } from './screens/styles/styles.js'


const Stack = createNativeStackNavigator()
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: colors.azure,
        },
        headerTintColor: colors.charcoal,
        headerTitleStyle: {
          color: colors.charcoal,
          fontFamily: fonts.ultrabold,
        },
      }}>
          <Stack.Screen name="🐽 SniffFlix" component={HomeScreen}/>
          <Stack.Screen name="TitlesScreen" component={TitlesScreen} options={({ route }) => ({ title: route.params.title })}/>
          <Stack.Screen name="TitleScreen" component={TitleScreen}/>
          <Stack.Screen name="CategoryScreen" component={CategoryScreen}/>
          <Stack.Screen name="ActorScreen" component={ActorScreen}/>
          <Stack.Screen name="RatingsScreen" component={RatingsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
