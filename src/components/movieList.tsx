import React from 'react';
import MovieCard from './MovieCard';
import {Result} from '../interface/Result';
import {stylesMovieList} from '../theme/movieListTheme';
import {FlatList, ActivityIndicator} from 'react-native';

export default function movieList(props: {
  movies: Result[];
  loadMovies: () => void;
}) {
  const {movies, loadMovies} = props;
  const renderItem = ({item}: any) => <MovieCard movieCard={item} />;
  const loadMore = () => {
    loadMovies();
  };

  return (
    <FlatList
      data={movies}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={stylesMovieList.flatListContentContainer}
      onEndReached={loadMore}
      onEndReachedThreshold={0.2}
      ListFooterComponent={
        <ActivityIndicator size="large" style={stylesMovieList.spiner} />
      }
    />
  );
}
