import React from 'react';
import HomeScreen from '../screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'WELCOME', headerTransparent: true}}
      />
    </Stack.Navigator>
  );
}
