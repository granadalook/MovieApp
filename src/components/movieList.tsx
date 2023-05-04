import {FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import MovieCard from './MovieCard';
import {stylesMovieList} from '../theme/movieListTheme';

export default function movieList(props: any) {
  const {movies, loadMovies} = props;
  const renderItem = ({item}) => <MovieCard movieCard={item} />;
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
