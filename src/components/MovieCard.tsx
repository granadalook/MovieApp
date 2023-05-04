import React from 'react';
import {CardI} from '../interface/cardI';
import {useNavigation} from '@react-navigation/native';
import {styleMovieCard} from '../theme/movieCardTheme';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

export default function MovieCard(props: {movieCard: CardI}) {
  const {movieCard} = props;
  const navigation = useNavigation();

  const goMovie = () => {
    navigation.navigate('details', {id: movieCard.id});
  };

  return (
    <TouchableWithoutFeedback onPress={goMovie}>
      <View style={styleMovieCard.card}>
        <View style={styleMovieCard.spacing}>
          <View style={styleMovieCard.bgStyle}>
            <Text style={styleMovieCard.title}>{movieCard.title}</Text>
            <Image
              source={{uri: movieCard.poster_path}}
              style={styleMovieCard.image}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
