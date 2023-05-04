import {StyleSheet} from 'react-native';
export const styleMovieCard = StyleSheet.create({
  card: {
    flex: 1,
    height: 250,
    marginBottom: 5,
  },
  spacing: {flex: 1, padding: 5},
  bgStyle: {
    backgroundColor: '#c92c2d',
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'relative',
    bottom: 3,
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 3,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
    paddingLeft: 5,
    textTransform: 'capitalize',
    marginBottom: 7,
  },
  homepage: {color: 'blue', fontWeight: 'bold'},
  overview: {color: 'orange', fontWeight: 'bold', fontSize: 13},
});
