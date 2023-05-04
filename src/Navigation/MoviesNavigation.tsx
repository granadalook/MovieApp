import React from 'react';
import detail from '../screens/detail';
import MoviesScreen from '../screens/Movies';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function MoviesNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Movies"
        component={MoviesScreen}
        options={{title: 'FILMS'}}
      />
      <Stack.Screen
        name="details"
        component={detail}
        options={{title: 'DETAILS', headerTransparent: true}}
      />
    </Stack.Navigator>
  );
}
