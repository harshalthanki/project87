import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home'; 
import DailyPicsScreen from './screens/DailyPic';
import SpaceCraftsScreen from './screens/SpaceCraft';
import StarMapsScreen from './screens/StarMap';

const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="StarMap" component={StarMapsScreen}/>
        <Stack.Screen name="DailyPic" component={DailyPicsScreen}/>
        <Stack.Screen name="SpaceCraft" component={SpaceCraftsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}