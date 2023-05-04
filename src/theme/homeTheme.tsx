import {StyleSheet} from 'react-native';
export const styleHome = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    height: '100%',
    backgroundColor: '#c92c2d',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
    fontStyle: 'italic',
  },
  description: {
    color: 'black',
    fontWeight: '700',
    fontSize: 25,
  },
  enjoy: {color: 'black', fontWeight: '700', fontSize: 25},
  image: {
    bottom: 3,
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 3,
  },
});
