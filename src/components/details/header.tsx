import React from 'react';
import {View, Text, Image} from 'react-native';
import {HeaderI} from '../../interface/headerI';
import {stylesHeader} from '../../theme/headerTheme';
import {environment} from '../../environments/environments';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function header(props: HeaderI) {
  const {title, imagebg, lenguage} = props;
  return (
    <>
      <View style={stylesHeader.bgcolor} />
      <SafeAreaView style={stylesHeader.content}>
        <View style={stylesHeader.contentTitle}>
          <Text style={stylesHeader.title}>{title}</Text>
        </View>
        <View style={stylesHeader.contenImg}>
          <Image
            source={{uri: `${environment.URL_IMAGE_BASE}${imagebg}`}}
            style={stylesHeader.Image}
          />
        </View>
        <View style={stylesHeader.contentTitle}>
          <Text style={stylesHeader.lenguage}>
            Original language = {lenguage}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}
