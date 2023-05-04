import React from 'react';
import {styleHome} from '../theme/homeTheme';
import {Text, View, Image} from 'react-native';
import {environment} from '../environments/environments';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styleHome.container}>
        <Text style={styleHome.title}>Welcome to MovieApp</Text>
        <Text style={styleHome.description}>
          This application will provide information about the most popular
          movies of the moment
        </Text>
        <Image
          source={{
            uri: environment.HOME_IMAGE,
          }}
          style={styleHome.image}
        />
        <Text style={styleHome.enjoy}>Enjoy it</Text>
      </View>
    </SafeAreaView>
  );
}
