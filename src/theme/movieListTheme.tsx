import {Platform, StyleSheet} from 'react-native';
export const stylesMovieList = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: Platform.OS === 'android' ? 15 : 30,
  },
  spiner: {marginTop: 20, marginBottom: 60},
});
