import React from 'react';
import {View, Text} from 'react-native';
import {DescriptionI} from '../../interface/descriptionI';
import {stylesDescription} from '../../theme/descriptionTheme';
export default function description(props: DescriptionI) {
  const {overview, tagline, date, time} = props;
  return (
    <View style={stylesDescription.content}>
      <Text style={stylesDescription.date}>
        Release date : {date.toString()}
      </Text>
      <Text style={stylesDescription.date}>Duration : {time} Minutes</Text>
      <Text style={stylesDescription.tagline}>Slogan : {tagline}</Text>
      <Text style={stylesDescription.overview}>Synopsis : {overview}</Text>
    </View>
  );
}
