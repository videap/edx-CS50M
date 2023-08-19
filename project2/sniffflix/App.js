import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>sniFFFlix!</Text>
      <Button title='Go to Movies screen' onPress={() => navigation.push("TitlesScreen")}/>
      <Button title='Go to Category1 screen' onPress={() => navigation.push("CategoriesScreen")}/>
      <Button title='Go to Category2 screen' onPress={() => navigation.push("CategoriesScreen")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const TitlesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies</Text>
      <Button title='Go to Title screen' onPress={() => navigation.push("TitleScreen")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const TitleScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie</Text>
      <Button title='Go to Actor screen' onPress={() => navigation.push("ActorScreen")}/>
      <Button title='Go to Ratings screen' onPress={() => navigation.push("RatingsScreen")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <Button title='Go to Titles screen' onPress={() => navigation.push("TitlesScreen")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const ActorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actor</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const RatingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ratings</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="TitlesScreen" component={TitlesScreen}/>
        <Stack.Screen name="TitleScreen" component={TitleScreen}/>
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen}/>
        <Stack.Screen name="ActorScreen" component={ActorScreen}/>
        <Stack.Screen name="RatingsScreen" component={RatingsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48
  }
});
