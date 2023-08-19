import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen'
import { TitlesScreen } from './screens/TitlesScreen'
import { TitleScreen } from './screens/TitleScreen'
import { CategoryScreen } from './screens/CategoryScreen'
import { ActorScreen } from './screens/ActorScreen'
import { RatingsScreen } from './screens/RatingsScreen'

const Stack = createNativeStackNavigator()
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="TitlesScreen" component={TitlesScreen}/>
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
